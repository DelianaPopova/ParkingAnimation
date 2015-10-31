function ParkingView(){
	PIXI.Sprite.call(this);
	this.texture = new PIXI.Texture.fromImage("images/parking.png");
	this.parkingViewEvents = {
		ANIMATION_COMPLETE: "animationInComplete",
		ADD_CHILD_TO_PARKLOT: "addChildToParklot"

	};
	this.animation = new Animation();
	this.animation.on(this.animation.animationEvents.ADD_CHILD_TO_PARKLOT,
        this.addCarToParklot, this)
	this.animation.on(this.animation.animationEvents.ANIMATION_COMPLETE,
        this.renderingComplete,this)
	
	this.parkLots = [];
	this.generateLots();
};

ParkingView.prototype = Object.create(PIXI.Sprite.prototype);

ParkingView.prototype.constructor = ParkingView;

ParkingView.prototype.renderingComplete = function (parklot) {
    this.emit(this.parkingViewEvents.ANIMATION_COMPLETE, parklot);
};

ParkingView.prototype.addCarToParklot = function (parklot) {
    this.emit(this.parkingViewEvents.ADD_CHILD_TO_PARKLOT, parklot);
};
ParkingView.prototype.IncertCarAnimation = function(currParkLot){
    this.animation.InMovementCar(currParkLot);
};

ParkingView.prototype.OutCarAnimation = function(currParkLot){
    this.animation.OutMovementCar(currParkLot);
};

ParkingView.prototype.generateLots = function (){
    //gives the parameters of ParkLot

    var x = 75;
    var y = 140;
    var id = 0;

    for (var i = 0; i < 9; i ++) {

       this.parkLots.push(new ParkLot(id,x,y,0));
        this.addChild(this.parkLots[id]);
        id++;
        x+=140;
    }

    x = 1130;
    y = 545;
   
    for (var i = 0; i < 3; i++) {
        this.parkLots.push(new ParkLot(id,x,y));
        this.addChild(this.parkLots[id]);
        y+= 140;
        id++;
    }

    x = 150;
    y = 825;

    for (var i = 0; i < 3; i++) {

        this.parkLots.push(new ParkLot(id,x,y));
        this.addChild(this.parkLots[id]);
        id++;
        y-= 140;
    }
};









