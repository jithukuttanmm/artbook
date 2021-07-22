import React from "react";
import Button from "../Button/Button";

import "./Image.css";

export default function Image() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        border: "1px solid #dfdfdf",
        background: "#282c34",
        borderRadius: "17px 17px 16px 16px",
        margin: "8px",
      }}
      className="image-card"
    >
      <div style={{ display: "flex" }}>
        <img
          src="https://picsum.photos/200/300"
          width="300px"
          alt="something"
          style={{ borderRadius: "16px 16px 0px 0px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          height: "1px",
          background: "#ffffff",
          margin: "15px 5px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          margin: "5px",
          color: "#ffffff",
          fontSize: "15px",
          padding: "5px",
          paddingTop: "0px",
          fontWeight: "500",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
      <div
        style={{
          display: "flex",
          color: "white",
          margin: "15px 5px",
          justifyContent: "center",
          height: "30px",
        }}
      >
        <Button classes="buy-now-button" title="Buy now" />
      </div>
    </div>
  );
}
