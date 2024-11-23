import getCSSVar from "/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/getCSSVar.js";

// events: list of user's events in calendar
// posts: list of user's created posts
// saved: list of user's saved posts
// display: list of posts to display in Home
// contacts: user's messaging contact list

// these values are placeholders before database has all functions implemented for creating posts and such
const AllUsers = [
  {
    id: 'u1',
    name: 'ABC AVS',
    initials: 'FL',
    email: 'firstlast@example.com',
    color: getCSSVar('--purpleIcon'),
    class: 2023,
    school: ['A School'],
    major: ['Some Interesting Major', 'Some Other Major'],
    bio: 'Really interesting things about my background, interests, hobbies, etc.',
    events: [],
    posts: [],
    saved: [],
    display: [],
    contacts: []
  },
  {
    id: 'u2',
    name: 'Help Me',
    initials: 'JD',
    email: 'johndoe@example.com',
    color: getCSSVar('--pinkIcon'),
    class: 2025,
    school: ['Bienen, Weinberg'],
    major: ['Trumpet Performance', 'Psychology'],
    bio: 'I like touching grass.',
    events: [],
    posts: [],
    saved: [],
    display: [],
    contacts: []
  },
  {
    id: 'u3',
    name: 'Im dDead',
    initials: 'SP',
    email: 'someperson@example.com',
    color: getCSSVar('--yellowIcon'),
    class: 2027,
    school: ['McCormick'],
    major: ['Mechanical Engineering'],
    bio: 'I don\'t like touching grass.',
    events: [],
    posts: [],
    saved: [],
    display: [],
    contacts: []
  },
  {
    id: 'u4',
    name: 'AHhh AHh',
    initials: 'PO',
    email: 'personone@example.com',
    color: getCSSVar('--blueIcon'),
    class: 2026,
    school: ['Medill'],
    major: ['Journalism'],
    bio: 'I like food.',
    events: [],
    posts: [],
    saved: [],
    display: [],
    contacts: []
  }
]

export default AllUsers;