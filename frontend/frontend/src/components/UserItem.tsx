import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image'
import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
    id: number;
    first_name: string;
    last_name: string;
    email: string
}

export default function UserItem(props: Props) {
    const name = `${props.first_name} ${props.last_name}`
    const userProfileUrl = `/user/${props.id}`
  return (
    <Link to={userProfileUrl}>
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon></ImageIcon>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={props.email}/>
        </ListItem>
    </Link>
  )
}
