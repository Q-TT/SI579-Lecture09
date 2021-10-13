const parentElement = document.getElementById("thumbnails");
const featuredImage = document.getElementById("featured");
const featuredCaption =  document.getElementById("current_description");

for(const img_obj of images) {
    const img = document.createElement('img');
    img.setAttribute('src', img_obj.url);
    parentElement.append(img);
    console.log(img_obj);

    img.addEventListener('click', () => {
        featuredImage.setAttribute('src', img_obj.url);
        featuredImage.setAttribute('alt', img_obj.alt);
        featuredCaption.textContent = img_obj.description;
    });
}