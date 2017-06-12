class Player{
    private div: HTMLElement;
    public x:number;
    public y:number;
    public width:number;
    public height:number;


    constructor(x:number, y:number){
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.div.style.left = x + "px";
        this.div.style.top = y + "px";

    }
}