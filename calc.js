const display = document.getElementById("display");

function apprendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error", '360error.mp3'.play();
    }
}

/*const word = document.getElementById('boxS');

const sound = new Audio('360basickeys.mp3');
word.addEventListener('click', 
    ()=>{
        sound.currentTime = 0
        sound.play()
    });*/

const Word = document.getElementById('boxO');

const Sound = new Audio('360basickeys.mp3');
Word.addEventListener('click', 
    ()=>{
        Sound.currentTime = 0
        Sound.play()
    });

const Wxrd = document.getElementById('boxO1');

const Sxund = new Audio('360basickeys.mp3');
Wxrd.addEventListener('click', 
    ()=>{
        Sxund.currentTime = 0
        Sxund.play()
    });

const wxrd = document.getElementById('boxO2');

const sxund = new Audio('360basickeys.mp3');
wxrd.addEventListener('click', 
    ()=>{
        sxund.currentTime = 0
        sxund.play()
    });

const wXrd = document.getElementById('boxO3');

const sXund = new Audio('360basickeys.mp3');
wXrd.addEventListener('click', 
    ()=>{
        sXund.currentTime = 0
        sXund.play()
    });

const wYrd = document.getElementById('eval');

const sYund = new Audio('360eval.mp3');
Audio.volume = 0.5;
wYrd.addEventListener('click', 
    ()=>{
        sYund.currentTime = 0
        sYund.play()
    });

const w0rd = document.getElementById('box0');

const s0und = new Audio('360basickeys.mp3');
w0rd.addEventListener('click', 
    ()=>{
        s0und.currentTime = 0
        s0und.play()
    });

const wdrd = document.getElementById('box.');

const sdund = new Audio('360basickeys.mp3');
wdrd.addEventListener('click', 
    ()=>{
        sdund.currentTime = 0
        sdund.play()
    });

const w1rd = document.getElementById('box1');

const s1und = new Audio('360basickeys.mp3');
w1rd.addEventListener('click', 
    ()=>{
        s1und.currentTime = 0
        s1und.play()
    });

const w2rd = document.getElementById('box2');

const s2und = new Audio('360basickeys.mp3');
w2rd.addEventListener('click', 
    ()=>{
        s2und.currentTime = 0
        s2und.play()
    });

const w3rd = document.getElementById('box3');

const s3und = new Audio('360basickeys.mp3');
w3rd.addEventListener('click', 
    ()=>{
        s3und.currentTime = 0
        s3und.play()
    });

const w4rd = document.getElementById('box4');

const s4und = new Audio('360basickeys.mp3');
w4rd.addEventListener('click', 
    ()=>{
        s4und.currentTime = 0
        s4und.play()
    });

const w5rd = document.getElementById('box5');

const s5und = new Audio('360basickeys.mp3');
w5rd.addEventListener('click', 
    ()=>{
        s5und.currentTime = 0
        s5und.play()
    });

const w6rd = document.getElementById('box6');

const s6und = new Audio('360basickeys.mp3');
w6rd.addEventListener('click', 
    ()=>{
        s6und.currentTime = 0
        s6und.play()
    });

const w7rd = document.getElementById('box7');

const s7und = new Audio('360basickeys.mp3');
w7rd.addEventListener('click', 
    ()=>{
        s7und.currentTime = 0
        s7und.play()
    });

const w8rd = document.getElementById('box8');

const s8und = new Audio('360basickeys.mp3');
w8rd.addEventListener('click', 
    ()=>{
        s8und.currentTime = 0
        s8und.play()
    });

const w9rd = document.getElementById('box9');

const s9und = new Audio('360basickeys.mp3');
w9rd.addEventListener('click', 
    ()=>{
        s9und.currentTime = 0
        s9und.play()
    });