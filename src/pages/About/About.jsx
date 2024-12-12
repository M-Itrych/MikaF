import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./About.css";

const About = () => {
  return (
    <>
      <NavBar />
      <section className="about-wrapper">
        <div className="about-card">
          <h2>Mi-Ka w Pigułce</h2>
          <p>
            Witaj w świecie Mi-Ka, dynamicznej firmie działającej na rynku od
            2008 roku.
            <br />
            <br />
            Jesteśmy wiodącą hurtownią hydrauliczną, specjalizującą się w
            dostarczaniu wysokiej jakości produktów i kompleksowych rozwiązań
            dla branży budowlanej. Nasz zespół doświadczonych specjalistów
            oferuje nie tylko szeroki wybór produktów hydraulicznych najwyższej
            jakości, ale także kompleksowe usługi projektowe i nadzorujące
            budowy.
            <br />
            <br />
            Dzięki naszej ekspertyzie i pasji do doskonałości, zapewniamy naszym
            klientom kompleksowe wsparcie na każdym etapie projektu budowlanego.
            Od projektowania po realizację, nasza firma jest gotowa sprostać
            nawet najbardziej wymagającym wyzwaniom.
            <br />
            <br />
            Dążymy do zapewnienia nie tylko doskonałej jakości naszych
            produktów, ale także profesjonalnego doradztwa i wsparcia
            technicznego, aby zapewnić sukces każdemu projektowi. Mi-Ka to nie
            tylko firma, to partner, na którym możesz polegać.
            <br />
            <br />
            Budujemy trwałe relacje z naszymi klientami, oparte na wzajemnym
            zaufaniu i zrozumieniu ich potrzeb.
            <br />
            <br />
            Dzięki naszej pasji do doskonałości i nieustannemu dążeniu do
            doskonałości, jesteśmy gotowi wspierać Cię w każdym projekcie
            budowlanym. Dołącz do grona naszych zadowolonych klientów i odkryj,
            dlaczego Mi-Ka to wybór numer jeden dla Twoich potrzeb
            hydraulicznych i budowlanych.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
