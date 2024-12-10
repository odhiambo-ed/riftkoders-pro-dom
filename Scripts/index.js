// let head = document.getElementById('heading');
// head.textContent = "Hello, it's me Ansh Patel";

// head.addEventListener('click', function (e) {
//     head.style.display = "none";
// })

const myForm = document.getElementById('form1');
const myDetails = document.getElementById('details');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;

  const newDetails = document.createElement('p');
  newDetails.textContent = `Name: ${name}`;

  myDetails.appendChild(newDetails);

  myForm.reset();
});