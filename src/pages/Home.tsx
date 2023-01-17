import { useEffect, useState } from 'react'
import axios from 'axios';
import React from "react";
import { useAppSelector } from '../hooks';

function Home() {

    const [users, setUsers] =useState<{username: string}[]>()
    const user = useAppSelector(state => state.user)

    useEffect(() => {
        axios.get(`http://localhost:4000/users`, { headers: {"Authorization" : `Bearer ${user.jwtToken}`} })
        .then(res => {
          setUsers(res.data);
        })
      }, []);

    return (<div>
            <h1 className="text-5xl font-bold underline">
            Hello world!
            </h1>
        { users ? 
            users.map(elem => {
                return <div><p key={elem.username}>{elem.username}</p>
                <p>Active user is {user.username}</p></div>
            }) 
            : null
        }
        
    </div>);
}

export default Home;