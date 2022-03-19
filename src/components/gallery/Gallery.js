import React, { useState, useEffect } from "react";
import "./Gallery.css";
import ImageItem from "../imageItem/ImageItem";

export default function ProjectList(props) {
  const [gallery, setGallery] = useState([]);
  const [personal, setPersonal] = useState([]);

  const getPersonalDetails = () => {
    fetch(
      "https://tqm1lism.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22introduction%22%5D"
    )
      .then((res) => res.json())
      .then((res) => {
        setPersonal(res.result[0]);
      });
  };

  const getGallery = () => {
    fetch(
      "https://tqm1lism.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22gallery%22%5D%20%7C%20order(_createdAt%20asc)%7B%0A%20%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%2C%0A%7D"
    )
      .then((res) => res.json())
      .then((res) => {
        setGallery(res.result);
      });
  };

  useEffect(() => {
    getPersonalDetails();
    getGallery();
  }, []);

  return (
    <div className="g">
      <div className="g-texts">
        <h1 className="g-title">{personal.name}</h1>
        <p className="g-desc">
          <b>Hello There! ✌🏻</b>
          <br />
          <ul>
            {personal.about &&
              personal.about
                .split(",")
                .map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </p>
      </div>
      <div className="g-list">
        {gallery &&
          gallery.map((item, index) => (
            <ImageItem key={index} imageUrl={item.imageUrl} />
          ))}
      </div>
    </div>
  );
}
