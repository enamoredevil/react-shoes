export const popupVariants = {
  hidden: {
    x: "100vw",
  },

  visible: {
    x: 0,
    transition: { duration: 1, type: "spring", stiffness: 70 },
  },

  exit: {
    x: "100vw",
    transition: { duration: 1 },
  },
};

export const animatedPagesVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },

  exit: {
    opacity: 0,
    transition: { duration: 2 },
  },
};

export const shoesItemVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },

  exit: {
    opacity: 0,
    transition: { duration: 2 },
  },
};

export const cartItemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },

  exit: {
    x: "100vw",
    transition: { duration: 0.3 },
  },
};

export const animatedTitleVariants = {
  hidden: { opacity: 1 },

  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

export const animatedLettersVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const animatedHeroSubtitleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 4.5,
    },
  },
};

export const animatedHeroLinkVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 5,
    },
  },
};

export const animatedCatalogItemVariants = {
  hidden: (custom) => ({
    x: custom,
  }),
  visible: {
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export const animatedCatalogItemCenterVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export const animatedFavoritesItemVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8 },
  },

  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const singleShoeInfoVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
};

export const animatedPanelVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

