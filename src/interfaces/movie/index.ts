import { CommentInterface } from 'interfaces/comment';
import { FavoriteInterface } from 'interfaces/favorite';
import { GetQueryInterface } from 'interfaces';

export interface MovieInterface {
  id?: string;
  name: string;
  year: number;
  category: string;
  vod_service: string;
  cost: number;
  interesting_facts?: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  favorite?: FavoriteInterface[];

  _count?: {
    comment?: number;
    favorite?: number;
  };
}

export interface MovieGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category?: string;
  vod_service?: string;
  interesting_facts?: string;
}
