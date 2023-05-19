import ShoesItem from "../components/shoesItem/ShoesItem";
import ShoesSkeleton from "../components/shoesSkeleton/ShoesSkeleton";
import ShoesError from "../components/shoesError/ShoesError";

export const setShoesContent = (status, shoes) => {
  switch (status) {
    case "loading":
      return [...Array(16)].map((_, index) => <ShoesSkeleton key={index} />);

    case "confirmed":
      return shoes.map((item) => {
        return <ShoesItem key={item.id} item={item} />;
      });
    case "error": 
      return <ShoesError />

    default:
  }
};