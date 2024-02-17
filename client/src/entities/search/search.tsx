import React, {FC, memo, useState} from "react";
import classes from './search.module.scss'
import {SearchIcon} from "../../shared/images/icons/searchIcon";
import {useSearchQuery} from "../../store/API/searchApi";
import {NavLink} from "react-router-dom";


interface IType {
    children?: React.ReactNode
}

export const Search: FC<IType> = memo(({children}) => {
    const [query, setQuery] = useState('')
    const {data, error, isLoading} = useSearchQuery(`/?search=${query}`,{skip:!query})
    console.log(data)
    return (
        <div className={classes.search}>
            <label className={classes.label}>
                <input
                    className={classes.input} type="search"
                    placeholder={'Поиск'}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}/>
                <NavLink className={classes.icon} to={`/search/?title=${query}`}>
                    <SearchIcon/>
                </NavLink>
            </label>

            <div className={classes.box}>
                {
                    !query &&
                    <>
                        {
                            data?.length ?
                                data?.map(item =>
                                    <div className={classes.box}>
                                        <img src={item.image} alt=""/>
                                    </div>
                                )
                                :
                                <div className={classes.текст}>Ничего не найдено</div>
                        }
                    </>
                }
            </div>
        </div>
    )
}) 
