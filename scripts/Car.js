function Car(){
    PIXI.Sprite.call(this);
    this.texture;
    this.anchor = {x: 0.5, y: 0.5};
    Car.regNums = [];
    this.interactive = true;
    this.startTime;
    this.tax = 0;



}


Car.prototype = Object.create(PIXI.Sprite.prototype);

Car.prototype.constructor = Car;

Car.prototype.randNumber = function () {
    var registration = "";
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberss = "0123456789";
    var check = true;
    while(check) {

        for (var i = 0; i < 2; i++) {
            registration += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        for (var i = 0; i < 4; i++) {
            registration += numberss.charAt(Math.floor(Math.random() * numberss.length));
        }
        for (var i = 0; i < 2; i++) {
            registration += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        if ($.inArray(registration, Car.regNums) == -1) {
            check = false;
        }
        return registration;
    }
};

Car.prototype.setText = function (){
    this.regNum = this.randNumber();
    Car.regNums.push(this.regNum);
    this.text = new PIXI.Text(this.randNumber());
    this.text.style = {font: 'bold 35px Arial'};
    this.text.position.x = 280;//it's y!
    this.text.position.y = 85;//it's x!
    this.text.rotation = - Math.PI/2;//these are fucking radians!
    this.addChild(this.text);
};

Car.prototype.click = function () {

}




    // if (!this.parkLotCar.isEmpty) {
    //     if (!this.parkLotCar.selected) {
    //         console.log(this.parkLotCar.selected);
    //         this.parkLotCar.car.alpha = 0.5;
    //         this.parkLotCar.selected = true;
    //         ParkLot.selectedIDs.push(this.parkLotCar.id);
    //         //ParkLot.selectedIDs[this.id] = this;//selectedIDs is an Object. Key = ID , Value = ParkLot
    //         //console.log(ParkLot.selectedIDs);
    //     } else {
    //         this.parkLotCar.car.alpha = 1;
    //         this.parkLotCar.selected = false;
    //         var index =  ParkLot.selectedIDs.indexOf(this.parkLotCar.id);
    //         ParkLot.selectedIDs.splice(index,1);
    //         //delete ParkLot.selectedIDs[this.parkLotCar.id];
    //         console.log(ParkLot.selectedIDs);
    //     }
    // }
