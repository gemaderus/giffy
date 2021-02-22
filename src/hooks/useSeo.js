import { useEffect, useRef } from 'react';

export default function useTitle ({ title, description }) {
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

    useEffect(() => {
        const previusTitle = prevTitle.current;

        if(title) {
            document.title = `${title} | Giphy }`
        }
        
        return () => document.title = previusTitle
    }, [title])

    useEffect(() => {
        const metadescription = document.querySelector('meta[name="description"]');
        const previusDescription = prevDescription.current;

        if(description) {
            metadescription.setAttribute('content', description);
        }
        
        return () => metadescription.setAttribute('content', previusDescription);
    }, [description])
}