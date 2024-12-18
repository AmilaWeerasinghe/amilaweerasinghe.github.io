//custom hook to make axios get requests
import { useState, useEffect } from 'react';
import axios from 'axios';
import { UseAxiosGetResult } from '../interfaces/useAxiosGetInterface';

const useAxiosGet = <T,> (url:string): UseAxiosGetResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {  
        const FetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);

            } catch ( error ) {
                setError(error as string);
            }
        }
        FetchData();
    }, [url]);
    
    return { data, loading, error };
    }

export default useAxiosGet;