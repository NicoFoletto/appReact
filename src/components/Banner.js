import React from 'react'

const Banner = () => {
    const Banner = (props) =>{

        const {mensaje} = (props)
        return (
            <div>
               <p>{mensaje}</p> 
            </div>
        )
    }
   
}

export default Banner
