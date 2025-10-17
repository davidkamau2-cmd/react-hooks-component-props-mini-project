import React from "react";
import logo from "../assets/logo";

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}wq</p>
    </aside>
  );
}

export default About;
