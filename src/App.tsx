import '@picocss/pico'
import {FormEvent} from "react";


function App() {
   
    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log({ e });
    }

  return (
    <>
        <form onSubmit={onSubmit} id="myForm" className="container-fluid">
            <fieldset>
                <label className="label">Phone</label>
                <input type="text" data-tr-rules="required|phone:FR" name="phone" />
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

export default App
