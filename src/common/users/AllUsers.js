import getCSSVar from "../getCSSVar";

const AllUsers = [
    {
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
      display: []
    },
    {
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
      display: []
    },
    {
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
      display: []
    },
    {
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
      display: []
    }
]

export default AllUsers;