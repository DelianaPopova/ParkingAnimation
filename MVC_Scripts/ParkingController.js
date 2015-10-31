function ParkingController(lots){
	PIXI.Container.call(this);

    this.parkingView = new ParkingView();
    this.addChild(this.parkingView);

    this.parkingView.position.x = 0;
    this.parkingView.position.y = 0;

    this.parkingView.on(this.parkingView.parkingViewEvents.ANIMATION_COMPLETE,
        function(parklot){
        this.parkingView.removeChild(parklot.car);
            parklot.car = null;
            parklot.isEmpty = true;
            parklot.selected = false;
    }, this);

    this.parkingView.on(this.parkingView.parkingViewEvents.ADD_CHILD_TO_PARKLOT,
        function(parklot){
        parklot.addChild(parklot.car);
        parklot.car.position = {x: 0, y: 0};
        var date = new Date();
        var milliseconds = date.getTime();
        parklot.car.startTime = milliseconds;
    }, this);


    this.money = 0;
    this.numberOfPoliceCars = 0;
    
    this.messages = new Messages();

    //messages
    this.messageBox = new PIXI.Text("", {font: "40px Arial", fill: "black"});
    this.messageBox.position.x = 1300;
    this.messageBox.position.y = 500;
    this.parkingView.addChild(this.messageBox);

    //timer
    this.messageBoxForTimer = new PIXI.Text("Clock", {font: "40px Arial", fill: "red"});
    this.messageBoxForTimer.position.x = 1400;
    this.messageBoxForTimer.position.y = 700;
    this.parkingView.addChild(this.messageBoxForTimer);
    this.timer = new Timer(this.messageBoxForTimer);

    //tax for cars
    this.messageBoxForTax = new PIXI.Text("", {font: "40px Arial", fill: "green"});
    this.messageBoxForTax.text = this.messages.EARNED_AMOUNT_MONEY;    
    this.messageBoxForTax.position = {x: 1400, y: 600};
    this.parkingView.addChild(this.messageBoxForTax);



};

ParkingController.prototype = Object.create(PIXI.Container.prototype);

ParkingController.prototype.constructor = ParkingController;

ParkingController.prototype.addCar = function() {
    var added = false;

    function createRandomCar() {
        var random = Math.floor((Math.random() * 2));
        if (random === 1) {
            return new Jeep();
        } else {
            return new Bus();
        }
    }
    for (var i = 0; i < this.parkingView.parkLots.length; i++) {
        var currentParkLot = this.parkingView.parkLots[i];
        if (this.isParkLotAvailableForCar(currentParkLot)) {
            currentParkLot.car = createRandomCar();
            currentParkLot.isEmpty = false;
            added = true;
           
            if (added) {
                this.messageBox.text = this.messages.ADDED_CAR;
            } else {
                this.messageBox.text = this.messages.NO_FREE_SPACES;
            }
            this.parkingView.addChild(this.parkingView.parkLots[i].car)
            //this.parking.addChild(currentParkLot.car); 
            currentParkLot.car.position.x = 800;
            currentParkLot.car.position.y = 1000;
            //this.parkingView.animation.InMovementCar(currentParkLot);
            this.parkingView.IncertCarAnimation(currentParkLot);

            break;
        }
    }
};

ParkingController.prototype.isParkLotAvailableForCar = function(parkLot) {
    if (!parkLot.isEmpty) {
        return false;
    }
    var index = this.parkingView.parkLots.indexOf(parkLot);
    var leftParkLot, rightParkLot;
    if (index > 0) {
        leftParkLot = this.parkingView.parkLots[index - 1];
    }
    if (index < this.parkingView.parkLots.length - 1) {
        rightParkLot = this.parkingView.parkLots[index + 1];
    }
    if (leftParkLot != undefined && leftParkLot.car instanceof PoliceCar) {
        return false;
    }
    if (rightParkLot != undefined && rightParkLot.car instanceof PoliceCar) {
        return false;
    }
    return true;
};

