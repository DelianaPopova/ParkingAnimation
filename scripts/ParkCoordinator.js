//function ParkCoordinator(stage, lots) {
    // this.stage = stage;
    // this.parking = new Parking(lots);
    // this.stage.addChild(this.parking);
    //console.log(this.parking);

    //messages
    // this.messageBox = new PIXI.Text("", {font: "40px Arial", fill: "black"});
    // this.messageBox.position.x = 1300;
    // this.messageBox.position.y = 500;
    // this.stage.addChild(this.messageBox);
    
    // this.messages = new Messages();

    //clock
    // this.showTimer = new PIXI.Text("Clock", {
    //     font: "40px Arial",
    //     fill: "red"
    // });
    // this.showTimer.position.x = 1400;
    // this.showTimer.position.y = 700;
   
    //this.stage.addChild(this.showTimer);
    //this.clock = new Timer(this.showTimer);

    // this.taxMessage = new PIXI.Text("", {
    //     font: "40px Arial",
    //     fill: "green"
    // });
    // this.taxMessage.text = this.messages.EARNED_AMOUNT_MONEY;    
    // this.taxMessage.position = {x: 1400, y: 600};
    // this.stage.addChild(this.taxMessage);

   // this.animation = new Animation();
    //this.numberOfPoliceCars = 0;

//     this.endOfAnimation = function(parklot) {
//        // console.log(parklot);
//         this.parking.removeChild(parklot.car);
//         parklot.car = null;
//         parklot.isEmpty = true;
//         parklot.selected = false;
//         console.log("deleted car");
//     };

//     this.animation.on("myEvent", this.endOfAnimation, this);
//     //console.log(this.animation.emit("myEvent",this));

//     this.afterAnimForInsertAddCarToParklot = function(parklot) {
//         parklot.addChild(parklot.car);
//         var date = new Date();
//         var milliseconds = date.getTime();
//         parklot.car.startTime = milliseconds;
//         parklot.car.position = {x: 0, y: 0};
//     };

//     this.animation.on("EventForAddChild", this.afterAnimForInsertAddCarToParklot, this);
// };

// ParkCoordinator.prototype.showStatistics = function() {
//     var emptyParklots = this.parking.parkLots.filter(function(parklot) {
//       return  parklot.isEmpty == true;
//     }).length;
//     var nonEmptyParklots = this.parking.parkLots.length - emptyParklots;
//     this.messageBox.text = emptyParklots + this.messages.FREE_LOTS + nonEmptyParklots + this.messages.BUSY_LOTS;
//     //console.log("nonEmptyParklots " + nonEmptyParklots);
// };

// ParkCoordinator.prototype.calculateTax = function(car) {
//     var date = new Date();
//     var currentTime = date.getTime();
//     var carTime = car.startTime;
//     var stayTimeInSec = Math.ceil((currentTime - carTime) / 1000);
//     var stayTimeInHours = Math.ceil(stayTimeInSec / 10);
//     this.parking.money += stayTimeInHours * car.tax;
//     this.taxMessage.text = this.messages.EARNED_AMOUNT_CURRENT_MONEY + parseFloat(Math.round(this.parking.money * 100) / 100).toFixed(2) + " $";
// };

// // ParkCoordinator.prototype.addPoliceCar = function() {
//     if (this.numberOfPoliceCars == 3) {
//         return this.messageBox.text =  this.messages.NO_MORE_POLICE_CARS;
//     }
//     for (var i = 0; i < this.parking.parkLots.length; i++) {
//         var currentParkLot = this.parking.parkLots[i];
//         if (this.isParkLotAvailableForPoliceCar(currentParkLot)) {
//             currentParkLot.car = new PoliceCar();
//             currentParkLot.isEmpty = false;
//             this.numberOfPoliceCars++;
//             this.added = true;
//             if (this.added) {
//                 this.messageBox.text = this.messages.THE_POLICE_WAS_ADDED;
//             }
//             this.parking.addChild(currentParkLot.car); ///////////////parking.addChild
//             currentParkLot.car.position.x = 800;
//             currentParkLot.car.position.y = 1000;
//             this.animation.InMovementCar(currentParkLot);
//             break;
//         } else {
//             this.messageBox.text = this.messages.NO_MORE_POLICE_CARS;
//         }
//     }
// };

