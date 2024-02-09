import React, {FC} from 'react';


interface IType {
    children?: React.ReactNode
    heading?: string
}

export const MainLayout: FC<IType> = ({children,heading}) => {
    return (
        <div>
            <h1 className={'h1'}>{heading}</h1>
            {children}
        </div>
    );
};

