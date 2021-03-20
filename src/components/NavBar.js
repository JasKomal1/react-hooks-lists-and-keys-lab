import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const newArr = links.map((eles) => {
    return <a key={eles} href={eles}> {eles}</a>
  })

   return <nav>{newArr}</nav>;
}

export default NavBar;
