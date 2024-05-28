const container = document.querySelector('.container');
console.log(container);

var  square  = 16*16;
for (let i = 0; i<square; i++){
    var gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.textContent = i;
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
