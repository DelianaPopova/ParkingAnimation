
function Bus(){

    Car.call(this);
    this.texture = new PIXI.Texture.fromImage("frame02_02.png");
    this.scale = {x: 0.45, y:0.45};
    this.rotation = 3.14/2;
    this.tax = 0.75;
    this.setText();
}

Bus.prototype = Object.create(Car.prototype);

Bus.prototype.constructor = Bus;