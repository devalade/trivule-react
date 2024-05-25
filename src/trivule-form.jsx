import '@picocss/pico'
import {useEffect, useRef, useState} from "react";
import { TrivuleForm } from "trivule";

/**
 *
 * @param props {{selector: string | HTMLFormElement; config: { realTime: boolean }  }}
 * @return {TrivuleForm}
 */
function useTrivuleForm(props) {
    const  { config = false, selector } = props;
    const [tr, setTr] = useState()

    useEffect(() => {
        if (window !== undefined) {
             setTr(() => new TrivuleForm(selector, {
                realTime: config.realTime,
            }));
        }
    }, []);

    return tr;
}

function TrivuleFromPage() {
    const ref = useRef<HTMLFormElement>(null);

    const form = useTrivuleForm({
        selector: '#myForm',
        config: { realTime: true },
    });

    function onSubmit(e) {
        e.preventDefault();
        console.log({ e });
    }

    return (
        <>
            <form onSubmit={onSubmit} id="myForm" className="form container-fluid">
                <fieldset>
                    <label className="label">Phone</label>
                    <input type="text"  name="phone" />
                    <small id="invalid-helper" data-tr-feedback="phone"></small>
                </fieldset>
                <fieldset>
                    <label className="label">Date</label>
                    <input
                        type="date"
                        data-tr-rules="required|date|after:now"
                        name="date"
                    />
                    <div data-tr-feedback="date"></div>
                </fieldset>
                <fieldset>
                    <label className="label">File</label>
                    <input
                        type="file"
                        data-tr-rules="required|file|maxFileSize:1MB"
                        name="file"
                    />
                    <div data-tr-feedback="file"></div>
                </fieldset>
                <p><button type="submit" data-tr-submit>Submit</button></p>
            </form>
        </>
    )
}

export default TrivuleFromPage
