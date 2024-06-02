import React from "react";

type  Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className="flex h-10 w-full rounded-md border border-slate-950 bg-sky-50 px-3 py-2 text-sm ring-offset-sky-600 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                ref={ref}
                {...props}
            />
        )
    }
)