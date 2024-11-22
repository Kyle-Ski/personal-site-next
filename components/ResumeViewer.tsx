"use client";

import { Button, Loading } from "@nextui-org/react";
import WebViewer from "@pdftron/webviewer";
import classNames from "classnames";
import { useRef, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Tooltip } from "@nextui-org/react";
import styles from "../styles/ResumeViewer.module.css";
import { useDarkMode } from "../hooks/useDarkMode";
import { RESUME_ANCHOR } from "../utils/constants";

const ResumeViewer = () => {
  const { inactiveTheme } = useDarkMode();
  const viewer = useRef<HTMLDivElement | null>(null);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [showResume, setShowResume] = useState<"Show" | "Hide">("Show");
  const [resumeLoaded, setResumeLoaded] = useState<boolean>(false);

  const buildPdfViewer = () => {
    if (!resumeLoaded) {
      setShowLoading(true);
    } else {
      setShowLoading(false);
    }
    if (showResume === "Show") {
      setShowResume("Hide");
    } else {
      setShowResume("Show");
    }
    if (
      typeof window !== "undefined" &&
      viewer?.current &&
      process.env.RESUME_LINK &&
      !viewer.current?.hasChildNodes()
    ) {
      WebViewer(
        {
          path: "/webviewer/lib",
          initialDoc: process.env.RESUME_LINK,
        },
        viewer.current
      ).then((instance) => {
        instance.Core.annotationManager.setReadOnly(true);
        instance.UI.setTheme(inactiveTheme === "light" ? "dark" : "light");
        if (instance.UI.Events.DOCUMENT_LOADED) {
          setResumeLoaded(true);
          setShowLoading(false);
        }
      });
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
            buildPdfViewer();
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
              href={process.env.RESUME_LINK}
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
      {showLoading === false ? null : (
        <Loading size="xl" color="success">
          Loading Resume...
        </Loading>
      )}
      <div ref={viewer} className={pdfClassName}></div>
    </div>
  );
};

export default ResumeViewer;
