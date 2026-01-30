
import { useLanguageStore } from '@/stores/language-store';

const translations = {
    en: {
        welcome_modal: {
            title: 'Welcome to Global Threat Map',
            description: 'Your situational awareness platform for tracking global security events, wars, conflicts & threat indicators.',
            dont_show_again: "Don't show this again",
            get_started: 'Get Started',
        },
        features: {
            interactive_threat_map: {
                title: 'Interactive Threat Map',
                description: 'Explore global events with color-coded markers. Click any event for details, or zoom to see clusters expand.',
            },
            event_feed: {
                title: 'Event Feed',
                description: 'Browse live events in the sidebar. Filter by threat level, category, or search for specific incidents.',
            },
            country_intelligence: {
                title: 'Country Intelligence',
                description: 'Click any country on the map to view current and historical conflicts with AI-powered analysis.',
            },
            intel_dossiers: {
                title: 'Intel Dossiers',
                description: 'Build intelligence dossiers on any actor. Enable full dossier mode for ~50 page reports with downloadable CSV data exports and PowerPoint briefings.',
            },
            military_bases: {
                title: 'Military Bases',
                description: 'View US and NATO military installations worldwide. Click any base (green marker) on the map for details about the facility.',
            },
            auto_pan_mode: {
                title: 'Auto-Pan Mode',
                description: 'Click on the play button by the bottom left to make the map auto-pan.',
            },
        },
        header: {
            title: 'Global Threat Map',
            live: 'Live',
            powered_by: 'Powered by',
            critical: 'Critical',
            high: 'High',
            events: 'Events',
            show_features: 'Show features',
            refresh_events: 'Refresh events',
        },
        sidebar: {
            live_feed: 'Live Feed',
            intel: 'Intel',
        },
        map_controls: {
            hide_military_bases: 'Hide Military Bases',
            show_military_bases: 'Show Military Bases',
        },
        feed: {
            title: 'Event Feed',
            events_count: 'events',
            loading: 'Loading events...',
            no_events: 'No events match your filters',
            sign_in_title: 'Sign in to view events',
            sign_in_desc: 'Events require authentication',
            sign_in_button: 'Sign in',
        },
        filters: {
            search_placeholder: 'Search events...',
            threat_level: 'Threat Level',
            category: 'Category',
            clear: 'Clear Filters',
            levels: {
                critical: 'Critical',
                high: 'High',
                medium: 'Medium',
                low: 'Low',
                info: 'Info',
            },
            categories: {
                conflict: 'Conflict',
                protest: 'Protest',
                disaster: 'Disaster',
                diplomatic: 'Diplomatic',
                economic: 'Economic',
                terrorism: 'Terrorism',
                cyber: 'Cyber',
                health: 'Health',
                environmental: 'Environmental',
                military: 'Military',
                crime: 'Crime',
                piracy: 'Piracy',
                infrastructure: 'Infrastructure',
                commodities: 'Commodities',
            },
        },
        auth: {
            sign_in: 'Sign in',
            sign_in_desc: 'Sign in to access all features.',
            valyu_desc: 'Valyu is the intelligence layer of GTM. It gives access to real-time web search, financial, academic, medical research and proprietary data sources.',
            paused_notice: 'Due to extreme demand, signups are currently paused',
            sign_in_with: 'Sign in with',
        },
        markets: {
            title: 'Prediction Markets',
            powered_by: 'powered by',
            active: 'active',
            updated: 'Updated',
            subtitle: 'Geopolitical & conflict prediction markets',
            view_all: 'View all',
            loading: 'Loading markets...',
            no_markets: 'No markets found',
            volume: 'Volume',
            ends: 'Ends',
        },
        map: {
            timeline: {
                pause: 'Pause auto-pan',
                play: 'Start auto-pan',
            },
        },
        conflicts: {
            title: 'Wars & Conflicts History',
            searching: 'Researching conflicts - typically under 15 seconds',
            sources: 'Sources',
            loading_sources: 'loading sources...',
            tabs: {
                current: 'Current',
                historical: 'Historical',
                predictions: 'Predictions',
            },
            markets: {
                finding: 'Finding prediction markets for',
                none: 'No prediction markets found for',
                disclaimer: 'Markets may not exist for all countries',
                found: 'markets found',
                powered_by: 'Powered by Polymarket',
            },
            no_data: 'Click on a country to view its conflict history',
        },
        popup: {
            unknown_location: 'Unknown',
            expand: 'Expand',
            collapse: 'Collapse',
            source: 'Source',
        },
    },
    'zh-TW': {
        welcome_modal: {
            title: '歡迎使用全球威脅地圖',
            description: '您的全球安全事件、戰爭、衝突及威脅指標追蹤平台。',
            dont_show_again: '不再顯示',
            get_started: '開始使用',
        },
        features: {
            interactive_threat_map: {
                title: '互動式威脅地圖',
                description: '透過顏色標記探索全球事件。點擊任何事件查看詳情，或縮放查看聚類展開。',
            },
            event_feed: {
                title: '事件動態',
                description: '在側邊欄瀏覽即時事件。依威脅等級、類別篩選，或搜尋特定事故。',
            },
            country_intelligence: {
                title: '國家情報',
                description: '點擊地圖上的任何國家，查看當前及歷史衝突的 AI 分析。',
            },
            intel_dossiers: {
                title: '情報檔案',
                description: '建立任何行動者的情報檔案。啟用完整檔案模式可獲得約 50 頁的報告，並可下載 CSV 數據與 PowerPoint 簡報。',
            },
            military_bases: {
                title: '軍事基地',
                description: '查看全球的美軍及北約軍事設施。點擊地圖上的任何基地（綠色標記）以查看該設施詳情。',
            },
            auto_pan_mode: {
                title: '自動平移模式',
                description: '點擊左下角的播放按鈕，讓地圖自動平移展示。',
            },
        },
        header: {
            title: '全球威脅地圖',
            live: '即時',
            powered_by: '技術支援：',
            critical: '嚴重',
            high: '高危',
            events: '事件',
            show_features: '顯示功能',
            refresh_events: '重新整理事件',
        },
        sidebar: {
            live_feed: '即時動態',
            intel: '情報',
        },
        map_controls: {
            hide_military_bases: '隱藏軍事基地',
            show_military_bases: '顯示軍事基地',
        },
        feed: {
            title: '事件動態',
            events_count: '事件',
            loading: '載入事件中...',
            no_events: '沒有符合篩選條件的事件',
            sign_in_title: '登入以查看事件',
            sign_in_desc: '查看事件需要驗證',
            sign_in_button: '登入',
        },
        filters: {
            search_placeholder: '搜尋事件...',
            threat_level: '威脅等級',
            category: '類別',
            clear: '清除篩選',
            levels: {
                critical: '嚴重',
                high: '高',
                medium: '中',
                low: '低',
                info: '資訊',
            },
            categories: {
                conflict: '衝突',
                protest: '抗議',
                disaster: '災難',
                diplomatic: '外交',
                economic: '經濟',
                terrorism: '恐怖主義',
                cyber: '網路',
                health: '健康',
                environmental: '環境',
                military: '軍事',
                crime: '犯罪',
                piracy: '海盜',
                infrastructure: '基礎設施',
                commodities: '商品',
            },
        },
        auth: {
            sign_in: '登入',
            sign_in_desc: '登入以存取所有功能。',
            valyu_desc: 'Valyu 是 GTM 的情報層。它提供即時網路搜尋、金融、學術、醫學研究和專有數據源的存取權限。',
            paused_notice: '由於需求量大，目前暫停註冊',
            sign_in_with: '使用以下方式登入',
        },
        markets: {
            title: '預測市場',
            powered_by: '技術支援：',
            active: '活躍',
            updated: '更新於',
            subtitle: '地緣政治與衝突預測市場',
            view_all: '查看全部',
            loading: '載入市場中...',
            no_markets: '找不到市場',
            volume: '交易量',
            ends: '結束日期',
        },
        map: {
            timeline: {
                pause: '暫停自動平移',
                play: '開始自動平移',
            },
        },
        conflicts: {
            title: '戰爭與衝突歷史',
            searching: '正在搜尋衝突資料 - 通常需要 15 秒',
            sources: '來源',
            loading_sources: '載入來源中...',
            tabs: {
                current: '當前',
                historical: '歷史',
                predictions: '預測',
            },
            markets: {
                finding: '正在尋找預測市場：',
                none: '找不到預測市場：',
                disclaimer: '並非所有國家都有市場',
                found: '個市場',
                powered_by: '技術支援：Polymarket',
            },
            no_data: '點擊國家以查看其衝突歷史',
        },
        popup: {
            unknown_location: '未知',
            expand: '展開',
            collapse: '收起',
            source: '來源',
        },
    },
};

