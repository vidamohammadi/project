import React from 'react'
import { useParams } from 'react-router-dom'
import './Home.css'
import Header from '../../components/Header/Header'
import List from '../../components/List/List'
import Search from '../../components/Search/Search'

const Home = (props) => {
    const { id } = useParams()

    return (
        <div>
            <h2>{props.id}</h2>
            <Header id={id} />
            <List id={id}/>
            {/* <Search /> */}
        </div>
    )
}

export default Home
