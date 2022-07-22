var body=document.childNodes[1].childNodes[2]
var div=document.createElement("div")
div.setAttribute("class","main")

var headng=document.createElement("h1")
headng.setAttribute("class","head")
headng.innerHTML="To Do List"
var span =document.createElement("span")
span.innerHTML="Title:"
span.setAttribute("class","text")
var input_1=document.createElement("input")
input_1.setAttribute("value","")
input_1.setAttribute("class","input")
input_1.setAttribute("placeholder","Title")

var error=document.createElement("div")
error.setAttribute("class","error")

var span_2 =document.createElement("span")
span_2.innerHTML="Description:"
span_2.setAttribute("class","text_2")
var input_2=document.createElement("textarea")
input_2.setAttribute("value","")
input_2.setAttribute("class","input_2")
input_2.setAttribute("placeholder","Description")

var error_2=document.createElement("div")
error_2.setAttribute("class","error_2")

var addBtn=document.createElement("button")
addBtn.setAttribute("onclick","add()")
addBtn.setAttribute("class","add_btn")
addBtn.innerHTML="ADD"



var dataStorage=localStorage.getItem("task")
var arrData=[]
if(dataStorage!==null){
  dataStorage=JSON.parse(dataStorage)
  arrData=dataStorage
}
var update=null
function add(){
if(input_1.value==="" && input_2.value === "" || input_1.value==="" ||input_2.value==="" ){
  error.innerHTML="please enter Title"
  error_2.innerHTML="please enter Description"
  return false;
  
}
else if(input_1.value===""){
  error.innerHTML="please enter Title"
  return false;
}
else if(input_2.value==="" ){
  error_2.innerHTML="please enter Description"
  return false;
}
arrData.unshift(obj={title:input_1.value,descripton:input_2.value})
localStorage.setItem("task",JSON.stringify(arrData))
window.location.reload()
}

// modal through dom 
var main_div = document.createElement("div")
// main_div.setAttribute("style","width:300px; margin:05% 20% 0% 20%")
main_div.setAttribute("class","modal fade")
main_div.setAttribute("style","width:80%;height:600px;padding:5% 13% 5% 13%;background-color:;margin-left:10%;margin-top:0% ")
main_div.setAttribute("id","exampleModal")
main_div.setAttribute("tabindex","-1")
main_div.setAttribute("aria-labelledby","exampleModalLabel")
main_div.setAttribute("aria-hidden","true")
var sec_div=document.createElement("div")
sec_div.setAttribute("class","modal-dialog")
var third_div=document.createElement("div")
third_div.setAttribute("class","modal-content")
var fourth_div=document.createElement("div")
fourth_div.setAttribute("class","modal-header")
fourth_div.setAttribute("style","margin-bottom:30px")
var headg5=document.createElement("h5")
headg5.setAttribute("class","modal-title")
headg5.setAttribute("id","exampleModalLabel")
headg5.innerHTML="Modal title"
headg5.setAttribute("style","color:rgb(59, 56, 56);")
var closeBtn=document.createElement("button")
closeBtn.setAttribute("class","btn-close")
closeBtn.setAttribute("data-bs-dismiss","modal")
closeBtn.setAttribute("aria-label","Close")
var fifth_body=document.createElement("div")
fifth_body.setAttribute("class","modal-body")
fifth_body.setAttribute("style","padding:0% 10% 5% 15%")
var bodyModal_inner=document.createElement("div")
bodyModal_inner.setAttribute("class","form-floating mb-3")

var title_input=document.createElement("input")
title_input.setAttribute("placeholder","Title")
// title_input.setAttribute("class","form-control")
title_input.setAttribute("id","floatingInput")
title_input.setAttribute("style"," padding:15px 20px 15px 20px; width:500px;background-color:white;margin-right:10%;border:1px solid white;margin-top:30px")
title_input.setAttribute("value","")
title_input.setAttribute("placeholder","Title")

