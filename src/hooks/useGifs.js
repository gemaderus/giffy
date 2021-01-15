import { useState, useEffect, useContext } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

function useGif({ keyword } = { keyword: null }) {
const {gifs, setGifs} = useContext(GifsContext);
const [loading, setLoading] = useState(false);

useEffect( () =>  {
    setLoading(true);
    //recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')  || 'random';

    getGifs({ keyword:  keywordToUse })
    .then(gifs => {
        setGifs(gifs)
        setLoading(false)

        //guardamos la keyword del localStorage
        localStorage.setItem('lastKeyword', keyword)
    }
        )
    },[keyword, setGifs]);

    return { gifs, loading}
}

export default useGif;
 