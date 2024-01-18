// JavaScript

console.log('Hello world!');

const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');




thumbs.forEach(function(item, index) {
    item.onmouseover = function() {
      //console.log(this.dataset.image);
      main.src = this.dataset.image;
      const text = document.querySelector('#caption');
    }
  });

  

  const show = (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        const keyframes = {
          opacity: [0, 1],
          translate: ['0px 200px',0]
        }
        entry.target.animate(keyframes,1200);
        //
        obs.unobserve(entry.target);
      }       
    });
  }
  
  const observer = new IntersectionObserver(show);

  

  const images = document.querySelectorAll('.img');
  console.log(images);
  images.forEach(i =>{
    observer.observe(i);
  });
  
  