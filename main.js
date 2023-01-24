const $imageUrlInput = document.querySelector('input');
const $addImageButton = document.querySelector('button');
const $gallery = document.querySelector('main');
const imageUrls = [];

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (const url of imageUrls) {
    const $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = url;
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
