"use client";

import { useCallback, useEffect, useRef } from "react";
import { useEventsStore } from "@/stores/events-store";
import type { ThreatEvent } from "@/types";

interface UseEventsOptions {
  autoRefresh?: boolean;
  refreshInterval?: number;
  queries?: string[];
}

export function useEvents(options: UseEventsOptions = {}) {
  const {
    autoRefresh = true,
    refreshInterval = 60000,
    queries,
  } = options;

  const {
    events,
    filteredEvents,
    isLoading,
    error,
    setEvents,
    addEvents,
    setLoading,
    setError,
  } = useEventsStore();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const initialFetchRef = useRef(false);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let response: Response;

      if (queries && queries.length > 0) {
        response = await fetch("/api/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ queries }),
        });
      } else {
        response = await fetch("/api/events");
      }

      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }

      const data = await response.json();
      const newEvents: ThreatEvent[] = data.events;

      if (!initialFetchRef.current) {
        setEvents(newEvents);
        initialFetchRef.current = true;
      } else {
        const existingIds = new Set(events.map((e) => e.id));
        const trulyNewEvents = newEvents.filter((e) => !existingIds.has(e.id));

        if (trulyNewEvents.length > 0) {
          addEvents(trulyNewEvents);
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, [queries, events, setEvents, addEvents, setLoading, setError]);

  const refresh = useCallback(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    if (!initialFetchRef.current) {
      fetchEvents();
    }

    if (autoRefresh) {
      intervalRef.current = setInterval(fetchEvents, refreshInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRefresh, refreshInterval, fetchEvents]);

  return {
    events,
    filteredEvents,
    isLoading,
    error,
    refresh,
  };
}
