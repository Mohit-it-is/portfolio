import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Navi() {
  const tasks = [
    {
      text: "Led the revamping of the Navi website, applying modern design principles and UX best practices to enhance user engagement and improve overall aesthetics.",
      keywords: ["principles and UX best practices"],
    },
    {
      text: " Contributed significantly to the development of Health Insurance flows, enabling users to effortlessly navigate and complete insurance-related processes on the Navi website.",
      keywords: ["Health Insurance flows"],
    },
    {
      text: "Developed an end-to-end dashboard named the Communication Portal, providing a centralized platform for seamless communication and collaboration among team members.",
      keywords: [],
    },
    {
      text: "Led the development of a Session Recording and Heatmap Analytics tool, providing valuable insights into user behavior and aiding in user experience optimization.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-[40rem] px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            UI Engineer -1 <span className="text-AAsecondary">@ Navi Technologies</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jun 22 - Current</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
