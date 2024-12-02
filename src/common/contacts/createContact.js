import User from "/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/users/User.js";

const createContact = (user, latestText) => {
  const contact = {
    user: user,
    latestText: latestText ? latestText : ' '
  }

  User.contacts.push(contact);

  console.log('New Contact: ', contact)
}

export default createContact;