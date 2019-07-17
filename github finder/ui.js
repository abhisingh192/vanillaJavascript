class UI {
    constructor() {
        this.profile = document.querySelector('#profile');

    }

    showProile(user) {
         this.profile.innerHTML = `
         
         <div class="container row">
         <div class="col-6">
            <img src="${user.avatar_url}"><br>
         </div>
            
            <div class="col-6">
                <span class="bg-primary"> Public repos: ${user.public_repos}</span>
                <span class="bg-secondary"> Public gists: ${user.public_gists}</span>
                <span class="bg-warning"> Followers: ${user.followers}</span>
                <span class="bg-success"> Following: ${user.following}</span><br><br>

                <ul class="list-group">
                <li class="list-group-item"> Company: ${user.company}</li>
                <li class="list-group-item"> Website: ${user.blog}</li>
                <li class="list-group-item"> Location: ${user.location}</li>
                <li class="list-group-item"> Member Since: ${user.created_at}</li>

                </ul>

             <a href="${user.html_url}" target="_blank" > view profile </a> 
            </div>

         </div>
         ` ;
    }

    clearProfile() {
        this.profile.innerHTML ='';
    }

    alertMsg() {
        console.log('profile not there')
        //const alert = document.createElement('h3');
        //alert.style.background = 'solid';
        //alert.style.backgroundColor = 'red';
        //alert.innerText = " The profile does not exist";

        //this.profile.appendChild(alert);
        this.profile.innerHTML=`
        <div>
            <h2 class="bg-danger"> This profile does not exist </h2>
        </div>
        `;


    }

}

