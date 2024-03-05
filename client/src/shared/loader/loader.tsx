
import React,{FC,memo}  from "react";
import classes from './loader.module.scss'
import ContentLoader from "react-content-loader";


interface IType{
    height?: number
}

export const Loader: FC<IType> = memo(({height}) => {
    return (
        <ContentLoader className={classes.loader} height={height}  width={`100%`}>
            <rect x="0" y="0" rx="2" ry="2" width={`100%`} height={`100%`}/>
        </ContentLoader>
    )
}) 
