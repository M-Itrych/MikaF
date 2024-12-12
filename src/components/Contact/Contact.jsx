import { useState } from "react";
import config from "../../config.json";
import axios from "axios";

const Contact = ({ bg = false }) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const [showError, setShowError] = useState();
  const [showComplete, setShowComplete] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = document.getElementById("email-address").value;
    const phone_number = document.getElementById("phone-number").value;
    const text = document.getElementById("text").value;

    if (!email || !phone_number || !text) {
      return setShowError("Wypełnij wszystkie pola");
    }
    if (!checked) {
      return setShowError("Zaakceptuj zgodę na przetwarzanie danych");
    }

    try {
      const response = await axios.post(
        `${config.apiUrl}/api/send_email`,
        {
          email: email,
          phone: phone_number,
          text: text,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setShowComplete("Wiadomość wysłana!")
      }
    } catch (error) {
      setShowError("Wystąpił błąd po stronie serwera!")
    }
  };
  return (
    <section
      className="contact-wrapper"
      style={{ backgroundColor: bg && "#FFF" }}
    >
      <div className="contact-content">
        <div className="contact-form">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.264719477492!2d18.16196659434033!3d54.60972930901965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdb978e9286bef%3A0x49fe591ab4534e76!2sMI-KA%20sp.%20z%20o.o.!5e1!3m2!1spl!2spl!4v1734015309349!5m2!1spl!2spl"
              width="600"
              height="450"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/*<div className="contact-form">*/}
        {/*  <h3>Napisz do nas</h3>*/}
        {/*  <p>*/}
        {/*    Lorem ipsum dolor sit amet consectetur. Turpis tellus gravida*/}
        {/*    habitasse velit mi vitae.{" "}*/}
        {/*  </p>*/}
        {/*  {showError && <p className="contact-error">{showError}</p>}*/}
        {/*  {showComplete && <p className="contact-complete">Wiadomość wysłana poprawnie</p>}*/}
        {/*  <form onSubmit={handleSubmit}>*/}
        {/*    <div className="contact-input">*/}
        {/*      <svg*/}
        {/*        width="18"*/}
        {/*        height="18"*/}
        {/*        viewBox="0 0 18 19"*/}
        {/*        fill="none"*/}
        {/*        xmlns="http://www.w3.org/2000/svg"*/}
        {/*        className="contact-input-icon"*/}
        {/*      >*/}
        {/*        <path*/}
        {/*          fill-rule="evenodd"*/}
        {/*          clip-rule="evenodd"*/}
        {/*          d="M3.34835 12.5427C4.05161 11.8394 5.00544 11.4443 6 11.4443H12C12.9946 11.4443 13.9484 11.8394 14.6517 12.5427C15.3549 13.2459 15.75 14.1998 15.75 15.1943V16.6943C15.75 17.1085 15.4142 17.4443 15 17.4443C14.5858 17.4443 14.25 17.1085 14.25 16.6943V15.1943C14.25 14.5976 14.0129 14.0253 13.591 13.6033C13.169 13.1814 12.5967 12.9443 12 12.9443H6C5.40326 12.9443 4.83097 13.1814 4.40901 13.6033C3.98705 14.0253 3.75 14.5976 3.75 15.1943V16.6943C3.75 17.1085 3.41421 17.4443 3 17.4443C2.58579 17.4443 2.25 17.1085 2.25 16.6943V15.1943C2.25 14.1998 2.64509 13.2459 3.34835 12.5427Z"*/}
        {/*          fill="#F97316"*/}
        {/*        />*/}
        {/*        <path*/}
        {/*          fill-rule="evenodd"*/}
        {/*          clip-rule="evenodd"*/}
        {/*          d="M9 3.94434C7.75736 3.94434 6.75 4.9517 6.75 6.19434C6.75 7.43698 7.75736 8.44434 9 8.44434C10.2426 8.44434 11.25 7.43698 11.25 6.19434C11.25 4.9517 10.2426 3.94434 9 3.94434ZM5.25 6.19434C5.25 4.12327 6.92893 2.44434 9 2.44434C11.0711 2.44434 12.75 4.12327 12.75 6.19434C12.75 8.2654 11.0711 9.94434 9 9.94434C6.92893 9.94434 5.25 8.2654 5.25 6.19434Z"*/}
        {/*          fill="#F97316"*/}
        {/*        />*/}
        {/*      </svg>*/}
        {/*      <input*/}
        {/*        type="email"*/}
        {/*        placeholder="Adres email"*/}
        {/*        id="email-address"*/}
        {/*        pattern="^(?!$)[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    <div className="contact-input">*/}
        {/*      <svg*/}
        {/*        width="18"*/}
        {/*        height="19"*/}
        {/*        viewBox="0 0 18 19"*/}
        {/*        fill="none"*/}
        {/*        xmlns="http://www.w3.org/2000/svg"*/}
        {/*        className="contact-input-icon"*/}
        {/*      >*/}
        {/*        <g clip-path="url(#clip0_1204_3089)">*/}
        {/*          <path*/}
        {/*            fill-rule="evenodd"*/}
        {/*            clip-rule="evenodd"*/}
        {/*            d="M5.83624 3.3757C5.69825 3.25703 5.52182 3.19258 5.33983 3.19437C5.33737 3.1944 5.33491 3.19441 5.33245 3.19441H3.08286C2.97884 3.19455 2.87598 3.21632 2.78083 3.25835C2.68558 3.30042 2.60014 3.36187 2.52994 3.43877C2.45975 3.51567 2.40633 3.60634 2.37309 3.70502C2.34039 3.80213 2.32793 3.9049 2.33648 4.00698C2.57104 6.20565 3.31968 8.31831 4.52191 10.1741C4.5231 10.176 4.52428 10.1778 4.52546 10.1797C5.61791 11.8989 7.07549 13.3564 8.79469 14.4489C8.79589 14.4497 8.79709 14.4504 8.79828 14.4512L8.80053 14.4526C10.6477 15.6505 12.7497 16.3989 14.9382 16.6379C15.0403 16.6464 15.1431 16.6338 15.2402 16.601C15.3392 16.5675 15.43 16.5138 15.507 16.4432C15.5839 16.3725 15.6453 16.2866 15.6871 16.191C15.729 16.0953 15.7504 15.9919 15.75 15.8875C15.75 15.8864 15.7499 15.8854 15.7499 15.8844V13.6344C15.7499 13.6282 15.75 13.622 15.7502 13.6158C15.7547 13.4319 15.6916 13.2527 15.5726 13.1124C15.4543 12.9727 15.289 12.8812 15.1079 12.8549C14.3331 12.7525 13.5724 12.5628 12.8402 12.2896L12.8386 12.2889C12.7043 12.2385 12.5585 12.2276 12.4182 12.2575C12.2786 12.2873 12.1503 12.3563 12.0485 12.4565C12.0481 12.4569 12.0477 12.4573 12.0473 12.4577L11.0978 13.4072C10.859 13.646 10.4902 13.6958 10.1967 13.5289C8.20172 12.3945 6.54987 10.7426 5.41548 8.74763C5.24859 8.45414 5.29839 8.08531 5.53712 7.84658L6.4879 6.8958C6.58806 6.79404 6.65709 6.66579 6.68688 6.52613C6.71678 6.3859 6.70586 6.24003 6.65541 6.1058L6.65478 6.10411C6.38157 5.37195 6.19192 4.61129 6.08943 3.83658C6.06343 3.65746 5.97352 3.49375 5.83624 3.3757ZM5.32913 1.69441C5.87366 1.69003 6.40136 1.88329 6.8143 2.23842C7.22827 2.59443 7.49866 3.08882 7.57507 3.62945C7.57539 3.63174 7.57571 3.63404 7.57601 3.63634C7.66355 4.30009 7.82588 4.95181 8.05989 5.57908C8.21091 5.98145 8.24353 6.41866 8.15388 6.839C8.06416 7.25971 7.85571 7.64589 7.55324 7.95176C7.55226 7.95276 7.55127 7.95375 7.55028 7.95474L7.01246 8.49256C7.89435 9.87604 9.06832 11.05 10.4518 11.9319L10.9896 11.3941C10.9906 11.3931 10.9916 11.3921 10.9926 11.3911C11.2985 11.0886 11.6846 10.8802 12.1054 10.7905C12.5258 10.7008 12.963 10.7335 13.3654 10.8845C13.9927 11.1185 14.6443 11.2808 15.308 11.3683C15.3103 11.3686 15.3125 11.3689 15.3147 11.3693C15.8612 11.4464 16.3603 11.7216 16.7171 12.1427C17.0716 12.5612 17.2611 13.0946 17.25 13.6428V15.8834C17.2509 16.196 17.1868 16.5054 17.0615 16.7919C16.936 17.079 16.7519 17.3367 16.521 17.5485C16.2902 17.7603 16.0176 17.9215 15.7208 18.0219C15.424 18.1223 15.1095 18.1596 14.7974 18.1314C14.7929 18.131 14.7884 18.1305 14.7839 18.13C12.3606 17.8667 10.0327 17.0389 7.98727 15.7131C6.08441 14.5033 4.47094 12.8898 3.2612 10.9869C1.93068 8.93212 1.10265 6.5929 0.844143 4.15861C0.84373 4.15471 0.843346 4.15081 0.842994 4.14691C0.81488 3.83581 0.851853 3.52226 0.951556 3.22624C1.05126 2.93021 1.21151 2.65818 1.42211 2.42748C1.6327 2.19678 1.88902 2.01246 2.17476 1.88625C2.46049 1.76004 2.76938 1.6947 3.08174 1.69441L5.32913 1.69441Z"*/}
        {/*            fill="#F97316"*/}
        {/*          />*/}
        {/*        </g>*/}
        {/*        <defs>*/}
        {/*          <clipPath id="clip0_1204_3089">*/}
        {/*            <rect*/}
        {/*              width="18"*/}
        {/*              height="18"*/}
        {/*              fill="white"*/}
        {/*              transform="translate(0 0.944336)"*/}
        {/*            />*/}
        {/*          </clipPath>*/}
        {/*        </defs>*/}
        {/*      </svg>*/}
        {/*      <input*/}
        {/*        type="tel"*/}
        {/*        placeholder="Numer Telefonu"*/}
        {/*        id="phone-number"*/}
        {/*        pattern="[0-9]{3}[0-9]{3}[0-9]{3}"*/}
        {/*      />*/}
        {/*    </div>*/}

        {/*    <textarea*/}
        {/*      id="text"*/}
        {/*      name="text"*/}
        {/*      rows="10"*/}
        {/*      cols="50"*/}
        {/*      placeholder="Treść wiadomości"*/}
        {/*      style={{ resize: "none" }}*/}
        {/*    ></textarea>*/}
        {/*    <div className="contact-check">*/}
        {/*      {checked && (*/}
        {/*        <svg*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*          width="24"*/}
        {/*          height="25"*/}
        {/*          viewBox="0 0 24 25"*/}
        {/*          fill="none"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*            fill-rule="evenodd"*/}
        {/*            clip-rule="evenodd"*/}
        {/*            d="M20.7071 6.23723C21.0976 6.62775 21.0976 7.26092 20.7071 7.65144L9.70711 18.6514C9.31658 19.042 8.68342 19.042 8.29289 18.6514L3.29289 13.6514C2.90237 13.2609 2.90237 12.6278 3.29289 12.2372C3.68342 11.8467 4.31658 11.8467 4.70711 12.2372L9 16.5301L19.2929 6.23723C19.6834 5.8467 20.3166 5.8467 20.7071 6.23723Z"*/}
        {/*            fill="white"*/}
        {/*          />*/}
        {/*        </svg>*/}
        {/*      )}*/}
        {/*      <input*/}
        {/*        type="checkbox"*/}
        {/*        name="agree"*/}
        {/*        id="agree"*/}
        {/*        className={*/}
        {/*          checked ? "contact-input-btn" : "contact-input-btn checked"*/}
        {/*        }*/}
        {/*        onClick={handleClick}*/}
        {/*      />*/}
        {/*      <p>*/}
        {/*        Wyrażam zgodę na przetwarzanie moich danych osobowych przez*/}
        {/*        Mi-Ka sp.z.o.o w celu uzyskania odpowiedzi na zapytanie*/}
        {/*        przesłane za pośrednictwem formularza kontaktowego, w zgodzie i*/}
        {/*        według zasad określonych w Polityce prywatności. Wiem, że w*/}
        {/*        każdej chwili mogę cofnąć swoją zgodę.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <button type="submit" className="contact-submit">*/}
        {/*      Wyślij wiadomość*/}
        {/*    </button>*/}
        {/*  </form>*/}
        {/*</div>*/}
        <div className="contact-right">
          <div className="contact-right-text">
            <h3>Odwiedz nas</h3>
            <div className="contact-right-info">
              <div className="contact-right-location">
                <h4>Mi-Ka sp. z.o.o</h4>
                <p>84-241 Gościcino, Kopernika 23</p>
              </div>
              <div className="contact-right-more">
                <p>NIP: 588 250 76 88</p>
                <p>mail: administracja@mi-ka.pl</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
