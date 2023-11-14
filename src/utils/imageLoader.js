"use client";

export default function imageLoader({ src, width, quality }) {
    const types = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

    let returnSrc = src.replace(/\.[^/.]+$/, '.webp')

    if (width >= 300) {
        let size = '-1200'
        const windowWidth = window.innerWidth;
        if (windowWidth <= 600)
            size = '-300'
        else if (windowWidth <= 900)
            size = '-600'
        else if (windowWidth <= 1200)
            size = '-900'

        returnSrc = src.replace(/\.[^/.]+$/, `${size}.webp`)
    }

    return returnSrc;
}
