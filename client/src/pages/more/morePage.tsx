import classes from "./morePage.module.scss";
import { NavLink } from "react-router-dom";
import { MainLayout } from "../../layout/mainLayout";
import { FavoritesIcon } from "../../shared/images/icons/favoritesIcon";
import {useAppSelector} from "../../hooks/useRedux";
import {useEffect, useState} from "react";

const linkArr = [
  { to: "payment", text: "Платежи", icon: '' },
  { to: "orders", text: "Заказы", icon: '' },
  { to: "/profile", text: "Профиль", icon: '' },
  { to: "more", text: "Избранное ", icon: <FavoritesIcon /> },
];
const linkArrAdmin = [
  { to: "/more/statistics", text: "Статистика", icon: '' },
  { to: "/more/settings", text: "Настойка товаров", icon: '' },
];
const MorePage = () => {
    const {user} = useAppSelector((state) => state.userReducer);
    const [arr,setArr]= useState<any>([])
    useEffect(()=>{
        if(user?.role === 'admin'){
    console.log(user?.role)

            setArr([...linkArr,...linkArrAdmin])
        }else{
    console.log(user)

            setArr([...linkArr])
        }
    },[user])
  return (
    <MainLayout heading={"Еще"} textCenter>
      <nav className={classes.menu}>
        {arr?.map((item:any) => (
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
