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
    scale: 0.5,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },

  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
