function PoliceCar(){

    Car.call(this);
    this.texture = new PIXI.Texture.fromImage("frame03_03.png");
    this.scale = {x: 0.45, y:0.45};
    this.rotation = 3.14/2;
    
}


PoliceCar.prototype = Object.create(Car.prototype);
PoliceCar.prototype.constructor = PoliceCar;