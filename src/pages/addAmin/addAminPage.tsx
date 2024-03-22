import {MainLayout} from "../../layout/mainLayout"
import {useGetAllUsersQuery, useUpdateUserMutation} from "../../store/API/userApi";
import classes from "../changeStatusOrder/changeStatusOrderPage.module.scss";
import {Select} from "../../shared/select/select";
import {NavLink} from "react-router-dom";
import {Button} from "../../shared/button/button";
import React, {useEffect, useState} from "react";


const AddAminPage = () => {
    const {data} = useGetAllUsersQuery('')
    const [updateUser, {data: dataUpdateUser, isLoading, error}] = useUpdateUserMutation()
    const [select, setSelect] = useState('')
    const [userId, setUserId] = useState('')
    console.log(data)
    useEffect(() => {
        if (dataUpdateUser && !isLoading && !error) {

        }
    }, [dataUpdateUser]);
    const handlerSubmit = () => {
        updateUser({
            userId,
            body: {
                role: select,
            }
        })
    }
    const handlerSelect = (id: string, role: string) => {
        setUserId(id)
        setSelect(role)
    }
    return (
        <MainLayout heading={'Изменение роли пользователя'}>
            <div className={classes.list}>
                {
                    data && data.map((item: any) =>

                        item.role === 'admin' ?
                            <div className={classes.box} key={item?.id}>
                                <div className={classes.item}>
                                    <div className={classes.title}>Пользователь:</div>
                                    <div className={classes.title}>
                                        {item?.username ? item?.username : item?.chatId}
                                    </div>

                                    {/*<Select onChange={setSelect} dataOption={['admin','user']} initValue={item?.status}/>*/}
                                </div>
                                <div className={classes.inner}>
                                    <select onChange={(e) => handlerSelect(item?.id, e.target.value)}>
                                        <option value={'admin'}>Администратор</option>
                                        <option value={'user'}>Пользователь</option>
                                    </select>
                                    <Button onClick={handlerSubmit}>Сохранить</Button>
                                </div>
                            </div>
                            : null
                    )
                }
            </div>
        </MainLayout>
    )
        ;
};
export default AddAminPage;
