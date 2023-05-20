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
