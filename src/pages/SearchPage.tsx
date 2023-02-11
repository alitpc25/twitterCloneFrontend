import React, {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ViewedUser from '../models/ViewedUser';
import SearchCard from '../components/SearchCard';
import LoadingComponent from '../components/LoadingComponent';
import { updateUserInfo } from '../redux/userSlice';

export interface ISearchPageProps {
}

export default function SearchPage () {

    const { searchKey } = useParams();

    const user = useAppSelector(state => state.user)
    const followings = useAppSelector(state => state.followings);

    const dispatch = useAppDispatch();

    const [searchResult, setSearchResult] = useState<ViewedUser[]>();

    const searchByUsername = (searchKey: string) => {
        axios.get(`/api/v1/users?page=1&size=10&username=${searchKey}`, {
            headers: {
                'Authorization': `Bearer ${user.jwtToken}`
            }
        }).then((res) => {
            setSearchResult(res.data.content);
        }).catch((e) => {
            console.log(e);
            if(e.response.status == 403) {
                dispatch(updateUserInfo({
                    username:null,
                    userId:null,
                    jwtToken:null,
                    loggedIn:false,
                    imageId:null
                }))
            }
        })
    }

    useEffect(() => {
        if(searchKey) {
            searchByUsername(searchKey);
        }
    }, [searchKey])
    

  return (
    <div>
      {
        searchResult ? 
        searchResult.filter(data => data.username != user.username).map((data, i) => {
            return <SearchCard key={i} data={data} isFollowed={followings.followings?.map(f => f.username)?.includes(data.username)} />
        })
        : <LoadingComponent />
    }
    </div>
  );
}
