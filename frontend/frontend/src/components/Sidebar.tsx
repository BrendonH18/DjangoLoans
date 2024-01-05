import { Box, LinearProgress, List } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import UserItem from './UserItem';
import { IAuthUser, getLocalStorageItem, conformToType } from '../types_interfaces/types_interfaces';
interface IAuthUsers extends Array<IAuthUser> {}

export default function Sidebar() {
    const BASE_URL = 'http://127.0.0.1:8000/'
    const [userList, setUserList] = useState<IAuthUsers>([])
    const [isUsersLoaded, setIsUsersLoaded] = useState<Boolean>(false)
    const getAuthTokenFromLocalStorage = () => {
        return getLocalStorageItem('token')
    }

    useEffect(() => {
        const authToken = getAuthTokenFromLocalStorage()
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
            const templateA: IAuthUsers = [{avatar: "null", first_name: 'Template', last_name: 'Template', id: 0}]
            const results = conformToType(res.data, templateA)
            setUserList(results)
            setIsUsersLoaded(true)
            console.log(results)
        })
        .catch(err => console.log("Error making API request: ", err))
    }, [])

  return (
    <div className='sidebar'>
        {isUsersLoaded ? (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: '#AAAAAA'}}>
            {userList.map((user: IAuthUser, index) => (
                <UserItem key={index} {...user} ></UserItem>
            ))}
        </List>) : 
        (<Box sx={{width: '100%'}}><LinearProgress/></Box>)}
    </div>
  )
}
