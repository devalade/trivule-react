import React from "react";

type Props = {name: string};
export const ErrorMessage = React.forwardRef<HTMLLabelElement, Props>(({name}, ref) =>   {
    return <small  data-tr-feedback={name} ref={ref} className="text-red-400 text-xs"></small>
});