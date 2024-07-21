import { useChat } from "ai/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { render } from "react-dom";

const Chat = () => {
  const { messages, input handleInputChange, handleSubmit } = useChat(
    api: "/api/openai",
  });
  const chatContainer = useRef<HTMLDivElement>(null);

  const scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current as HTMLDivElement;
    if (scrollHeight <= scrollTop + offsetHeight) {
      chatContainer.current?.scrollTo(0, scrollHeight + 200);
    }
  };


  const renderResponse = () => {
    return (
      <div className="response">
        {messages.map((m, index) => (
          <div key={m.id} className={`chat-line ${m.role === "user" ? "user-chat" : "ai-chat"}`}>
            <Image className="avatar" alt="avatar-image" src={m.role === "user" ? "/user.png" : "/ai.png"}></Image>
            <div style={{width: "100%", marginLeft: "16px"}}>
              <p className="message">{m.content}</p>
              {index < messages.length-1 && <div className="horizontal-line"></div>
            </div>
        </div>
      </div>
    )

  return (
    <div ref={chatContainer} className="chat">
      {renderResponse()}
      <form onSubmit={handleSubmit} className="mainForm">
        <imput name="input-field" type="text" placeholder="dummy text"></imput>
        <button type="submit" className="mainButton"></button>
      </form>
    </div>
  );
}

export default Chat;