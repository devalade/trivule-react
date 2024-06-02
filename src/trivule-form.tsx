import { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
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
    trivuleForm.bind("form");
  }, [trivuleForm]);

  return trivuleForm;
}

// The TrivuleFormComponent component
/**
 *
 * @param children {JSX.Element}
 * @param onSubmit {any}
 * @param trFormConfig {TrivuleForm}
 * @param aftertBinding {Function}
 * @return {JSX.Element}
 */
function TrForm({ children, onSubmit, trFormConfig, aftertBinding }) {
  const form = useTrivuleForm(trFormConfig);
  form.afterBinding(aftertBinding);
  const handleSubmit = (e) => {
    // Prevent the default form submission if the form is valid
    if (form.valid) {
      e.preventDefault();
      // Call the onSubmit callback provided by the parent component
      if (onSubmit) {
        onSubmit(form);
      }
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default TrForm;
