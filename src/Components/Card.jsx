import React from "react";

export default function Card({ recipe }) {
  // the repice prop sent from App.js is recived and deconstructed for easy use in component

  // hit F12, or right click page and select "inspect" to open developer tools in the broswer. Select "console" and look at the recipe object
  console.log(recipe); // prints to the console

  // TODO
  // * complete the src-atribute on the img-tag to show the recipe picture
  // * complete the href-attribute #top on the link a-tag to the proper recipe url
  // * update the card with information you'd find interesting about the recipe
  // * update the card styling

  return (
    <div className="recipe-card">
      <img className="recipe-img" src={recipe.image} alt={recipe.label} />
      <h2>{recipe.label}</h2>
      <p>{recipe.source}</p>
      <a href={recipe.url} className="button">
        To recipe
      </a>
    </div>
  );
}
