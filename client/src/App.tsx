import React, {
    Suspense,
    useEffect,
    useState,
    useSyncExternalStore,
} from "react";
import "./reset.scss";
import "./global.scss";
import {Route, Routes} from "react-router-dom";
import {useTelegram} from "./hooks/useTelegram";
import {useAppDispatch, useAppSelector} from "./hooks/useRedux";
import {fetchUser} from "./store/slice/userSlice";
import {adminRoutes, routes} from "./routes/routes";
import {useAuthUserMutation} from "./store/API/userApi";

const dataUser = {
    chatId: 1035451470,
    username: "Amed",
};

interface IRoutes {
    path: string;
    element: React.ReactNode;
}

function App() {
    const {tg} = useTelegram();

    const dispatch = useAppDispatch();
    const {user} = useAppSelector((state) => state.userReducer);
    const [allRoutes, setAllRoutes] = useState<IRoutes[]>();
    const [authUser, {data, error}] = useAuthUserMutation()

    useEffect(() => {
        if (user?.role === "admin") {
            setAllRoutes([...routes, ...adminRoutes]);
        } else {
            setAllRoutes([...routes]);
        }
    }, [user]);
    useEffect(() => {
        authUser(dataUser)
    }, []);
    useEffect(() => {
        if (data) {
            dispatch(fetchUser(data?.existUser));
            localStorage.setItem('food-delivery-token', JSON.stringify(data?.access_token))
        }
    }, [data]);
    tg.MainButton.color = "#F55353"; //изменяем цвет бэкграунда кнопки
    return (
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

    );
}

export default App;
