import React, {
  Suspense,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import "./reset.scss";
import "./global.scss";
import { Route, Routes } from "react-router-dom";
import { useTelegram } from "./hooks/useTelegram";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { fetchUser } from "./store/slice/userSlice";
import { adminRoutes, routes } from "./routes/routes";

const data = {
  id: 0,
  chatId: 1035451470,
  name: "Amed152",
  role: "admin",
};
interface IRoutes {
  path: string;
  element: React.ReactNode;
}
function App() {
  const { tg } = useTelegram();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userReducer);
  const [allRoutes, setAllRoutes] = useState<IRoutes[]>();
  // const {data}=useAuthUserQuery('1')

  useEffect(() => {
    dispatch(fetchUser(data));
    if (user.role === "admin") {
      setAllRoutes([...routes, ...adminRoutes]);
    } else {
      setAllRoutes([...routes]);
    }
    localStorage.setItem('food-delivery-token', JSON.stringify('state.productsInCart'));
  }, [user]);
  // tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
  // tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
  // tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
  tg.MainButton.color = "#F55353"; //изменяем цвет бэкграунда кнопки
  // tg.MainButton.setParams({"color": "grey"});
  return (
    <Suspense fallback={"Загрузка"}>
      <Routes>
        {allRoutes &&
          allRoutes.map((route) => (
            <Route
              key={route?.path}
              path={route?.path}
              element={route?.element}
            />
          ))}
      </Routes>
    </Suspense>
  );
}

export default App;
