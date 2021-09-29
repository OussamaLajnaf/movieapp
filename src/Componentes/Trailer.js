import React from 'react'

const Trailer = ({match,list}) => {
    let object=list.find(el=>el.id==match.params.id)
    return (
        <div>
            <h1>{object.name}</h1>
            <img src={object.image} alt=""/>
        </div>
    )
}

export default Trailer
