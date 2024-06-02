import TrForm from "./trivule-form";
function ContactForm() {
  // This callback will be executed as soon as the form is ready.
  const afterFormBound = (trivuleForm) => {
    trivuleForm.make({
      name: {
        rules: "required|between:2,80|only:string",
      },
      email: {
        rules: "required|email",
      },
      message: {
        rules: "required|between:2,200|only:string",
      },
    });

    //Modifies e-mail validation, and forces to accept only gmail addresses
    const email = trivuleForm.get("email");
    if (email) {
      email.appendRule({
        rule: "endWith:@gmail.com",
        message: "Only gmail addresses are accepted",
      });
    }
  };
  return (
    <TrForm aftertBinding={afterFormBound}>
      <h1>Form validation with Trivule, React+Vite</h1>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <div className="alert alert-danger" role="alert">
              <div className="triangle"></div>
              <div data-tr-feedback="name"></div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" />
            <div className="alert alert-danger" role="alert">
              <div className="triangle"></div>
              <div data-tr-feedback="email"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Messages</label>
        <textarea
          id="message"
          className="form-control"
          name="message"
        ></textarea>
        <div className="alert alert-danger" role="alert">
          <div className="triangle"></div>
          <div data-tr-feedback="message"></div>
        </div>
      </div>
      <p>
        <button type="submit" value="Submit" data-tr-submit>
          Submit
        </button>
      </p>
    </TrForm>
  );
}
export default ContactForm;
