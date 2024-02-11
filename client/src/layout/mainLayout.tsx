import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../shared/button/button";
import { ArrowIconBack } from "../shared/images/icons/arrowIconBack";

interface IType {
  children?: React.ReactNode;
  heading?: string;
  homePage?: boolean;
  textCenter?: boolean;
}

export const MainLayout: FC<IType> = ({
  children,
  heading,
  homePage,
  textCenter,
}) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className={textCenter ? "h1 textCenter" : "h1"}>
        {!homePage && (
          <span className="back" onClick={() => navigate(-1)}>
            <ArrowIconBack />
          </span>
        )}
        <span>{heading}</span>
      </h1>
      {children}
    </div>
  );
};
