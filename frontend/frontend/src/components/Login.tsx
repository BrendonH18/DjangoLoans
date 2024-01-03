import React, { useState } from 'react'

import { TextField, Button } from '@mui/material'



export default function Login(){

    const [formData, setFormData] = useState({
        'email': '',
        'password': ''
    })

    const BASE_URL = "http://127.0.0.1:8000/"

    const handleFormSubmit = () => {
        fetch(`${BASE_URL}login/`,{
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
                    <TextField id="password" type='password' label="Password" variant="outlined" onChange={e => setFormData({...formData, password: e.target.value})}/>
                </div>
                <div>
                    <Button variant="contained" onClick={handleFormSubmit}>Login</Button>
                </div>       
            </div>
        </>

        

    )

}





