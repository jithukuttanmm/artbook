import React, { Component } from "react";
import Image from "../../components/imageholder/Image";
export default class Landing extends Component {
  render() {
    let index = [
      1,
      2,
      3,
      4,
      1,
      3,
      1,
      1,
      2,
      3,
      4,
      3,
      4,
      2,
      2,
      2,
      4,
      4,
      3,
      2,
      3,
      3,
      32,
      2,
      ,
      34,
      2,
    ];
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "5%",
        }}
      >
        {index.map((item, index) => (
          <Image key={`${index}-image`} />
        ))}
      </div>
    );
  }
}
