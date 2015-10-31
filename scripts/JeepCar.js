function Jeep(){

    Car.call(this);
    this.texture = new PIXI.Texture.fromImage("frame01_01.png");
    this.scale = {x: 0.45, y:0.45};
    this.rotation = 3.14/2;
    this.tax = 0.50;
    this.setText();    
}

Jeep.prototype = Object.create(Car.prototype);

Jeep.prototype.constructor = Jeep;