"use client";

import { useEventsStore } from "@/stores/events-store";
import { useLanguageStore } from "@/stores/language-store";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, RefreshCw, Activity, HelpCircle } from "lucide-react";

interface HeaderProps {
  onRefresh: () => void;
  isLoading: boolean;
  onShowHelp?: () => void;
}

export function Header({ onRefresh, isLoading, onShowHelp }: HeaderProps) {
  const { filteredEvents } = useEventsStore();
  const { t, language } = useTranslation();
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const threatCounts = filteredEvents.reduce(
    (acc, event) => {
      acc[event.threatLevel] = (acc[event.threatLevel] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh-TW' : 'en');
  };

  return (
    <header className="relative flex h-14 items-center justify-between border-b border-border bg-card px-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          <h1 className="text-lg font-bold text-foreground">
            {t('header.title')}
          </h1>
        </div>
        <Badge variant="outline" className="hidden md:flex">
          <Activity className="mr-1 h-3 w-3" />
          {t('header.live')}
        </Badge>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
        {t('header.powered_by')}{" "}
        <a
          href="https://www.valyu.ai/search-api"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white hover:underline"
        >
          Valyu
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 md:flex">
          {threatCounts.critical && (
            <Badge variant="critical">{threatCounts.critical} {t('header.critical')}</Badge>
          )}
          {threatCounts.high && (
            <Badge variant="high">{threatCounts.high} {t('header.high')}</Badge>
          )}
          <Badge variant="outline">{filteredEvents.length} {t('header.events')}</Badge>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          title="Switch Language"
          className="w-16"
        >
          {language === 'en' ? '中文' : 'EN'}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onShowHelp}
          title={t('header.show_features')}
        >
          <HelpCircle className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onRefresh}
          disabled={isLoading}
          title={t('header.refresh_events')}
        >
          <RefreshCw
            className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
          />
        </Button>
      </div>
    </header>
  );
}
