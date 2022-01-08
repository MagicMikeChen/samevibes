
export interface IComment {
  userId: string;
  userName: string | null;
  userAvatar: string | null;
  text: string | null;
}

export interface IContent {
  contentId: string;
  contentType: string;
  contentTitle?: string | null;
  contentPhoto?: string | null;
  contentURL?: string | null;
  audioSrc?: string | null;
  audioTitle?: string | null;
  audioImage?: string | null;
  album?: string | null;
  artist?: string | null;
  audioType?: string | null;
}
export interface IPost {
  postId: string;
  userId: string;
  userName: string | null;
  userAvatar: string | null;
  postType: string;
  contentObj: IContent;
  isLiked: number | null;
  comments: IComment[];
  loading: boolean;
  error: string | null;
}

export interface IPostReducer {
  posts: IPost[] | null;
  post: IPost | null;
  loading: boolean;
  error: string | null;
}

export interface IUserReducer {
  posts: IPost[] | null;
  post: IPost | null;
  userId: string;
  userName: string | null;
  userAvatar: string | null;
  userIntro: string;
  userJob: string;
  userEducation: string;
  userLocation: string;
  userIg: string;
  userRelationship: string;
  userCollections: IContent[];
  friendStatus: number;
  loading: boolean;
  error: string | null;
}

export interface ISystemReducer {
  isLogin: boolean;
  userToken: string;
  isShowPlayer: boolean;
  error: string | null;
}