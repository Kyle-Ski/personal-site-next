import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "React Dynamic Input",
      description:
        "An NPM package that allows users to duplicate input fields dynamically, enhancing form flexibility in React applications.",
      technologies: ["React", "TypeScript", "NPM"],
      link: "https://github.com/Kyle-Ski/react-dynamic-input?tab=readme-ov-file#create-multiple-inputs",
    },
    {
      title: "Strava-Notion Webhooks",
      description:
        "An Express server that integrates Strava activities with a Notion database, enabling real-time updates through webhooks.",
      technologies: ["Express", "Strava API", "Notion API", "Webhooks"],
      link: "https://github.com/Kyle-Ski/strava-notion-webhooks2?tab=readme-ov-file#strava-notion-webhooks-integration",
    },
    {
      title: "Leaf-N-Go",
      description:
        "An environmental tech packing tool for outdoor adventurers, featuring customizable checklists, environmental insights, and trip planning tools.",
      technologies: ["Next.js", "TypeScript", "Supabase"],
      link: "https://github.com/Kyle-Ski/leaf-n-go",
    },
    {
      title: "Strava Node v3",
      description:
        "A Node.js package for interacting with the Strava API, supporting features such as activity tracking, user authentication, and data fetching.",
      technologies: ["Node.js", "TypeScript", "Strava API"],
      link: "https://github.com/node-strava/node-strava-v3",
    },
    {
      title: "Climb Log",
      description:
        "A collaborative project aimed at logging and tracking climbing activities, providing insights and progress tracking for climbers.",
      technologies: ["Collaboration", "Activity Tracking"],
      link: "https://github.com/kale-stew/climb-log?tab=readme-ov-file#kylies-climb-log",
    },
  ];

  return (
    <section id="Projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
