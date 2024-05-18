import { MessageType } from "@/lib/messages";

export default function Messages({ messages }: { messages: MessageType[] }) {
  return (
    <ul className="messages">
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
}
