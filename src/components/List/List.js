import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserItem from '../userItem/UserItem'
import './List.css'
import Modal from '../UI/modal/Modal'
import Input from '../UI/Input/Input'

const List = (props) => {

    const [user, setUser] = useState({ userInfo: [] })
    const [show, setShow] = useState(false)
    const [modal, setModel] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUser({
                    userInfo: response.data[props.id - 1]
                })
            })
            .catch((error) => {
                console.log('error')
            })
    }, [])

    const selectItemHandler = (index) => {
        setShow(!show)
        setModel(index)
    }

    const close = () => {
        setShow(false)
    }

    const edit = () =>{
        console.log(modal)
        console.log(user.userInfo)
    }

    return (
        <div className='list'>
            {
                show ? <Modal show={show} modalClose={close} edit={edit} cancel={close}>
                    <Input type="text" value={modal} placeholder={modal} onChange={() =>{} }/>
                </Modal> : null
            }
            <UserItem
                title='your name'
                body={user.userInfo.name}
                click={(index) => selectItemHandler(user.userInfo.name)}
            />
            <UserItem
                title='your id'
                body={user.userInfo.id}
                click={(index) => selectItemHandler(user.userInfo.id)}
            />
            <UserItem
                title='your username'
                body={user.userInfo.username}
                click={(index) => selectItemHandler(user.userInfo.username)}
            />
            <UserItem
                title='your email'
                body={user.userInfo.email}
                click={(index) => selectItemHandler(user.userInfo.email)}
            />
            <UserItem
                title='your phone'
                body={user.userInfo.phone}
                click={(index) => selectItemHandler(user.userInfo.phone)}
            />
        </div>
    )
}

export default List


