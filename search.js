import navbar from "/navbar.js";
Import.innerHTML = navbar();
// let key = `AIzaSyCVVszc0u-8aUBeMJEk9V05dJPWeFGS-B0`
// let key = `AIzaSyD41hkSAxKHA9hdnkguwHgdIdYsqwn7m9k`
let key = `AIzaSyCK1hkk5-1Ojo2snAIhb-vqczrUPqKSJZY`
logoimg.addEventListener("click",goToHome)
function goToHome(){
   window.location.href="index.html"
}

let data = JSON.parse(localStorage.getItem("searchData"));
console.log(data)

data.map(async(item)=>{
   let {id,snippet} = item;
   let {videoId} = id;

   let{channelId,channelTitle,description,title} = snippet;

   let thumbnail = snippet.thumbnails.medium.url;
   // console.log(thumbnail)

   let searchedContentDiv = document.createElement("div");
   searchedContentDiv.setAttribute("id","searchedContentDiv")

   let firstDiv = document.createElement("div");
   firstDiv.setAttribute("id","firstDiv")
   let image = document.createElement("img");
   image.setAttribute("id","image")
   image.src = thumbnail;

   let descriptionEle = document.createElement("p");

   descriptionEle.textContent = description;
   descriptionEle.setAttribute("id","descriptionEle")



   // lets find the logo of the channel


let channelUrl = `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${key}&type=video&part=snippet&maxResult=50`


let respo = await fetch(channelUrl);
let collect = await respo.json();
let channelData = collect.items[0];

let channelThumbImg = channelData.snippet.thumbnails.medium.url;
console.log(channelThumbImg)

let channelLogoDiv = document.createElement("div");
channelLogoDiv.setAttribute("id","channelLogoDiv")
let channelLogo = document.createElement("img");
channelLogo.setAttribute("id","channelLogo")
channelLogo.src = channelThumbImg

let logoImgsrc = channelThumbImg

channelLogoDiv.append(channelLogo,channelTitle)


let viewsAnddaysDiv = document.createElement("div")
viewsAnddaysDiv.setAttribute("id","viewsAnddaysDiv")
let viewsEle = document.createElement("p");
let views = Math.floor(Math.random()*6500)+"K views    • ";
let daysEle = document.createElement("span");
let daysAgo = Math.floor(Math.random()*25)+" day ago"


viewsEle.textContent = views;
daysEle.textContent = daysAgo

viewsAnddaysDiv.append(viewsEle,daysAgo)

let titleEle =  document.createElement("p");
titleEle.textContent = title
titleEle.setAttribute("id",'titleEle')

firstDiv.append(image)
let secondDiv = document.createElement("div");
secondDiv.setAttribute("id","secondDiv")
secondDiv.append(titleEle,viewsAnddaysDiv,channelLogoDiv,descriptionEle)
searchedContentDiv.append(firstDiv,secondDiv)
contentContainer.append(searchedContentDiv)

let obj = {
   videoId,
   channelTitle,
   title,
   logoImgsrc,
   description,
   views,
   daysAgo
}


searchedContentDiv.addEventListener("click",function(){
   goToDisplayPage(obj)
})

})


function goToDisplayPage(obj){
   localStorage.setItem("obj",JSON.stringify(obj))
   window.open("playVideo.html")
}








search.addEventListener("input",showInputBox)
// inputBox.addEventListener("click",showInputBox)
search.addEventListener("keydown",hideInputBox)
search.addEventListener("input",function(){
   deboucing(displaySearchResult,1000)
})

async function showInputBox(){
    inputBox.style.visibility = "visible"
}

function hideInputBox(){
    inputBox.style.visibility = "hidden"
}

async function searchMovies(){
   let qSearch = search.value;
   let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${qSearch}&key=${key}&type=video&maxResults=30`

  let respo = await fetch(url);
  let collect = await respo.json();
  
  return collect.items
  
}


async function displaySearchResult(){
   let data = await searchMovies()
   inputBox.textContent = ""
   data.map((items)=>{
      // console.log(items)
      let {id,snippet} = items;
      console.log(id)
      console.log(snippet)
      let{title} = snippet;

      let searchEle = document.createElement("p");
      searchEle.textContent = title;
      inputBox.append(searchEle)

      searchEle.addEventListener("click",function(){
         showSearchResults(data)
      })
   })
}

let id;
function deboucing(func,time){
   clearTimeout(id)
   id = setTimeout(function(){
      func()
   },time)
}

function showSearchResults(data){
localStorage.setItem("searchData",JSON.stringify(data))
window.location.href = "search.html";
}