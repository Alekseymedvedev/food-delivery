import React, { ChangeEvent, FC, memo } from "react";
import classes from "./textField.module.scss";
import imgBg from "../images/product-settings-bg.png";

interface IType {
  type?: string;
  label?: string;
  value?: any;
  onChange?: (val: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeFile?: (val: any) => void;
  description?: boolean;
  error?: boolean;
}

export const TextField: FC<IType> = memo(
  ({ type, label, value, onChange, onChangeFile,description, error }) => {
    return (
      <>
        {type === "file" ? (
          <label className={classes.labelFile}>
            <span className={classes.image}>
              <img src={imgBg} alt="подложка" />
            </span>
            <input
              className={classes.inputFile}
              type="file"
              onChange={(e) =>
                onChangeFile && onChangeFile(e?.target?.files?.[0])
              }
            />
            {error && <span className={"error"}>Файл не выбран</span>}
          </label>
        ) : (
          <label className={classes.label}>
            
            {
                description ?
                <textarea className={classes.textarea}  placeholder="Описание" value={value} onChange={onChange}></textarea>
                :
                <>
                <span className={classes.text}>{label}</span>
                <input type={type ? type : "text"} value={value} onChange={onChange}/>
                </>
                
            }
           
            {error && (
              <span className={"error"}>Поле обязательно к заполнению</span>
            )}
          </label>
        )}
      </>
    );
  }
);