import { useState, useEffect } from 'react';
import getSingleGilf from 'services/getSingleGif';
import useGif from './useGifs';

export default function useSingleGif({ id }) {
    const { gifs } = useGif()
    const gifFromCache = gifs.find(singleGif => singleGif.id === id)

    const [gif, setGif] = useState(gifFromCache);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

    useEffect(function() {
        
        if(!gif) {
            setIsLoading(true)

            getSingleGilf({id})
            .then(gif => {
                setGif(gif)
                setIsLoading(false)
            }).catch(err => {
                setIsLoading(false)
                setIsError(true)
            })
        }
    }, [gif, id])

    return { gif, isLoading, isError };
}