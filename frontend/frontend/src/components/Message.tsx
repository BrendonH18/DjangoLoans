export default function Message(props: {text:string, isSent?:boolean}) {
  return (
    <div className={`message ${props.isSent ? 'sent' : 'recieved'}`}>
        <div className="message-bubble">{props.text}</div>
    </div>
  )
}