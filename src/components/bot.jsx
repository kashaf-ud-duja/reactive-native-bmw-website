import React from 'react'

 const bot = () => {
  return (
    <div>
   <style>{`
  df-messenger {
    
   --df-messenger-bot-message: #0D47A1;
   --df-messenger-button-titlebar-color: #0D47A1;
   --df-messenger-chat-background-color: white;
   --df-messenger-font-color: white;
   --df-messenger-send-icon: #0000FF;
   --df-messenger-user-message: #479b3d;}
   `}
</style>
    <df-messenger
      intent="WELCOME"
      chat-title="BMW-Kashaf"
      agent-id="8750b26d-6c59-43d4-895c-012a479a8298"
      language-code="en"
    ></df-messenger></div>
  )
}
export default bot;