export interface RecentActivity {
    activity: string;
    timestamp: string;
    duration: string;
    summary: {
        startWindow?: string;
        endWindow?: string;
        page?: number;
        count: number;
        cveIds: string[];
    };
}
