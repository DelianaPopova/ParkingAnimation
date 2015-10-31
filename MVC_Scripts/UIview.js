function UIview(){
	PIXI.Container.call(this);
	var _this = this;
   	this.buttonEvents = {
   		IN_BUTTON_CLICK: "inButtonWasClicked",
        OUT_BUTTON_CLICK: "outButtonWasClicked",
        POLICE_CAR_BUTTON_ClICK: "policeCarButtonClicked",
        STATISTICS_BUTTON_CLICK: "statisticsButtonClicked"

   };

   //IN
    this.inButton = new PIXI.Sprite.fromImage("images/in.png");
    this.inButton.position.x = 1300;
    this.inButton.position.y = 10;
    this.inButton.interactive = true;
    this.inButton.click = function() {
        _this.emit(_this.buttonEvents.IN_BUTTON_CLICK);
    };
    this.addChild(this.inButton);

    //POLICE
    this.policeButton = new PIXI.Sprite.fromImage("images/policeCar.png");
    this.policeButton.height = 150;
    this.policeButton.width = 300;
    this.policeButton.position.x = 1350;
    this.policeButton.position.y = 300;
    this.policeButton.interactive = true;
    this.policeButton.click = function() { 
    _this.emit(_this.buttonEvents.POLICE_CAR_BUTTON_ClICK)      
    };
    this.addChild(this.policeButton);

    //OUT
    this.outButton = new PIXI.Sprite.fromImage("images/out.png");
    this.outButton.position.x = 1300;
    this.outButton.position.y = 170;
    this.outButton.interactive = true;
    this.outButton.click = function() {
        _this.emit(_this.buttonEvents.OUT_BUTTON_CLICK)
    };
    this.addChild(this.outButton);

    //STATISTICS
    this.statisticsButton = new PIXI.Sprite.fromImage("images/statistics.png");
    this.statisticsButton.height = 150;
    this.statisticsButton.width = 150;
    this.statisticsButton.position.x = 1350;
    this.statisticsButton.position.y = 800;
    this.statisticsButton.interactive = true;
    this.statisticsButton.click = function() {
         _this.emit(_this.buttonEvents.STATISTICS_BUTTON_CLICK)
    };
    this.addChild(this.statisticsButton);


};

UIview.prototype = Object.create(PIXI.Container.prototype);

UIview.prototype.constructor = UIview;



