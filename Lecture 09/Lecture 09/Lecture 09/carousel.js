const parentElement = document.getElementById("thumbnails");
const featuredImage = document.getElementById("featured");
const featuredCaption =  document.getElementById("current_description");

function setSelectedImage(img_obj) {
    featuredImage.setAttribute('src', img_obj.url);
    featuredImage.setAttribute('alt', img_obj.alt);
    featuredCaption.textContent = img_obj.description;
}

function advanceImage() {

}

let currentImg;

for(const img_obj of images) {
    const img = document.createElement('img');
    img.setAttribute('src', img_obj.url);
    parentElement.append(img);
    console.log(img_obj);

    img.addEventListener('click', () => {
        if(currentImg) {
            currentImg.classList.remove('highlighted');
        }
        currentImg = img;
        currentImg.classList.add('highlighted');
        setSelectedImage(img_obj);
    });
}

