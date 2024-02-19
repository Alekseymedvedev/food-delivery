import classes from './profilePage.module.scss'
import {MainLayout} from "../../layout/mainLayout"
import {Calendar} from "../../shared/calendar/calendar";
import {TextField} from "../../shared/textField/textField";
import {useInput} from "../../hooks/useInput";
import React from "react";


const ProfilePage = () => {
    const nameInput = useInput( '')
    return (
        <MainLayout heading={'Профиль'} textCenter>
            <div className={classes.title}>Мои данные</div>
            <div className={classes.box}>
            <TextField
                placeholder={'Имя'}
                borderAccent/>
            <TextField
                placeholder={'Почта'}
                onChange={nameInput.onChange}
                value={nameInput.value}/>
            </div>
            <div className={classes.title}>Пол</div>
            <div className={classes.genderGroup}>
                <button>Мужской</button>
                <button>Женский</button>
            </div>
            <div className={classes.title}>Дата рождения</div>
            <div>
                <Calendar/>
            </div>
            <div className={classes.title}>Контакты</div>
            <TextField
                placeholder={'Телефон'}
                borderAccent/>
        </MainLayout>
    );
};
export default ProfilePage;
