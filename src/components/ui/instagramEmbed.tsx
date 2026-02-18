"use client";

import { useEffect, useState, useRef } from "react";

type InstagramEmbedApi = {
  Embeds: {
    process: () => void;
  };
};

declare global {
  interface Window {
    instgrm?: InstagramEmbedApi;
  }
}

export default function InstagramEmbed({ url }: { url: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
    const checkLoad = setInterval(() => {
      if (containerRef.current) {
        const iframe = containerRef.current.querySelector("iframe");
        if (iframe) {
          setIsLoaded(true);
          clearInterval(checkLoad);
        }
      }
    }, 500);
    return () => clearInterval(checkLoad);
  }, [url]);

  return (
    <div
      className="relative w-full h-full max-w-135 min-h-112 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center p-2 mx-auto"
      ref={containerRef}
    >
      {!isLoaded && (
        <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-lg p-4 animate-pulse z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
          <div className="w-full h-64 bg-gray-100 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      )}
      <div
        className={`w-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: "0",
            borderRadius: "3px",
            margin: "0",
            width: "100%",
            minWidth: "326px",
            maxWidth: "540px",
          }}
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400"
          >
            View post on Instagram
          </a>
        </blockquote>
      </div>
    </div>
  );
}
