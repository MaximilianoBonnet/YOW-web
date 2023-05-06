/*import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_mx4v18q",
      "template_rbl4qhp",
      e.target,
      "hgYLz7PqARRZcn6dq"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("¡El correo se ha enviado correctamente!");
      },
      (error) => {
        console.log(error.text);
        alert("Ha ocurrido un error al enviar el correo. Intente de nuevo.");
      }
    );

  e.target.reset();
}

function Inscripciones() {
  const contact = {
    title: "Sigamos en contacto",
    info: [
      {
        title: "Your Own Way",
        subtitle:
          "Mail, redes sociales o una consulta por nuestro formulario seran bienvenidos",
        address: {
          icon: <FaMapMarkerAlt />,
          name: "Emilio Lamarca 2300 (esquina Arregui)",
        },
        phone: {
          icon: <FaPhoneAlt />,
          number: "+54 11 5858 8428",
        },
        email: {
          icon: <FaEnvelope />,
          address: "institutoyourownway@gmail.com",
        },
        link: "Ver en mapa",
      },
    ],
    form: {
      name: "Nombre y Apellido",
      email: "Email",
      message: "Mensaje",
      btnText: "Enviar",
    },
  };

  return (
    <section
      id="inscripciones"
      className="section  py-[88px] md:py-[110px]
    lg:pt[140px] lg:pb-[180px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <div className="flex-1 px-[30px]">
            <h2 className="h2 max-w-[490px]">{contact.title}</h2>

            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {contact.info.map((item, index) => {
                const { title, subtitle, address, phone, email, link } = item;
                return (
                  <div key={index}>
                    <div
                      data-aos="fade-in"
                      className="font-primary uppercase font-medium text-orange-400 text-xl mb-3"
                    >
                      {title}
                    </div>
                    <div
                      data-aos="fade-in"
                      delay="600"
                      className="mb-6 text-primary-600 leading-[187%] tracking-[0.02em] "
                    >
                      {subtitle}
                    </div>
                    <div
                      className="flex flex-col gap-y-3 mb-8"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <div className="flex items-center gap-[10px]">
                        <div className="text-primary-100">{address.icon}</div>
                        <div className="font-medium">{address.name}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div className="text-primary-100">{phone.icon}</div>
                        <div className="font-medium">{phone.number}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div className="text-primary-100">{email.icon}</div>
                        <div className="font-medium">{email.address}</div>
                      </div>
                      <a
                        className="font-medium border-b border-dark pb-[5px]"
                        href="https://www.google.com/maps/place/Emilio+Lamarca+2300,+Buenos+Aires/@-34.61094,-58.4953689,17z/data=!4m6!3m5!1s0x95bcc9d86fce786f:0x8234d43fd0e5b9b8!8m2!3d-34.61094!4d-58.4953689!16s%2Fg%2F11fcms9rsf"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 xl:pl-[40px] flex justify-center items-center px-3">
            <form
              className="flex flex-col gap-y-10 w-full"
              data-aos="zoom-in-left"
              onSubmit={sendEmail}
            >
              <input
                className="border b border-dark placeholder:text-orange-200
                italic tracking-[0.06em] outline-none pb-4 px-2"
                placeholder={contact.form.name}
                type="text"
              />
              <input
                className="border b border-dark placeholder:text-orange-200
                italic tracking-[0.06em] outline-none pb-4 px-2"
                placeholder={contact.form.email}
                type="text"
              />
              <textarea
                className="border b border-dark placeholder:text-orange-200
                italic tracking-[0.06em] outline-none pb-4 px-2"
                placeholder={contact.form.message}
                type="text"
              />
              <button className="btn btn-sm btn-primary self-start">
                {contact.form.btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inscripciones;
*/

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

