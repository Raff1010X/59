import base64blured from '@/assets/images/blurred/images.json'

export default function findImageBase64(imageName: string) {
    const imageToSearch = imageName.replace(/\/|\\/g, '');
    const image = base64blured.find(
        image => {
            const imageToFind = image.path.replace(/\/|\\/g, '').replace(/\.[^/.]+$/, '')
            if (imageToSearch.includes(imageToFind))
                return image
        }
    )
    return image?.base64 ?? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA1UlEQVR4nE1QvQpAUBS+LygPYDNaTZTNGxgsyiCDyaAoi8lIyUQGZDCJlAz4dE8pt849P9/5zh/D753nCdu24fs+ruv6Q2D8u++bHMuyYJomRFGE67oU+wjseR4ymqaBJEkQBAG6rsMwDAzDQBjPYR+jqiqoqgpFUSDLMjRNQ9/3hPGO1PqrWpYloihCGIZE/I/F2rZFmqbI8xx1XVMCj03ThK7rUBQF1nUFy7KMlnAchzSXIAgQxzGSJIHneRjHEYyfZN93HMdBzGVZSG/bRjLPM53tBUobE4k0kb9SAAAAAElFTkSuQmCC'
}

