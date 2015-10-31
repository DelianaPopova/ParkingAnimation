function UIcontroller(){
	PIXI.Container.call(this);
	this.UIcontrollerEvents = {
		IN_BUTTON_HANDLER: "addCarEvent",
		OUT_BUTTON_HANDLER: "outCarEvent",
		POLICE_CAR_BUTTON_HANDLER: "addPoliceCarEvent",
		STATISTICS_BUTTON: "statisticsEvent"

	};

	this.uiView = new UIview();
	this.addChild(this.uiView);
	
	this.uiView.on(this.uiView.buttonEvents.IN_BUTTON_CLICK, this.inButtonHandler, this);
	this.uiView.on(this.uiView.buttonEvents.OUT_BUTTON_CLICK, this.outButtonHandler, this);
	this.uiView.on(this.uiView.buttonEvents.POLICE_CAR_BUTTON_ClICK, this.policeButtonHandler, this);
	this.uiView.on(this.uiView.buttonEvents.STATISTICS_BUTTON_CLICK, this.statisticsButtonHandler, this);
	
};

UIcontroller.prototype = Object.create(PIXI.Container.prototype);

UIcontroller.prototype.constructor = UIcontroller;

UIcontroller.prototype.inButtonHandler = function() {
	this.emit(this.UIcontrollerEvents.IN_BUTTON_HANDLER);
}

UIcontroller.prototype.outButtonHandler = function() {
	this.emit(this.UIcontrollerEvents.OUT_BUTTON_HANDLER);
}

UIcontroller.prototype.policeButtonHandler = function() {
	this.emit(this.UIcontrollerEvents.POLICE_CAR_BUTTON_HANDLER);
}

UIcontroller.prototype.statisticsButtonHandler = function() {
	this.emit(this.UIcontrollerEvents.STATISTICS_BUTTON);
}




