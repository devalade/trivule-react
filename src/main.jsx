import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css' 
import ContactForm from './contact-form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<TrivuleProvider>*/}
      <ContactForm />
      {/*<App />*/}
    {/*</TrivuleProvider>*/}
  </React.StrictMode>,
)
