/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function carouselMaker () {
  const carouselDiv = document.createElement('div');
  const leftBtn = document.createElement('div');
  const photo1 = document.createElement('img');
  const photo2 = document.createElement('img');
  const photo3 = document.createElement('img');
  const photo4 = document.createElement('img');
  const rightBtn = document.createElement('div');

  carouselDiv.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  leftBtn.textContent = "<";
  rightBtn.textContent = ">";

  photo1.setAttribute("src", "./assets/carousel/mountains.jpeg");
  photo2.setAttribute("src", "./assets/carousel/computer.jpeg");
  photo3.setAttribute("src", "./assets/carousel/trees.jpeg");
  photo4.setAttribute("src", "./assets/carousel/turntable.jpeg");

  carouselDiv.appendChild(leftBtn);
  carouselDiv.appendChild(photo1);
  carouselDiv.appendChild(photo2);
  carouselDiv.appendChild(photo3);
  carouselDiv.appendChild(photo4);
  carouselDiv.appendChild(rightBtn);


  let images = [photo1, photo2, photo3, photo4]
  let index = 0;
  images[0].style.display = "block"
  rightBtn.addEventListener("click", () => {
    images.forEach(img => img.style.display = "none");
    let currentIndex = (index++) % 4;
    images[currentIndex].style.display = "block";
  });

  leftBtn.addEventListener("click", () => {
    images.forEach(img => img.style.display = "none");
    --index;
    if (index < 0) index = 3;
    console.log(index);
    images[index%4].style.display = "block";
  });

  
  return carouselDiv;
}
const carouselContainer = document.querySelector('.carousel-container')
carouselContainer.appendChild(carouselMaker());