export const zWaveVariants = {
  initial: { scale: 1, y: 30, x: 60, opacity: 1 },
  enter: {
    scale: 1,
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.48, 0.15, 0.25, 0.96], yoyo: 8 },
  },
  exit: {
    scale: 1,
    y: 0,
    x: 0,
    opacity: 0.6,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export const toTopVariants = {
  initial: { scale: 1, y: '100vh', opacity: 0.6 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 1,
    y: '80vh',
    opacity: 0.6,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export const toBottomVariants = {
  initial: { scale: 1, y: '-100vh', opacity: 0.6 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 1,
    y: '-80vh',
    opacity: 0.6,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export const toLeftVariants = {
  initial: { scale: 1, x: '100vh', opacity: 0.5 },
  enter: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 1,
    x: '40vh',
    opacity: 0,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export const toRightVariants = {
  initial: { scale: 1, x: '-100vh', opacity: 0.5 },
  enter: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 1,
    x: '-40vh',
    opacity: 0,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export const fadeInVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

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
    label: 'txt-price',
    url: '/price',
    icon: '',
    active: false,
  },
  {
    label: 'txt-about',
    url: '/about',
    icon: '',
    active: false,
  },
  // {
  //   label: 'txt-nearby',
  //   url: '/nearby',
  //   icon: '',
  //   active: false,
  // },
  //  {
  //     label: 'Contact',
  //     url: "/contact",
  //     icon: '',
  //     active: true,
  //   },
];

