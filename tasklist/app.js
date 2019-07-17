
const inp = document.querySelector('#input');
const btn = document.querySelector('#button');
const lis = document.querySelector('#list');
const clear = document.querySelector('#clear-button');
const filter = document.querySelector('#filter');





btn.addEventListener('click', addTask);
lis.addEventListener('click', delTask);
clear.addEventListener('click', remTasks);
filter.addEventListener('keyup', filTask);



document.addEventListener('DOMContentLoaded', getTask);




function getTask() {
  let tasks;
  if(localStorage.getItem('tasks')===null)
    tasks=[];
  else
    tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(function(task){
      const li = document.createElement('li');
      li.className='list-group-item';


      li.appendChild(document.createTextNode(task));
      const btn = document.createElement('button');
      btn.innerHTML='delete';
      btn.className='del-btn';
      btn.className='btn btn-danger ml-5 float-right';

      inp.value='';

      list.appendChild(li);
      li.appendChild(btn);

    }) 
}

function addTask(e) { 
  if(inp.value ==='') {
    alert('add task');
  }
 if(inp.value!==''){
  const li = document.createElement('li');

  li.className='list-group-item';

  li.appendChild(document.createTextNode(inp.value));
  const btn = document.createElement('button');
  btn.innerHTML='delete';
  btn.className='del-btn';
  btn.className='btn btn-danger ml-5 float-right';

  
  list.appendChild(li);

  addTaskToLS(inp.value);
  li.appendChild(btn);

  
  inp.value='';
  

 }
} 

function addTaskToLS(task) {
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }
    
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
    
  
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

}


function delTask(e) {  
  if(e.target.parentElement.className ==='list-group-item') {
    e.target.parentElement.remove() ;
      removeTaskFromLS(e.target.parentElement);

  }
      
}

function removeTaskFromLS(taskitem) {
  let tasks;
  //console.log(taskitem.firstChild);
  //console.log(taskitem);
  //console.log(taskitem.textContent);
  const new_string = taskitem.textContent.replace('delete', '');
  console.log(new_string);


 // console.log(document.querySelector('li').childNodes[0].wholeText);



  if(localStorage.getItem('tasks')===null){
    tasks=[];
  } 
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){

    if(new_string === task) {
      tasks.splice(index,  1);
    }
  }
  );
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

function remTasks() {  
  list.innerHTML='';
  clearTasksFromLS();
}

function clearTasksFromLS(){
  localStorage.clear();
}


function filTask(e) {
  
  const text=e.target.value.toLowerCase();
  //console.log(text);
 //// if(text !== ''){
  document.querySelectorAll('.list-group-item').forEach
  (function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display='block';
    }
    else{
      task.style.display='none';
    }
  });

   /*else {
    document.querySelectorAll('.list-item').forEach(function(task) {
        task.style.display = 'block';
    });
  }*/
}

 