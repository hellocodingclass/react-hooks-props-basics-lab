import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import albatros from "../data/user";

function App() {
  return (
    <div>
      <NavBar  />
      <Home name = {albatros.name} city = {albatros.city} color = {albatros.color} />;
      <About bio = {albatros.bio} github = {albatros.links.github} linkedin = {albatros.links.linkedin} />
    </div>
  );
}

export default App;
 