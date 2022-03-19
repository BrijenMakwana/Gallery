import React from "react";
import "./ImageItem.css";

export default function ImageItem(props) {
  return (
    <div className="i">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} alt="project" className="i-img" />
      </a>
    </div>
  );
}
