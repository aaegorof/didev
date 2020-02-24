import React from "react"

const Contacts = () => {
  return (
    <div className="row contacts-wrap">
      <div className="col-lg-2 pd-4-t">
        <div>
          <address>пр. Стачек, 47 198097 Санкт-Петербург Россия</address>
        </div>

        <p>
          <a href="mailto:contact@domain.zone">contact@domain.zone</a>
        </p>
        <p>
          <a href="tel:+7(999)999-99-99">+7 (999) 999-99-99</a>
        </p>
      </div>
      <div className="col-lg-1"></div>
      <form className="col-lg-2">
        <h2>Связаться с нами</h2>
      </form>
    </div>
  )
}

export default Contacts
