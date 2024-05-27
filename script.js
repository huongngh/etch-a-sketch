const container = document.querySelector("container");

var  square  = 16*16;
for (let i = 0; i<square; i++){
    const grid = document.createElement("div");
    grid.addClassList = "grid";
    grid.textContent = i;
}

container.appendChild(grid);
