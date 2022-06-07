

export class Loader {
    async loadImage(url: string){
        return new Promise<void>((resolve, reject) => {
            var img = document.createElement('img');
            img.src = url;
            img.onload = function () {
                resolve()
            }
            img.onerror = reject;
        })
    }
}