function Animation() {
    PIXI.Container.call(this);
    this.animationEvents = {
         ANIMATION_COMPLETE: 'animationComplete',
         ADD_CHILD_TO_PARKLOT: "addChildToParklot"
     };
};


Animation.prototype = Object.create(PIXI.Container.prototype);

Animation.prototype.constructor = Animation;

Animation.prototype.InMovementCar = function(lotsID) {
    var _this = this;
    var currentParkLot = lotsID;
    var tl = new TimelineMax();

    if (currentParkLot.id < 9) {
        tl.to(currentParkLot.car, 1.5, {
            bezier: {
                curviness: 0,
                autoRotate: ["x", "y", "rotation", (currentParkLot.car.rotation + Math.PI / 2), true],
                values: [{
                    x: 800,
                    y: 800
                }, {
                    x: 800,
                    y: 350
                }, {
                    x: currentParkLot.position.x,
                    y: 350
                }, {
                    x: currentParkLot.position.x,
                    y: currentParkLot.position.y 
                }, ]
            },
            //onUpdate: updateFn,
            onCompleteParams: [currentParkLot],
            onComplete: _this.addChildToParklot,
            onCompleteScope: _this
        });

    } else {

        if (currentParkLot.id > 8 && currentParkLot.id <= 11) {
            tl.to(currentParkLot.car, 1.5, {
                bezier: {
                    curviness: 0,
                    autoRotate: ["x", "y", "rotation", (currentParkLot.car.rotation + Math.PI / 2), true],
                    values: [{
                        x: 800,
                        y: currentParkLot.position.y
                    }, {
                        x: currentParkLot.position.x,
                        y: currentParkLot.position.y
                    }]
                },
                // onUpdate: updateFn,
                onCompleteParams: [currentParkLot],
                onComplete: _this.addChildToParklot,
                onCompleteScope: _this
            });
        } else {
            tl.to(currentParkLot.car, 1.5, {
                bezier: {
                    curviness: 0,
                    autoRotate: ["x", "y", "rotation", (currentParkLot.car.rotation + Math.PI / 2), true],
                    values: [{
                        x: 800,
                        y: 400
                    }, {
                        x: 450,
                        y: 400
                    }, {
                        x: currentParkLot.position.x + 300,
                        y: currentParkLot.position.y
                    }, {
                        x: currentParkLot.position.x,
                        y: currentParkLot.position.y
                    }]
                },
                //onUpdate: updateFn,
                onCompleteParams: [currentParkLot],
                onComplete: _this.addChildToParklot,
                onCompleteScope: _this
            });
        }
    }

    // function updateFn() {
    //     currentParkLot.car.rotation *= (Math.PI / 180);

    // }
};


// Animation.prototype.addChildToParklot_2 = function(currentParkLot) {
//     //console.log(this);
//     this.emit("EventForAddChild_2", currentParkLot);
// };

Animation.prototype.OutMovementCar = function(lotsID) {
    var currentParkLot = lotsID;
    currentParkLot.car.position = {
        x: currentParkLot.position.x,
        y: currentParkLot.position.y
    };
    var _this = this;
    var tl_2 = new TimelineMax({
        onComplete: _this.deleteCar,
        onCompleteParams: [currentParkLot],
        onCompleteScope: _this
    });

    function secondMovementTo8() {
        tl_2.to(currentParkLot.car, 1.5, {
            bezier: {
                curviness: 0.3,
                autoRotate: ["x", "y", "rotation",Math.PI, true],
                values: [{
                    x: 400,
                    y: 400
                }, {
                    x: 400,
                    y: 1200
                }]
            },
            //onUpdate: updateFn
        });
    };

    if (currentParkLot.id < 9) {
        if (currentParkLot.id > 2) {
            tl_2.to(currentParkLot.car, 1.5, {
                bezier: {
                    curviness: 0.3,
                    autoRotate: ["x", "y", "rotation", 2 * Math.PI, true],
                    values: [{
                        x: currentParkLot.position.x,
                        y: 400
                    }, {
                        x: currentParkLot.position.x + 50,
                        y: 400
                    }]
                },
                //onUpdate: updateFn,
                onComplete: secondMovementTo8
            });

        } else {
            tl_2.to(currentParkLot.car, 1.5, {
                bezier: {
                    curviness: 0.3,
                    autoRotate: ["x", "y", "rotation", (12 * Math.PI)/6, true],
                    values: [{
                        x: currentParkLot.position.x,
                        y: 400
                    }, {
                        x: currentParkLot.position.x - 50,
                        y: 400
                    }]
                },
               // onUpdate: updateFn,
                onComplete: secondMovementTo8
            });
        }

    } else {

        if (currentParkLot.id > 8 && currentParkLot.id <= 11) {
            tl_2.to(currentParkLot.car, 1.5, {
                bezier: {
                    curviness: 0.3,
                    autoRotate: ["x", "y", "rotation", currentParkLot.car.rotation + Math.PI , true],
                    values: [{
                        x: 740,
                        y: currentParkLot.position.y
                    }, {
                        x: 740,
                        y: currentParkLot.position.y + 80
                    }]
                },
                //onUpdate: updateFn
            });
            // secondMovement
            tl_2.to(currentParkLot.car, 1.5, {
                bezier: {
                    curviness: 0.3,
                    autoRotate: ["x", "y", "rotation", Math.PI, true],
                    values: [{
                        x: 740,
                        y: 400
                    }, {
                        x: 400,
                        y: 400
                    }, {
                        x: 400,
                        y: 1200
                    }]
                },
               //onUpdate: updateFn,
                onUpdateParams: [currentParkLot]
            });


        } else {

            tl_2.to(currentParkLot.car, 1.5, {
                bezier: {
                    curviness: 0.3,
                    autoRotate: ["x", "y", "rotation", 2*Math.PI, true],
                    values: [{
                        x: currentParkLot.position.x + 300,
                        y: currentParkLot.position.y
                    }, {
                        x: currentParkLot.position.x + 290,
                        y: currentParkLot.position.y - 100
                    }]
                },
                //onUpdate: updateFn
            });
            // secondMovement
            tl_2.to(currentParkLot.car, 1.5, {
                bezier: {
                    curviness: 0.2,
                    autoRotate: ["x", "y", "rotation", Math.PI, true],
                    values: [{
                        x: currentParkLot.position.x + 300,
                        y: 1200
                    }]
                },
                //onUpdate: updateFn,
                onUpdateParams: [currentParkLot]
            });
        }
    }

    // function updateFn() {
    //     currentParkLot.car.rotation *= (Math.PI / 180);
    // };


};

Animation.prototype.addChildToParklot = function(currentParkLot) {
    this.emit(this.animationEvents.ADD_CHILD_TO_PARKLOT, currentParkLot);
};


Animation.prototype.deleteCar = function(currentParkLot) {
    this.emit(this.animationEvents.ANIMATION_COMPLETE, currentParkLot);
};