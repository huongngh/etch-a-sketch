const container = document.querySelector('.container');
createGrid(16);

const button = document.querySelector('.button');
button.addEventListener("click",()=>{
    
})

function getUserInput(){
    let input = prompt("Size of the new grid: ");
    console.log(input);
    while (input > 100){
        input = getUserInput();
        console.log(input);
    }
    return input;
}

function createGrid(gridSize){
    for (let i = 0; i<gridSize*gridSize; i++){
        var gridItem = document.createElement('div');
        var flexBasic = (100/gridSize).toFixed(2);

        gridItem.classList.add('gridItem');
        gridItem.textContent = '';
        
        gridItem.style.flex = '1 0 calc(' + flexBasic + '%)';
        gridItem.style.width = 'calc(' + flexBasic + '%)';
        gridItem.style.height = 'calc(' + flexBasic + '%)';
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
}






