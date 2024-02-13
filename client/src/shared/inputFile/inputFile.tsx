
import React,{FC,memo}  from "react";
import classes from './inputFile.module.scss'


interface IType{
  children?: React.ReactNode
}

export const InputFile: FC<IType> = memo(({children}) => {
    return (
        <>
            {/*<label className={classes.label}>*/}
            {/*    <span>{label}</span>*/}
            {/*    <textField type="file" onChange={(e) => setFile(e?.target?.files?.[0])}/>*/}
            {/*</label>*/}
        </>

    )
}) 
