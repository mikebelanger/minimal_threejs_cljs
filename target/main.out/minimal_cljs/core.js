// Compiled by ClojureScript 1.9.216 {}
goog.provide('minimal_cljs.core');
goog.require('cljs.core');
goog.require('cljsjs.three');
minimal_cljs.core.init = (function minimal_cljs$core$init(){
var scene = (new THREE.Scene());
var p_camera = (new THREE.PerspectiveCamera(minimal_cljs.core.view_angle,minimal_cljs.core.aspect,minimal_cljs.core.near,minimal_cljs.core.far));
var box = (new THREE.BoxGeometry((200),(200),(200)));
var mat = (new THREE.MeshBasicMaterial((function (){var obj8212 = {"color":(16711680),"wireframe":true};
return obj8212;
})()));
var mesh = (new THREE.Mesh(box,mat));
var renderer = (new THREE.WebGLRenderer());
(p_camera["name"] = "p-camera");

(p_camera["position"]["z"] = (500));

(mesh["rotation"]["x"] = (45));

(mesh["rotation"]["y"] = (0));

renderer.setSize((500),(500));

scene.add(p_camera);

scene.add(mesh);

document.body.appendChild(renderer.domElement);

minimal_cljs.core.render = ((function (scene,p_camera,box,mat,mesh,renderer){
return (function minimal_cljs$core$init_$_render(){
(mesh["rotation"]["y"] = (0.01 + mesh.rotation.y));

return renderer.render(scene,p_camera);
});})(scene,p_camera,box,mat,mesh,renderer))
;

minimal_cljs.core.animate = ((function (scene,p_camera,box,mat,mesh,renderer){
return (function minimal_cljs$core$init_$_animate(){
window.requestAnimationFrame(minimal_cljs$core$init_$_animate);

return minimal_cljs.core.render.call(null);
});})(scene,p_camera,box,mat,mesh,renderer))
;

return minimal_cljs.core.animate.call(null);
});
minimal_cljs.core.init.call(null);

//# sourceMappingURL=core.js.map