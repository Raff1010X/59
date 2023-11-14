import base64blured from '@/assets/images/blurred/images.json'

export default function findImageBase64(imageName: string) {
    //replace all "/" and "\" to "" to compare
    const image = base64blured.find(
        image => 
        // {
            image.path.replace(/\/|\\/g, '').includes(imageName.replace(/\/|\\/g, ''))
        //     ? image.base64
        //     : ''
        // }
        )
    console.log(base64blured[0].path);
    console.log(image?.base64);
    // return image?.base64
    return "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAYH/8QAIxAAAgECBQUBAAAAAAAAAAAAAQMCABEEBRIhQTEyUXGRof/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAZEQACAwEAAAAAAAAAAAAAAAABAgAREiH/2gAMAwEAAhEDEQA/ANVyzPWYnOHpXqC8LsYxHcTb764/asAw2GoWlyBvahYJClykVqXEzIMjGIFz5NOPWgiUSbidtAcn/9k="

}

