import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img className='writeImg' src="assets/img1.jpg" alt="" />
            <form action="" className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className='writeIcon fas fa-plus'></i>
                    </label>
                    <input type="file" id="fileInput"  style={{display:"none"}}/>
                    <input type="text" placeholder="Enter your name" className='writeInput' autoFocus={true}  />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type="text" className="writeInput writeText" ></textarea>
                </div>
                <button className="writeSubmit">Publish </button>
            </form>
        </div>
    )
}
