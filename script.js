const container = document.querySelector('.container');
console.log(container);

var  square  = 16*16;
for (let i = 0; i<square; i++){
    var gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.textContent = '';
    console.log(gridItem);
    container.appendChild(gridItem);
}

const gridItems = document.querySelectorAll('.gridItem');
gridItems.forEach(gridItem =>{
    gridItem.addEventListener('mouseover',()=>{
        gridItem.style.backgroundColor = 'red';
    })
    gridItem.addEventListener('mouseout',()=>{
        gridItem.style.backgroundColor = '';
    })
})

const button = document.querySelector('.button');
button.addEventListener("click",()=>{
    function getUserInput(){
        return prompt("Size of the new grid: ")
    }
    let gridSize = getUserInput();
    console.log(gridSize);
    while (gridSize > 100){
        gridSize = getUserInput();
        console.log(gridSize);
    }    
})

