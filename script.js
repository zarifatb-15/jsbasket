let buttons = document.querySelectorAll(".btn-primary");
// console.log(buttons)
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  // console.log(button);
  button.addEventListener("click", function (ev) {
    ev.preventDefault();
    // console.log(this.parentNode.firstElementChild.innerText);
    let id = this.parentNode.getAttribute("data-id");
    let str = this.previousElementSibling.previousElementSibling.innerText;

    let basketStr = localStorage.getItem("basket");
    let products = [];
    if (basketStr) {
      products = JSON.parse(basketStr);
    } 
    
    let existproduct=products.find(p=>p.id==id);
    if(existproduct){
      existproduct.count++;
    }
    else {
      let product = {
        id,
        name: this.parentNode.firstElementChild.inerText,
        desc: this.previousElementSibling.innerText,
        price: str.substring(str.indexOf(" ") + 1, str.indexOf("$")),
        url: this.parentNode.previousElementSibling.getAttribute("src"),
        count: 1
      };
      products.push(product);
    }

    localStorage.setItem("basket", JSON.stringify(products));
});
}
