import * as THREE from 'three';
import { GUI } from 'dat.gui';

/**
 * A class to set up a cube scene elements to minimize code in the
 * main execution file.
 */
export default class CubeScene extends THREE.Scene{
    // A dat.gui class debugger that is added by default
    debugger: GUI = null;

    // Setups a scene camera
    camera: THREE.PerspectiveCamera = null;

    // Setups renderer
    renderer: THREE.Renderer = null;

    // Get some basic params
    width = window.innerWidth;
    height = window.innerHeight;
    
    /**
     * Initializes the scene by adding the geometry
     */
    initialize(debug: boolean = true){
        
        // setup camera
        this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, .01, 10);
        this.camera.position.z = 1;

        // setup renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(this.width,this.height);
        // this.renderer.setAnimationLoop(animation);

        // add window resizing
        CubeScene.addWindowResizing(this.camera, this.renderer);

        // set the background color
        this.background = new THREE.Color(0xefefef);

        // Creates the geometry + materials
        const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        const material = new THREE.MeshNormalMaterial();
        let mesh = new THREE.Mesh( geometry, material );

        // add to scene
        this.add(mesh);

    }

    // static animation(time: number){
    // }

    /**
     * Given a ThreeJS camera and renderer, resizes the scene if the
     * browser window is resized.
     * @param camera - a ThreeJS PerspectiveCamera object.
     * @param renderer - a subclass of a ThreeJS Renderer object.
     */
     static addWindowResizing(camera: THREE.PerspectiveCamera, renderer: THREE.Renderer){
        window.addEventListener( 'resize', onWindowResize, false );
        function onWindowResize(){

            // uses the global window widths and height
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }
    }
}