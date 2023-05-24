export const filterShoesByButton = (shoes, filter) => {
  if (filter === "All") {
    return shoes;
  }
  return shoes.filter((item) => item.manufacturer === filter);
};

export const sortShoes = (shoes, sortParameter) => {
  switch (sortParameter) {
    case "Popular":
      return shoes;

    case "Price Up":
      return [...shoes].sort((itemOne, itemTwo) => {
        return parseFloat(itemOne.price) - parseFloat(itemTwo.price);
      });
    case "Price Down":
      return [...shoes].sort((itemOne, itemTwo) => {
        return parseFloat(itemTwo.price) - parseFloat(itemOne.price);
      });

    default:
      return shoes;
  }
};

export const filterShoesByString = (shoes, filterString) => {
  if (filterString.length === 0) {
    return shoes;
  }
  return shoes.filter((item) => {
    if (item.title.toLowerCase().indexOf(filterString.toLowerCase()) > -1) {
      return item;
    }
  });
};
