import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from "../shared/button/button";


interface IType {
    children?: React.ReactNode
    heading?: string
}

export const MainLayout: FC<IType> = ({children,heading}) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className={'h1'}>
                <Button onClick={() => navigate(-1)}>go back</Button>
                {heading}
            </h1>
            {children}
        </div>
    );
};

