function startAnimation(element) {
    element.style.border = "5px solid yellow";
    element.style.animation = "borderAnimation 1s linear infinite";
  }
  
  function stopAnimation(element) {
    element.style.border = "";
    element.style.animation = "";
  }