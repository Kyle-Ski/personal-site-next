import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

class StravaFetcher {
  constructor() {
    this.accessToken = process.env.STRAVA_ACCESS_TOKEN;
    this.dataFilePath = path.join(process.cwd(), 'data', 'strava-activities.json');
    
    // Debug logging
    console.log('🔑 Access token loaded:', this.accessToken ? `${this.accessToken.substring(0, 10)}...` : 'NOT FOUND');
    
    if (!this.accessToken) {
      throw new Error('STRAVA_ACCESS_TOKEN environment variable is required');
    }

    // Ensure data directory exists
    const dataDir = path.dirname(this.dataFilePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
  }

  /**
   * Fetch all activities from Strava
   */
  async fetchAllActivities() {
    console.log('Fetching activities from Strava...');
    
    const allActivities = [];
    let page = 1;
    const perPage = 200;
    
    while (true) {
      try {
        const response = await fetch(
          `https://www.strava.com/api/v3/athlete/activities?per_page=${perPage}&page=${page}`,
          {
            headers: {
              'Authorization': `Bearer ${this.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Strava API error: ${response.status} ${response.statusText}`);
        }

        const activities = await response.json();
        
        if (activities.length === 0) {
          break; // No more activities
        }

        allActivities.push(...activities);
        console.log(`Fetched page ${page}: ${activities.length} activities`);
        
        page++;
        
        // Be nice to the API
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`Error fetching page ${page}:`, error);
        throw error;
      }
    }

    console.log(`Total activities fetched: ${allActivities.length}`);

    // Filter hiking and trail running
    const hikingAndRunning = allActivities.filter(activity => 
      activity.type === 'Hike' || 
      activity.type === 'TrailRun' ||
      activity.sport_type === 'Hike' ||
      activity.sport_type === 'TrailRun'
    );

    console.log(`Hiking/Trail Running activities: ${hikingAndRunning.length}`);

    // Process activities
    const processedActivities = hikingAndRunning.map(this.processActivity);

    // Save to file
    await this.saveActivities(processedActivities);

    return processedActivities;
  }

  /**
   * Convert Strava activity to our format
   */
  processActivity(activity) {
    const date = new Date(activity.start_date_local);
    const location = [
      activity.location_city,
      activity.location_state,
      activity.location_country
    ].filter(Boolean).join(', ') || 'Unknown Location';

    return {
      id: activity.id,
      name: activity.name,
      type: activity.type === 'Hike' || activity.sport_type === 'Hike' ? 'hiking' : 'trail-running',
      date: date.toISOString().split('T')[0], // YYYY-MM-DD
      distanceMiles: Math.round((activity.distance * 0.000621371) * 100) / 100,
      elevationGainFeet: Math.round(activity.total_elevation_gain * 3.28084),
      durationHours: Math.round((activity.moving_time / 3600) * 100) / 100,
      location,
      startCoordinates: activity.start_latlng
    };
  }

  /**
   * Save activities to JSON file
   */
  async saveActivities(activities) {
    const data = {
      lastUpdated: new Date().toISOString(),
      totalActivities: activities.length,
      activities: activities.sort((a, b) => b.date.localeCompare(a.date))
    };

    try {
      fs.writeFileSync(this.dataFilePath, JSON.stringify(data, null, 2));
      console.log(`Saved ${activities.length} activities to ${this.dataFilePath}`);
    } catch (error) {
      console.error('Error saving activities:', error);
      throw error;
    }
  }

  /**
   * Get info about existing data
   */
  getDataInfo() {
    try {
      if (!fs.existsSync(this.dataFilePath)) {
        return { exists: false };
      }

      const data = JSON.parse(fs.readFileSync(this.dataFilePath, 'utf8'));
      return {
        exists: true,
        lastUpdated: data.lastUpdated,
        totalActivities: data.totalActivities
      };
    } catch (error) {
      return { exists: false };
    }
  }
}

// Utility functions
function getActivitySummary(activities) {
  const totalMiles = activities.reduce((sum, a) => sum + a.distanceMiles, 0);
  const totalElevation = activities.reduce((sum, a) => sum + a.elevationGainFeet, 0);
  
  const activityTypes = activities.reduce((counts, activity) => {
    counts[activity.type] = (counts[activity.type] || 0) + 1;
    return counts;
  }, {});
  
  const currentYear = new Date().getFullYear();
  const thisYearActivities = activities.filter(a => 
    new Date(a.date).getFullYear() === currentYear
  );

  return {
    totalActivities: activities.length,
    totalMiles: Math.round(totalMiles * 10) / 10,
    totalElevationGain: totalElevation,
    activityTypes,
    thisYearCount: thisYearActivities.length
  };
}

// Main execution
async function main() {
  try {
    console.log('🏃‍♂️ Fetching Strava hiking and trail running activities...\n');
    
    const fetcher = new StravaFetcher();
    
    // Check existing data
    const dataInfo = fetcher.getDataInfo();
    if (dataInfo.exists) {
      console.log(`📁 Existing data found:`);
      console.log(`   - Last updated: ${dataInfo.lastUpdated}`);
      console.log(`   - Total activities: ${dataInfo.totalActivities}`);
      console.log('');
      console.log('🔄 Refreshing data anyway...\n');
    }
    
    // Fetch activities
    const activities = await fetcher.fetchAllActivities();
    
    console.log('\n✅ Success! Strava activities have been cached locally.');
    
    // Show summary
    const summary = getActivitySummary(activities);
    console.log(`📊 Summary:`);
    console.log(`   - Total hiking/trail running activities: ${summary.totalActivities}`);
    console.log(`   - Total miles: ${summary.totalMiles}`);
    console.log(`   - Total elevation gain: ${summary.totalElevationGain.toLocaleString()} ft`);
    console.log(`   - Activity types:`, Object.entries(summary.activityTypes).map(([type, count]) => `${type}: ${count}`).join(', '));
    
    const thisYear = new Date().getFullYear();
    console.log(`   - This year (${thisYear}): ${summary.thisYearCount} activities`);
    
    if (activities.length > 0) {
      const latest = activities[0];
      console.log(`   - Latest activity: "${latest.name}" (${latest.date})`);
    }
    
    console.log('\n🎯 Next steps:');
    console.log('   1. Your adventure stats will now include Strava data');
    console.log('   2. Visit /adventures to see updated statistics');
    console.log('   3. Run "node scripts/fetch-strava-data.js" again to refresh');
    
  } catch (error) {
    console.error('❌ Error fetching Strava data:', error.message);
    
    if (error.message.includes('STRAVA_ACCESS_TOKEN')) {
      console.log('\n🔑 Make sure to set your environment variables in .env.local:');
      console.log('   STRAVA_ACCESS_TOKEN=your_access_token_here');
    }
    
    process.exit(1);
  }
}

main();