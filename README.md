# Trivule Integration in React + Vite

This project demonstrates a minimal integration of [Trivule](https://github.com/trivule/trivule) and Trivule form in a React application using Vite.
> Note: Trivule v1.3.0 

## Code Overview

### `useTrivuleForm`

This custom hook creates and manages a Trivule form instance.

```javascript
import { useEffect, useMemo } from "react";
import { TrivuleForm } from "trivule";

// Creating a Trivule form instance
function useTrivuleForm(props) {
  const trivuleForm = useMemo(() => {
    // Create a new instance of TrivuleForm with the provided configuration
    const form = new TrivuleForm(props);
    return form;
  }, [props]);

  useEffect(() => {
    // Bind the Trivule form to its HTML element as soon as the element is ready
    //Although this method can be called several times, 
    //once Trivule encounters a valid html element,
    // it does not redo the binding.
    trivuleForm.bind("form");
  }, [trivuleForm]);

  return trivuleForm;
}

export default useTrivuleForm;
```

### `TrForm`

This component uses `useTrivuleForm` to create a Trivule form instance and handle form submission.

```javascript
import { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { TrivuleForm } from "trivule";
import useTrivuleForm from "./useTrivuleForm";

// The TrivuleFormComponent component
function TrForm({ children, onSubmit, trFormConfig, aftertBinding }) {
  const form = useTrivuleForm(trFormConfig);
  Registers a callback to be executed when the html element is bound to Trivule. For example, field validation
form.afterBinding(aftertBinding);
  const handleSubmit = (e) => {
    // Prevent the default form submission if the form is valid
    if (!form.valid) {
      e.preventDefault();
      // Call the onSubmit callback provided by the parent component
      if (onSubmit) {
        onSubmit(form);
      }
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

// Define the prop types for TrivuleFormComponent
TrForm.propTypes = {
  children: PropTypes.node, // The child elements to be rendered inside the form
  onSubmit: PropTypes.func, // The callback function to handle form submission
  trFormConfig: PropTypes.any, // The configuration object for the Trivule form
  aftertBinding: PropTypes.func, // The callback function to be executed after the form is bound
};

export default TrForm;
```

### `ContactForm`

This component demonstrates how to use `TrForm` for form validation with Trivule.

```javascript
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
        realTime:false
      },
    });

    // Modify email validation to accept only gmail addresses
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
        <textarea id="message" className="form-control" name="message"></textarea>
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
```

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000` to see the form in action.
