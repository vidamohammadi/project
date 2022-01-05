import React from 'react'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import './Search.css'

const Search = () => {
    return (
        <div className='search'>
            <Input type="text" placeholder="search..." value='' onChange={() => {}}/>
            <Button onClick={() => {}}>
                Search
            </Button>
        </div>
    )
}

export default Search
