import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Form.module.css";

function Form() {
  const form = useRef();

  function isValiEmail(email) {
    const emailValue = email.trim();
    let regEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regEmail.test(emailValue);
  }
  function validateInputs(username, email, message) {
    const usernameValue = username.trim();
    const emailValue = email.trim();
    const messageValue = message.trim();

    return !!usernameValue && !!emailValue && !!messageValue;
    //!! vai verificar se há valor dentro da string
  }

  function validateForm(e) {
    const username = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    if (!validateInputs(username, email, message)) {
      alert("Preencha todos os campos");
    } else if (!isValiEmail(email)) {
      alert("Preencha o campo de email corretamente");
    } else {
      sendEmail(e);
      alert("Email Enviado");
    }
  }

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
    <form
      noValidate
      id="form"
      className={styles.form_container}
      ref={form}
      onSubmit={validateForm}
    >
      <p>Fale comigo</p>
      <label className={styles.text}>Nome</label>
      <input
        className={styles.input_container}
        type="text"
        name="user_name"
        placeholder="Digite seu nome"
      />
      <label className={styles.text}>E-mail </label>
      <input
        className={styles.input_container}
        type="email"
        name="user_email"
        placeholder="Digite seu e-mail"
      />
      <label className={styles.text}>Mensagem</label>
      <textarea className={styles.message_container} name="message" />
      <input className={styles.send} type="submit" value="Enviar" />
    </form>
  );
}

export default Form;
