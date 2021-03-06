// root state
export interface RootState {
  data: string;
}

// 좌측메뉴 타입
export interface GnbInfo {
    depth: number;
    id: string;
    name: string;
    iconNm: string;
    link: string;
    sub: GnbInfo[] | null;
  }

// test news list 타입
export interface FeedItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}
export interface DetailItem {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: DetailItem[]; // Comments are items too
  level: number;
  comments_count: number;
}
export interface HackerNewsState {
  newsData: FeedItem[] | null;
  askData: FeedItem[] | null;
  itemData: DetailItem | null;
}
