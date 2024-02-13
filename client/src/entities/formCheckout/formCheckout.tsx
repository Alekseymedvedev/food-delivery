import React, {FC, memo, useState} from "react";
import classes from "./formCheckout.module.scss";
import {Button} from "../../shared/button/button";
import {SimpleTextField} from "../../shared/simpleTextField/simpleTextField";
import {useInput} from "../../hooks/useInput";
import {InputRadio} from "../../shared/inputRadio/inputRadio";
import {useAppSelector} from "../../hooks/useRedux";
import {useCreateNewOrderMutation} from "../../store/API/ordersApi";
import {useNavigate} from "react-router-dom";
import {IOrder, IOrderCreate} from "../../types/types";

interface IType {
    onSubmit: (val: any) => void;
}

export const FormCheckout: FC<IType> = memo(({onSubmit}) => {
    const navigate = useNavigate();
    const [createOrder, {data:dataCreate,error, isLoading}] = useCreateNewOrderMutation()

    const {productsInCart} = useAppSelector(state => state.productReducer)
    const address = useInput('')
    const phone = useInput('')
    const name = useInput('')
    const [typeDelivery, setTypeDelivery] = useState('Доставка')
    const [paymentMethod, setPaymentMethod] = useState('Наличные')
    const [modalError, setModalError] = useState(false)

    const submitHandler = () => {
        const data:IOrderCreate = {
            address: address.value,
            typeDelivery,
            phone: phone.value,
            name: name.value,
            paymentMethod,
            userId: 1,
            orderProducts: productsInCart.map(item => +item.id)
         }
        createOrder(data).then(() => {
            if(!error && !isLoading && dataCreate) {
                localStorage.setItem('productsInCart', '')
                navigate(`/order/${data.id}`)
            }
        })
    }
    return (
        <form className={classes.formCheckout}>
            {
                (error && !isLoading) && <span className={'error'}>Ошибка при создании заказа</span>
            }
            <div className={classes.btnGroup}>
                <Button onClick={() => setTypeDelivery('Доставка')}>Доставка</Button>
                <Button onClick={() => setTypeDelivery('Самовывоз')}>Самовывоз</Button>
            </div>
            <div className={classes.box}>
                <SimpleTextField label={"Укажите адрес доставки"} value={address.value} onChange={address.onChange}/>
                <SimpleTextField label={"Контакты"} type={'phone'} value={phone.value} onChange={phone.onChange}/>
                <SimpleTextField label={"Имя"} value={name.value} onChange={name.onChange}/>
            </div>
            <div>
                <InputRadio label={'Наличные'} value={'Наличные'} onChange={setPaymentMethod} name={"payment"}/>
                <InputRadio label={'Эквайринг'} value={'Эквайринг'} onChange={setPaymentMethod} name={"payment"}/>
                <InputRadio label={'Картой при получении'} value={'Картой при получении'} onChange={setPaymentMethod} name={"payment"}/>
            </div>
            <Button onClick={submitHandler}>Офрмить заказ</Button>
        </form>
    );
});
