
import React,{FC,memo}  from "react";
import classes from './loader.module.scss'
import ContentLoader from "react-content-loader";


interface IType{
    height?: number
}

export const Loader: FC<IType> = memo(({height}) => {
    return (
        <ContentLoader height={height}  width={`100%`}>
            <rect x="0" y="15" rx="4" ry="4" width="350" height="25"/>
            <rect x="0" y="50" rx="2" ry="2" width="350" height="150"/>
        </ContentLoader>
    )
}) 
