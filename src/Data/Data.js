import AppleGreen from "../Images/appleGreen.png";
import Samsung from "../Images/samsung.png";
import AppleLogo from "../Images/appleLogo.png";
import SamsungLogo from "../Images/samsungLogo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export const information = [
  {
    value: "About Us",
    link: "#",
  },
  {
    value: "Service Center",
    link: "#",
  },
  {
    value: "Sell",
    link: "#",
  },
  {
    value: "Help",
    link: "#",
  },
];
export const heroInformation = [
  {
    photo: AppleGreen,
    brand: "Authorize Reseller",
    brandLogo: AppleLogo,
    name: "iPhone 11 Pro",
    price: 80000,
    link: "",
    bg: "#F3FAFA",
    color: "#2BC1B9",
    productColor: ["#6F7873", "#F0F1EC", "#B4B8DA", "#990D08"],
  },
  {
    photo: Samsung,
    brand: "Authorize Reseller",
    brandLogo: SamsungLogo,
    name: "Samsung s22 ultra",
    price: 50000,
    link: "",
    bg: "#FFF7F2",
    color: "#2BC1B9",
    productColor: ["#2D2D2D", "#587E77", "#8D656E", "#F0EFEF"],
  },
];
export const renderCategory = (categories) => {
  let myCategories = [];
  for (let category of categories) {
    myCategories.push(
      <li key={category.title}>
        {category.parentId ? (
          <Link to={`/shop?${category.title}/${category._id}`}>
            {category.title}{" "}
          </Link>
        ) : (
          <span className="flex items-center py-2 w-full justify-between font-bold">
            {category.title}{" "}
            {category.children.length ? (
              <MdOutlineKeyboardArrowRight
                className={`rotate-90

                `}
                size={"20px"}
              />
            ) : (
              ""
            )}
          </span>
        )}

        {category.children.length > 0 ? (
          <ul className={`pl-4 `}> {renderCategory(category.children)}</ul>
        ) : null}
      </li>
    );
  }
  return myCategories;
};
