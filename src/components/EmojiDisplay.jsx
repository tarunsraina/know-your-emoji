import React from "react"

function EmojiDisplay(props){
   console.log(props)
   return(
       <div className="emoji-display">
       <h1>{props.emojiSym}</h1>
       <h2>{props.emojiName}</h2>
       <h3>{props.emojiDesc}</h3>
       </div>
   )
}

export default EmojiDisplay