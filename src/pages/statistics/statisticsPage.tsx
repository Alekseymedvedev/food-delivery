import {MainLayout} from "../../layout/mainLayout"
import React, {memo, useState} from "react";
import {useGetStatisticsQuery} from "../../store/API/ordersApi";
import {Button} from "../../shared/button/button";
import {Calendar} from "../../shared/calendar/calendar";
import classes from "./statisticsPage.module.scss"

const StatisticsPage = memo(() => {
    const date = new Date();
    const today = new Date();
    today.setHours(10, 0, 0, 0);

    const startOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfPreviousMonth = new Date(startOfCurrentMonth.getTime() - 1);


    const [catId, setCatId] = useState('')
    const [endTime, setEndTime] = useState(date)
    const [startTime, setStartTime] = useState(date)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const {data, error, isLoading} = useGetStatisticsQuery({startTime, endTime, catId})

    const handler = (start: any, end: any) => {
        setStartTime(start)
        setEndTime(end)
    }
    return (
        <MainLayout heading={'Статистика'} textCenter>
            <div className={classes.box}>
                <Button onClick={() => handler(today, date)}>Сегодня</Button>
                <Button
                    onClick={() => handler(
                        new Date(new Date(date.setDate(date.getDate() - 1)).setHours(0, 0, 0, 0)),
                        new Date(new Date(date.setDate(date.getDate() - 1)).setHours(23, 59, 59, 999))
                    )}>
                    Вчера
                </Button>
                <Button
                    onClick={() => handler(
                        new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7),
                        date
                    )}>
                    За 7 дней
                </Button>
                <Button
                    onClick={() => handler(
                        new Date(date.getFullYear(), date.getMonth(), 1),
                        new Date(date.getFullYear(), date.getMonth() + 1, 0)
                    )}>
                    Этот месяц
                </Button>
                <Button
                    onClick={() => handler(
                        new Date(endOfPreviousMonth.getFullYear(), endOfPreviousMonth.getMonth(), 1),
                        new Date(startOfCurrentMonth.getTime() - 1)
                    )}>
                    Предыдущий месяц
                </Button>
                <Button
                    onClick={() => handler(
                        new Date(today.getFullYear(), 0, 1),
                        new Date(today.getFullYear(), 11, 31)
                    )}>
                    За год
                </Button>
            </div>
            <div className={classes.box}>
                <div className={classes.calendarBox}>
                    <Calendar changeDate={setStartDate} formatISO/>
                    -
                    <Calendar changeDate={setEndDate} formatISO/>
                </div>
                <Button
                    onClick={() => handler(
                        new Date(new Date(startDate).setHours(0, 0, 0, 0)),
                        new Date(new Date(endDate).setHours(23, 59, 59, 999))
                    )}>
                    Применить
                </Button>
            </div>
            <div className={classes.statsBox}>
                <div className="">
                    <span className={classes.title}>Выручка: </span>
                    <span className={classes.text}>{data?.gain}₽</span>
                </div>
                <div className="">
                    <span className={classes.title}>Количество заказов: </span>
                    <span className={classes.text}>{data?.countOfOrders}шт</span>
                </div>
                <div className="">
                    <span className={classes.title}>Средний чек: </span>
                    <span className={classes.text}>{data?.averageCheck}₽</span>
                </div>
                {
                    data && data?.stat.map((item: any) =>
                        <div className="" onClick={() => {
                            item?.id && setCatId(item?.id)
                        }}>
                            <span className={classes.title}>{item?.title}: </span>
                            <span className={classes.text}>{item?.count}шт</span>
                        </div>
                    )
                }
            </div>
        </MainLayout>
    );
});
export default StatisticsPage;
