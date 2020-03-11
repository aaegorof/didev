import React, {useState} from "react"
import Input from "./Input"
import Button from "./Button"
import axios from "axios"

const Contacts = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/ed3e9998-9ca4-4625-b6a1-a93138277fe7",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Спасибо за обращение. Мы с Вами свяжемся в ближайшее время.", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  const onSetName = v => setName(v)
  const onSetEmail = v => setEmail(v)
  const onSetText = v => setText(v)

  return (
    <div className="row contacts-wrap">
      <div className="col-lg-2">
        <div className="pd-2-v">
          <p>Общество с ограниченной ответственностью  «ЦИФРОВОЕ РАЗВИТИЕ»</p>
          <address>Адрес местонахождения/почтовый: 142440, Российская Федерация, Московская область, Ногинский район, рп. Обухово, Кудиновское шоссе, д. 6, помещение 50.</address>
          <div className="rekviziti">ОГРН: 1117746199526 <br/>
            ИНН: 7708735573 КПП 503101001<br/>
            ОКПО: 90620462<br/>
            Р/с 407 028 100 400 000 516 05 в ПАО Сбербанк России <br/>
            К/с 30101810400000000225<br/>
            БИК 044525225</div>
        </div>

        <p>
          <a href="mailto:info@didev.ru">info@didev.ru</a>
        </p>
        <p>
          <a href="tel:+7(499)702-57-17">+7 (499) 702-57-17</a>
        </p>
      </div>
      <div className="col-lg-1"></div>

      <div className="col-lg-2 bg-white">
        <h2>Связаться с нами</h2>
        <form onSubmit={handleOnSubmit} className="form-contact">
        <Input placeholder="Имя" value={name} name="name" onChange={onSetName} className="mg-1-t"/>
        <Input placeholder="Email" type="email" value={email} name="email" onChange={onSetEmail}/>
        <Input placeholder="Текст сообщения" value={text} name="text" onChange={onSetText}/>
        <Button className="mg-2-t" style={{float: "right"}} type="submit" disabled={serverState.submitting}>Отправить >_</Button>
        {serverState.status && (
          <div className={`msg-form ${!serverState.status.ok ? "errorMsg" : ""}`}>
            {serverState.status.msg}
          </div>
        )}
      </form>
      </div>
    </div>
  )
}

export default Contacts
