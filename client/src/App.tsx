import React, {Suspense} from 'react';
import './reset.scss';
import './global.scss';
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";
import {useTelegram} from "./hooks/useTelegram";

function App() {
    const {tg} = useTelegram()
    tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
    tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
    tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
    tg.MainButton.color = "green"; //изменяем цвет бэкграунда кнопки
    tg.MainButton.setParams({"color": "grey"});
    return (
        <Suspense fallback={'Загрузка'}>
            <Routes>
                {
                    routes.map(route =>
                        <Route key={route?.path} path={route?.path} element={route?.element}/>
                    )
                }
            </Routes>
        </Suspense>
    );
}

export default App;
