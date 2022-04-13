const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

const imgCount = 5; // max is 30
const apiKey = "f87GzpO81_Z90RkWzu3YQJnSv2xdz7c8l62emTvk8Q0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${imgCount}`;
let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

const imageLoaded = () => {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
};

const displayPhotos = () => {
  totalImages = photosArray.length;
  imagesLoaded = 0;
  photosArray.forEach((photo) => {
    const aElement = document.createElement("a");
    aElement.setAttribute("href", photo.links.html);
    aElement.setAttribute("target", "_blank");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", photo.urls.regular);
    imgElement.setAttribute("alt", photo.alt_description);
    imgElement.setAttribute("title", photo.alt_description);

    imgElement.addEventListener("load", imageLoaded);

    aElement.appendChild(imgElement);
    imageContainer.appendChild(aElement);
  });
};

const getPhotos = async () => {
  try {
    const res = await fetch(apiUrl);
    photosArray = await res.json();
    displayPhotos();
  } catch (err) {
    alert(
      "Ops! seems like we reached the hourly rate images loading. come back in an hour to get more images."
    );
    console.log(err);
  }
};

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
