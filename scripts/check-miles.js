// scripts/check-miles.js
// Quick script to check total miles in your Strava data

const fs = require('fs');
const path = require('path');

function checkMiles() {
  const dataPath = path.join(process.cwd(), 'data', 'strava-activities.json');
  
  if (!fs.existsSync(dataPath)) {
    console.log('❌ No Strava data found at data/strava-activities.json');
    return;
  }

  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    if (!data.activities || data.activities.length === 0) {
      console.log('⚠️  No activities found');
      return;
    }

    const totalMiles = data.activities.reduce((sum, activity) => {
      return sum + (activity.distanceMiles || 0);
    }, 0);

    const totalElevation = data.activities.reduce((sum, activity) => {
      return sum + (activity.elevationGainFeet || 0);
    }, 0);

    console.log('🏃‍♂️ Quick Stats Summary:');
    console.log(`📊 Total activities: ${data.activities.length}`);
    console.log(`📏 Total miles: ${totalMiles.toFixed(1)} miles`);
    console.log(`⛰️  Total elevation: ${totalElevation.toLocaleString()} feet`);
    console.log(`📅 Data from: ${data.lastUpdated}`);

    // Show activity breakdown by type
    const byType = data.activities.reduce((acc, activity) => {
      const type = activity.type;
      if (!acc[type]) {
        acc[type] = { count: 0, miles: 0 };
      }
      acc[type].count++;
      acc[type].miles += activity.distanceMiles || 0;
      return acc;
    }, {});

    console.log('\n📋 Breakdown by activity type:');
    Object.entries(byType).forEach(([type, stats]) => {
      console.log(`   ${type}: ${stats.count} activities, ${stats.miles.toFixed(1)} miles`);
    });

  } catch (error) {
    console.log('❌ Error reading data:', error.message);
  }
}

checkMiles();