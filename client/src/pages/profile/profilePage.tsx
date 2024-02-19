import classes from './profilePage.module.scss'
import {MainLayout} from "../../layout/mainLayout"
import {Calendar} from "../../shared/calendar/calendar";
import {TextField} from "../../shared/textField/textField";
import {useInput} from "../../hooks/useInput";
import React, {useState} from "react";


const ProfilePage = () => {
    const nameInput = useInput('')
    const [activeBtn, setActiveBtn] = useState({id: 1, text: 'Мужской'})
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
                    value={nameInput.value}
                    borderAccent/>
            </div>
            <div className={classes.title}>Пол</div>
            <div className={classes.genderGroup}>
                <button
                    className={activeBtn.id === 1 ? `${classes.btn} ${classes.active}` : classes.btn}
                    onClick={() => setActiveBtn({id: 1, text: 'Мужской'})}>
                    Мужской
                </button>
                <button
                    className={activeBtn.id === 2 ? `${classes.btn} ${classes.active}` : classes.btn}
                    onClick={() => setActiveBtn({id: 2, text: 'Женский'})}>
                    Женский
                </button>
            </div>
            <div className={classes.calendar}>
                <div className={classes.title}>Дата рождения</div>
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
