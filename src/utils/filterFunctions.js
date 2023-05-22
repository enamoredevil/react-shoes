export const filterShoesByButton = (shoes, filter) => {
  switch (filter) {
    case "All":
      return shoes;
    case "Nike":
      return shoes.filter((item) => item.manufacturer === "Nike");
    case "New Balance":
      return shoes.filter((item) => item.manufacturer === "New Balance");
    case "Puma":
      return shoes.filter((item) => item.manufacturer === "Puma");
    case "Adidas":
      return shoes.filter((item) => item.manufacturer === "Adidas");
    case "Asics":
      return shoes.filter((item) => item.manufacturer === "Asics");
    case "Autry":
      return shoes.filter((item) => item.manufacturer === "Autry");
    case "Lacoste":
      return shoes.filter((item) => item.manufacturer === "Lacoste");
    case "Le Coq Sportif":
      return shoes.filter((item) => item.manufacturer === "Le Coq Sportif");
    case "Converse":
      return shoes.filter((item) => item.manufacturer === "Converse");
    case "Hoka":
      return shoes.filter((item) => item.manufacturer === "Hoka");
    case "Mizuno":
      return shoes.filter((item) => item.manufacturer === "Mizuno");
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