var descrp_input=document.createElement("textarea")
descrp_input.setAttribute("style","margin-top:40px;")
descrp_input.setAttribute("style","background-color:white;")
descrp_input.setAttribute("style","padding:05px 20px 03px 20px; width:500px;margin-left:0%;margin-top:30px;background-color:white;border:1px solid white")
descrp_input.setAttribute("id","floatingInput")
descrp_input.setAttribute("placeholder","Description")
var modal_footer=document.createElement("div")
modal_footer.setAttribute("class","modal-footer")
modal_footer.setAttribute("style","padding:5% 0% 0% 0%")
var close2btn=document.createElement("button")
close2btn.setAttribute("class","btn btn-secondary")
close2btn.setAttribute("data-bs-dismiss","modal")
close2btn.innerHTML="Close"
close2btn.setAttribute("style","background-color:rgb(59, 56, 56)")

var saveChanges=document.createElement("button")
saveChanges.setAttribute("class","btn btn-secondary")
saveChanges.setAttribute("data-bs-dismiss","modal")
saveChanges.innerHTML="Save Changes"
saveChanges.setAttribute("style","background-color:rgb(59, 56, 56)")

saveChanges.setAttribute("onclick",`save()`)

main_div.appendChild(sec_div)
sec_div.appendChild(third_div)
third_div.appendChild(fourth_div)
fourth_div.appendChild(headg5)
fourth_div.appendChild(closeBtn)
main_div.appendChild(fifth_body)
fifth_body.appendChild(bodyModal_inner)
bodyModal_inner.appendChild(title_input)

bodyModal_inner.appendChild(descrp_input)
main_div.appendChild(modal_footer)
modal_footer.appendChild(close2btn)
modal_footer.appendChild(saveChanges)
div.appendChild(main_div)
// modal end
var ol=document.createElement("ul")
ol.setAttribute("class","ol")
ol.setAttribute("style","position: relative;top:50px")
ol.setAttribute("style","margin-right:30px;")

ol.setAttribute("class","list-group list-group-numbered")
for(var i =0;i<arrData.length;i++){

var li=document.createElement("li")
li.setAttribute("class","list-group-item  justify-content-between align-items-start")
var list_div=document.createElement("div")
list_div.setAttribute("class","ms-2 me-auto")



var inner_list_div=document.createElement("div")
inner_list_div.setAttribute("class","fw-bold")
list_div.innerHTML=arrData[i].title

var text_d=document.createElement("span")
text_d.innerHTML=arrData[i].descripton

var editBtn=document.createElement("button")
editBtn.setAttribute("class","btn btn-primary")
editBtn.setAttribute("data-bs-toggle","modal")
editBtn.setAttribute("data-bs-target","#exampleModal")
editBtn.setAttribute("style","margin-left:20%;margin-top:02%")
editBtn.setAttribute("onclick",`edit(${i})`)
editBtn.innerHTML="Edit"
editBtn.setAttribute("class","edit_btn")

var deleteBtn=document.createElement("button")
deleteBtn.setAttribute("class","btn btn-primary")
deleteBtn.setAttribute("onclick",`dlt(${i})`)
deleteBtn.innerHTML="Delete"
deleteBtn.setAttribute("class","delete_btn")


ol.appendChild(li)

li.appendChild(list_div)

list_div.appendChild(inner_list_div)
inner_list_div.appendChild(text_d)
li.appendChild(editBtn)
li.appendChild(deleteBtn)
}

function edit(id){
update =id
 }

function save(){
  arrData.splice(update,1,{title:title_input.value,descripton:descrp_input.value})
  localStorage.setItem("task",JSON.stringify(arrData))
  window.location.reload()
  
  }
  function dlt(id){
  arrData.splice(id,1)
    localStorage.setItem("task",JSON.stringify(arrData))
    window.location.reload()
  }

  div.appendChild(headng)
  div.appendChild(span)
div.appendChild(input_1)
div.appendChild(error)
div.appendChild(span_2)
div.appendChild(input_2)
div.appendChild(error_2)
div.appendChild(addBtn)
div.appendChild(ol)

body.appendChild(div)
console.log(body)
console.log(arrData)
