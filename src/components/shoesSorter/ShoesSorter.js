import React from "react";

import Select from "react-select";

import "./shoesSorter.scss";

const ShoesSorter = () => {
  const [value, setValue] = React.useState("");

  const options = [
    {
      value: "Price Up",
      label: "Price Up",
    },
    {
      value: "Price Down",
      label: "Price Down",
    },
  ];

  return (
    <div className="shoes__sorter">
      <Select
      placeholder="Sort by"
      classNamePrefix="shoes__sorter-select" options={options}></Select>
    </div>
  );
};

export default ShoesSorter;
