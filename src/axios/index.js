import { v4 as uuid } from 'uuid'

const initialTeamMembers = [
    {
      id: uuid(), // uuid is a lib to generate random, unique ids
      username: 'Michael',
      email: 'michael@michael.com',
      role: 'Jr. Developer ',
    },
    {
        id: uuid(), // uuid is a lib to generate random, unique ids
        username: 'Craig',
        email: 'Craig@Craig.com',
        role: 'Sr. Developer ',
      },
      {
        id: uuid(), // uuid is a lib to generate random, unique ids
        username: 'Adam',
        email: 'Adam@Adam.com',
        role: 'Project Lead ',
      },
  ]
  
  // 👉 simulating axios for [GET] and [POST]
  export default {
    get() {
      return Promise.resolve({ status: 200, success: true, data: initialTeamMembers })
    },
    post(url, { username, email, role }) {
      const newTeamMember = { id: uuid(), username, email, role }
      return Promise.resolve({ status: 200, success: true, data: newTeamMember })
    }
  }