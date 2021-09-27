import React from 'react'

const StarRating = ({rating,handelrating}) => {
    let stars=(rating)=>{
        let tab=[]
        for(let i=1;i<=5;i++){
          if(i<=rating){
            tab.push(
                <span onClick={()=>handelrating(i)} style={{color:"gold",fontSize:"25px",cursor:"pointer"}}>★</span>
            )
          }else{
            tab.push(
                <span onClick={()=>handelrating(i)} style={{color:"black",fontSize:"25px",cursor:"pointer"}}>★</span>
            )
          }
        }return tab
      }
    return (
        <div>
            {
                stars(rating)
            }
        </div>
    )
}
StarRating.defaultProps={
  handelrating:()=>{}
}

export default StarRating