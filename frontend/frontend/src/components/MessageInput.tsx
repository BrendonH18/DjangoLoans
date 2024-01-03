import React, { SyntheticEvent, useState } from 'react'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

export default function MessageInput() {
    const [inputValue, setInputValue] = useState<string>('')
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setInputValue(e.target.value)
    const handleSendMessage = () => {
        console.log("Message Send")
    }
    return (
        <div className='message-input'>
        <textarea
            placeholder='Type your message'
            value={inputValue}
            onChange={handleInputChange}      
        />
        <Button variant='contained' endIcon={<SendIcon/>} onClick={handleSendMessage}>Send</Button>
        </div>
    )
}
