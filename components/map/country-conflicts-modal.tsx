"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Markdown } from "@/components/ui/markdown";
import { Loader2, Swords, ExternalLink, Globe, History, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CountryConflictsModalProps {
  country: string | null;
  onClose: () => void;
  onLoadingChange?: (isLoading: boolean) => void;
}

interface ConflictSection {
  conflicts: string;
  sources: { title: string; url: string }[];
}

interface ConflictData {
  country: string;
  past: ConflictSection;
  current: ConflictSection;
}

type TabType = "current" | "past";

export function CountryConflictsModal({
  country,
  onClose,
  onLoadingChange,
}: CountryConflictsModalProps) {
  const [data, setData] = useState<ConflictData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("current");

  useEffect(() => {
    if (!country) {
      setData(null);
      setError(null);
      onLoadingChange?.(false);
      return;
    }

    const fetchConflicts = async () => {
      setIsLoading(true);
      onLoadingChange?.(true);
      setError(null);
      setActiveTab("current"); // Reset to current tab for new country

      try {
        const response = await fetch(
          `/api/countries/conflicts?country=${encodeURIComponent(country)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch conflict data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load conflict data"
        );
      } finally {
        setIsLoading(false);
        onLoadingChange?.(false);
      }
    };

    fetchConflicts();
  }, [country, onLoadingChange]);

  return (
    <Dialog open={!!country} onClose={onClose}>
      <DialogHeader onClose={onClose}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
            <Swords className="h-5 w-5 text-red-400" />
          </div>
          <div>
            <DialogTitle>{country}</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Wars & Conflicts History
            </p>
          </div>
        </div>
      </DialogHeader>

      <DialogContent className="max-h-[60vh]">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="mt-4 text-sm text-muted-foreground">
              Researching conflicts for {country}...
            </p>
          </div>
        )}

        {error && (
          <div className="rounded-lg bg-destructive/10 p-4 text-center">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        {data && !isLoading && (
          <div className="flex h-full flex-col">
            {/* Tabs */}
            <div className="mb-4 flex gap-2 border-b border-border">
              <button
                onClick={() => setActiveTab("current")}
                className={cn(
                  "flex items-center gap-2 border-b-2 px-4 py-2 text-sm font-medium transition-colors",
                  activeTab === "current"
                    ? "border-red-500 text-red-400"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <AlertTriangle className="h-4 w-4" />
                Current
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={cn(
                  "flex items-center gap-2 border-b-2 px-4 py-2 text-sm font-medium transition-colors",
                  activeTab === "past"
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <History className="h-4 w-4" />
                Historical
              </button>
            </div>

            {/* Tab Content */}
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-6">
                <div className="prose prose-base prose-invert max-w-none">
                  <Markdown
                    content={activeTab === "current" ? data.current.conflicts : data.past.conflicts}
                    className="text-base leading-relaxed"
                  />
                </div>

                {(() => {
                  const sources = activeTab === "current" ? data.current.sources : data.past.sources;
                  return sources && sources.length > 0 ? (
                    <div className="border-t border-border pt-4">
                      <div className="mb-3 flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <h4 className="text-sm font-medium text-foreground">
                          Sources ({sources.length})
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {sources.slice(0, 10).map((source, i) => (
                          <a
                            key={i}
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2 rounded-md bg-muted/50 p-2 text-sm hover:bg-muted transition-colors"
                          >
                            <ExternalLink className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                            <span className="line-clamp-2 text-muted-foreground hover:text-foreground">
                              {source.title}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            </ScrollArea>
          </div>
        )}

        {!isLoading && !error && !data && (
          <div className="py-12 text-center">
            <Swords className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <p className="mt-4 text-sm text-muted-foreground">
              Click on a country to view its conflict history
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
