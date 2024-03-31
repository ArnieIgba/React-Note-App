
import React, { useState } from 'react';
import EmojiPicker, { Emoji } from "emoji-picker-react";
import './App.css';


const App = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  
  function onClick(emojiData) {
    setSelectedEmoji(emojiData.unified);
  }
 
  return (

    <div className='card'>
        <h2>Short of words? Choose an emoji.</h2>
        <div>
           {selectedEmoji ? <Emoji unified={selectedEmoji} size={52} /> : null}
        </div>
        
        <EmojiPicker onEmojiClick={onClick} />
    </div>
  );
}



export default App;
