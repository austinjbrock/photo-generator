async function getRandomPhoto(){
   //grab URL we are pulling from
   const response = await fetch('https://picsum.photos/400');
   //run blob function when we get the response
   const blob = await response.blob();
   // Render data onto html page with current img
   document.getElementById('photo-src').src = URL.createObjectURL(blob)
}
//call the function to get started
getRandomPhoto()