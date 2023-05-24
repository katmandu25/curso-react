// Vamos a crear un Custom Hook. Debe empezar por use....

import { useEffect, useState } from 'react';

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();

    const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

    useEffect(() => {
        if (!fact) return;
        const threeFirstWords = fact.split(' ').slice(0, 3).join(' ');
        fetch(
            `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
        )
            .then((res) => res.json())
            .then((response) => {
                const { url } = response;
                setImageUrl(url);
                console.log(response);
            });
    }, [fact]);

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}

// Devuelve la imagen de la URL