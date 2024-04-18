import {MainLayout} from "../../layout/mainLayout"
import React, {memo, useState} from "react";
import {useGetStatisticsQuery} from "../../store/API/ordersApi";
import {Button} from "../../shared/button/button";
import {Calendar} from "../../shared/calendar/calendar";


const StatisticsPage = memo(() => {
    const date = new Date();
    const today = new Date();
    today.setHours(10, 0, 0, 0);
    // промежуток даты вчера от 0 до 24 часов
    const yesterdayStart = new Date();
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);
    yesterdayStart.setHours(0, 0, 0, 0);
    const yesterdayEnd = new Date();
    yesterdayEnd.setDate(yesterdayEnd.getDate() - 1);
    yesterdayEnd.setHours(23, 59, 59, 999);

    // предыдущий месяц
    const startOfCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfPreviousMonth = new Date(startOfCurrentMonth.getTime() - 1);
    const startOfPreviousMonth = new Date(endOfPreviousMonth.getFullYear(), endOfPreviousMonth.getMonth(), 1);
    const previousMonthStart = startOfPreviousMonth.toISOString();
    const previousMonthEnd = endOfPreviousMonth.toISOString();

    // последние 7 дней
    const lastWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7).toISOString();

    // этот месяц
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).toISOString();
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString();
    const formattedDate = date.toISOString();

    // За год
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const endOfYear = new Date(today.getFullYear(), 11, 31);

    const yearStart = startOfYear.toISOString();
    const yearEnd = endOfYear.toISOString();

    const [catId, setCatId] = useState('')
    const [endTime, setEndTime] = useState(date.toISOString())
    const [startTime, setStartTime] = useState(date.toISOString())
    const [startDate, setStartDate] = useState('01.04.2024')
    const [endDate, setEndDate] = useState('01.04.2024')
    const {data, error, isLoading} = useGetStatisticsQuery({startTime, endTime, catId})
    console.log(startOfMonth)
    console.log(endDate)
    const handler = (start: any, end: any) => {
        setStartTime(start)
        setEndTime(end)
    }
    return (
        <MainLayout heading={'Статистика'} textCenter>
            <div>
                <Button onClick={() => handler(today.toISOString(), formattedDate)}>Сегодня</Button>
                <Button onClick={() => handler(yesterdayStart.toISOString(), yesterdayEnd.toISOString())}>Вчера</Button>
                <Button onClick={() => handler(lastWeek, formattedDate)}>Неделя (последние 7 дней)</Button>
                <Button onClick={() => handler(startOfMonth, endOfMonth)}>За этот месяц</Button>
                <Button onClick={() => handler(previousMonthStart, previousMonthEnd)}>За предыдущий месяц</Button>
                <Button onClick={() => handler(yearStart, yearEnd)}>За год</Button>
                <div className="">
                <Calendar changeDate={setStartDate}/>
                <Calendar changeDate={setEndDate}/>
                    <Button onClick={() => handler(new Date(startDate).setHours(0, 0, 0, 0), new Date(endDate).setHours(0, 0, 0, 0))}>Применить</Button>
                </div>
                <div className="">
                    <div className="">
                        <span>Выручка</span>
                        <span>{data?.gain}</span>
                    </div>
                     <div className="">
                        <span>Количество заказов</span>
                        <span>{data?.countOfOrders}</span>
                    </div>
                     <div className="">
                        <span>Средний чек</span>
                        <span>{data?.averageCheck}</span>
                    </div>
                    {
                        data &&  data?.stat.map((item:any) =>
                            <div className=""onClick={()=>{item?.id && setCatId(item?.id) }}>
                                <span>{item?.title}</span>
                                <span>{item?.count}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </MainLayout>
    );
});
export default StatisticsPage;
