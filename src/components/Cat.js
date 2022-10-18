
import phoneIcon from "../assets/phone-icon.png"
import mailIcon from "../assets/mail-icon.png"


function Cat(props) {
    console.log(props)
    const {image, name, phone, email} = props.item
  return (   
    <div className="contact-card">
        <img src={image} alt="whiskerson"/>
        <h3>{name}</h3>
        <div className="info-group">
          <img src={phoneIcon}  alt="phone"/>
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="mail" />
          <p>{email}</p>
        </div>
      </div>
  )
}

export default Cat