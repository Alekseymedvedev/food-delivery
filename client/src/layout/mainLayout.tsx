import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import {ArrowIconBack} from "../shared/images/icons/arrowIconBack";
import {Menu} from "../entities/menu/menu";
import {Search} from "../entities/search/search";

interface IType {
    children?: React.ReactNode;
    heading?: string;
    homePage?: boolean;
    textCenter?: boolean;
    isSearch?: boolean;
}

export const MainLayout: FC<IType> = ({
                                          children,
                                          heading,
                                          homePage,
                                          textCenter,
                                          isSearch,
                                      }) => {
    const navigate = useNavigate();
    return (
        <div className="container">
                <h1 className={textCenter ? "h1 textCenter" : "h1"}>
                    {!homePage &&
                        <span className={"back"} onClick={() => navigate(-1)}>
                    <ArrowIconBack/>
                  </span>
                    }
                    <span>{heading}</span>
                </h1>
                {isSearch && <Search/>}
                {children}
            <Menu/>
            <div className="menuBg"></div>
        </div>
    );
};
