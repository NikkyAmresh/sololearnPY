// Created by Brains🇳🇬

"use strict";
var scene, camera, renderer;
var imgData = [
    "https://thumbs.dreamstime.com/b/linear-pattern-repeating-abstract-leaves-gray-line-leaf-flower-floral-graphic-clean-design-fabric-event-wallpaper-etc-91480515.jpg",
    "https://img.freepik.com/free-vector/abstract-colorful-background_3528-730.jpg?size=338&ext=jpg",
    "https://img.freepik.com/free-vector/colorful-watercolor-triangles-pattern_23-2147662863.jpg?size=338&ext=jpg"
]
alert("Heres a tip of what you can do with Three.js");
const renderAll = () => {
    renderer.render(scene, camera);
    scene.rotation.y += 0.003;
    requestAnimationFrame(renderAll);
}



window.onload = () => {
    console.log = () => {}
    setScene();
    setFloor();
    setAllBlocks();
    setWaterBodies();
    renderAll();
}


const setScene = () => {
    scene =
        new THREE.Scene();
    scene.fog = new THREE.Fog(0x9db3b5, 100, 1000);
    camera = new THREE.PerspectiveCamera(80, screen.width / screen.height * 1.3, 1, 20000);

    renderer = new THREE.WebGLRenderer({
        alpha: true
    });
    renderer.setSize(screen.width, screen.height - 150);
    document.body.appendChild(renderer.domElement);
    const light =
        new THREE.DirectionalLight("white", 1);
    const light2 =
        new THREE.DirectionalLight("white", 2);
    light.position.set(0, 100, 0);
    light2.position.set(100, 10, 0);
    const ambLight =
        new THREE.AmbientLight("grey", 2);
    scene.add(light, light2, ambLight);
    camera.position.z = 1000;
    camera.position.y = 0
    scene.rotation.y = 0;
    scene.rotation.x = 0.6;
}

const setFloor = () => {
    var geometry = new THREE.BoxBufferGeometry(1600, 20, 1600)
    var texture = new THREE.MeshStandardMaterial({
        color: "#00aa00"
    });
    const Floor =
        new THREE.Mesh(geometry, texture);
    scene.add(Floor);
    Floor.position.z = 0;
    Floor.position.y = -10;

}
const setAllBlocks = () => {
    var arr = "-100,0@-400,0@300,0@300,-300@300,-600@0,-600@-200,-300@-500,-400@-300,-600@600,-600@600,0@600,300@600,-300@600,600@300,300@100,600@-200,600@-600,600@-800,0@-800,300@-750,-700@-750,-300@100,-350";
    arr = arr.split("@");
    for (var i in arr) {
        arr[i] = arr[i].split(",");
        setBlocks(
            parseInt(arr[i][0]),
            parseInt(arr[i][1]));
    }
}
const setBlocks = (x, z) => {
    var imgRef = imgData[Rand(0, imgData.length - 1)];
    var geometry = new THREE.BoxBufferGeometry(1, 1, 1),
        img = new THREE.TextureLoader()
        .load(imgRef),
        material =
        new THREE.MeshStandardMaterial({
            map: img
        });
    geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.5, 0));
    for (var i = 0; i < 15; i++) {
        var building =
            new THREE.Mesh(geometry, material);
        building.position.x = Rand(-10, 10) * 10 + x;
        building.position.z = Rand(-10, 10) * 10 + z;
        building.scale.x = Rand(30, 50) + 10;
        building.scale.y = Rand(2, 10) * building.scale.x;
        building.scale.z = building.scale.x;
        scene.add(building);
    }

}

const setWaterBodies = () => {
    var arr =
        "100,-150,1@100,-50,1@100,50,1@100,150,1@50,300,2@-150,300,2,@-350,300,2@-550,300,2@-600,200,1@-600,100,1@-600,0,1@-600,-100,1@-550,-200,1";
    arr = arr.split("@");
    for (var i in arr) {
        arr[i] = arr[i].split(",");
        waterAt(arr[i][0], arr[i][1], arr[i][2]);
    }
}

const waterAt = (x, z, s) => {
    x = parseInt(x);
    z = parseInt(z);
    s = parseInt(s);
    var geometry = new THREE.BoxGeometry(100 * s, 3, 100 * s);
    var material = new THREE.MeshStandardMaterial({
        color: "blue"
    });
    var w_body = new THREE.Mesh(geometry, material);
    w_body.position.x = x;
    w_body.position.z = z;
    scene.add(w_body);
}




const Rand = (min, max) => {
    max += 1;
    return Math.floor(Math.random() * (max - min) + min);
}