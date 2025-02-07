document.addEventListener("DOMContentLoaded", function () {
  
    const btnClick = document.getElementById("btn-click");
    const btnToggle = document.getElementById("btn-toggle");
    const slider = document.getElementById("volume-slider");
    const sliderValue = document.getElementById("slider-value");
    const outputArea = document.getElementById("output-area");
  
    // Button click event
    btnClick.addEventListener("click", function () {
      outputArea.textContent = "Button was clicked!";
    });
  
    // Toggle button state
    let isToggled = false;
    btnToggle.addEventListener("click", function () {
      isToggled = !isToggled;
      outputArea.textContent = isToggled ? "The toggle is ON" : "The toggle is OFF";
    });
  
    // Slider event to display value
    slider.addEventListener("input", function () {
      sliderValue.textContent = slider.value;
    });
  });
  