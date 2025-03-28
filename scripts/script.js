let profileCards = [{image: `./images/cat1.jpg`, name: `Siopao`}];

renderHTML();

function addProfileCard(image = '', name = '') {
   const nameInput = document.getElementById('profile-name');
   image = image || imageFilePath();
   name = name || nameInput.value;

   if (!name) {
      const randomNames = [`Lucky`, `LeBron`, `LeCat`, `GOAT`, `Buricat`, `Siopao`, `Loonie`, `Kai Sotto`, `Hev Abnoy`]

      const ran = randomNumber(0, randomNames.length - 1);
      name = randomNames[ran];
   }

   profileCards.push( {image, name} ) 
   renderHTML();
}

function imageFilePath() {
   const randomImgs = [`cat1.jpg`, `lbj1.jpg`, `lbj2.jpg`, `lbj3.jpg`,`cat2.jpg`, `cat3.jpg`, `jihu.jpg`, `sasuke.png`]
   const imageInput = document.getElementById('image');
   let image = imageInput.value;

   if (!image) {
      const ran = randomNumber(0, randomImgs.length - 1);
      image = randomImgs[ran];
   }

   // console.log(image);

   return `./images/${image}`;
}

function renderHTML() {
   const containerElement = document.querySelector('.container');

   // reverse the current array to generate new cards first
   const reversedProfileCards = profileCards.slice().reverse();

   let cardContainerHTML = ``;

   reversedProfileCards.forEach(function(cardObject, idx) {
      const {image, name} = cardObject;
      const moots = Math.floor(randomNumber(1, 100));

      cardContainerHTML += 
      `
      <div class="profile-containers">
         <div class="images">
         <img src="${image}" alt="" />
         </div>
         <div class="profile-info">
            <p class="name">
               ${name}
            </p>
            <p class="mutual-friends">
               ${moots} mutual friends
            </p>
         </div>
         <div class="button">
            <button class="add-friend">Add Friend</button>
         </div>
      </div>
      `
   })
   
   // for (let i = 0; i < reversedProfileCards.length; i++) {
   //    const cardObject = reversedProfileCards[i];
   //    const {image, name} = cardObject;
   //    const moots = Math.floor(randomNumber(1, 100));

   //    cardContainerHTML += 
   //    `
   //    <div class="profile-containers">
   //       <div class="images">
   //       <img src="${image}" alt="" />
   //       </div>
   //       <div class="profile-info">
   //          <p class="name">
   //             ${name}
   //          </p>
   //          <p class="mutual-friends">
   //             ${moots} mutual friends
   //          </p>
   //       </div>
   //       <div class="button">
   //          <button class="add-friend">Add Friend</button>
   //       </div>
   //    </div>
   //    `
   // }
   
   containerElement.innerHTML = cardContainerHTML;
}

function randomNumber(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}