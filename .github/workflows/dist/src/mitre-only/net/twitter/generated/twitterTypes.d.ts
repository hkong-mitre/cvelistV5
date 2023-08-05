export interface TwitterGetTweetResponse {
    entities?: Entities;
    created_at: Date;
    edit_history_tweet_ids?: string[];
    id: string;
    text: string;
}
export interface Entities {
    urls: URL[];
    annotations: Annotation[];
}
export interface Annotation {
    start: number;
    end: number;
    probability: number;
    type: string;
    normalized_text: string;
}
export interface URL {
    start: number;
    end: number;
    url: string;
    expanded_url: string;
    display_url: string;
    status: number;
    title: string;
    description: string;
    unwound_url: string;
}
