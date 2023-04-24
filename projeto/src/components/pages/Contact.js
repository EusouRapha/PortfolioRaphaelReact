import Form from "../layout/Form";
import Social from "../layout/Social";
import styles from "./Contact.module.css"


function Contact() {

  return (
    <section className={styles.contact_container}>
        <Social></Social>
        <Form></Form>

    </section>
  );
}

export default Contact;
