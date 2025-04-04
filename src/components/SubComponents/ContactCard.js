function ContactCard (props) {
    //stylize contact card
    return (
        <div className="contact-card">
            <img src={props.imgSrc} />
            <h3>{props.name}</h3>
            <p>{props.contact.phone}</p>
            <p>{props.contact.mail}</p>
        </div>
    )
}

export default ContactCard;