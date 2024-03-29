import { TFilter, TUser } from '../../redux/users-reducer/types';

export type TMapStateToProps = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalItemsCount: number;
  users: TUser[];
  followingInProgress: number[];
  filter: {
    term: string;
    friend: string | boolean;
  };
};

export type TMapDisptachToProps = {
  follow: () => void;
  unfollow: () => void;
  getUsers: (currentPage: number, pageSize: number, term: string, friend: string | boolean) => void;
  onPage: (pageNumber: number, pageSize: number) => void;
};

export type TUsersContainerProps = TMapStateToProps & TMapDisptachToProps;

export type TUsersProps = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  users: Array<TUser>;
  followingInProgress: Array<number>;

  onPageChanged: (pageNumber: number) => void;
  onFilterChanged: (filter: TFilter) => void;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

export type TUsersSearchFormProps = {
  onFilterChanged: (filter: TFilter) => void;
};

export type TParsed = {
  currentPage?: string;
  term?: string;
  friend?: string;
};
