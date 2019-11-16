const firePixelsArray = [];
const fireWidth = 2;
const fireHeight = 3;

function start(){
    createFireDataStructure();
    console.log(firePixelsArray);
}

function createFireDataStructure(){
    const numerOfPixels = fireHeight * fireWidth;

    for(let i = 0; i < numerOfPixels; i++){
        firePixelsArray[i] = 0;
    }
}

function calculateFirePropagation(){

}

function renderFire(){

}

start();