ParkingController.prototype.addPoliceCar = function() {
    if (this.numberOfPoliceCars == 3) {
        return this.messageBox.text =  this.messages.NO_MORE_POLICE_CARS;
    }
    for (var i = 0; i < this.parkingView.parkLots.length; i++) {
        var currentParkLot = this.parkingView.parkLots[i];
        if (this.isParkLotAvailableForPoliceCar(currentParkLot)) {
            currentParkLot.car = new PoliceCar();
            currentParkLot.isEmpty = false;
            this.numberOfPoliceCars++;
            this.added = true;
            
            if (this.added) {
                this.messageBox.text = this.messages.THE_POLICE_WAS_ADDED;
            }
            this.parkingView.addChild(this.parkingView.parkLots[i].car)
            //this.parking.addChild(currentParkLot.car);
            currentParkLot.car.position.x = 800;
            currentParkLot.car.position.y = 1000;
           // this.parkingView.animation.InMovementCar(currentParkLot);
            this.parkingView.IncertCarAnimation(currentParkLot);
            break;
        } 
        else {
            this.messageBox.text = this.messages.NO_MORE_POLICE_CARS;
        }
    }
};

ParkingController.prototype.isParkLotAvailableForPoliceCar = function(parkLot) {
    if (!parkLot.isEmpty) {
        return false;
    }
    var index = this.parkingView.parkLots.indexOf(parkLot);
    var leftParkLot, rightParkLot;

    if (index > 0) {
        leftParkLot = this.parkingView.parkLots[index - 1];
    }
    if (index < this.parkingView.parkLots.length - 1) {
        rightParkLot = this.parkingView.parkLots[index + 1];
    }
    if (leftParkLot != undefined &&
        (leftParkLot.car instanceof Jeep ||
            leftParkLot.car instanceof Bus)) {
        return false;
    }
    if (rightParkLot != undefined &&
        (rightParkLot.car instanceof Jeep ||
            rightParkLot.car instanceof Bus)) {
        return false;
    }
    return true;
};

ParkingController.prototype.removeCar = function() {
    for (var i = 0; i < ParkLot.selectedIDs.length; i++) {
        var parklot = this.parkingView.parkLots[ParkLot.selectedIDs[i]];
        this.parkingView.removeChild(this.parkingView.parkLots[ParkLot.selectedIDs[i]].car);
        this.parkingView.addChild(this.parkingView.parkLots[ParkLot.selectedIDs[i]].car);
        this.calculateTax(parklot.car);
        //this.parkingView.animation.OutMovementCar(parklot);
        this.parkingView.OutCarAnimation(parklot);
    }
        
    if (ParkLot.selectedIDs.length == 0) {
        this.messageBox.text = this.messages.NO_SELECTED_CAR;
    } else {
        this.messageBox.text = this.messages.REMOVED_CAR;
    }
    ParkLot.selectedIDs = [];
};

ParkingController.prototype.showStatistics = function() {
    var emptyParklots = this.parkingView.parkLots.filter(function(parklot) {
      return  parklot.isEmpty == true;
    }).length;
    var nonEmptyParklots = this.parkingView.parkLots.length - emptyParklots;
    this.messageBox.text = emptyParklots + this.messages.FREE_LOTS + nonEmptyParklots + this.messages.BUSY_LOTS;
    //console.log("nonEmptyParklots " + nonEmptyParklots);
};

ParkingController.prototype.calculateTax = function(car) {
    var date = new Date();
    var currentTime = date.getTime();
    var carTime = car.startTime;
    var stayTimeInSec = Math.ceil((currentTime - carTime) / 1000);
    var stayTimeInHours = Math.ceil(stayTimeInSec / 10);
    this.money += stayTimeInHours * car.tax;
    this.messageBoxForTax.text = this.messages.EARNED_AMOUNT_CURRENT_MONEY + parseFloat(Math.round(this.money * 100) / 100).toFixed(2) + " $";
};





