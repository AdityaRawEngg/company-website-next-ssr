import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import styles from "../styles/cs.module.css";

export default function CS({ data }) {
  return (
    <div>
      <Navigation styles={styles} navigationLinks={data[0].navigationLinks} />
      <Header header={data[0].header} styles={styles} />
      <Section section={data[0].section} styles={styles} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://blogs-json.herokuapp.com/cs");
  const data = await res.json();
  return { props: { ...data } };
}
