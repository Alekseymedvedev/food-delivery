
import {MainLayout} from "../../layout/mainLayout"
import classes from "../../entities/search/search.module.scss";
import React from "react";
import {TextField} from "../../shared/textField/textField";
import {useInput} from "../../hooks/useInput";
import {useUpdateRoleUserMutation} from "../../store/API/userApi";
import {Button} from "../../shared/button/button";


const UpdateRoleUserPage = () => {
    const input = useInput('')
    const [update]=useUpdateRoleUserMutation()
    const handler = () => {
        update({username: input.value})
    }
    return (
        <MainLayout heading={'Обновление роли пользователя'}>
            <label className={classes.label}>
                <TextField value={input.value} onChange={input.onChange}/>
            </label>
            <Button onClick={handler}>Сохранить</Button>
        </MainLayout>
    );
};
export default UpdateRoleUserPage;
