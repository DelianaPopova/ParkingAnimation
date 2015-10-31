
function ParkLot (id,x,y){

PIXI.Container.call(this);


this.selected = false;
this.interactive = true;

this.id = id;


this.isEmpty = true;
this.car = null;

this.position.x = x;
this.position.y = y;
this.anchor = {x: 0.5, y: 0.5};
this.width = 130;
this.height = 280;


this.click = function () {

 		if (this.selected) {
                this.selected = false;
                var index = ParkLot.selectedIDs.indexOf(this.id);
                ParkLot.selectedIDs.splice(index, 1);
               // console.log("arr N = " + ParkLot.selectedIDs);
                this.car.alpha = 1;

            } else if (!this.isEmpty) {
                if (!(this.car instanceof PoliceCar)) {
                    ParkLot.selectedIDs.push(this.id);
                     //console.log("arr N = " + ParkLot.selectedIDs);
                    this.car.alpha = 0.5;
                    this.selected = true;
                }

           }
	}
};


ParkLot.selectedIDs = [];

ParkLot.prototype = Object.create(PIXI.Container.prototype);

ParkLot.prototype.constructor = ParkLot;
