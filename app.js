

// function changeColor(){

//   let vertical = window.scrollY;

// if( vertical< 830) 
// {
//   document.body.style.backgroundColor="#1d3fbb"
// }

// else if(vertical>=830 && vertical< 1288) 
// {
//   document.body.style.backgroundColor="pink"
// }
// else if(vertical>=1288 && vertical< 1820) 
// {
//   document.body.style.backgroundColor="#e30512"
// }
// else if(vertical>=1820 && vertical< 2430) 
// {
//   document.body.style.backgroundColor="#00c1b5"
// }
// else (vertical>=2430&&vertical<3500 ) 
// {
//   document.body.style.backgroundColor="#ffbe00"
// }


// console.log(scrollY)

// }

window.addEventListener('scroll', () => {
  const verticalScrollPx = window.scrollY;

  if (verticalScrollPx < 500) {
    document.body.style.backgroundColor = 'rgb(221, 47, 76';
  } else if (verticalScrollPx > 500 && verticalScrollPx < 830) {
    document.body.style.backgroundColor = '#1d3fbb';
  } 


  else if (
    (verticalScrollPx > 800) &
    (verticalScrollPx < 1300)
  ) 
  {
    document.body.style.backgroundColor = 'white';
  }

  else if (
    (verticalScrollPx > 1300) &
    (verticalScrollPx < 1800)
  ) 
  {
    document.body.style.backgroundColor = '#ff651a';
  }

  else if (
    (verticalScrollPx > 1800) &
    (verticalScrollPx < 2400)
  ) 
  {
    document.body.style.backgroundColor = '#e30512';
  }
  else if (
    (verticalScrollPx > 2400) &
    (verticalScrollPx < 3000)
  ) 
  {
    document.body.style.backgroundColor = '#00c1b5';
  }
  
  else {
    document.body.style.backgroundColor = '#ffbe00';
  }
});


// window.addEventListener("scroll",changeColor);