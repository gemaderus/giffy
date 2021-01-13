const apiKey = 'xqgUeod9MHgrOGm39QdMdpxDNUFmg4W0';

export default function getGifs({ keyword = 'morty'} = {}) {

    const apiUrl=`https://api.giphy.com/v1/gifs/search?api_key=xqgUeod9MHgrOGm39QdMdpxDNUFmg4W0&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
    console.log('url', apiUrl)
    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
        console.log(response)
        const { data } = response;
        const gifs = data.map(image => {
            const {images, title, id} = image; 
            const url = images.downsized_medium.url;
            return { title, id, url }
        });

        return gifs ;

    })
}