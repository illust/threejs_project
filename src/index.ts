import BasicScene from "./BasicScene";
import CubeScene from "./CubeScene";

// let isBasic: Boolean = true;

// sets up the scene
// let scene = isBasic? new BasicScene() : new CubeScene();
let scene = new CubeScene();
scene.initialize();

// Basic loops updates
// function loopBasic(){
//     scene.camera.updateProjectionMatrix();
//     scene.renderer.render(scene, scene.camera);
//     scene.orbitals.update();
//     requestAnimationFrame(loopBasic);
// }

// Cube loops updates
function loopCube(){
    scene.camera.updateProjectionMatrix();
    scene.renderer.render(scene, scene.camera);
    requestAnimationFrame(loopCube);
}

// runs a continuous loop
// isBasic?loopBasic():loopCube();
loopCube();