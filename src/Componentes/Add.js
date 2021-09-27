import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const Add = ({add}) => {
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [rating, setRating] = useState(1)
  const [image, setImage] = useState("")
  //handel rating
  let handelRating=(x)=>setRating(x)

  //submit add
  let handelsubmit=(e)=>{
    e.preventDefault()
let newone={
  id:Math.random(),
  name,image,type,rating

}
add(newone);
setRating(1);
setName("");
setType("");
setImage("");
  }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');


 
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }

    return (
        <div>
            <button style={{backgroundColor:"rgb(15, 62, 100)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}} onClick={openModal} >Add</button>
      <Modal
        isOpen={modalIsOpen}
    
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      > 
      <form onSubmit={handelsubmit} >
          <label style={{color:"white"}} >Movie Name</label>
          <input type="text" placeholder="write movie name" value={name} onChange={e=>setName(e.target.value)}/>
          <label style={{color:"white"}} >Movie Image</label>
          <input type="url" placeholder="url text" value={image} onChange={e=>setImage(e.target.value)}/>
          <StarRating rating={rating} handelrating={handelRating}/>
          <label style={{color:"white"}} >Movie Type</label>
          <input type="text" placeholder="write movie type" value={type} onChange={e=>setType(e.target.value)}/>
          <div>
          <button style={{backgroundColor:"rgb(15, 62, 119)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}}   type="submit">Save</button><button style={{backgroundColor:"rgb(15, 62, 119)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}} onClick={()=>closeModal()}>Cancel</button>
          </div>
      </form>
      </Modal>
        </div>
    )
}

export default Add