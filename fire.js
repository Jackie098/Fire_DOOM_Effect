const firePixelsArray = [];
const fireWidth = 10;
const fireHeight = 10;

function start(){
    createFireDataStructure();
    createFireSource();
    renderFire();
    setInterval(calculateFirePropagation, 2000);
    
}

//CRIA A ESTRUTURA DE PIXELS
function createFireDataStructure(){
    const numerOfPixels = fireHeight * fireWidth;

    for(let i = 0; i < numerOfPixels; i++){
        firePixelsArray[i] = 0;
    }
}

//CALCULA A PROPAGAÇÃO DO FOGO VERTICALMENTE
function calculateFirePropagation(){
    for(let column = 0; column < fireWidth; column++){
        for(let row = 0; row < fireHeight; row++){
            const pixelIndex = column + ( fireWidth * row); 
            updateFireIntensityPerPixel(pixelIndex);
        }
    }

    renderFire();
}

function updateFireIntensityPerPixel(currentPixelIndex){
    const belowPixelIndex = currentPixelIndex + fireWidth;

    if(belowPixelIndex >= fireWidth * fireHeight){
        return ;
    }

    const decay = 1;
    const belowPixelFireIntensity = firePixelsArray[belowPixelIndex];
    const newFireIntensity = belowPixelFireIntensity - decay;

    firePixelsArray[currentPixelIndex] = newFireIntensity;
}

//CRIA UMA TABELA COM O INDEX E A INTENSIDADE DO FOGO
function renderFire(){
    let html = '<table cellpadding=0 cellspacing=0>';

    for (let row = 0; row < fireHeight; row++){
        html += '<tr>';

        for(let column = 0; column < fireWidth; column++){
            const pixelIndex = column + ( fireWidth * row);
            const fireIntensity = firePixelsArray[pixelIndex];

            html += '<td>';
            html += `<div class="pixel-index">${pixelIndex}</div>`;
            html += fireIntensity;
            html += '</td>';
        }

        html += '</tr>';
    }

    html += '</table>';

    document.querySelector('#fireCanvas').innerHTML = html;
}

//SETA A INTENSIDADE DO FOGO NA BASE DA TABELA
function createFireSource(){
    for(let column = 0; column <= fireWidth; column++){
        const overflowPixelIndex = fireWidth * fireHeight;
        const pixelIndex = (overflowPixelIndex - fireWidth) + column;

        firePixelsArray[pixelIndex] = 36;
    }
}

start();