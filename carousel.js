document.addEventListener('DOMContentLoaded', function () {
  if (window.screen.width > 800) {
      const slider = new ChiefSlider('.slider', {
          loop: false
        });
  }
  setTimeout(upadateSlide, 3000,  2)
});

function upadateSlide(val) {
  if (parseInt(val) < 5) {
    console.log("switch" + val);
    document.getElementById("switch" + val).checked = true
    setTimeout(upadateSlide, 3000, val+1)
  }
  else {
    document.getElementById("switch" + val).checked = true
    setTimeout(upadateSlide, 3000,  1)
  }
}