function Inscripciones() {
  const [formData, setFormData] = useState({});

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mx4v18q",
        "template_rbl4qhp",
        e.target,
        "hgYLz7PqARRZcn6dq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("¡El correo se ha enviado correctamente!");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Ha ocurrido un error al enviar el correo. Intente de nuevo."
          );
        }
      );

    e.target.reset();
    setFormData({});
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const contact = {
    title: "Sigamos en contacto",
    info: [
      {
        title: "Your Own Way",
        subtitle:
          "Mail, redes sociales o una consulta por nuestro formulario serán bienvenidos",
        address: {
          icon: <FaMapMarkerAlt />,
          name: "Emilio Lamarca 2300 (esquina Arregui)",
        },
        phone: {
          icon: <FaPhoneAlt />,
          number: "+54 11 5858 8428",
        },
        email: {
          icon: <FaEnvelope />,
          address: "institutoyourownway@gmail.com",
        },
        link: "Ver en mapa",
      },
    ],
    form: {
      name: "Nombre y Apellido",
      email: "Email",
      message: "Mensaje",
      btnText: "Enviar",
    },
  };

  return (
    <section
      id="inscripciones"
      className="section  py-[88px] md:py-[110px]
    lg:pt[140px] lg:pb-[180px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <div className="flex-1 px-[30px]">
            <h2 className="h2 max-w-[490px]">{contact.title}</h2>

            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {contact.info.map((item, index) => {
                const { title, subtitle, address, phone, email, link } = item;
                return (
                  <div key={index}>
                    <div
                      data-aos="fade-in"
                      className="font-primary uppercase font-medium text-orange-400 text-xl mb-3"
                    >
                      {title}
                    </div>
                    <div
                      data-aos="fade-in"
                      delay="600"
                      className="mb-6 text-primary-600 leading-[187%] tracking-[0.02em] "
                    >
                      {subtitle}
                    </div>
                    <div
                      className="flex flex-col gap-y-3 mb-8"
                      data-aos="flip-left"
                      data-aos-easing="ease-outy"
                      data-aos-duration="1000"
                    >
                      {address && (
                        <div className="flex items-center text-primary-600 text-lg">
                          <div className="w-8 h-8 mr-3">{address.icon}</div>
                          <div>{address.name}</div>
                        </div>
                      )}
                      {phone && (
                        <div className="flex items-center text-primary-600 text-lg">
                          <div className="w-8 h-8 mr-3">{phone.icon}</div>
                          <div>{phone.number}</div>
                        </div>
                      )}
                      {email && (
                        <div className="flex items-center text-primary-600 text-lg">
                          <div className="w-8 h-8 mr-3">{email.icon}</div>
                          <div>{email.address}</div>
                        </div>
                      )}
                      {link && (
                        <a
                          href="#"
                          className="text-primary-600 text-lg hover:underline"
                        >
                          {link}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1">
            <div
              className="bg-primary-100 rounded-xl p-12"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-offset="100"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              <h3 className="font-primary uppercase font-bold text-2xl text-orange-400 mb-8">
                Formulario de contacto
              </h3>
              <form onSubmit={sendEmail}>
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder={contact.form.name}
                    required
                    className="w-full h-[50px] bg-transparent border-b border-primary-400 placeholder-primary-400 placeholder-opacity-50 focus:outline-none focus:border-primary-600 focus:placeholder-opacity-0"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder={contact.form.email}
                    required
                    className="w-full h-[50px] bg-transparent border-b border-primary-400 placeholder-primary-400 placeholder-opacity-50 focus:outline-none focus:border-primary-600 focus:placeholder-opacity-0"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-12">
                  <textarea
                    name="message"
                    placeholder={contact.form.message}
                    required
                    rows="4"
                    className="w-full bg-transparent border-b border-primary-400 placeholder-primary-400 placeholder-opacity-50 focus:outline-none focus:border-primary-600 focus:placeholder-opacity-0"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-primary-600 bg-transparent border border-primary-600 px-6 py-3 rounded-md uppercase font-medium tracking-[0.02em] hover:bg-primary-600 hover:text-white transition duration-300 ease-in-out"
                >
                  {contact.form.btnText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inscripciones;