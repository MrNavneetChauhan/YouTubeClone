import navBar from "./navbar.js";
Import.innerHTML=navBar()

All.addEventListener("click",showAll1)
Coding.addEventListener("click",showAll2)
Memes.addEventListener("click",showAll3)
Css.addEventListener("click",showAll4)
CS.addEventListener("click",showAll5)
Comedy.addEventListener("click",showAll6)
Thoughts.addEventListener("click",showAll7)
CSA.addEventListener("click",showAll8)
Thrillers.addEventListener("click",showAll9)
ComputerAndInfo.addEventListener("click",showAll10)
DSA.addEventListener("click",showAll11)


let qSearch = JSON.parse(localStorage.getItem("searched")) || "NASA";

// let key = `AIzaSyD41hkSAxKHA9hdnkguwHgdIdYsqwn7m9k`
let key = `AIzaSyCVVszc0u-8aUBeMJEk9V05dJPWeFGS-B0`
// let key = `AIzaSyBvt7iWnHLeRYtik2Vyb0Eqc8D1Zs44XxA`;
// let key = `AIzaSyDuYvMbXPnVVI2ef8o2pvhG1xgjlsHKSIg`
// let key = `AIzaSyDxLeAHaW7iAPosvEHn4UqzWIdCNb29dMU`
// let key = `AIzaSyC7gR712tr_ZIszHk-xEJGz7oO65daeQ20`
// let key = `AIzaSyAvAgJEWS5JlDu-MFT2WOCFBTzzYtjp5kU`;
let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${qSearch}&key=${key}&type=video&maxResults=50`;


    let response = await fetch(url)
    let collect = await response.json();
    let data = collect.items;
    console.log(data)



data.map(async(item)=>{
let {snippet,id} = item;
let videoId = id.videoId;
let {title,description,channelId,thumbnails:{medium:{url}},channelTitle} = snippet;
// console.log(title,description,url,channelTitle,channelId);

//<--- created the div where we have to append image-->//
let thumbDiv = document.createElement("div");
thumbDiv.setAttribute("id","thumbDiv");

// image element created //

let thumbImg = document.createElement("img");
thumbImg.setAttribute("id","thumbImg"); 

// title and channel logo div//
let titleAndLogoDiv = document.createElement("div");
titleAndLogoDiv.setAttribute("id","titleAndLogoDiv");


// videoTitle p element // 
let videoTitle = document.createElement("p");
videoTitle.setAttribute("id","videoTitle");


let channelUrl = `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${key}&type=video&part=snippet&maxResult=50`

let respo = await fetch(channelUrl);
// console.log(respo)
let collectData = await respo.json();
let channelData = await collectData.items[0].snippet;

// logoDiv created 
let logoDiv = document.createElement("div");
logoDiv.setAttribute("id","logoDiv")
let logoImg = document.createElement("img")
logoImg.setAttribute("id","logoImg")
let logoImgsrc = channelData.thumbnails.medium.url;
logoImg.src = logoImgsrc

// view and days elements are here
let viewsAndDaysDiv = document.createElement("div");
viewsAndDaysDiv.setAttribute("id","viewsAndDaysDiv");
let viewsEle = document.createElement("p");
let views = Math.floor(Math.random()*6500)+"K views    • ";
let daysEle = document.createElement("span");
let daysAgo = Math.floor(Math.random()*25)+" day ago"
viewsEle.setAttribute("id","viewEle");
daysEle.setAttribute("id","daysEle");

viewsEle.textContent = views;
daysEle.textContent = daysAgo

viewsAndDaysDiv.append(viewsEle,daysEle)

let channelName = channelData.title;
let channelNameDiv = document.createElement("div");
let channelNameText = document.createElement("p");
channelNameText.textContent = channelName;
channelNameDiv.append(channelNameText)

channelNameText.setAttribute("id",'channelNameText')
channelNameDiv.setAttribute("id","channelNameDiv")



videoTitle.textContent = title;

logoDiv.append(logoImg)
titleAndLogoDiv.append(logoDiv,videoTitle)
thumbImg.src = url;
thumbDiv.append(thumbImg,titleAndLogoDiv,channelNameDiv,viewsAndDaysDiv);
displayContent.append(thumbDiv)

let obj = {
    videoId,
    channelTitle,
    title,
    logoImgsrc,
    description,
    views,
    daysAgo
}
// adding function to thumbnail to go to next page //

thumbDiv.addEventListener("click",function(){
    goToDisplayPage(obj)
})

})


function goToDisplayPage(obj){
    localStorage.setItem("obj",JSON.stringify(obj))
    window.open("playVideo.html")
}



function showAll1(){
    qSearch = All.textContent;
    localStorage.setItem("searched",JSON.stringify(qSearch));
    window.location.href = "index.html"
}

function showAll2(){
    qSearch = Coding.textContent;
    localStorage.setItem("searched",JSON.stringify(qSearch));
    window.location.href = "index.html"
}

function showAll3(){
    qSearch = Memes.textContent;
    localStorage.setItem("searched",JSON.stringify(qSearch));
    window.location.href = "index.html"
}

function showAll4(){
    qSearch = Css.textContent;
    localStorage.setItem("searched",JSON.stringify(qSearch));
    window.location.href = "index.html"
}

function showAll5(){
    qSearch = CS.textContent;
    localStorage.setItem("searched",JSON.stringify(qSearch));
    window.location.href = "index.html"
}

function showAll6(){
    qSearch = Comedy.textContent;
    localStorage.setItem("searched",JSON.stringify(qSearch));
    window.location.href = "index.html"
}

function showAll7(){
    qSearch = Thoughts.textContent;
    localStorage.setItem("searched",JSON.stringify(qSearch));
    window.location.href = "index.html"
}

function showAll8(){
    qSearch = CSA.textContent;
    localStorage.setItem("searched",JSON.stringify(qSearch));
    window.location.href = "index.html"
}

function showAll9(){
    qSearch = Thrillers.textContent;
    localStorage.setItem("searched",JSON.stringify(qSearch));
    window.location.href = "index.html"
}

function showAll10(){
    qSearch = ComputerAndInfo.textContent;
    localStorage.setItem("searched",JSON.stringify(qSearch));
    window.location.href = "index.html"
}

function showAll11(){
    qSearch = DSA.textContent;
    localStorage.setItem("searched",JSON.stringify(qSearch));
    window.location.href = "index.html"
}

search.addEventListener("keypress",showInputBox)
// inputBox.addEventListener("click",showInputBox)
search.addEventListener("keydown",hideInputBox)
search.addEventListener("input",function(){
   deboucing(displaySearchResult,800)
})

async function showInputBox(){
    inputBox.style.visibility = "visible"
}

function hideInputBox(){
    inputBox.style.visibility = "hidden"
}

async function searchMovies(){
    qSearch = search.value;
    url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${qSearch}&key=${key}&type=video&maxResults=50`

  let respo = await fetch(url);
  let collect = await respo.json();
  
  return collect.items
  
}


async function displaySearchResult(){
   let data = await searchMovies()
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
// now lets work on the search results show at the inputBox.. 
