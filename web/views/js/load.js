function play(){
    var element = document.getElementById("myVideo");
    element.classList.remove('er');
    element.play();
}
function stop(){
    var element = document.getElementById("myVideo");
    element.classList.add('er');
    element.load();
    //element.stop();
}