"use client";

import { AiOutlineDownload } from "react-icons/ai";
import { Tooltip } from "@nextui-org/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ResumeSection = () => {
  const resumeLink = process.env.UPDATED_RESUME_LINK || "/Kyle_Czajkowski_2024_L.pdf";

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Full-Stack Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              5+ years of experience building scalable web and mobile applications using modern
              frameworks like Next.js, React, and TypeScript.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Collaborative Problem Solving</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Strong communication skills and experience working in agile teams to solve complex
              technical challenges.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Adaptable Skillset</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Flexible in learning new tools, frameworks, and environments to deliver high-quality
              solutions.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Team Player</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Proven ability to collaborate with team members, share knowledge, and contribute to
              project success with effective communication and problem-solving skills.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Download Resume Button */}
      <div className="mt-8 flex justify-center">
        <Tooltip
          hideArrow
          css={{ backgroundColor: "#55893c" }}
          content="Download Kyle's resume."
          color="primary"
          placement="topStart"
          contentColor="warning"
        >
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center px-4 py-2 text-white bg-green-600 rounded-lg shadow hover:bg-green-700 transition-colors"
          >
            <AiOutlineDownload className="mr-2" size={24} aria-hidden="true" />
            <span>Download Resume</span>
          </a>
        </Tooltip>
      </div>
    </section>
  );
};

export default ResumeSection;