// ParkCoordinator.prototype.addCar = function() {
//     var added = false;

//     function createRandomCar() {
//         var random = Math.floor((Math.random() * 2));
//         if (random === 1) {
//             return new Jeep();
//         } else {
//             return new Bus();
//         }
//     }
//     for (var i = 0; i < this.parking.parkLots.length; i++) {
//         var currentParkLot = this.parking.parkLots[i];
//         if (this.isParkLotAvailableForCar(currentParkLot)) {
//             currentParkLot.car = createRandomCar();
//             currentParkLot.isEmpty = false;
//             added = true;

//             if (added) {
//                 this.messageBox.text = this.messages.ADDED_CAR;
//             } else {
//                 this.messageBox.text = this.messages.NO_FREE_SPACES;
//             }
//             this.parking.addChild(currentParkLot.car); ///////////////parking.addChild
//             currentParkLot.car.position.x = 800;
//             currentParkLot.car.position.y = 1000;
//             console.log("ksdfjbksdbgdkbg " + currentParkLot.car.rotation);
//             this.animation.InMovementCar(currentParkLot);

//             break;
//         }
//     }
// };

// ParkCoordinator.prototype.isParkLotAvailableForCar = function(parkLot) {
//     if (!parkLot.isEmpty) {
//         return false;
//     }
//     var index = this.parking.parkLots.indexOf(parkLot);
//     var leftParkLot, rightParkLot;
//     if (index > 0) {
//         leftParkLot = this.parking.parkLots[index - 1];
//     }
//     if (index < this.parking.parkLots.length - 1) {
//         rightParkLot = this.parking.parkLots[index + 1];
//     }
//     if (leftParkLot != undefined && leftParkLot.car instanceof PoliceCar) {
//         return false;
//     }
//     if (rightParkLot != undefined && rightParkLot.car instanceof PoliceCar) {
//         return false;
//     }
//     return true;
// };

// ParkCoordinator.prototype.isParkLotAvailableForPoliceCar = function(parkLot) {
//     if (!parkLot.isEmpty) {
//         return false;
//     }
//     var index = this.parking.parkLots.indexOf(parkLot);
//     var leftParkLot, rightParkLot;

//     if (index > 0) {
//         leftParkLot = this.parking.parkLots[index - 1];
//     }
//     if (index < this.parking.parkLots.length - 1) {
//         rightParkLot = this.parking.parkLots[index + 1];
//     }
//     if (leftParkLot != undefined &&
//         (leftParkLot.car instanceof Jeep ||
//             leftParkLot.car instanceof Bus)) {
//         return false;
//     }
//     if (rightParkLot != undefined &&
//         (rightParkLot.car instanceof Jeep ||
//             rightParkLot.car instanceof Bus)) {
//         return false;
//     }
//     return true;
// };

// ParkCoordinator.prototype.removeCar = function() {
//     for (var i = 0; i < ParkLot.selectedIDs.length; i++) {
//         var parklot = this.parking.parkLots[ParkLot.selectedIDs[i]];
//         parklot.removeChild(parklot.car);
//         this.parking.addChild(parklot.car);
//         this.calculateTax(parklot.car);
//         this.animation.OutMovementCar(parklot);
//     }

//     if (ParkLot.selectedIDs.length == 0) {
//         this.messageBox.text = this.messages.NO_SELECTED_CAR;
//     } else {
//         this.messageBox.text = this.messages.REMOVED_CAR;
//     }
//     ParkLot.selectedIDs = [];
// };

