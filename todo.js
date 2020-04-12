
let jobs =  [];
let addButton = document.getElementById('add');
let addInput = document.getElementById('newtask');

addButton.addEventListener("click",add);
addInput.addEventListener("keydown",event =>{
    if(event.keyCode === 13 && addInput.value){
        add();
    }
});

function onJobs(){
    return jobs;
}

function add(){
    const task = document.getElementById("newtask").value;
    if(task === ''){
        alert("Please enter your job");
    } else{
        document.getElementById("newtask").value= "";
        jobs.push(task);
    }
    showList();
}

function remove(){
    const id = this.getAttribute('id');
    const str = document.getElementById(`job${id}`);
    const elementToRemove = (str.innerText).slice(0,-6);
    for(let i = 0; i<jobs.length;i++){
        if(elementToRemove === jobs[i]){
            deleted=jobs.splice(i,1);
        }
        else{
            jobs=jobs;
        }
    }
    showList();
}

function showList(){
    let showjobs= onJobs();
    let append = '<ul id="foo">';
    for(let i=0; i<showjobs.length;i++){
        append += '<li id= "job'+i+'">' + showjobs[i] +'<button class="remove" id="' + i  + '">Delete</button></li>';
    }
    append+='</ul>';
    document.getElementById('todos').innerHTML = append;

    /*const ul = document.getElementById("foo");
    const items = ul.getElementsByTagName("li");
    for (let i =0 ;i<items.length;i++){
        console.log(items[i].innerText);
    }*/
    const buttons = document.getElementsByClassName("remove");
    for (let j=0;j<buttons.length; j++){
        buttons[j].addEventListener("click",remove);
    }
}


