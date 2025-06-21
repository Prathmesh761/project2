//Adding new Feature
let btn=document.querySelector("#btn");
let head=document.querySelector("#heading");
btn.addEventListener(cancelIdleCallback,()=>{
    head.style.innerText="Button CLicked";
})