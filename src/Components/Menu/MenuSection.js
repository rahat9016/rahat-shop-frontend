import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import "./style.css";
const MenuSection = ({ home }) => {
  const { category } = useSelector((state) => state.category);

  const renderCategory = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li
          key={category.title}
          className="flex  justify-between font-fira font-semibold z-50"
        >
          {category.parentId ? (
            <Link to={`/shop?${category.title}/${category._id}`}>
              {category.title}{" "}
            </Link>
          ) : (
            <span className="">{category.title}</span>
          )}
          {category.children.length > 0 ? (
            <MdOutlineKeyboardArrowRight />
          ) : null}
          {category.children.length > 0 ? (
            <ul className=""> {renderCategory(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };
  return (
    <>
      {home ? (
        <div className="homeMenu">
          <ul>{renderCategory(category)}</ul>
        </div>
      ) : (
        <div className="w-full bg-white shadow-md z-50	hidden lg:block">
          <div className="allPageMenu max-w-7xl mx-auto">
            <ul>{renderCategory(category)}</ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuSection;
