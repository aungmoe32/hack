"use client";
import React from "react";

export default function ChatBot() {
  return (
    <div>
      <button id="chatbot-button" onClick={() => toggleChatWindow()}>
        <i className="fa-solid fa-robot" style={{ fontSize: "40px" }}></i>
      </button>

      <div id="chatbot-window" className="chatbot-window">
        <div id="chatbox" className="chatbox">
          <div id="chat-box"></div>
          <input type="text" id="user-input" placeholder="Type a message..." />
          <button onClick={() => sendMessage()}>Send</button>
        </div>
      </div>
    </div>
  );
}
