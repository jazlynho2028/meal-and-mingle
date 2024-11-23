import '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/card/Card.css'
import Card from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/card/Card.js';

// contains the displayed list of contacts
const ContactsList = ({ header, Contacts }) => {
    return (
        <section className='listsSection'>
            <h2>{header}</h2>
            <div className='list'>
                {Contacts.map((contact) => {
                    return (
                        <Card key={contact.user.id}
                            type={'simple'}
                            user={contact.user}
                            hasX={false}
                            mainText={contact.user.name}
                            hasLine={false}
                            bottomText={contact.latestText}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default ContactsList;