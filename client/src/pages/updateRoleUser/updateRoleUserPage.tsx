
import {MainLayout} from "../../layout/mainLayout"
import classes from "../../entities/search/search.module.scss";
import React from "react";
import {TextField} from "../../shared/textField/textField";
import {useInput} from "../../hooks/useInput";
import {useGetUserQuery, useUpdateRoleUserMutation} from "../../store/API/userApi";
import {Button} from "../../shared/button/button";
import {useParams} from "react-router-dom";


const UpdateRoleUserPage = () => {
    const {id} = useParams()
    const input = useInput('')
    const {data} = useGetUserQuery(`${id}`)
    const [update]=useUpdateRoleUserMutation()
    console.log(data)
    const handler = () => {
        console.log(id)
        update({id})
    }
    return (
        <MainLayout heading={'Обновление роли пользователя'}>
            <div className="mb-4">
                Изменить роль пользователя {data?.username} с ID {data?.chatId}
            </div>
            <Button onClick={handler}>Сохранить</Button>
        </MainLayout>
    );
};
export default UpdateRoleUserPage;
