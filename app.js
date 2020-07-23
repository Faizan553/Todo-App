var list=document.getElementById("list");
function add(){
var todoList=document.getElementById("todo-list");
var p=document.createElement("p");

var text=document.createTextNode(todoList.value);
p.appendChild(text);
list.appendChild(p)

var edit=document.createElement("button")
edit.setAttribute("class","btn btn-primary btn1 left")
var edittext=document.createTextNode("Edit")
edit.appendChild(edittext);
p.appendChild(edit);
edit.setAttribute("onclick","edit(this)")

var btn=document.createElement("button")
btn.setAttribute("class","btn btn-primary btn left1");


var del=document.createTextNode("Delete")

btn.appendChild(del)
p.appendChild(btn)
btn.setAttribute("onclick","remove(this)")
todoList.value=""


}
function remove(e){
 e.parentNode.remove()
 
}
function edit(f){
var text= f.parentNode.firstChild
var edit = prompt("Enter the new value");

f.parentNode.firstChild.nodeValue=edit;

}
function deleteall(){
    list.innerHTML="";
}