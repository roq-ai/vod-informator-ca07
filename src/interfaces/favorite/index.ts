import { UserInterface } from 'interfaces/user';
import { MovieInterface } from 'interfaces/movie';
import { GetQueryInterface } from 'interfaces';

export interface FavoriteInterface {
  id?: string;
  user_id: string;
  movie_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  movie?: MovieInterface;
  _count?: {};
}

export interface FavoriteGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  movie_id?: string;
}
