import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Account.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

const Account = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [auth , setAuth] = useState('')

    const validUser = (index) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                userName === response.data[index - 1].username ? setAuth(true) : setAuth(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    validUser(password)

    return (
        <div className='account'>
            <h2>Account</h2>
            <form>
                <Input
                    type="input"
                    value={userName}
                    placeholder="User Name"
                    onChange={(event) => setUserName(event.target.value)}
                />
                <Input
                    type="input"
                    value={password}
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                {
                    auth === true ?
                
                <Link to={`/${password}`}>
                    <Button btnType='login'> Login </Button>
                </Link>
                :
                <Link to={'/error'}>
                    <Button btnType='login'> Login </Button>
                </Link>
                }
            </form>
        </div>
    )
}

export default Account
