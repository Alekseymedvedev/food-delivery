import React, {Suspense} from 'react';
import './reset.scss';
import './global.scss';
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";

function App() {
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
