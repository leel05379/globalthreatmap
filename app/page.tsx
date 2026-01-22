"use client";

import { useEvents } from "@/hooks/use-events";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ThreatMap } from "@/components/map/threat-map";
import { TimelineScrubber } from "@/components/map/timeline-scrubber";

export default function Home() {
  const { isLoading, refresh } = useEvents({
    autoRefresh: true,
    refreshInterval: 120000,
  });

  return (
    <div className="flex h-screen flex-col">
      <Header onRefresh={refresh} isLoading={isLoading} />
      <div className="flex flex-1 overflow-hidden">
        <div className="relative flex-1">
          <ThreatMap />
          <TimelineScrubber />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
