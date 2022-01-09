export const MenuItems = [
  {
    label: 'txt-home',
    url: '/',
    icon: '',
    active: true,
  },
  {
    label: 'txt-profile',
    url: '/profile',
    icon: '',
    active: false,
  },
  {
    label: 'txt-nearby',
    url: '/nearby',
    icon: '',
    active: false,
  },
  //  {
  //     label: 'Contact',
  //     url: "/contact",
  //     icon: '',
  //     active: true,
  //   },
];

export const audioTracks = [
  {
    audioSrc: 'I_Hope_She_s_Not_Cold',
    audioTitle: 'I Hope She is Not Cold',
    audioImage: 'album_american_country',
    album: 'American Country',
    artist: 'Andy_Blackwood',
    audioType: '',
  },
  {
    audioSrc: 'I_dance_to_the_Jazz_of_the_50s',
    audioTitle: 'I dance to the Jazz of the 50s',
    audioImage: 'album_I_dance_to_the_Jazz_of_the_50s',
    album: 'I dance to the Jazz of the 50s',
    artist: 'AURBANNIAUDIO',
    audioType: '',
  },
  {
    audioSrc: 'Me_And_Jerry_Reed',
    audioTitle: 'Me And Jerry Reed',
    audioImage: 'album_Me_And_Jerry_Reed',
    album: 'Me And Jerry Reed',
    artist: 'BETP5',
    audioType: '',
  },
  {
    audioSrc: 'Before_You_Break_My_Heart',
    audioTitle: 'Before You Break My Heart',
    audioImage: 'album_Me_And_Jerry_Reed',
    album: 'Me And Jerry Reed',
    artist: 'BETP5',
    audioType: '',
  },
  {
    audioSrc: 'The_imagined_last_day_of_Crawford_Gordon',
    audioTitle: 'The imagined last day of Crawford Gordon',
    audioImage: 'album_The_imagined_last_day_of_Crawford_Gordon',
    album: 'The imagined last day of Crawford Gordon',
    artist: 'BETP5',
    audioType: '',
  },
  {
    audioSrc: 'The_corn_road',
    audioTitle: 'The corn road',
    audioImage: 'album_The_corn_road',
    album: 'The corn road',
    artist: 'FLASHINMUSIC',
    audioType: '',
  },
  {
    audioSrc: 'Madly_Deeply',
    audioTitle: 'Madly Deeply',
    audioImage: 'album_What_Is_Love',
    album: 'What Is Love',
    artist: 'Melanie Ungar',
    audioType: '',
  },
  {
    audioSrc: 'One_Day',
    audioTitle: 'One Day',
    audioImage: 'album_What_Is_Love',
    album: 'What Is Love',
    artist: 'Melanie Ungar',
    audioType: '',
  },
  {
    audioSrc: 'What_Is_Love',
    audioTitle: 'What Is Love',
    audioImage: 'album_What_Is_Love',
    album: 'What Is Love',
    artist: 'Melanie Ungar',
    audioType: '',
  },
  {
    audioSrc: 'French_Kisses_And_Cat_Hair',
    audioTitle: 'French Kisses And Cat Hair',
    audioImage: 'album_Very_Good_Album',
    album: 'Very Good Album',
    artist: 'Michael Ellis',
    audioType: '',
  },
  {
    audioSrc: 'Old_Russian_Waltz_2-Romantic_Piano_Music',
    audioTitle: 'Romantic Piano Music',
    audioImage: 'album_Old_Russian_Waltz',
    album: 'Old Russian Waltz 2',
    artist: 'THE PIANO LADY (LENA ORSA)',
    audioType: 'Piano',
  },
  {
    audioSrc: 'No_Country_Song',
    audioTitle: 'No Country Song',
    audioImage: 'album_High_Tonight',
    album: 'High Tonight',
    artist: 'THEJUNETOMINFLUENCE',
    audioType: 'Rock',
  },
];
export const demoPosts = [
  {
    postId: '12345',
    userId: '34546',
    userName: 'Victoria Wirya',
    userAvatar: '/img/g2.jpg',
    postType: 'album',
    contentObj: {
      contentId: 'string',
      contentTitle: '',
      contentPhoto: 'string',
      contentURL: 'string',
      contentType: 'album',
      audioSrc: 'One_Day',
      audioTitle: 'One Day',
      audioImage: 'album_What_Is_Love',
      album: 'What Is Love',
      artist: 'Melanie Ungar',
      audioType: '',
    },
    isLiked: 0,
    comments: [],
    loading: false,
    error: '',
  },
  {
    postId: '12245',
    userId: '34546',
    userName: 'Viki Viki',
    userAvatar: '/img/g5.jpg',
    postType: 'album',
    contentObj: {
      contentId: 'string',
      contentTitle: '',
      contentPhoto: 'string',
      contentURL: 'string',
      contentType: 'album',
      audioSrc: 'Before_You_Break_My_Heart',
      audioTitle: 'Before You Break My Heart',
      audioImage: 'album_Me_And_Jerry_Reed',
      album: 'Me And Jerry Reed',
      artist: 'BETP5',
      audioType: '',
    },
    isLiked: 1,
    comments: [],
    loading: false,
    error: '',
  },
  {
    postId: '35634',
    userId: '26632',
    userName: 'Trang Lê',
    userAvatar: '/img/g1.jpg',
    postType: 'album',
    contentObj: {
      contentId: 'string',
      contentTitle: '',
      contentPhoto: 'string',
      contentURL: 'string',
      contentType: 'album',
      audioSrc: 'No_Country_Song',
      audioTitle: 'No Country Song',
      audioImage: 'album_High_Tonight',
      album: 'High Tonight',
      artist: 'THEJUNETOMINFLUENCE',
      audioType: 'Rock',
    },
    isLiked: 0,
    comments: [],
    loading: false,
    error: '',
  },
  {
    postId: '12325',
    userId: '34546',
    userName: 'Teco Cheng',
    userAvatar: '/img/g3.jpg',
    postType: 'event',
    contentObj: {
      contentId: '66253',
      contentTitle: 'Jerry\'s OMG concert',
      contentPhoto: 'e1',
      contentURL: 'string',
      contentType: 'event',
      audioSrc: 'Old_Russian_Waltz_2-Romantic_Piano_Music',
      audioTitle: 'Romantic Piano Music',
      audioImage: 'album_Old_Russian_Waltz',
      album: 'Old Russian Waltz 2',
      artist: 'THE PIANO LADY (LENA ORSA)',
      audioType: 'Piano',
    },
    isLiked: 0,
    comments: [],
    loading: false,
    error: '',
  },  {
    postId: '12326',
    userId: '34546',
    userName: 'Teco Cheng',
    userAvatar: '/img/g3.jpg',
    postType: 'album',
    contentObj: {
      contentId: 'string',
      contentTitle: '',
      contentPhoto: 'string',
      contentURL: 'string',
      contentType: 'album',
      audioSrc: 'Old_Russian_Waltz_2-Romantic_Piano_Music',
      audioTitle: 'Romantic Piano Music',
      audioImage: 'album_Old_Russian_Waltz',
      album: 'Old Russian Waltz 2',
      artist: 'THE PIANO LADY (LENA ORSA)',
      audioType: 'Piano',
    },
    isLiked: 0,
    comments: [],
    loading: false,
    error: '',
  },
];

export const demoFriendList = [
  {
    userId: '34546',
    userName: 'Teco Cheng',
    userAvatar: '/img/g3.jpg',
    hobbes: ['Piano', 'Hiking', 'Lady Gaga'],
    matchRate: 90,
  },
  {
    userId: '34126',
    userName: 'Marley M',
    userAvatar: '/img/b3.jpg',
    hobbes: ['Hiking', 'Rock', 'Jogging'],
    matchRate: 80,
  },
  {
    userId: '34523',
    userName: 'Billy Boy',
    userAvatar: '/img/b1.jpg',
    hobbes: ['Hiking', 'Rock', 'THE PIANO LADY (LENA ORSA)'],
    matchRate: 70,
  },
  {
    userId: '1s4526',
    userName: 'Sarina Hills',
    userAvatar: '/img/g6.jpg',
    hobbes: ['Reading', 'Piano', 'Cello'],
    matchRate: 85,
  },
];
