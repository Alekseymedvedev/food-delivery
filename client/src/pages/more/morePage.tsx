import classes from "./morePage.module.scss";
import { NavLink } from "react-router-dom";
import { MainLayout } from "../../layout/mainLayout";
import { FavoritesIcon } from "../../shared/images/icons/favoritesIcon";

const linkArr = [
  { to: "payment", text: "Платежи", icon: '' },
  { to: "orders", text: "Заказы", icon: '' },
  { to: "/profile", text: "Профиль", icon: '' },
  { to: "more", text: "Избранное ", icon: <FavoritesIcon /> },
];
const MorePage = () => {
  return (
    <MainLayout heading={"Еще"} textCenter>
      <nav className={classes.menu}>
        {linkArr.map((item) => (
          <NavLink to={item.to}>
            {item.icon}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </nav>
    </MainLayout>
  );
};
export default MorePage;
