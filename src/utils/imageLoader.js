"use client";

import widths from "@/utils/imagesWidths";

export default function imageLoader({ src, width }) {

    let returnSrc = src.replace(/\.[^/.]+$/, '.webp')
    if (width >= widths[1]) {
        let size = `-${widths[3]}`
        const windowWidth = window.innerWidth;
        if (windowWidth <= widths[1])
            size = `-${widths[0]}`
        else if (windowWidth <= widths[2])
            size = `-${widths[1]}`
        else if (windowWidth <= widths[3])
            size = `-${widths[2]}`

        returnSrc = src.replace(/\.[^/.]+$/, `${size}.webp`)
    }

    return returnSrc;
}
