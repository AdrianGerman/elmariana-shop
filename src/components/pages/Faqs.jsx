import { useState } from "react"
import "./Faqs.css"

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  // manejo de abrir y cerrar secciones
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      <div className="faqs">
        <h2>Preguntas Frecuentes</h2>
        <div className="questions">
          {/* Pedidos */}
          <div className="accordion" onClick={() => toggleAccordion(0)}>
            <div className="main-grid">
              <div className="title-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.69502 0.6786C9.91338 0.601796 10.1516 0.603123 10.3691 0.682353L18.2151 3.54058C18.61 3.68445 18.8728 4.05988 18.8728 4.48018V14.4287C18.8728 14.8074 18.6588 15.1537 18.32 15.3231L10.4731 19.2465C10.196 19.385 9.87022 19.3873 9.59117 19.2526L1.45405 15.3244C1.10843 15.1576 0.888794 14.8076 0.888794 14.4239V4.48434C0.888794 4.05997 1.15665 3.68181 1.55699 3.541L9.69502 0.6786ZM6.07999 3.01017L2.5346 4.25719L10.149 7.63545L13.5692 6.118L6.07999 3.01017ZM6.78606 2.76183L14.1997 5.83828L17.5367 4.35774L10.0268 1.62195L6.78606 2.76183ZM1.88879 14.4239L1.88879 5.06467L9.64898 8.50762V18.1701L1.88879 14.4239ZM17.8728 14.4287L10.649 18.0405V8.50762L17.8728 5.30263V14.4287Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <h4>Pedidos</h4>
              </div>

              <svg
                aria-hidden="true"
                focusable="false"
                className={`icon ${activeIndex === 0 ? "rotate" : ""}`}
                viewBox="0 0 10 6"
                width="18"
                height="18"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            {activeIndex === 0 && (
              <div className="answer">
                <ul>
                  <li>
                    <strong>¿Es posible modificar mi pedido?</strong> <br />
                    Podrás cancelar, agregar o cambiar artículos en tu pedido,
                    siempre y cuando no se haya generado la guía de envió.Debes
                    escribir a <strong>shop@elmariana.shop</strong> o a través
                    de nuestro chat.
                    <br />
                    Envíanos tu número de orden, modelos y tallas que quieras
                    modificar o cancelar para que el proceso sea más rápido.
                  </li>
                  <br />
                  <li>
                    <strong>
                      No puse mis datos completos o me equivoqué en algún dato,
                      ¿Qué hago?
                    </strong>
                    <br />
                    Envíanos un email a <strong>shop@elmariana.shop</strong> con
                    tu número de pedido y tus datos completos para corregir la
                    información de tu pedido para que este pueda llegar bien a
                    tu domicilio. <br /> <br />
                    Nombre del destinatario: <br /> Calle: <br /> Número: <br />
                    Colonia: <br /> Código Postal: <br /> Delegación/Municipio:
                    <br /> Estado: <br />
                    Teléfono: <br /> <br />
                    ⚠️ Importante: No se permiten cambios de dirección de
                    entrega en compras pagadas con tarjeta de crédito, débito o
                    PayPal, sólo se podrán corregir algunos datos. Si pagaste tu
                    compra con Mercado Pago o Kueski sí podemos cambiar tu
                    dirección de entrega. Considera que si tu paquete ya cuenta
                    con una guía de envío, no será posible detener el proceso y
                    tendrás que esperar a recibirlo en tu domicilio.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Envíos */}
          <div className="accordion" onClick={() => toggleAccordion(1)}>
            <div className="main-grid">
              <div className="title-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 3.75156C0 3.47454 0.224196 3.24997 0.500755 3.24997H10.647C10.9235 3.24997 11.1477 3.47454 11.1477 3.75156V5.07505V5.63362V6.10938V13.6616C10.9427 14.0067 10.8813 14.1101 10.5516 14.6648L7.22339 14.6646V13.6614H10.1462V4.25316H1.00151V13.6614H2.6842V14.6646H0.500755C0.224196 14.6646 0 14.44 0 14.163V3.75156Z"></path>
                  <path d="M18.9985 8.08376L11.1477 6.10938V5.07505L19.6212 7.20603C19.8439 7.26203 20 7.46255 20 7.69253V14.1631C20 14.4401 19.7758 14.6647 19.4992 14.6647H17.3071V13.6615H18.9985V8.08376ZM11.1477 13.6616L13.3442 13.6615L13.3443 14.6647L10.5516 14.6648L11.1477 13.6616Z"></path>
                  <path d="M7.71269 14.1854C7.71269 15.6018 6.56643 16.75 5.15245 16.75C3.73847 16.75 2.59221 15.6018 2.59221 14.1854C2.59221 12.7691 3.73847 11.6209 5.15245 11.6209C6.56643 11.6209 7.71269 12.7691 7.71269 14.1854ZM5.15245 15.7468C6.01331 15.7468 6.71118 15.0478 6.71118 14.1854C6.71118 13.3231 6.01331 12.6241 5.15245 12.6241C4.29159 12.6241 3.59372 13.3231 3.59372 14.1854C3.59372 15.0478 4.29159 15.7468 5.15245 15.7468Z"></path>
                  <path d="M17.5196 14.1854C17.5196 15.6018 16.3733 16.75 14.9593 16.75C13.5454 16.75 12.3991 15.6018 12.3991 14.1854C12.3991 12.7691 13.5454 11.6209 14.9593 11.6209C16.3733 11.6209 17.5196 12.7691 17.5196 14.1854ZM14.9593 15.7468C15.8202 15.7468 16.5181 15.0478 16.5181 14.1854C16.5181 13.3231 15.8202 12.6241 14.9593 12.6241C14.0985 12.6241 13.4006 13.3231 13.4006 14.1854C13.4006 15.0478 14.0985 15.7468 14.9593 15.7468Z"></path>
                </svg>
                <h4>Envíos</h4>
              </div>

              <svg
                aria-hidden="true"
                focusable="false"
                className={`icon ${activeIndex === 1 ? "rotate" : ""}`}
                viewBox="0 0 10 6"
                width="18"
                height="18"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            {activeIndex === 1 && (
              <div className="answer">
                <ul>
                  <li>
                    <strong>¿Cuánto cuesta el envío?</strong> <br />
                    El costo del envío a toda la Republica Mexicana es de
                    <strong>$99 mxn</strong> y en órdenes arriba de
                    <strong>$1299 mxn</strong> es completamente
                    <strong>GRATIS</strong>
                  </li>
                  <br />
                  <li>
                    <strong>¿Cuál es el tiempo de entrega?</strong> <br />
                    Procesamos en nuestro almacén los pedidos en un lapso de 48
                    a 72 horas hábiles, una vez preparado tu paquete te enviamos
                    un correo con tu número de rastreo para que puedas
                    monitorearlo. Entregamos nuestros pedidos en un tiempo de
                    <strong> 5 a 7 días hábiles</strong> aproximadamente en la
                    mayor parte del país. <br /> <br />
                    <strong>Días hábiles:</strong> Lunes a Viernes (sábado y
                    domingo no cuentan como hábiles, al igual que asuetos o
                    fechas festivas).
                    <br /> <br />* Algunos códigos postales son considerados
                    como zonas extendidas por las empresas de mensajería, y en
                    ellas no aplica la garantía de tiempos de entrega indicados.
                    No efectuamos reembolso del costo de envío en estos casos.
                    Para tener una idea clara de la fecha de entrega, consulta
                    el email que te enviaremos cuando el paquete haya sido
                    recolectado.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Métodos de pago */}
          <div className="accordion" onClick={() => toggleAccordion(2)}>
            <div className="main-grid">
              <div className="title-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.5 7.11819H3.5L3.5 18.9997L16.5 18.9997V7.11819ZM3.5 6.11786C2.94772 6.11786 2.5 6.56573 2.5 7.11819V18.9997C2.5 19.5521 2.94772 20 3.5 20H16.5C17.0523 20 17.5 19.5521 17.5 18.9997V7.11819C17.5 6.56572 17.0523 6.11786 16.5 6.11786H3.5Z"
                    fillRule="evenodd"
                  ></path>
                  <path d="M11.443 11.9199C11.443 12.7406 10.797 13.406 10.0001 13.406C9.20314 13.406 8.55712 12.7406 8.55712 11.9199C8.55712 11.0992 9.20314 10.4338 10.0001 10.4338C10.797 10.4338 11.443 11.0992 11.443 11.9199Z"></path>
                  <path d="M10.0187 11.9202C10.3639 11.9202 10.6437 12.2001 10.6437 12.5454V15.6971C10.6437 16.0424 10.3639 16.3223 10.0187 16.3223C9.67354 16.3223 9.39372 16.0424 9.39372 15.6971V12.5454C9.39372 12.2001 9.67354 11.9202 10.0187 11.9202Z"></path>
                  <path d="M6.2417 3.75956C6.2417 1.68321 7.92435 0 10 0C12.0757 0 13.7583 1.68321 13.7583 3.75956V6.12135H12.7583V3.75956C12.7583 2.23568 11.5234 1.00033 10 1.00033C8.47663 1.00033 7.2417 2.23568 7.2417 3.75956V6.12135H6.2417V3.75956Z"></path>
                </svg>
                <h4>Métodos de pago</h4>
              </div>

              <svg
                aria-hidden="true"
                focusable="false"
                className={`icon ${activeIndex === 2 ? "rotate" : ""}`}
                viewBox="0 0 10 6"
                width="18"
                height="18"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            {activeIndex === 2 && (
              <div className="answer">
                Utilizamos MercadoPago y PayPal para asegurar que nuestras
                transacciones sean <strong>100%</strong> seguras. <br /> <br />
                <strong>PayPal</strong> <br />
                Aceptamos tarjetas de débito y crédito <strong>
                  VISA
                </strong>, <strong>MasterCard</strong> y{" "}
                <strong>American Express</strong>.
                <br /> <br />
                <strong>MercadoPago: </strong> <br />
                Ofrece la opción de <strong>Depósito en efectivo</strong>, en{" "}
                <strong>OXXO</strong>, <strong>7-Eleven</strong> y muchísimas
                mas opciones. <br /> <br />
                Acepta tarjetas de débito y crédito VISA, MasterCard y American
                Express. Acepta transferencias bancarias.
              </div>
            )}
          </div>

          {/* Cambios y devoluciones */}
          <div className="accordion" onClick={() => toggleAccordion(3)}>
            <div className="main-grid">
              <div className="title-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path d="M11.571 1.05882C11.571 0.750194 11.8198 0.5 12.1266 0.5H13.4572C17.0692 0.5 20 3.45304 20 7.08924C20 10.7255 17.0692 13.6785 13.4572 13.6785L1.89992 13.7105L1.30855 13.1197L1.89992 12.5484L13.4572 12.5608C16.4541 12.5608 18.8889 10.1096 18.8889 7.08924C18.8889 4.06891 16.4541 1.61765 13.4572 1.61765H12.1266C11.8198 1.61765 11.571 1.36745 11.571 1.05882Z"></path>
                  <path d="M6.00311 7.00677C6.22317 6.7917 6.57489 6.79679 6.78871 7.01815C7.00252 7.2395 6.99746 7.59329 6.7774 7.80836L6.00311 7.00677ZM1.30855 13.1197L6.73968 18.5463C6.9565 18.7647 6.95627 19.1185 6.73917 19.3366C6.52207 19.5547 6.17031 19.5544 5.9535 19.3361L0.162462 13.5034C0.0572388 13.3974 -0.00128425 13.2533 2.13868e-05 13.1036C0.00132703 12.9538 0.0623521 12.8108 0.169407 12.7067C0.3269 12.5535 1.78474 11.1291 3.20439 9.74186L6.00311 7.00677L6.7774 7.80836L3.97862 10.5435C2.95441 11.5444 1.8705 12.5709 1.30855 13.1197Z"></path>
                </svg>
                <h4>Cambios y devoluciones</h4>
              </div>

              <svg
                aria-hidden="true"
                focusable="false"
                className={`icon ${activeIndex === 3 ? "rotate" : ""}`}
                viewBox="0 0 10 6"
                width="18"
                height="18"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            {activeIndex === 3 && (
              <div className="answer">
                <ul>
                  <li>
                    <strong>¿Cuentan con cambios y devoluciones?</strong> <br />
                    Podemos hacer cambios dentro de los primeros 15 días a
                    partir del día en que recibes tu pedido.{" "}
                    <strong>No realizamos devoluciones.</strong>
                    <br />
                    <br />
                    <strong>¿Cómo realizo un cambio?</strong> <br />- Ponte en
                    contacto con nosotros a nuestro correo{" "}
                    <strong>shop@elmariana.shop</strong>
                    o por medio de nuestras redes sociales e indícanos tu # de
                    orden y que artículos deseas cambiar. <br />
                    - Te haremos llegar una guía de mensajería para regresar tus
                    artículos (Los costos de envio van por tu cuenta). <br />
                    - Revisaremos que los productos se encuentren en buen
                    estado, sin haber sido usados y con sus etiquetas y empaque
                    original y te enviaremos el cambio dentro de 2 a 3 días
                    hábiles. <br /> <br />
                    <strong>Artículos defectuosos o incorrectos</strong> <br />
                    Cualquier artículo defectuoso o producto que sea diferente
                    al pedido original puede ser devuelto o cambiado dentro de
                    los primeros 10 días de haber recibido el artículo. Tenga en
                    cuenta que todo el artículo defectuoso(s) está sujeto a
                    inspección.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Facturas */}
          <div className="accordion" onClick={() => toggleAccordion(4)}>
            <div className="main-grid">
              <div className="title-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.31104 9.13574C6.31104 8.99767 6.42296 8.88574 6.56104 8.88574H13.7464C13.8844 8.88574 13.9964 8.99767 13.9964 9.13574C13.9964 9.27381 13.8844 9.38574 13.7464 9.38574H6.56104C6.42296 9.38574 6.31104 9.27381 6.31104 9.13574Z"></path>
                  <path d="M6.31104 14.0544C6.31104 13.9164 6.42296 13.8044 6.56104 13.8044H13.439C13.577 13.8044 13.689 13.9164 13.689 14.0544C13.689 14.1925 13.577 14.3044 13.439 14.3044H6.56104C6.42296 14.3044 6.31104 14.1925 6.31104 14.0544Z"></path>
                  <path d="M6.92587 11.5952C6.92587 11.4571 7.0378 11.3452 7.17587 11.3452H12.8241C12.9622 11.3452 13.0741 11.4571 13.0741 11.5952C13.0741 11.7333 12.9622 11.8452 12.8241 11.8452H7.17587C7.0378 11.8452 6.92587 11.7333 6.92587 11.5952Z"></path>
                  <path d="M5.19623 1.77832C5.19623 0.949892 5.8678 0.27832 6.69623 0.27832H13.3038C14.1322 0.27832 14.8038 0.949893 14.8038 1.77832V3.46728C14.8038 4.29571 14.1322 4.96728 13.3038 4.96728H6.69623C5.8678 4.96728 5.19623 4.29571 5.19623 3.46728V1.77832ZM6.69623 1.27832C6.42009 1.27832 6.19623 1.50218 6.19623 1.77832V3.46728C6.19623 3.74342 6.42009 3.96728 6.69623 3.96728H13.3038C13.5799 3.96728 13.8038 3.74342 13.8038 3.46728V1.77832C13.8038 1.50218 13.5799 1.27832 13.3038 1.27832H6.69623Z"></path>
                  <path d="M3.73691 2.50806V18.7232H16.2631V2.50806H14.4981V1.50806H16.2631C16.8154 1.50806 17.2631 1.95577 17.2631 2.50806V18.7232C17.2631 19.2755 16.8154 19.7232 16.2631 19.7232H3.73691C3.18462 19.7232 2.73691 19.2755 2.73691 18.7232V2.50806C2.73691 1.95577 3.18462 1.50806 3.73691 1.50806H5.75974V2.50806L3.73691 2.50806Z"></path>
                </svg>
                <h4>Facturas</h4>
              </div>

              <svg
                aria-hidden="true"
                focusable="false"
                className={`icon ${activeIndex === 4 ? "rotate" : ""}`}
                viewBox="0 0 10 6"
                width="18"
                height="18"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            {activeIndex === 4 && (
              <div className="answer">
                Envíanos un correo a <strong>shop@elmariana.shop</strong> con
                toda tu información. Es importante que la solicites antes de que
                termine el mes en el que hiciste tu compra.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Faqs
