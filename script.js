const container = document.querySelector('#container');

//const content = document.createElement('div');
//content.classList.add('content');
//content.textContent = 'This is the glorious text-content!';
//container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = 'Hey I’m red!'
paragraph.style.color = "red";
container.appendChild(paragraph);

var h3 = document.createElement('h3');
h3.textContent = "I’m a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

var div1 = document.createElement('div');

var h1 = document.createElement('h1');
h1.textContent = 'I’m in a div'

var p2 = document.createElement('p');
p2.textContent = 'ME TOO!'

div1.appendChild(h1);
div1.appendChild(p2);
container.appendChild(div1);




