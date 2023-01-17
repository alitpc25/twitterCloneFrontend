import { useEffect, useState } from 'react'
import axios from 'axios';
import React from "react";
import { useAppDispatch, useAppSelector } from '../hooks';
import { updateUserInfo } from '../store/userSlice';

function Home() {

    const [users, setUsers] =useState<{username: string}[]>()
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        axios.get(`/api/v1/users`, { headers: {"Authorization" : `Bearer ${user.jwtToken}`} })
        .then(res => {
          setUsers(res.data);
        }).catch(err => {
            console.log(err)
            let userState = {
                username: null,
                jwtToken: null,
                loggedIn: false
            }
            dispatch(updateUserInfo(userState))
        })
      }, []);

    return (<div>
            <h1 className="text-5xl font-bold underline">
            Hello world!
            </h1>
        { users ? 
            users.map(elem => {
                return <p key={elem.username}>{elem.username}</p>
            },
            <p>Active user is {user.username}</p>
            ) 
            : null
        }
        
    </div>);
}

export default Home;