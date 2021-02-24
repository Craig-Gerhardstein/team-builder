
import './App.css';
import React, {useState, useEffect} from 'react';
import TeamMemberCard from './TeamMemberCard';
import axios from './axios/index'
import TeamMemberForm from './TeamMemberForm'

const initialFormValue= {
  username: '',
  email: '',
  role: '',
}
function App() {

  const[teamMembers, setTeamMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValue)

  const updateForm = (inputName, inputValue) =>{
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })

   
  }
  const submitForm = () => {
    const newTeamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    
    axios.post('fakeapi.com', newTeamMember)
      .then(res => {
        setTeamMembers([...teamMembers, res.data])
      })
      .catch(err => {
        console.log(err)

      })
      setFormValues(initialFormValue)
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMembers(res.data))
  }, [])

  
  return (
    <div className="App">
      <h1>Team Member App</h1>

      <TeamMemberForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {
        teamMembers.map(member =>{
          return (
          <TeamMemberCard key={member.id} details={member} />
          )
        })
      }

    </div>
  );
}

export default App;
