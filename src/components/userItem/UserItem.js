import React from 'react'
import './UserItem.css'
import Button from '../UI/Button/Button'


const UserItem = (props) => {
    return (
        <article className="user" onClick={props.click}>
            <h2>{props.title}</h2>
            <div>
                <div>{props.body}</div>
            </div>
            <Button btnType='edit'onClick={props.click}>Edit</Button>
        </article>
    )
}

export default UserItem
