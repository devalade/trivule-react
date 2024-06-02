import React, { forwardRef } from 'react';


type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = forwardRef<HTMLButtonElement, Props>(
    (props, ref) => {
        const { className, ...otherProps } = props;

        return (
            <button
                className=" bg-blue-500 text-white px-4 py-2 rounded disabled:cursor-none disabled:bg-blue-50/30"
                ref={ref}
                {...otherProps}
            />
        );
    }
);