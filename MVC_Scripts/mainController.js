var stage;
var renderer;

var loader = new PIXI.loaders.Loader();
loader.add('bunny', "images/sprites.json");
loader.on('complete', onAssetsLoaded);
loader.load();

function onAssetsLoaded(loader, res) {
    stage = new PIXI.Container();
    renderer = new PIXI.autoDetectRenderer(2500, 918);
    renderer.backgroundColor = 0xFFFFFF;
    document.body.appendChild(renderer.view);
    requestAnimationFrame(animate);

    var pakingController = new ParkingController(15);
    var uiController = new UIcontroller();

    stage.addChild(pakingController);
    stage.addChild(uiController);

    uiController.on("addCarEvent", function(){
    	pakingController.addCar();
    },this);

    uiController.on("outCarEvent", function(){
        pakingController.removeCar();
        },this);

    uiController.on("addPoliceCarEvent", function(){
        pakingController.addPoliceCar();
        },this);

    uiController.on("statisticsEvent", function(){
        pakingController.showStatistics();
        },this);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(stage);
    };

};