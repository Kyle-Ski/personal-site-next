"use client";

import { PersonalTimeLineItem } from "../interfaces";
import { PERSONAL_TIMELINE_ANCHOR } from "../utils/constants";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  timeline: PersonalTimeLineItem[];
};

const PersonalTimeLine = ({ timeline }: Props) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2
        id={PERSONAL_TIMELINE_ANCHOR}
        className="text-3xl font-bold mb-8 text-center"
      >
        Personal Timeline
      </h2>
      <div className="flex flex-col items-center space-y-6">
        {timeline &&
          timeline.map((item, index) => (
            <Card
              key={`${item?.title}${index}`}
              className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <CardHeader>
                <CardTitle className="text-center text-xl font-semibold">
                  {item?.title || `Default Title ${index + 1}`}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  {item?.dateRange || `Default Date Range ${index + 1}`}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {item?.description || `Default Description ${index + 1}`}
                </p>
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default PersonalTimeLine;
