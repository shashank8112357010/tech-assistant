"use client"; // for Next.js 13+ app directory

import { useEffect } from "react";

export default function ElevenLabsAgent() {
  useEffect(() => {
    // Dynamically add ElevenLabs script on client
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
    <div>
      <elevenlabs-convai agent-id="agent_7001k296k0jdf7ars96s79qv2hxt"></elevenlabs-convai>
    </div>
  );
}
