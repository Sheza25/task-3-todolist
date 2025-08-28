const inputTask=document.getElementById("task");
const taskList=document.getElementById("taskList");

function addTask(){
  if(inputTask.value===''){
    alert("please enter  the task");
  }
  else{
  let li=document.createElement("li");
  li.innerHTML=inputTask.value;
  taskList.appendChild(li);
  let span= document.createElement("span");
  span.innerHTML="\u00d7";
  li.appendChild(span);
  }
  inputTask.value="";
}
taskList.addEventListener("click", function(e){
  if (e.target.tagName=== "LI"){
    e.target.classList.toggle("checked");

  }
  else if(e.target.tagName=== "SPAN"){
    e.target.parentElement.remove();
  }
},false);