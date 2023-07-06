import React from "react";

function Links(racoon) {
  return (
    <div>
      <h3>Links</h3>
    <a href = {racoon.github}> {racoon.github} </a>
    <a href = {racoon.linkedin}> {racoon.linkedin} </a>
    </div>
  );
}

export default Links;
