//custom hook to make axios get requests
import { useState, useEffect } from 'react';
import axios from 'axios';
import { UseAxiosGetResult } from '../interfaces/useAxiosGetInterface';

const useAxiosGet = <T,> (url:string): UseAxiosGetResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        console.log('useAxiosGet', url);    
        const FetchData = async () => {
            try {
                const response = await axios.get(url);
                console.log('response', response);
                setData(response.data);
                setLoading(false);

            } catch ( error ) {
                console.log('Error fetching data', error);
            }
        }
        FetchData();
    }, [url]);
    
    return { data, loading };
    }

export default useAxiosGet;