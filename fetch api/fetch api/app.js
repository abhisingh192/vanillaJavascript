const btn1 = document.querySelector('#text');
const btn2 = document.querySelector('#json');
const btn3 = document.querySelector('#external');

btn1.addEventListener('click', fetchText);
btn2.addEventListener('click', fetchJson);
btn3.addEventListener('click', fetchExternal);

function fetchText() {
  fetch('test.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      document.querySelector('#output').innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    })
}

function fetchJson() {
  fetch('test.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      output = '';
      data.forEach(post => {
        output +=`<li class="list-group-item">${post.city}</li>`
      });
      document.querySelector('#output').innerHTML = output;

    })
    .catch(function(err){
      console.log(err);
    })
}

function fetchExternal() {
  fetch('https://api.github.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      output = '';
      data.forEach(post => {
        output+=`<li class="list-group-item">${post.login}</li>`
      });
      document.querySelector('#output').innerHTML = output;

    })
    .catch(function(err){
      console.log(err);
    })
}



