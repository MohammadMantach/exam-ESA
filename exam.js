const plus=document.getElementById("plus");
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const radio1=document.getElementById("radio1");
const radio2=document.getElementById("radio2");
const general=document.getElementById("general");
let gLenght=general.lenght;
const gButtons=document.getElementsByClassName("general");
const fruits=document.getElementById("fruits");
const legumes=document.getElementById("legumes");
const gFruits = general.getElementsByClassName("fruits");
const srchbtn =document.getElementById("srchbtn");
const delbtn = document.getElementById("delbtn");
const srchtxt = document.getElementById("srchtxt");
const container= document.getElementById("container");
const validPlusg = () => {
    
        if (plus.value != "" && (radio1.checked==true || radio2.checked==true) ){
           if(radio1.checked==true){   newButton = `<button type="button" class="btn btn-primary mt-2 fruits general">Fruits!- ${plus.value}</button>`;}
           else  newButton = `<button type="button" class="btn btn-primary mt-2 legumes general" >Legumes!- ${plus.value}</button>`;
    
        general.innerHTML += newButton;
        general.querySelectorAll('button').forEach(addClickListener);
        addClickListener(addedButton);}
        else{window.alert("Please Fill the blancked data");}
}
const validPluss = () => {
    if (plus.value != "" && (radio1.checked==true || radio2.checked==true) ){
        if(radio1.checked==true){ fruits.innerHTML += `<button type="button" class="btn btn-primary mt-2 fruits">Fruits!- ${plus.value}</button>`;}
        else legumes.innerHTML += `<button type="button" class="btn btn-primary mt-2 legumes">Legumes!- ${plus.value}</button>`;
    }
    else{window.alert("Please Fill the blancked data");}
}
const search = () => { 
    
        const searchText = document.getElementById("srchtxt").value.toLowerCase();
        if (searchText == "") window.alert("Please type the name of Legumes or Fruits that you want to Search"); 
        else{
        const divs =container.querySelectorAll("button");
        divs.forEach(div => {
            div.classList.remove("highlight");
        });
        divs.forEach(div => {
            if (div.textContent.toLowerCase().includes(searchText)) {
                div.classList.add("highlight");
            }
        });
    }
}
const del = () => { 
    const searchText = document.getElementById("srchtxt").value.toLowerCase();
    if (searchText == "") window.alert("Please type the name of Legumes or Fruits that you want to Delete"); 
    else{
    const divs =container.querySelectorAll("button");
    divs.forEach(div => {
        div.classList.remove("none");
    });
    divs.forEach(div => {
        if (div.textContent.toLowerCase().includes(searchText)) {
            div.classList.add("none");
        }
    });
}
}




const addClickListener = (button) => {
    button.addEventListener('click', (event) => {
        const clickedButton = event.target;
        if (clickedButton.classList.contains("general")) {
            if (clickedButton.classList.contains("fruits")) {
                fruits.innerHTML += `<button type="button" class="btn btn-primary mt-2 fruits">${clickedButton.textContent}</button>`;
            } else if (clickedButton.classList.contains("legumes")) {
                legumes.innerHTML += `<button type="button" class="btn btn-primary mt-2 legumes">${clickedButton.textContent}</button>`;
            }
            clickedButton.style.display = "none";
        }
    });
};

container.querySelectorAll('button').forEach(addClickListener);




btn1.addEventListener("click", validPluss);
btn2.addEventListener("click", validPlusg);
srchbtn.addEventListener("click",search);
delbtn.addEventListener("click",del);


// -------------------------------------------------------------------------