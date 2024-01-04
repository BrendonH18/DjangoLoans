import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { IRegisterUser } from '../types_interfaces/types_interfaces'

export default function Register(){
    const [formData, setFormData] = useState<IRegisterUser>({
        'email': '',
        'first_name': '',
        'last_name': '',
        'password': ''
    })

    const BASE_URL = "http://127.0.0.1:8000/"

    const handleFormSubmit = () => {
        fetch(`${BASE_URL}api/users/register/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <>
            <div>
                <div className='mt-3'>
                    <TextField id="email" type="email" label="Email" variant="outlined" onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className='mt-3'>
                    <TextField id="first_name" type='text' label="First Name" variant="outlined" onChange={e => setFormData({...formData, first_name: e.target.value})}/>
                </div>
                <div className='mt-3'>
                    <TextField id="last_name" type='text' label="Last Name" variant="outlined" onChange={e => setFormData({...formData, last_name: e.target.value})}/>
                </div>
                <div className='mt-3'>
                    <TextField id="password" type='password' label="Password" variant="outlined" onChange={e => setFormData({...formData, password: e.target.value})}/>
                </div>
                <div>
                    <Button variant="contained" onClick={handleFormSubmit}>Save</Button>
                </div>
                
            </div>
        </>
        
    )
}


