
function eyeBall(){
  // console.log('hihihi');
  let eyes = document.querySelectorAll('.eye i');
  eyes.forEach(eye => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    let radian = Math.atan2(event.pageX - x, event.pageY -y);
    let rot = (radian * (180 / Math.PI) * -1) + 270;
    // eye.style.display = 'none';
    eye.style.transform = `rotate(${rot}deg)`;
  })
}
document.querySelector('body').addEventListener("mousemove",eyeBall)