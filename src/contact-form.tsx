import {Input} from "./components/input.tsx";
import {Label} from "./components/label.tsx";
import {ErrorMessage} from "./components/error-message.tsx";
import {Button} from "./components/button.tsx";
import {Textarea} from "./components/textarea.tsx";
import {useTrivuleForm} from "./hooks/use-trivule-form.tsx";
import {FormEvent} from "react";


const schema = {
  name: {
    rules: "required|between:2,80|only:string",
  },
  email: {
    rules: "required|email",
  },
  message: {
    rules: "required|between:2,200|only:string",
  },
};

function ContactForm() {

  const form = useTrivuleForm({
    schema,
    appendRules: {
      email: {
        rule: "endWith:@gmail.com",
        message: "Only gmail addresses are accepted"
      }
    }
  });
   function  onSubmit(e: FormEvent<HTMLFormElement>){
      if (form.valid) {
        e.preventDefault();
        // Send data to the server
      }
   }

  return (
      <div className="h-screen flex items-center justify-center bg-slate-900">

        <form onSubmit={onSubmit} >
          <h1 className="text-2xl font-semibold text-sky-100">Trivule validation</h1>
          <div className="w-96 space-y-2">
            <div className="sapce-y-1">
              <Label name="name">Name</Label>
              <Input name="name"/>
              <ErrorMessage name="name"/>
            </div>
            <div className="sapce-y-1">
              <Label name="email">Email</Label>
              <Input name="email" type="email"/>
              <ErrorMessage name="email"/>
            </div>
            <div className="sapce-y-1">
              <Label name="message">Message</Label>
              <Textarea name="message" placeholder="Type your message here." />
              <ErrorMessage name="message"/>
            </div>
            <Button type="submit">Submit</Button>
          </div>
        </form>

      </div>
  );
}

export default ContactForm;
