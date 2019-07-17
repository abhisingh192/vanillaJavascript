
const github = new Github;
const ui = new UI;

const inp = document.querySelector('#input');
const pro = document.querySelector('#profile');
inp.addEventListener('keyup', searchUser);

function searchUser(e) {

  const val = e.target.value;

  if(val !== '') { 
    github.getUser(val)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          //show alert 
          ui.alertMsg();
        }
        else {
          //show profile
          ui.showProile(data.profile);
        }
      })

  }
  else{
      // clear profile
      ui.clearProfile();
      pro.innerHTML = '';

  }

}



