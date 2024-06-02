import {PropsWithChildren, useEffect} from "react";
import { Trivule } from 'trivule';

export function TrivuleProvider({ children }: PropsWithChildren) {
     useEffect(() => {
            const tr = new Trivule();
            tr.init();
    }, []);

    return <>{children}</>;
}

