import classes from './profilePage.module.scss'
import {MainLayout} from "../../layout/mainLayout"
import {Calendar} from "../../shared/calendar/calendar";
import {TextField} from "../../shared/textField/textField";
import {useInput} from "../../hooks/useInput";
import React, {useEffect, useState} from "react";
import {SimpleTextField} from "../../shared/simpleTextField/simpleTextField";
import {useUpdateUserMutation} from "../../store/API/userApi";
import {Button} from "../../shared/button/button";
import {useAppSelector} from "../../hooks/useRedux";


const ProfilePage = () => {
    const {user} = useAppSelector((state) => state.userReducer);
    const [updateUser] = useUpdateUserMutation()
    const nameInput = useInput('')
    const emailInput = useInput('')
    const phoneInput = useInput('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState({id: 1, text: 'Мужской'})

    const handlerSave = () => {
        updateUser({
            userId:user?.id,
            body: {
                name: nameInput.value,
                email: emailInput.value,
                gender: gender.text,
                birthdate: date,
                phone: phoneInput.value,
            }
        })
    }
    return (
        <MainLayout heading={'Профиль'} textCenter>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className={classes.title}>Мои данные</div>
                <div className={classes.box}>
                    <TextField
                        placeholder={'Имя'}
                        onChange={nameInput.onChange}
                        value={nameInput.value}
                        borderAccent/>
                    <TextField
                        placeholder={'Почта'}
                        onChange={emailInput.onChange}
                        value={emailInput.value}
                        borderAccent/>
                </div>
                <div className={classes.title}>Пол</div>
                <div className={classes.genderGroup}>
                    <button
                        className={gender.id === 1 ? `${classes.btn} ${classes.active}` : classes.btn}
                        onClick={() => setGender({id: 1, text: 'Мужской'})}>
                        Мужской
                    </button>
                    <button
                        className={gender.id === 2 ? `${classes.btn} ${classes.active}` : classes.btn}
                        onClick={() => setGender({id: 2, text: 'Женский'})}>
                        Женский
                    </button>
                </div>
                <div className={classes.calendar}>
                    <div className={classes.title}>Дата рождения</div>
                    <Calendar changeDate={setDate}/>
                </div>
                <div className={classes.title}>Контакты</div>
                <SimpleTextField
                    type={'phone'}
                    placeholder={'Телефон'}
                    onChange={phoneInput.onChange}
                    value={phoneInput.value}
                />

                <Button onClick={handlerSave}>Сохранить</Button>
            </form>
        </MainLayout>
    );
};
export default ProfilePage;
