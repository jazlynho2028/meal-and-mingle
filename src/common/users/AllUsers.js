import getCSSVar from "../getCSSVar";

// events: list of user's events in calendar
// posts: list of user's created posts
// saved: list of user's saved posts
// display: list of posts to display in Home
// contacts: user's messaging contact list
const AllUsers = [
    {
      id: 'u1',
      name: 'First Last',
      initials: 'FL',
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
      name: 'John Doe',
      initials: 'JD',
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
      name: 'Some Person',
      initials: 'SP',
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
      name: 'Person One',
      initials: 'PO',
      color: getCSSVar('--greenIcon'),
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