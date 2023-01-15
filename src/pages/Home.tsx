import { useEffect, useState } from 'react'
import axios from 'axios';

function Home() {

    const [users, setUsers] =useState<{username: string}[]>()

    useEffect(() => {
        axios.get(`http://localhost:4000/users`)
        .then(res => {
          setUsers(res.data);
        })
      }, []);

    return (<div>
        { users ? 
            users.map(user => {
                return <p key={user.username}>{user.username}</p>
            }) : null
        }
        
    </div>);
}

export default Home;