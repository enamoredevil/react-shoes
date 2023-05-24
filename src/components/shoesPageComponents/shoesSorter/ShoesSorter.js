import React from "react";

import Select from "react-select";

import "./shoesSorter.scss";

const ShoesSorter = ({ setSortParameter }) => {
  const [value, setValue] = React.useState("Popular");

  const options = [
    {
      value: "Popular",
      label: "Popular",
    },
    {
      value: "Price Up",
      label: "Price Up",
    },
    {
      value: "Price Down",
      label: "Price Down",
    },
  ];

  const getValue = () => {
    return value ? options.find((item) => item.value === value) : "";
  };

  const onChangeValue = (newValue) => {
    setValue(newValue.value);
    setSortParameter(newValue.value);
  };

  return (
    <div className="shoes__sorter">
      <Select
        onChange={onChangeValue}
        value={getValue()}
        placeholder="Sort by"
        classNamePrefix="shoes__sorter-select"
        options={options}
      />
    </div>
  );
};

export default ShoesSorter;
