import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Form.module.css";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9gyxf0p",
        "template_rtsseck",
        form.current,
        "6MHw-wwMzzPdUVVry"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Mensagem enviada");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
      <form className={styles.form_container} ref={form} onSubmit={sendEmail}>
        <label className={styles.text}>Nome</label>
        <input className={styles.input_container} type="text" name="user_name" placeholder="Digite seu nome"/>
        <label className={styles.text}>Email </label>
        <input className={styles.input_container} type="email" name="user_email" />
        <label className={styles.text}>Mensagem</label>
        <textarea name="message" />
        <input type="submit" value="Enviar" />
      </form>
  );
}

export default Form;
