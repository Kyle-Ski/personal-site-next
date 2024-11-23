"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { AiOutlineDownload } from "react-icons/ai";
import { Tooltip } from "@nextui-org/react";
import styles from "../styles/ResumeViewer.module.css";
import { useDarkMode } from "../hooks/useDarkMode";
import { RESUME_ANCHOR } from "../utils/constants";

const ResumeViewer = ({ resumeLink }: { resumeLink: string | "/Kyle_Czajkowski_2024_L.pdf" }) => {
  const { inactiveTheme } = useDarkMode();
  const viewer = useRef<HTMLDivElement | null>(null);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [showResume, setShowResume] = useState<"Show" | "Hide">("Show");
  const [resumeLoaded, setResumeLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadWebViewer = async () => {
      if (typeof window !== "undefined" && viewer?.current && !viewer.current?.hasChildNodes()) {
        const WebViewer = (await import("@pdftron/webviewer")).default;
        WebViewer(
          {
            path: "/webviewer/lib",
            initialDoc: resumeLink,
            disableLogs: true
          },
          viewer.current
        ).then((instance) => {
          instance.Core.annotationManager.enableReadOnlyMode();
          instance.UI.setTheme(inactiveTheme === "light" ? "dark" : "light");
          setResumeLoaded(true);
          setShowLoading(false);
        });
      }
    };

    loadWebViewer();
  }, [inactiveTheme]);

  const toggleResume = () => {
    setShowResume((prev) => (prev === "Show" ? "Hide" : "Show"));
    if (!resumeLoaded) {
      setShowLoading(true);
    }
  };

  const pdfClassName = classNames({
    hidden: showResume === "Show",
    webviewer: showResume === "Hide",
  });

  return (
    <div className={styles.container}>
      <h2 id={RESUME_ANCHOR}>Resume</h2>
      <div className={styles.resumeActions}>
        <button
          className={styles.resumeActionButton}
          onClick={(e: React.SyntheticEvent) => {
            e.preventDefault();
            toggleResume();
          }}
        >
          {showResume} Resume
        </button>
        <div className={styles.resumeAction}>
          <Tooltip
            hideArrow
            css={{ backgroundColor: "#55893c" }}
            content="Download Kyle's resume."
            color="primary"
            placement="topStart"
            contentColor="warning"
          >
            <a
              aria-label="Link used to download Kyle's resume."
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              download
              className={styles.iconItem}
            >
              <AiOutlineDownload size="5em" />
            </a>
          </Tooltip>
        </div>
      </div>
      {showLoading && <div>Loading...</div>}
      <div ref={viewer} className={pdfClassName}></div>
    </div>
  );
};

export default ResumeViewer;
