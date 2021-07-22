import React from "react";

export default function Button(props) {
  const { title, classes = "" } = props;
  return <button className={classes}>{title}</button>;
}
