let count = 0;
let total = 0;
let income = 0;
let expense = 0;
function onLoad(total,income,expense){
    document.querySelector(".budget__value").innerHTML=total;
    document.querySelector(".budget__income--value").innerHTML = income;
    document.querySelector(".budget__expenses--value").innerHTML = expense;
}

function onAddEventHandler() {
    alert("add");
    let type = document.querySelector(".add__type").value;
    let description = document.querySelector(".add__description").value;
    let amount = Number(document.querySelector(".add__value").value);
    console.log(description);
    console.log(type);
    console.log(amount);
    count++;
    generateexpense(type,description,amount);
}

    


function generateexpense(type,description,amount) {
    let parentElement = document.createElement("div");
    parentElement.classList.add("item");
    parentElement.classList.add("clearfix");
    parentElement.id = count;

    let parentElementFirstChild = document.createElement("div");
    parentElementFirstChild.classList.add("item__description");
    let parentElementFirstChildNode = document.createTextNode(description);
    parentElementFirstChild.appendChild(parentElementFirstChildNode);
    parentElement.appendChild(parentElementFirstChild);

    let parentElementSecondChild = document.createElement("div");
    parentElementSecondChild.classList.add("right");
    parentElementSecondChild.classList.add("clearfix");

    let secondChildFirstElement = document.createElement("div");
    secondChildFirstElement.classList.add("item__value");
    let secondChildFirstElementNode = document.createTextNode(amount);
    secondChildFirstElement.appendChild(secondChildFirstElementNode);
    parentElementSecondChild.appendChild(secondChildFirstElement);

    let secondChildSecondElement = document.createElement("div");
    secondChildSecondElement.classList.add("item__delete");
    let secondChildSecondElementButton = document.createElement("button");
    secondChildSecondElementButton.classList.add("item__delete--btn");
    let secondChildSecondElementITag = document.createElement("i");
    secondChildSecondElementITag.classList.add("ion-ios-close-outline");
    secondChildSecondElementButton.appendChild(secondChildSecondElementITag);
    secondChildSecondElement.appendChild(secondChildSecondElementButton);
    parentElementSecondChild.appendChild(secondChildSecondElement);
    parentElement.appendChild(parentElementSecondChild);

    let historyglobalElement;
    if(type == 'exp'){
      let element = document.querySelector(".expenses__list");
      element.appendChild(parentElement);
      total -=amount;
      expense+=amount;
    }
    else{
        total +=amount;
        income+=amount;
     let element = document.querySelector(".income__list");
      element.appendChild(parentElement);
    }
    onLoad(total,income,expense);
    document.querySelector(".budget__value").innerHTML = total;

}