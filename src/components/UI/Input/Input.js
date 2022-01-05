import React from 'react'
import './Input.css'

const Input = (props) => {
    
    return (
        <div className='input'>
            <input 
                className='input-element' 
                type={props.type} 
                value={props.value} 
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Input
