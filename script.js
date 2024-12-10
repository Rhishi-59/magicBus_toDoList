let input=document.querySelector("#inp");
let text= document.querySelector(".list");


function add(){
    if(input.value==""){
        alert("please enter the task ");
    }else{
        let newElement = document.createElement("li");
        newElement.innerHTML=`${input.value} "<i>delete</i
        >"`;
        text.appendChild(newElement);
        newElement.querySelector("i").addEventListener("click",remove);
        function remove(){
              newElement.remove();
        }
        
      
    }

}