export type TranslationKey =
    | 'welcome_modal.title'
    | 'welcome_modal.description'
    | 'welcome_modal.dont_show_again'
    | 'welcome_modal.get_started'
    | 'features.interactive_threat_map.title'
    | 'features.interactive_threat_map.description'
    | 'features.event_feed.title'
    | 'features.event_feed.description'
    | 'features.country_intelligence.title'
    | 'features.country_intelligence.description'
    | 'features.intel_dossiers.title'
    | 'features.intel_dossiers.description'
    | 'features.military_bases.title'
    | 'features.military_bases.description'
    | 'features.auto_pan_mode.title'
    | 'features.auto_pan_mode.description'
    | 'header.title'
    | 'header.live'
    | 'header.powered_by'
    | 'header.critical'
    | 'header.high'
    | 'header.events'
    | 'header.show_features'
    | 'header.refresh_events'
    | 'sidebar.live_feed'
    | 'sidebar.intel'
    | 'map_controls.hide_military_bases'
    | 'map_controls.show_military_bases'
    | 'feed.title'
    | 'feed.events_count'
    | 'feed.loading'
    | 'feed.no_events'
    | 'feed.sign_in_title'
    | 'feed.sign_in_desc'
    | 'feed.sign_in_button'
    | 'filters.search_placeholder'
    | 'filters.threat_level'
    | 'filters.category'
    | 'filters.clear'
    | 'filters.levels.critical'
    | 'filters.levels.high'
    | 'filters.levels.medium'
    | 'filters.levels.low'
    | 'filters.levels.info'
    | 'filters.categories.conflict'
    | 'filters.categories.protest'
    | 'filters.categories.disaster'
    | 'filters.categories.diplomatic'
    | 'filters.categories.economic'
    | 'filters.categories.terrorism'
    | 'filters.categories.cyber'
    | 'filters.categories.health'
    | 'filters.categories.environmental'
    | 'filters.categories.military'
    | 'filters.categories.crime'
    | 'filters.categories.piracy'
    | 'filters.categories.infrastructure'
    | 'filters.categories.commodities'
    | 'auth.sign_in'
    | 'auth.sign_in_desc'
    | 'auth.valyu_desc'
    | 'auth.paused_notice'
    | 'auth.sign_in_with'
    | 'markets.title'
    | 'markets.powered_by'
    | 'markets.active'
    | 'markets.updated'
    | 'markets.subtitle'
    | 'markets.view_all'
    | 'markets.loading'
    | 'markets.no_markets'
    | 'markets.volume'
    | 'markets.ends'
    | 'map.timeline.pause'
    | 'map.timeline.play'
    | 'conflicts.title'
    | 'conflicts.searching'
    | 'conflicts.sources'
    | 'conflicts.loading_sources'
    | 'conflicts.tabs.current'
    | 'conflicts.tabs.historical'
    | 'conflicts.tabs.predictions'
    | 'conflicts.markets.finding'
    | 'conflicts.markets.none'
    | 'conflicts.markets.disclaimer'
    | 'conflicts.markets.found'
    | 'conflicts.markets.powered_by'
    | 'conflicts.no_data'
    | 'popup.unknown_location'
    | 'popup.expand'
    | 'popup.collapse'
    | 'popup.source';

export function useTranslation() {
    const language = useLanguageStore((state) => state.language);

    const t = (key: TranslationKey): string => {
        const keys = key.split('.');
        let result: any = translations[language];

        for (const k of keys) {
            if (result && typeof result === 'object' && k in result) {
                result = result[k as keyof typeof result];
            } else {
                // Fallback to English if translation is missing
                let fallback: any = translations['en'];
                for (const fk of keys) {
                    if (fallback && typeof fallback === 'object' && fk in fallback) {
                        fallback = fallback[fk as keyof typeof fallback];
                    } else {
                        return key;
                    }
                }
                return fallback as string;
            }
        }

        return result as string;
    };

    return { t, language };
}
