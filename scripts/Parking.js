
// function Parking (lots){

// PIXI.Sprite.call(this);

//this.texture = new PIXI.Texture.fromImage("images/parking.png");

// this.parkLots = [];
// this.numberOfLots = lots;
//this.generateLots();


// this.position.x = 0;
// this.position.y = 0;

//this.money = 0;

//};

//Parking.prototype = Object.create(PIXI.Sprite.prototype);

//Parking.prototype.constructor = Parking;

// Parking.prototype.generateLots = function (){
//     //gives the parameters of ParkLot

//     var x = 75;
//     var y = 140;
//     var id = 0;

//     for (var i = 0; i < 9; i ++) {

//        this.parkLots.push(new ParkLot(id,x,y,0));
//         this.addChild(this.parkLots[id]);
//         id++;
//         x+=140;
//     }

//     x = 1130;
//     y = 545;
   
//     for (var i = 0; i < 3; i++) {
//         this.parkLots.push(new ParkLot(id,x,y));
//         this.addChild(this.parkLots[id]);
//         y+= 140;
//         id++;
//     }

//     x = 150;
//     y = 825;

//     for (var i = 0; i < 3; i++) {

//         this.parkLots.push(new ParkLot(id,x,y));
//         this.addChild(this.parkLots[id]);
//         id++;
//         y-= 140;
//     }
// };

