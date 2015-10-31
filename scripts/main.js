// var stage;
// var renderer;
// //var carsImgs = [];

// var loader = new PIXI.loaders.Loader();
// loader.add('bunny', "images/sprites.json");
// loader.on('complete', onAssetsLoaded);
// loader.load();

// function onAssetsLoaded(loader, res) {
//     //creating the stage and starting animation
//     stage = new PIXI.Container();
//     renderer = new PIXI.autoDetectRenderer(2500, 918);
//     renderer.backgroundColor = 0xFFFFFF;

//     document.body.appendChild(renderer.view);
//     requestAnimationFrame(animate);

//     var coordinator = new ParkCoordinator(stage, 15);
    
  
    // for(var i = 0; i<=9; i++){
    //    coordinator.addCar();
    // }

    // //IN
    // var inButton = new PIXI.Sprite.fromImage("images/in.png");
    // inButton.position.x = 1300;
    // inButton.position.y = 10;
    // inButton.interactive = true;
    // inButton.click = function() {
    //     coordinator.addCar();
    // };

    // //OUT
    // var outButton = new PIXI.Sprite.fromImage("images/out.png");
    // outButton.position.x = 1300;
    // outButton.position.y = 170;
    // outButton.interactive = true;
    // outButton.click = function() {
    //     coordinator.removeCar();
    // };

    //POLICE
    // var policeButton = new PIXI.Sprite.fromImage("images/policeCar.png");
    // policeButton.height = 150;
    // policeButton.width = 300;
    // policeButton.position.x = 1350;
    // policeButton.position.y = 300;

    // policeButton.interactive = true;
    // policeButton.click = function() {
    //     coordinator.addPoliceCar();
    // };

    // //STATISTICS
    // var statisticsButton = new PIXI.Sprite.fromImage("images/statistics.png");
    // statisticsButton.height = 150;
    // statisticsButton.width = 150;
    // statisticsButton.position.x = 1350;
    // statisticsButton.position.y = 800;

    // statisticsButton.interactive = true;
    // statisticsButton.click = function() {
    //     coordinator.showStatistics();
    // };



//     stage.addChild(statisticsButton);
//     stage.addChild(policeButton);
//     stage.addChild(outButton);
//     stage.addChild(inButton);

//     function animate() {
//         requestAnimationFrame(animate);
//         renderer.render(stage);
//     }
// };