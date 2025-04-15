import ContactCard from "./SubComponents/ContactCard";

function Props () {
    //list contact card from ContactCard module
    return (
        <div clasName="contacts">
            <ContactCard 
                name="name 1" 
                imgSrc="https://website-tree-main-asset.s3.us-west-1.amazonaws.com/ad-beauty-booking-1-en.jpeg" 
                contact={{
                    phone: "phone 1",
                    mail: "mail 1",
                }}
            />

            <ContactCard 
                name="name 2" 
                imgSrc="https://website-tree-main-asset.s3.us-west-1.amazonaws.com/ad-beauty-booking-2-en.jpeg" 
                contact={{
                    phone: "phone 2",
                    mail: "mail 2",
                }}
            />

            <ContactCard 
                name="name 3" 
                imgSrc="https://website-tree-main-asset.s3.us-west-1.amazonaws.com/ad-beauty-booking-pro-1-en.jpeg" 
                contact={{
                    phone: "phone 3",
                    mail: "mail 3",
                }}
            />

            <ContactCard 
                name="name 4" 
                imgSrc="https://website-tree-main-asset.s3.us-west-1.amazonaws.com/ad-beauty-booking-pro-2-en.jpeg" 
                contact={{
                    phone: "phone 4",
                    mail: "mail 4",
                }}
            />
        </div>
    )
}

export default Props;