"use client";

import { useEffect } from "react";

export default function ElevenLabsAgent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elevenlabs-wrapper">
      <elevenlabs-convai agent-id="agent_7001k296k0jdf7ars96s79qv2hxt"></elevenlabs-convai>

      <style jsx>{`
        .elevenlabs-wrapper {
          filter: invert(1) hue-rotate(180deg);
          /* agar chaho full screen height bhi de sakte ho */
          /* height: 100vh; */
        }
      `}</style>
    </div>
  );
}
