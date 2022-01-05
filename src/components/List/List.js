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
    const [modal, setModal] = useState('')
    const [edit, setEdit] = useState('')

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

    const selectItemHandler = (index , id) => {
        setShow(!show)
        setModal(index)
        setEdit(id)
    }
    
    const changeHandler = () => {
        const index = edit
        console.log(index)
        console.log(user)
        setUser({
            userInfo[index] : 'name'
        })
    }

    const close = () => {
        setShow(false)
    }

    const editHandler = () =>{
        console.log(modal)
        console.log(user.userInfo)
    }

    return (
        <div className='list'>
            {
                show ? <Modal show={show} modalClose={close} edit={editHandler} cancel={close}>
                    <Input type="text" value={modal} placeholder={modal} onChange={changeHandler}/>
                </Modal> : null
            }
            <UserItem
                title='your name'
                body={user.userInfo.name}
                click={(index , id) => selectItemHandler(user.userInfo.name , "name")}
            />
            <UserItem
                title='your id'
                body={user.userInfo.id}
                click={(index , id) => selectItemHandler(user.userInfo.id , "id")}
            />
            <UserItem
                title='your username'
                body={user.userInfo.username}
                click={(index , id) => selectItemHandler(user.userInfo.username , "username")}
            />
            <UserItem
                title='your email'
                body={user.userInfo.email}
                click={(index , id) => selectItemHandler(user.userInfo.email , "email")}
            />
            <UserItem
                title='your phone'
                body={user.userInfo.phone}
                click={(index , id) => selectItemHandler(user.userInfo.phone , "phone")}
            />
        </div>
    )
}

export default List


