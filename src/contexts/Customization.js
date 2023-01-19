import { createContext, useContext, useState } from "react";

const tableColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#2b8cc8",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const objectColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#2b8cc8",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("wood");
  const [objects, setObjects] = useState("");
  const [tableColor, setTableColor] = useState(tableColors[0]);
  const [objectColor, setObjectColor] = useState(objectColors[0]);
  const [addToCart, setAddToCart] = useState(false);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        objects,
        setObjects,
        tableColors,
        tableColor,
        setTableColor,
        objectColors,
        objectColor,
        setObjectColor,
        addToCart,
        setAddToCart,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
