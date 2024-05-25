import { useEffect } from "react";
import { Trivule } from 'trivule';

export function TrivuleProvider({ children }) {
     useEffect(() => {
            const tr = new Trivule();
            tr.init();
    }, []);

    return <>{children}</>;
}

