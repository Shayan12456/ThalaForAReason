let nameInput = document.querySelector(".name");
let numInput = document.querySelector(".num");
let button = document.querySelector("button");
let restartButton = document.querySelector(".restart");
let tryH2 = document.querySelector(".try");
let h2 = document.querySelector(".thala");
let image = document.querySelector("img");

let audio = document.getElementById("myAudio");
  
function toggleAudio() {
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  }else{
    audio.pause();
  }
}

let func = ()=>{
    let nameVal = nameInput.value;
    let numOfChars = nameVal.length;
    let numVal = numInput.value;
    let sumOfNum = 0;

    while(numVal!==0){
        sumOfNum+=numVal%10;
        numVal=Math.floor(numVal/10);
    }

    if(sumOfNum!=0 && sumOfNum === numOfChars){
        h2.innerText = `${nameVal} is Thala For A Reason`;
        toggleAudio();
        button.style.display = "none";
        restartButton.style.display = "inline";
        image.style.display = "inline";
        image.style.marginBottom = "1rem";
        tryH2.style.display = "none";
        demo();
    }else{
        tryH2.innerText = "Try Again";
    }
};

nameInput.addEventListener("keypress", (event) => {//callback
    if (event.key === "Enter") { // Checking if the pressed key is the Enter key
        // Call your function here
        func();
    }
});

numInput.addEventListener("keypress", (event) => {//callback
    if (event.key === "Enter") { // Checking if the pressed key is the Enter key
        // Call your function here
        func();
    }
});

button.addEventListener("click", func);
restartButton.addEventListener("click", ()=>{
    if (audio.play) {
        audio.pause();
    }
    button.style.display = "inline";
    restartButton.style.display = "none";
    image.style.display = "none";
    image.style.marginBottom = "0";
    h2.innerText = ``;
    nameInput.value = "";
    numInput.value = "";
});

const url1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKj1sbwakleNiBmpdTWItcxFDRBwzrh3-iPQ&usqp=CAU";
const url2 = "https://images.firstpost.com/wp-content/uploads/2017/12/MS-Dhoni-IND-SL-Reuters-380.jpg?impolicy=website&width=320&height=180";
const url3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNds1l132jY06SM1F2vOoc26jipXD5BA8RQ&usqp=CAU";
const url4 = "https://www.entrepenuerstories.com/wp-content/uploads/2023/10/download-9-2.jpg";  

function getImg(url){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            image.src = url;
            resolve();
        }, 3000);
    });
}

async function demo(){
    await getImg(url1);
    await getImg(url2);
    await getImg(url3);
    getImg(url4);
}
