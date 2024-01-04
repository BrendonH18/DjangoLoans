import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image'
import { Link } from 'react-router-dom';
import { IAuthUser } from '../types_interfaces/types_interfaces';


export default function UserItem(props: IAuthUser) {
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
            <ListItemText primary={name}/>
        </ListItem>
    </Link>
  )
}
