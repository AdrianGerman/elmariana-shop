import "./Contact.css"

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-text">
          <h2>! Ponte en contacto con nosotros !</h2>
          <p>
            Si tienes alguna duda o sugerencia, o necesitas apoyo con alguna
            compra, puedes escribirnos un mensaje y te responderemos lo mas
            pronto posible.
          </p>
          <h6>
            <strong>Lun - Vie: 10am - 6pm</strong> <br />
            shop@elmariana.shop
          </h6>
        </div>

        <div className="form-contact">
          <section className="info-me-contact">
            <input type="text" placeholder="Nombre" className="input-field" />
            <input
              type="text"
              placeholder="Correo electrónico *"
              className="input-field"
            />
          </section>
          <section className="more-info-contact">
            <input
              type="text"
              placeholder="Número de teléfono"
              className="input-field"
            />
            <textarea
              placeholder="Comentario"
              className="input-field"
            ></textarea>
          </section>
          <button className="submit-btn">Enviar</button>
        </div>
      </div>
    </>
  )
}

export default Contact
