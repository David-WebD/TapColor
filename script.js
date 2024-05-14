// Simple Color Change App
//David Ewing, 14/05/2024

let root = document.getElementById('root');
console.log(root);
const arr = ['A','B','C','D','E','F', 0,1,2,3,4,5,6,7,8,9];

root.addEventListener('touchstart', colorChange, false);

// Change Color of screen on tap. 
function colorChange(){
  let color = '#';
  for(let i = 0; i < 6; i++){
    const rand = Math.floor(Math.random() * arr.length);
    color += arr[rand]; // 
  }
  console.log(color)
  root.style.backgroundColor = `${color}`;
}

colorChange();

