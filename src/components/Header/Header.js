import React , {useState , useEffect} from 'react'
import axios from 'axios'
import './Header.css'

const Header = (props) => {
    const [header , setHeader] = useState({userInfo : []})
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setHeader({
                    userInfo: response.data[props.id - 1]
                })
            })
            .catch((error) => {
                console.log('error')
            })
    }, [])
    return (
        <header className='navbar'>
            <div className='userInfo'>
                <p>user name : {header.userInfo.username}</p>
                <p>id : {header.userInfo.id}</p>
            </div>
        </header>
    )
}

export default Header
