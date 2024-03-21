
window.addEventListener('resize', draw);

function initContext() {
    context.font = "25px Roboto, sans-serif";
    context.fillStyle = "azure";
}


function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    initContext();
    context.save();

    let system = new Panel(10, 10, window.innerWidth-20, 
        window.innerHeight-20, "#44445d", "System");        
    system.draw();

    let hardDisk = new Panel(60, 60, 200, 200, "#55556d", "Hard Disk");
    hardDisk.draw();

    let ram = new Panel(320, 60, 200, 200, "#55556d", "RAM");
    ram.draw();
    
}

draw();


