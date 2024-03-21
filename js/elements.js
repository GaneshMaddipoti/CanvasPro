class Panel {
    x;
    y;
    width;
    height;
    bgColor;
    title;

    constructor(x, y, width, height, bgColor, title){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bgColor = bgColor;
        this.title = title;
    }

    draw(){
        context.fillStyle = this.bgColor;
        drawShadow();
        context.fillRect(this.x, this.y, this.width, this.height);

        context.restore();
        context.fillText(this.title, this.x + 20, this.y+ 30);
        context.save();
    } 

}

function drawShadow() {
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowColor = "Black";
    context.shadowBlur = 5;
}