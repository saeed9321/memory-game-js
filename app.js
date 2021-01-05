imgs = document.querySelectorAll('[id*="img"]');

list = [];
doneList = [];
flipedImgs = [];

// setting default img is match img for match cases
function setup(){
    for (i=0; i<12; i++){
        imgs[i].src = "imgs/b.png";
    }
    if (doneList.length > 1){
        for(i=0; i<doneList.length; i++){
            doneList[i].src = "imgs/match.png"
        }
    }}
setup()

// filling the list of imgs
for (i=1; i<13; i++){
    list.push("imgs/" + i + ".png");
}

// show corresponding img for each img id once clicked
imgs.forEach(img =>{
    img.addEventListener('click', ()=>{
        if (flipedImgs.length < 2){
        img.src = list[img.id.replace("img", "")-1];
        flipedImgs.push(img.id.replace("img", ""));
        if (flipedImgs.length > 1){
            isMatch();
            check(); 
            result();  
        }
    }})
})      

// flip back once two imgs are already flipped after 1 second
function check(){
    setTimeout(() => {
        if (flipedImgs.length >= 2){
            setup()
            flipedImgs = [];
        }
    }, 700);}


// add match cases to done list
function isMatch(){
    if (flipedImgs.includes("1") && flipedImgs.includes("7")){
        doneList.push(imgs[0]);
        doneList.push(imgs[6]);
    }
    if (flipedImgs.includes("2") && flipedImgs.includes("8")){
        doneList.push(imgs[1]);
        doneList.push(imgs[7]);
    }
    if (flipedImgs.includes("3") && flipedImgs.includes("9")){
        doneList.push(imgs[2]);
        doneList.push(imgs[8]);
    }
    if (flipedImgs.includes("4") && flipedImgs.includes("10")){
        doneList.push(imgs[3]);
        doneList.push(imgs[9]);
    }
    if (flipedImgs.includes("5") && flipedImgs.includes("11")){
        doneList.push(imgs[4]);
        doneList.push(imgs[10]);
    }
    if (flipedImgs.includes("6") && flipedImgs.includes("12")){
        doneList.push(imgs[5]);
        doneList.push(imgs[11]);
    }
}

// show result
function result(){
    setTimeout(() => {
        if (doneList.length > 11){
            container = document.querySelector('.container');
            container.style.opacity = '0%';
            win = document.createElement('div');
            win.innerHTML = "WINNER!!";
            win.id = "win";
            body = document.querySelector('body');
            body.insertBefore(win, body.childNodes[0]);
    }   
    }, 1000);}
    