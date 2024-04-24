import {MainLayout} from "../../layout/mainLayout"
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {Product} from "../../entities/product/product";
import React, {useEffect, useRef, useState} from "react";
import classes from "./cartPage.module.scss"
import {Button} from "../../shared/button/button";
import {FormCheckout} from "../../entities/formCheckout/formCheckout";
import {useGetContactsQuery} from "../../store/API/contactsApi";
import {createPortal} from "react-dom";
import {Modal} from "../../entities/modal/modal";
import {IProduct} from "../../types/types";
import {deleteSwipeProduct} from "../../store/slice/productsSlice";


const CartPage = () => {
    const dispatch = useAppDispatch();
    const {data: contactsData} = useGetContactsQuery('')
    const {productsInCart} = useAppSelector(state => state.productReducer)
    const [checkout, setCheckout] = useState(false)
    const [worktime, setWorktime] = useState(true)
    const [modal, setModal] = useState(false)
    const [swipeItem, setSwipeItem] = useState<IProduct | null>(null);
    const productRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
     if(contactsData){
         const timeRange = contactsData?.worktime;
         const startHour = parseFloat(timeRange.split(" ")[1]);
         const endHour = parseFloat(timeRange.split("до ")[1]);
         const currentTime = new Date().getHours();

         if (currentTime >= startHour && currentTime < endHour) {
             setWorktime(true)
         } else {
             setWorktime(false)
         }
     }
    }, [contactsData]);
    const addOrder = () => {
        if (!worktime) {
            setModal(true)
        } else {
            setCheckout(true)
        }
    }

    const handleSwipeEnd = (event:any) => {
        const itemWidth = event.target.offsetWidth;
        const swipeDistance = event.changedTouches[0].clientX - event.target.getBoundingClientRect().left;

        if ((swipeDistance > itemWidth / 2) && swipeItem) {
            if (productRef.current) {
                productRef.current.style.transform = `translateX(-${swipeDistance}px)`;
            }
            dispatch(deleteSwipeProduct(swipeItem))
        }
        setSwipeItem(null);
    };
    return (
        <MainLayout heading={checkout ? 'Оформление заказа' : 'Корзина'} textCenter>
            {
                checkout ?
                    <FormCheckout/>
                    :
                    <div className={classes.cart}>
                        <div>
                            <div className={classes.list}>
                                {
                                    productsInCart && productsInCart.map(item =>
                                        <div
                                            className={classes.item}
                                            ref={productRef}
                                            key={item.id}
                                            onDrag={handleSwipeEnd}
                                            onTouchStart={() => setSwipeItem(item)}
                                            onTouchEnd={handleSwipeEnd}
                                            onTouchMove={handleSwipeEnd}
                                        >
                                            <Product data={item} inCart count={item.count ? item.count : 0}/>
                                            <div className={classes.divider}></div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={classes.sum}>
                                <span>Итого: </span>
                                <span>
                                {
                                    productsInCart && productsInCart.reduce((acc, item) => acc + (+item?.price * (item.count ? item.count : 0)), 0)
                                }
                                    ₽
                            </span>
                            </div>
                        </div>
                        <Button onClick={addOrder}>Оформить заказ</Button>
                    </div>
            }
            {modal && createPortal(
                <Modal textModal={`
                К сожалнию в данный момент мы не работаем.\n
                Время работы: ${contactsData.worktime}
                `} onClick={() => setModal(false)}
                       textBtn={'Закрыть'}/>,
                document.body
            )}
        </MainLayout>
    );
};
export default CartPage;



