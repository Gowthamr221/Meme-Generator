console.log('script got connected');




let button = document.getElementById("generate-meme");

let image =  document.getElementById("meme-display");

let memetext = document.getElementById("meme-text");
var url = "https://api.imgflip.com/get_memes";
function genMeme(){
    var randomNum =Math.floor(Math.random()*100);
    console.log(`random numer is ${randomNum}`);
    fetch(url).then((respose)=>{
        return respose.json()
    }).then((data)=>{
        memetext.innerText = data.data.memes[randomNum].name
        image.src = data.data.memes[randomNum].url;
        console.log(data.data.memes[randomNum].url);
    })
}

button.addEventListener('click',()=>{
    genMeme()
});


