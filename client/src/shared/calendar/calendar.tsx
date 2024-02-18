
import React, {FC, memo, useState} from "react";
import classes from './calendar.module.scss'
import {Select} from "../select/select";


interface IType{
    children?: React.ReactNode,
    handleYearChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined,
    handleMonthChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined,
    handleDayChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

export const Calendar: FC<IType> = memo(({ children, handleYearChange, handleMonthChange, handleDayChange }) => {
    const [selectedMonth,setSelectedMonth] = useState(1)
    const [selectedYear,setSelectedYear] = useState(2024)
    const countDay = new Date(selectedYear, selectedMonth +1, 0).getDate()
    console.log(countDay)
    return (
      <div className={classes.calendar}>
          <Select
              dataOption={Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)}
              onChange={(e)=>setSelectedYear(e.target.value)}/>
        <select className={classes.calendarDropdown} onChange={handleYearChange}>
          {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <select value={selectedMonth} onChange={(e)=>setSelectedMonth(+e.target.value)}>
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            .map((month, index) => (
              <option key={month} value={index}>{month}</option>
            ))}
        </select>
        <select value={selectedYear} onChange={(e)=>setSelectedYear(+e.target.value)}>
          {Array.from({ length: countDay }, (_, i) => i + 1).map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>
    );
}) 
