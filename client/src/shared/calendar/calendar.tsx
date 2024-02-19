import React, {FC, memo, useEffect, useState} from "react";
import classes from './calendar.module.scss'
import {Select} from "../select/select";


interface IType {
    children?: React.ReactNode,
    handleYearChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined,
    handleMonthChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined,
    handleDayChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

export const Calendar: FC<IType> = memo(({children, handleYearChange, handleMonthChange, handleDayChange}) => {
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedDay, setSelectedDay] = useState('01')
    const [selectedMonth, setSelectedMonth] = useState(0)
    const [selectedYear, setSelectedYear] = useState(2024)
    const [countDay, setCountDay] = useState(31)
    const [active, setActive] = useState(false)
    // const countDay = new Date(selectedYear, selectedMonth +1, 0).getDate()
    console.log(selectedDay)
    useEffect(() => {
        setCountDay(new Date(selectedYear, selectedMonth + 1, 0).getDate())
        setSelectedDate(`${selectedDay}.${selectedMonth}.${selectedYear}`)
    }, [selectedDay, selectedMonth, selectedYear]);
    const handlerYear = (e: any) => {
        setSelectedYear(e.target.value)
    }
    const handlerMonth = (e: any) => {
        setSelectedMonth(e.target.value)
    }
    const handlerDay = (day: any) => {
        if (day < 10) {
            setSelectedDay(`0${day}`)
        } else {
            setSelectedDay(day)
        }
    }
    return (
        <div className={active ? `${classes.calendar} ${classes.active}`:classes.calendar}>
            <div className={classes.overlay} onClick={() => setActive(false)}></div>
            <div className={classes.selectedDate} onClick={() => setActive(true)}>{selectedDate}</div>
            {
                active &&
                <div className={classes.item}>
                    <div className={classes.box}>
                        <Select
                            dataOption={Array.from({length: 100}, (_, i) => new Date().getFullYear() - i)}
                            onChange={handlerYear}/>
                        <Select
                            dataOption={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
                            onChange={handlerMonth}/>
                    </div>

                    <div className={classes.days}>
                        {
                            Array.from({length: countDay}, (_, i) => i + 1).map(day =>
                                <div
                                    key={day}
                                    className={
                                        day === +selectedDay ?
                                            `${classes.dayItem} ${classes.active}`
                                            : classes.dayItem}
                                    onClick={() => handlerDay(day)}>{day}</div>
                            )
                        }
                    </div>
                </div>
            }

        </div>
    );
}) 
