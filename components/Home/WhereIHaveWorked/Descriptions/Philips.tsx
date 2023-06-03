import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Philips() {
  const tasks = [
    {
      text: " Created an interactive dashboard named Customer-View, showcasing comprehensive analytics and insights of customers. This dashboard featured key performance indicators (KPIs) such as NPS score and Purchasing Power, empowering teams to analyze customer behavior and provide targeted support and personalized services.",
      keywords: ["empowering teams to analyze customer behavior"],
    },
    {
      text: "Managed and improved the DXR-Eye project, an ML-powered dashboard that provided in-depth insights of X-ray machines. By leveraging machine learning algorithms, this dashboard offered real-time data analysis, predictive maintenance, and performance monitoring for X-ray machines, enhancing operational efficiency and reducing downtime.",
      keywords: ["predictive maintenance, and performance monitoring"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@ Philips India</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Aug 20 - Jun 22</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
