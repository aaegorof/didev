import React, {useState} from "react"
import Input from "./Input"
import Button from "./Button"

const Contacts = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

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
          <a href="mailto:contact@domain.zone">contact@domain.zone</a>
        </p>
        <p>
          <a href="tel:+7(499)702-57-17">+7 (499) 702-57-17</a>
        </p>
      </div>
      <div className="col-lg-1"></div>
      <form className="col-lg-2 bg-white form-contact">
        <h2>Связаться с нами</h2>
        <Input placeholder="Имя" value={name} onChange={onSetName} className="mg-1-t"/>
        <Input placeholder="Email" value={email} onChange={onSetEmail}/>
        <Input placeholder="Текст сообщения" value={text} onChange={onSetText}/>
            <Button className="mg-2-t" style={{float: "right"}}>Отправить >_</Button>
      </form>
    </div>
  )
}

export default Contacts
