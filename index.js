// Create a button and add it to the page
const button = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);

// Add a click event listener to show an alert
button.addEventListener('click', () => {
  alert('Button was clicked!');
});