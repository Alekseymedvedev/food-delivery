import React, {useEffect, useState,} from "react";
import "./reset.scss";
import "./global.scss";
import {Route, Routes} from "react-router-dom";
import {useTelegram} from "./hooks/useTelegram";
import {useAppDispatch, useAppSelector} from "./hooks/useRedux";
import {fetchUser} from "./store/slice/userSlice";
import {adminRoutes, routes, superAdminRoutes} from "./routes/routes";
import {useAuthUserMutation} from "./store/API/userApi";

const dataUser = {
    chatId: 1035451470,
    username: "Amed152",
    queryId: "AAFOvLc9AAAAAE68tz2o81k0"
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
        // authUser({
        //     chatId: 1035451470,
        //     username: 'Amed152',
        //     queryId: 'AAFOvLc9AAAAAE68tz3ynEhS'
        // })
         authUser({
            chatId: tg?.initDataUnsafe?.user?.id,
            username: tg?.initDataUnsafe?.user?.username,
            queryId: tg?.initDataUnsafe?.query_id ? tg?.initDataUnsafe?.query_id : 'queryId'
        })
    }, []);
    useEffect(() => {
        if (data) {
            dispatch(fetchUser(data?.existUser));
            localStorage.setItem('food-delivery-token', data?.access_token)
        }
    }, [data]);
    useEffect(() => {
        if (user?.role === "superAdmin") {
            setAllRoutes([...routes, ...adminRoutes, ...superAdminRoutes]);
        } else if (user?.role === "admin") {
            setAllRoutes([...routes, ...adminRoutes]);
        } else {
            setAllRoutes([...routes]);
        }
    }, [user]);

    return (
        <>
            {
                data &&
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
            }
        </>
    );
}

export default App;
