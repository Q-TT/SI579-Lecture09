const parentElement = document.getElementById("thumbnails");

for(const img_obj of images) {
    const img = document.createElement('img');
    img.setAttribute('src', img_obj.url);
    parentElement.append(img);
}