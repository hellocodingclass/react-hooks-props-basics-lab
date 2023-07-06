import React from "react";
import Links from "./Links";

function About(albatros) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {!albatros.bio ? null : <p>{albatros.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {albatros.github} linkedin = {albatros.linkedin} />
    </div>
  );
}

export default About;
