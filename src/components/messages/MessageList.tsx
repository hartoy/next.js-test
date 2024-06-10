import useMessages from '@/context/message.context'
import Message from './Message'

const MessageList = () => {
  const { messages } = useMessages()

  return (
    <>
      {messages.map((message, index) => (
        <Message key={`${index}`} message={message}></Message>
      ))}
    </>
  )
}

export default MessageList
