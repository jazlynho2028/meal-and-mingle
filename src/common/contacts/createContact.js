import User from "../users/User";

const createContact = (user, latestText) => {
  const contact = {
    user: user,
    latestText: latestText ? latestText : ' '
  }

  User.contacts.push(contact);

  console.log('New Contact: ', contact)
}

export default createContact;