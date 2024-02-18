
import {MainLayout} from "../../layout/mainLayout"
import {Calendar} from "../../shared/calendar/calendar";
import {TextField} from "../../shared/textField/textField";
import {useInput} from "../../hooks/useInput";
import React from "react";


const ProfilePage = () => {
    const nameInput = useInput( '')
    return (
        <MainLayout heading={'Профиль'} textCenter>
            <TextField borderAccent/>
            <TextField onChange={nameInput.onChange} value={nameInput.value}/>
            <div>
                <Calendar/>
            </div>
            <TextField borderAccent/>
        </MainLayout>
    );
};
export default ProfilePage;
