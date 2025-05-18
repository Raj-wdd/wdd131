const modal = document.getElementById('modal');
const gallery = document.querySelector('.gallery');

function viewerTemplate(imgSrc, altText) {
  return `
    <img src="${imgSrc}" alt="${altText}">
    <button class="close-viewer">X</button>
  `;
}

// Add event listener to gallery for image clicks
gallery.addEventListener('click', (event) => {
  const clickedImg = event.target.closest('img');
  if (!clickedImg) return;

  const src = clickedImg.getAttribute('src');
  const alt = clickedImg.getAttribute('alt');

  // Use split as per assignment instructions to get full image name
  const baseName = src.split('-')[0];  // e.g. "norris"
  const fullSrc = baseName + '-full.jpeg';

  modal.innerHTML = viewerTemplate(fullSrc, alt);
  modal.showModal();

  // Add close button listener **once** after modal content is set
  const closeButton = modal.querySelector('.close-viewer');
  closeButton.addEventListener('click', () => {
    modal.close();
    modal.innerHTML = ''; // clear modal content to remove image
  });
});

// Close modal if user clicks outside the image (on dialog background)
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
    modal.innerHTML = ''; // clear modal content on background click too
  }
});
