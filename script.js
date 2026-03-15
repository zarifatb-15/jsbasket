let buttons=document.querySelectorAll(".btn-primary")
// console.log(buttons)
for(let i=0;i<buttons.length;i++){
    const button=buttons[i]
    // console.log(button);
    button.addEventListener("click", function(ev){
        ev.preventDefault();
        // console.log(this.parentNode.firstElementChild.innerText);
        let product={
            id:2,
            name:"",
            desc:this.previousElementSibling.innerText,
            price:this.previousElementSibling.previousElementSibling.innerText.str.substring(str.indexOf(" ")+1,str.indexOf("$")),
            url:this.parentNode.previousElementSibling.getArtibute("src")

        }
        
    })
    
}