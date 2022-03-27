document.querySelector("#home_img").addEventListener("click",()=>{
    window.open("/index.html","_self");
})
const sliderIMG=document.querySelector("#sliderIMG");
const maovieContainer=document.querySelector(".maovieContainer");
var data=[{"Title":"The Amazing Spider-Man","reting":"6.9","Year":"03 Jul 2012","plot":"After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.","img":"https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"},{"Title":"Spider-Man 3","reting":"6.2","Year":"04 May 2007","plot":"A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.","img":"https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{"Title":"Spider-Man 2","reting":"7.3","Year":"30 Jun 2004","plot":"Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.","img":"https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Spider-Man: Homecoming","reting":"7.4","Year":"07 Jul 2017","plot":"Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.","img":"https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"},{"Title":"Spider-Man: Into the Spider-Verse","reting":"8.4","Year":"14 Dec 2018","plot":"Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.","img":"https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"},{"Title":"Spider-Man","reting":"7.3","Year":"03 May 2002","plot":"When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.","img":"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"}];
showData(data);
function showData(dta){
    maovieContainer.innerHTML="";
    dta.map((movie)=>{
        let div=document.createElement("div");
        div.setAttribute("class","moviesCard");
        let {Title,reting,Year,plot,img}=movie;
        let star=starString(reting);
        div.innerHTML=`<div class="cardLeft"><img src="${img}" alt=""></div>
                    <div class="cardRight">
                    <h2>${Title}</h2>
                    <div class="star">${star}</div>
                    <p>${Year}</p>
                    <div class="plot">
                        ${plot}
                    </div>
                </div>`;
        maovieContainer.append(div);
    })
}
var i=0;
var img_slide=["https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/d517ae40ec1a6837fb755d865937ed07.jpg","https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg","https://sm.ign.com/t/ign_in/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_epch.1080.jpg","https://www.joblo.com/wp-content/uploads/2021/11/encounter-2021-poster-400x600.jpg"];
slideleft();
setInterval(slideleft,3000);
function slideleft(){
if(i==0)
sliderIMG.src=img_slide[i=3];
else
sliderIMG.src=img_slide[--i];
}
function starString(n){
    n=Number(n)/2
    let flage=(n%1!=0)
    var str="";
    for(var i=1;i<6;i++)
    if(i<=Number(n)){
        str+='<i class="fas fa-star gold"></i>';
    }
    else{
        if(flage){
            str+='<i class="fas fa-star-half-alt gold"></i>';
            flage=false;
        }
        else
        str+='<i class="fas fa-star silver"></i>';
    }
    return str;
}
function ratSort() {
    var selected = document.querySelector("#filter").value;
    if (selected == "h") {
        data.sort(function (a, b) {
            return Number(b.reting) - Number(a.reting);
        });
    }
    if (selected == "l") {
        data.sort(function (a, b) {
            return Number(a.reting) - Number(b.reting);
        });
    }
    showData(data);
}


document.querySelector(".fa-search").addEventListener("click",search);
var movieD=[];
const searchIn=document.querySelector("#search");
async function search(inputT){
let que
if(inputT==undefined)
que=searchIn.value;
else
que=inputT;
searchIn.value="";
try{
    let res = await fetch(`https://www.omdbapi.com/?s=${que}&apikey=8ed324f5`);
    let {Search} = await res.json();
    let movieId=[];
    Search.forEach(movie => {
        movieId.push(movie.imdbID);
    });
    movieId=movieId.slice(0,6);
    processId(movieId);
}catch(err){
    console.log("error: ",err);
}
}
function processId(arr){
document.querySelector(".slider").style.display="none";
data=[];
arr.forEach(element => {
    digIn(element);
});
}
async function digIn(id){
try{
        let res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=8ed324f5`);
        let {Title,imdbRating,Released,Plot,Poster} = await res.json();
        var movie={
            "Title":Title,
            "reting":imdbRating,
            "Year":Released,
            "plot":Plot,
            "img":Poster
        }
        data.push(movie);
        showData(data);
    }catch(err){
        console.log("error :",err)
    }
}


var timerId;

let movies_div = document.getElementById("movies");

async function searchMovies(name) {
movies_div.innerHTML = null;

let response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=d806bd70`);

let data = await response.json();

return data.Search;
}

async function appendMovies(m) {
if (m === undefined) {
return false;
}

m.forEach(({ Title }) => {
let p = document.createElement("p");

p.innerText = Title;
p.addEventListener("click",()=>{
    movies_div.innerHTML = null;
    search(Title);
})

movies_div.append(p);
});
}

function debon(func, delay) {
// If setTimeout is already scheduled, no need to do anything
if (timerId) {
clearTimeout(timerId);
}

// Schedule a setTimeout after delay seconds
timerId = setTimeout(function () {
func();
}, delay);
}

async function main() {
let name = searchIn.value;

if (name.length <= 2) {
return false;
}

console.log("fired");

let m = await searchMovies(name);
if(m!=undefined)
m=m.slice(0,6);
appendMovies(m);
}