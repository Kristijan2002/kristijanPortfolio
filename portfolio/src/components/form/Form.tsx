import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from "./form.module.css";

const Form: React.FC = () => {
  const formRef: any = useRef();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
        .sendForm('service_bq1h1wh', 'template_mn6vdep', formRef.current, {
            publicKey: 'tYe3z5-0C1CmzMuFW',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                setEmail('');
                setMessage('');
            },
            (error: any) => {
                console.log('FAILED...', error.text);
            },
        );
};

  return (
    <form ref={formRef} onSubmit={sendEmail} className={style.form}>
        <h3>Contact</h3>
        <h4>Let’s have a talk ?</h4>
        <h5>Say Hello</h5>
        <input type="email" name="user_email" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" name="message" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button type='submit'>Send <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M29 3L3 15L15 17.5M29 3L19 29L15 17.5M29 3L15 17.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
    </form>
    )
};

export default Form; 