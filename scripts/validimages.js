let validImages = [
   {filepath: './images/cat1.jpg', name: 'cat1.jpg' },
   {filepath: `./images/cat2.jpg`, name: 'cat2.jpg' },
   {filepath: `./images/cat3.jpg`, name: 'cat3.jpg' },
   {filepath: `./images/lbj1.jpg`, name: 'lbj1.jpg' },
   {filepath: `./images/lbj2.jpg`, name: 'lbj2.jpg' },
   {filepath: `./images/lbj3.jpg`, name: 'lbj3.jpg' },
   {filepath: `./images/jihu.jpg`, name: 'jihu.jpg' },
   {filepath: `./images/sasuke.png`, name: 'sasuke.png' },
];

renderValidImages();

function renderValidImages() {
   const validImagesContainer = document.querySelector('.valid-imgs-container');

   let containerHTML = ``;

   for (let i = 0; i < validImages.length; i++) {
      const validImagesObj = validImages[i];
      const {filepath, name} = validImagesObj;
      containerHTML += 
      `
      <div class="valid-box">
         <img src="${filepath}" alt="valid image">
         <p>${name}</p>
      </div>
      `
   }
   validImagesContainer.innerHTML = containerHTML;
}