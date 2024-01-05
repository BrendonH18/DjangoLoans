import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { IApiLoginResponse, ILoginUser, setLocalStorageItem } from '../types_interfaces/types_interfaces'



export default function Login(){
    const [formData, setFormData] = useState<ILoginUser>({
        'email': '',
        'password': ''
    })

    const BASE_URL = "http://127.0.0.1:8000/"

    const handleFormSubmit = () => {
        fetch(`${BASE_URL}api/users/login/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then((data: IApiLoginResponse) => {
            console.log(data)
            const {token, user} = data
            setLocalStorageItem('token', token)
            setLocalStorageItem('id', user.id)
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





