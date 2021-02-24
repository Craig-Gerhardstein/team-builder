import React from 'react'

export default function TeamMemberForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const {name, value} = evt.target
            update(name, value)
        }

        const onSubmit = evt => {
            evt.preventDefault()
            submit()
        }

        return(
            <form className='form container' onSubmit={onSubmit}>
                <div className='form-group inputs'>
                    <label>Username
                        <input
                          name='username'
                          type='text'
                          value={values.username}
                          onChange={onChange}
                          placeholder='type a username...'
                          maxLength='100'
                          />
                    </label>
                    <label>Email
                        <input
                          name='email'
                          type='email'
                          value={values.email}
                          onChange={onChange}
                          placeholder='name@email.com'
                          
                          />
                    </label>
                    <label>Role
                        <select value={values.role} name='role' onChange={onChange}>
                            <option value=''>--- Select role.. ---</option>
                            <option value='Jr_Developer'>Jr. Developer</option>
                            <option value='Sr_Developer'>Sr. Developer</option>
                            <option value='Lead_Developer'>Project Lead </option>
                        </select>
                    </label>
                    
                    
                        <button >submit</button>
                        
                    
                </div>
            </form>
        )
    }
