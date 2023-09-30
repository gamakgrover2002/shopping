import React from "react";

function Categories() {
  const Categorynavs = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjkL2yLqdFNpg1hAtZaT8VAlINPtOPDyMKQ&usqp=CAU",
      text: "Electronics",
    },
    {
      src: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      text: "Jewelery",
    },
    {
      src: "https://cdn11.bigcommerce.com/s-as52he8i0c/images/stencil/1280x1280/i/aw23-men's-new-fleece-category-image__98316.original.jpg",
      text: "Mens Clothing",
    },
    {
      src: "https://www.lulus.com/images/content/w_360/content_1230_107161_desktopdresses.png",
      text: "Womens Clothing",
    },
  ];
  return (
    <div id="category-section">
      {Categorynavs.map((e) => {
        return (
          <div id="category">
            <a href="/shopping">
              <img className="categories" src={e.src} alt={e.text}></img>
            </a>
            <p>{e.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
