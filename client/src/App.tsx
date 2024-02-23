import React, {useEffect, useState,} from "react";
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
    username: "Amed152",
};

interface IRoutes {
    path: string;
    element: React.ReactNode;
}

function App() {
     const {tg} = useTelegram();
    const [disabled, setDisabled] = useState(false)
    const dispatch = useAppDispatch();
    const {user} = useAppSelector((state) => state.userReducer);
    const [allRoutes, setAllRoutes] = useState<IRoutes[]>();
    const [authUser, {data, error}] = useAuthUserMutation()
    useEffect(() => {
        // if (!disabled) authUser(dataUser)
         if (!disabled) authUser({chatId: tg?.initDataUnsafe?.user?.id, username: tg?.initDataUnsafe?.user?.username})
        return () => setDisabled(true)
    }, []);
    useEffect(() => {
        if (user?.role === "admin") {
            setAllRoutes([...routes, ...adminRoutes]);
        } else {
            setAllRoutes([...routes]);
        }
    }, [user]);
    useEffect(() => {
        if (data) {
            dispatch(fetchUser(data?.existUser));
            localStorage.setItem('food-delivery-token', JSON.stringify(data?.access_token))
        }
    }, [data]);

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
