import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const MenuSection = () => {
  const { category } = useSelector((state) => state.category);
  const renderCategory = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li
          key={category.title}
          className="flex justify-between font-fira font-semibold"
        >
          {" "}
          {category.parentId ? (
            <a href="/">{category.title}</a>
          ) : (
            <span className="">{category.title}</span>
          )}
          {category.children.length > 0 ? <MdOutlineKeyboardArrowRight /> : ""}
          {category.children.length > 0 ? (
            <ul> {renderCategory(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };
  return (
    <div className="menuHeader">
      <ul>{renderCategory(category)}</ul>
    </div>
  );
};

export default MenuSection;
