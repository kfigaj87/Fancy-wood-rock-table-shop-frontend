import React, { useState } from "react";
import { useCustomization } from "../contexts/Customization";
import Button from "react-bootstrap/Button";
import "./Configurator.css";

const Configurator = () => {
  const {
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
    setAddToCart,
  } = useCustomization();

  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("(product added to cart)");
  };

  return (
    <div>
      <p className="btn__message">{message}</p>
      <div className="configurator">
        <div className="configurator__section">
          <div className="configurator__section__title">Table material</div>
          <div className="configurator__section__values">
            <div
              className={`item ${material === "wood" ? "item--active" : ""}`}
              onClick={() => setMaterial("wood")}
            >
              <div className="item__label">Wood</div>
            </div>
            <div
              className={`item ${material === "rock" ? "item--active" : ""}`}
              onClick={() => setMaterial("rock")}
            >
              <div className="item__label">Rock</div>
            </div>
          </div>
        </div>
        <div className="configurator__section">
          <div className="configurator__section__title">Table color</div>
          <div className="configurator__section__values">
            {tableColors.map((item, index) => (
              <div
                key={index}
                className={`item ${
                  item.color === tableColor.color ? "item--active" : ""
                }`}
                onClick={() => setTableColor(item)}
              >
                <div
                  className="item__dot"
                  style={{ backgroundColor: item.color }}
                />
                <div className="item__label">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="configurator__section">
          <div className="configurator__section__title">Objects</div>
          <div className="configurator__section__values">
            <div
              className={`item ${objects === "Ball" ? "item--active" : ""}`}
              onClick={() => setObjects("Ball")}
            >
              <div className="item__label">Ball</div>
            </div>
            <div
              className={`item ${objects === "Cube" ? "item--active" : ""}`}
              onClick={() => setObjects("Cube")}
            >
              <div className="item__label">Cube</div>
            </div>
          </div>
        </div>

        <div className="configurator__section">
          <div className="configurator__section__title">Object color</div>
          <div className="configurator__section__values">
            {objectColors.map((item, index) => (
              <div
                key={index}
                className={`item ${
                  item.color === objectColor.color ? "item--active" : ""
                }`}
                onClick={() => setObjectColor(item)}
              >
                <div
                  className="item__dot"
                  style={{ backgroundColor: item.color }}
                />
                <div className="item__label">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="add__to__cart">
          <Button
            variant="primary"
            disabled={!objects}
            onClick={() => {
              setAddToCart(true);
              handleClick();
            }}
          >
            Add to cart
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
