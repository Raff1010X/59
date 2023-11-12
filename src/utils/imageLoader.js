const types = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

module.exports = ({ src, width, quality }) => {
    // if (typeof window !== 'undefined') {
        let returnSrc = src.replace(/\.[^/.]+$/, '.webp')
        let size = '-1200'
        if (width >= 300) {
            // const windowWidth = window.innerWidth;
            
            // if (windowWidth <= 600) 
            //     size = '-300'
            // else if (windowWidth <= 900) 
            //     size = '-600'
            // else if (windowWidth <= 1200) 
            //     size = '-900'

            returnSrc = src.replace(/\.[^/.]+$/, `${size}.webp`)
        }   
    
        return returnSrc
      
    // }
}
