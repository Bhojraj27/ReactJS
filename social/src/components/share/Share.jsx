import  './share.css'
import {PermMedia, Label,Room, EmojiEmotions}  from '@mui/icons-material'
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="assets/1.jpeg" alt="" className="shareProfileImg" />
          <input placeholder='whats in tyour mind Safak?'
            className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className='shareIcon' style={{color:'#f00540'}}/>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label className='shareIcon'style={{color:'blue'}}/>
              <span className="shareOptionText" >Tag</span>
            </div>
            <div className="shareOption">
              <Room className='shareIcon' style={{color:'green'}}/>
              <span className="shareOptionText" >Location</span>
            </div>
            <div className="shareOption" >
              <EmojiEmotions className='shareIcon' style={{color:'#f0b505'}}/>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">share</button>
        </div>
      </div>
    </div>
  )
}
