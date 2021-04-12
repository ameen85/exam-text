'use strict'

let table = document.getElementById('table');
let form = document.getElementById('form');
// min,max
// function Test(name, number) {
//     this.name = name;
//     // this.min=min;
//     // this.max=max;
//     this.number = number;
//     Test.all.push(this);
// }
// Test.all = [];
// console.log(Test.all);
// Test.prototype.rundomNumber= function(min,max){
//  let number= randomNum(5,20);
// }
let localData= JSON.parse(localStorage.getItem('tset'))
console.log(localData);

    for (let i = 0; i < localData.length; i++) {
       
        
        let trEle = document.createElement('tr');
        table.appendChild(trEle);
    
        let tdEle1 = document.createElement('td');
        trEle.appendChild(tdEle1);
        tdEle1.textContent = localData[i][0];
    
        let tdEle2 = document.createElement('td');
        trEle.appendChild(tdEle2);
        tdEle2.textContent = localData[i][1];
    
        
    
        let removeButton = document.createElement('button');
        trEle.appendChild(removeButton);
        removeButton.textContent = 'X';
    
        removeButton.addEventListener('click', remove)
        function remove() {
            table.removeChild(trEle);
            // Test.all.splice(item,1); //---------need to update localstorage---
            console.log('its work');
            // console.log(Test.all);

        }

    }    




// let form =document.getElementById('form');
form.addEventListener('submit', addshop);
let data=[];
function addshop(event) {
    event.preventDefault();

    let storeName = event.target.name.value;
    let number = event.target.number.value;
    data.push([storeName,number]);
    // console.log(data)
    // let newShop = new Test(storeName, number)
    localStorage.setItem('tset',JSON.stringify(data));
    form.reset();
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}