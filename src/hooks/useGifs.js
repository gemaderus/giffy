import { useState, useEffect, useContext } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

function useGif({ keyword } = { keyword: null }) {
const {gifs, setGifs} = useContext(GifsContext);
const [loading, setLoading] = useState(false);
const [loadingNextPage, setLoadingNextPage] = useState(false);
const [page, setPage] = useState(INITIAL_PAGE)

//recuperamos la keyword del localStorage
const keywordToUse = keyword || localStorage.getItem('lastKeyword')  || 'random';

    useEffect( () =>  {
        setLoading(true);
                getGifs({ keyword:  keywordToUse })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)

            //guardamos la keyword del localStorage
            localStorage.setItem('lastKeyword', keyword)
        }
            )
        },[keyword, setGifs]);

    useEffect( () => {
         if(page === INITIAL_PAGE) return

        setLoadingNextPage(true);
        
        getGifs({ keyword: keywordToUse, page})
        .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false);
        })
    }, [page, keywordToUse]);

        return { gifs, loading, setPage, loadingNextPage}
}



export default useGif;
