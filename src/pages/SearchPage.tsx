import React, {useState, useEffect} from 'react';
import { useAppSelector } from '../redux/hooks';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ViewedUser from '../models/ViewedUser';
import SearchCard from '../components/SearchCard';
import LoadingComponent from '../components/LoadingComponent';

export interface ISearchPageProps {
}

export default function SearchPage () {

    const { searchKey } = useParams();

    const user = useAppSelector(state => state.user)
    const [searchResult, setSearchResult] = useState<ViewedUser[]>();

    const searchByUsername = (searchKey: string) => {
        axios.get(`/api/v1/users?page=1&size=10&username=${searchKey}`, {
            headers: {
                'Authorization': `Bearer ${user.jwtToken}`
            }
        }).then((res) => {
            console.log(res.data);
            setSearchResult(res.data.content);
        }).catch((e) => {
            console.log(e);
        })
    }

    useEffect(() => {
        if(searchKey) {
            searchByUsername(searchKey);
        }
    }, [])
    

  return (
    <div>
      {
        searchResult ? 
      searchResult?.map(data => <SearchCard data={data}/>)
        : <LoadingComponent />
    }
    </div>
  );
}
