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

export const cartModalVariants = {
  hidden: { scale: 0.5, opacity: 0 },

  visible: { scale: 1, opacity: 1, transition: { duration: 0.2 } },

  exit: {
    scale: 0.1,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const cartThanksMessageVariants = {
  hidden: { opacity: 0 },

  visible: { opacity: 1, transition: { duration: 0.5 } },

  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
export const historyItemVariants = {
  hidden: { y: 20 },

  visible: { y: 0, transition: { duration: 0.5 } },

  exit: {
    y: 20,
    transition: { duration: 0.5 },
  },
};
export const page404ContentVariants = {
  hidden: { y: 40 },

  visible: { y: 0, transition: { duration: 1 } },

  exit: {
    y: 40,
    transition: { duration: 0.5 },
  },
};

export const page404Variants = {
  hidden: { opacity: 0 },

  visible: { opacity: 1, transition: { duration: 0.5 } },

  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const loadingErrorVariants = {
  hidden: { y: 40 },

  visible: { y: 0, transition: { duration: 1 } },

  exit: {
    y: 40,
    transition: { duration: 0.5 },
  },
};

export const menuContentVariants = {
  hidden: { opacity: 0, x: "100vw" },

  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },

  exit: {
    opacity: 0,
    x: "100vw",
    transition: { duration: 0.5 },
  },
};

export const menuLayoutVariants = {
  hidden: { opacity: 0 },

  visible: { opacity: 1, transition: { duration: 0.5 } },

  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
