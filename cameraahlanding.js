function handleCycleColor(){
let cycle = document.querySelector('#cycle-viewer');
document.querySelector('#red-color-btn').onclick = ()=>{cycle.updateMaterialColor('red body','red')};
document.querySelector('#yellow-color-btn').onclick = ()=>{cycle.updateMaterialColor('red body','yellow')};
document.querySelector('#green-color-btn').onclick = ()=>{cycle.updateMaterialColor('red body','#00ff2f')};

document.querySelector('#black-handle-color-btn').onclick = ()=>{cycle.updateMaterialColor('black metal','black')};
document.querySelector('#white-handle-color-btn').onclick = ()=>{cycle.updateMaterialColor('black metal','white')};
document.querySelector('#grey-handle-color-btn').onclick = ()=>{cycle.updateMaterialColor('black metal','grey')};

}
function handlePhoneCase(){
let phone = document.querySelector('#case-viewer');
document.querySelector('#upload-texture-btn').onclick = ()=>{document.querySelector('#case-texture').click()}
document.querySelector('#case-texture').addEventListener('change',(e)=>{
let file = e.target.files[0];
phone.updateMaterialTexture('Image MAT',URL.createObjectURL(file));
document.querySelector('#upload-texture-btn').style.backgroundImage = "url("+URL.createObjectURL(file)+")";
})
}
function handleCouch(){
let couch = document.querySelector('#couch-viewer');
document.querySelector('#couch-metallic').onclick = ()=>{couch.updateMaterialTexture('Leather','https://raw.githubusercontent.com/kgediya/WebAR/main/Images/Metallic.png')};
document.querySelector('#couch-tiger').onclick = ()=>{couch.updateMaterialTexture('Leather','https://raw.githubusercontent.com/kgediya/WebAR/main/Images/Tiger.png')};
document.querySelector('#couch-wood').onclick = ()=>{couch.updateMaterialTexture('Leather','https://raw.githubusercontent.com/kgediya/WebAR/main/Images/Wood.png')};
}
handleCycleColor();
handlePhoneCase();
handleCouch();
