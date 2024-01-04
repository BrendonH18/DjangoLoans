import { Box, LinearProgress, List } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserItem from './UserItem';

export default function Sidebar() {

    type UserType = {
        id: number;
        first_name: string;
        last_name: string;
        email: string
    }

    const BASE_URL = 'http://127.0.0.1:8000/'
    const [userList, setUserList] = useState([])
    const [isUsersLoaded, setIsUsersLoaded] = useState(false)
    const getAuthTokenFromCookie = () => {
        const cookies = document.cookie.split(';')

        for (let i = 0; i < cookies.length; i++) {
            const [name, value] = cookies[i].trim().split('=');
            if (name === 'token') {return value}
        }
        return null
    }

    useEffect(() => {
        const authToken = getAuthTokenFromCookie()
        if (!authToken) {
            console.log("No token")
            return
        }
        axios.get(`${BASE_URL}api/chat/users/`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(res => {
            setUserList(res.data)
            setIsUsersLoaded(true)
            console.log(res.data)
        })
        .catch(err => console.log("Error making API request: ", err))
    }, [])

  return (
    <div className='sidebar'>
        {isUsersLoaded ? (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: '#AAAAAA'}}>
            {userList.map((user: UserType, index) => (
                <UserItem key={index} {...user} ></UserItem>
            ))}
        </List>) : 
        (<Box sx={{width: '100%'}}><LinearProgress/></Box>)}
    </div>
  )
}
