import React, { useState, useEffect } from "react";
import "./Gallery.css";
import ImageItem from "../imageItem/ImageItem";

export default function ProjectList(props) {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    fetch(
      "https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22projects%22%5D%7B%0A%20%20title%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%2C%0A%20%20description%2C%0A%20%20url%0A%7D"
    )
      .then((res) => res.json())
      .then((res) => {
        setProjects(res.result);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="g">
      <div className="g-texts">
        <h1 className="g-title">Brijen Makwana</h1>
        {/* <p className="pl-desc">{props.description}</p> */}
      </div>
      <div className="g-list">
        {projects &&
          projects.map((item, index) => (
            <ImageItem key={index} imageUrl={item.imageUrl} url={item.url} />
          ))}
      </div>
    </div>
  );
}
