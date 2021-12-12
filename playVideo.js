import navbar from "/navbar.js";
Import.innerHTML = navbar();
// console.log("hlo")
let key = `AIzaSyD41hkSAxKHA9hdnkguwHgdIdYsqwn7m9k`
// let key = `AIzaSyCVVszc0u-8aUBeMJEk9V05dJPWeFGS-B0`
// let key = `AIzaSyBvt7iWnHLeRYtik2Vyb0Eqc8D1Zs44XxA`
// let key = `AIzaSyC7gR712tr_ZIszHk-xEJGz7oO65daeQ20`
logoimg.addEventListener("click",goToHome)
function goToHome(){
   window.location.href="index.html"
}


let obj = JSON.parse(localStorage.getItem("obj"));

let{videoId,channelTitle,title,logoImgsrc,description,views,daysAgo} = obj;

let viewEle = document.createElement("p");
let daysEle = document.createElement("p");
let viewDayLikeDiv = document.createElement("div");
viewDayLikeDiv.setAttribute("id","viewDayLikeDiv");

viewEle.textContent = views;
daysEle.textContent = daysAgo;



let viewAndDaysDiv = document.createElement("div");
viewAndDaysDiv.setAttribute("id","viewAndDaysDiv")


let videoTitle = document.createElement("p");
videoTitle.setAttribute("id","videoTitle")
videoTitle.textContent = title;

let hr = document.createElement("hr")


// like & dislike icon //
let likescount = Math.floor(Math.random()*5000)+"K"


let like = document.createElement("div")
like.innerHTML = `<span class="material-icons-outlined">
thumb_up
</span> ${likescount}`

let dislike = document.createElement("div");
dislike.innerHTML = `<span class="material-icons-outlined">
thumb_down
</span> Dislike`

let share  = document.createElement("div");
share.innerHTML = `<i class="fas fa-share"></i> Share`


let save = document.createElement("div");
save.innerHTML = `<span class="material-icons-outlined">
save_alt
</span> Save`

let more = document.createElement("div")
more.innerHTML = `<span class="material-icons-outlined">
more_horiz
</span>`

let iconsDiv = document.createElement("div");
iconsDiv.setAttribute("id","iconsDiv");


iconsDiv.append(like,dislike,share,save,more)



viewAndDaysDiv.append(viewEle,daysEle)
viewDayLikeDiv.append(viewAndDaysDiv,iconsDiv)




let logoImg = document.createElement("img");
logoImg.src = logoImgsrc;
// console.log("hee",logoImgsrc)
let iframe = document.createElement("iframe");
iframe.setAttribute("id","iframe")
iframe.allowFullscreen = "true";
iframe.allow = "autoplay"
iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
iframeVideo.append(iframe);





let channelInfo = document.createElement("div");
channelInfo.setAttribute("id","channelInfo")

let logoDiv = document.createElement("div");
logoDiv.setAttribute("id","logoDiv");


let logoImage = document.createElement("img");
logoImage.setAttribute("id","logoImage")
logoImage.src = logoImgsrc;


let subscribersCountEle = document.createElement("p")
subscribersCountEle.setAttribute("id","subscribersCountEle")
let subscribersCount = Math.ceil(Math.random()*10)+"M subscribers"

subscribersCountEle.textContent = subscribersCount


let videoDescription = document.createElement("div");

let videoDescriptionEle = document.createElement("p");
videoDescriptionEle.textContent = description;

videoDescription.append(videoDescriptionEle)

   let logoAndSubscribeDiv = document.createElement("div"); 
   logoAndSubscribeDiv.setAttribute("id","logAndSub");   

   let subscribeDiv = document.createElement("div");
   subscribeDiv.setAttribute("id","subscribeDiv")
   let subscribeEle = document.createElement("p")
   subscribeEle.textContent = "SUBSCRIBE";
   



   let channelName = document.createElement("div");
   channelName.setAttribute("id","channelName")
   let channelNameEle = document.createElement("div")
   channelNameEle.innerHTML= `${channelTitle}<span class="material-icons-round tick">
   check_circle
   </span>`;

   channelName.append(channelNameEle,subscribersCountEle)

   subscribeDiv.append(subscribeEle)
   logoAndSubscribeDiv.append(channelName,subscribeDiv)





   let descripDiv = document.createElement("div");
   descripDiv.setAttribute("id","descripDiv")
   descripDiv.append(logoAndSubscribeDiv,videoDescription)

logoDiv.append(logoImage)
channelInfo.append(logoDiv,descripDiv)



let commentDiv = document.createElement("div")
commentDiv.setAttribute("id","commentDiv")

let commentsEle = document.createElement("p");
commentsEle.textContent = "0 Comments"

let sortCommentEle = document.createElement("p");
sortCommentEle.innerHTML = `<span class="material-icons-round">
sort
</span> SORT BY`;


let hr1 = document.createElement("hr")

commentDiv.append(commentsEle,sortCommentEle)

let commentSection = document.createElement("div");
commentSection.setAttribute("id","commentSection")



let commentSideLogo = document.createElement("img")
commentSideLogo.setAttribute("id","commentSideLogo")
commentSideLogo.src = logoImgsrc;

let input = document.createElement("input");
input.setAttribute("id","input")
input.type = "text";
input.placeholder = "Add a public comment..."




commentSection.append(commentSideLogo,input)

aboutVideo.append(videoTitle,viewDayLikeDiv,hr,channelInfo,hr1,commentDiv,commentSection)




search.addEventListener("input",showInputBox)
// inputBox.addEventListener("click",showInputBox)
search.addEventListener("keydown",hideInputBox)
search.addEventListener("input",function(){
   deboucing(displaySearchResult,1500)
})


let suggestionData = JSON.parse(localStorage.getItem("searchData"))
console.log(suggestionData)

suggestionData.map((suggestionItem)=>{

   let suggestionDiv= document.createElement("div");
   suggestionDiv.setAttribute("id","suggestionDiv");


   let fst = document.createElement("div");
   fst.setAttribute("id","fst")


   let scnd = document.createElement("div");
   scnd.setAttribute("id","scnd")
   
   let suggestionSnippet = suggestionItem.snippet;
   // console.log(suggestionSnippet)

   let {channelId,description,channelTitle,title} = suggestionSnippet;
   let thumbnail = suggestionSnippet.thumbnails.medium.url;
   let {videoId} = suggestionItem.id;
   // console.log(title)
   
   let thumbImg = document.createElement("img");
   thumbImg.setAttribute("id","thumbImg")

   thumbImg.src = thumbnail;


let titleEle = document.createElement("p");
titleEle.setAttribute("id","suggestionTitle")
titleEle.textContent = title;

let channelTitleName = document.createElement("p");
channelTitleName.setAttribute("id","channelTitleName");
channelTitleName.innerHTML = `${channelTitle} <span class="material-icons-round tick">
check_circle
</span>`;

let viewAndTimeDiv = document.createElement("div");
viewAndTimeDiv.setAttribute("id","viewAndTimeDiv");

let viewsEle = document.createElement("P")
viewsEle.textContent = views;

let timeEle = document.createElement("p");
timeEle.textContent =daysAgo

viewAndTimeDiv.append(viewsEle,timeEle)

let logoImgsrc = thumbnail
console.log("haha",logoImgsrc)

scnd.append(titleEle,channelTitleName,viewAndTimeDiv)

   fst.append(thumbImg)
   suggestionDiv.append(fst,scnd)

   suggestionBox.append(suggestionDiv)


   let otherObj = {
      videoId,
      channelTitle,
      title,
      logoImgsrc,
      description,
      views,
      daysAgo

   }


   suggestionDiv.addEventListener("click",function(){
      goToDisplayPage(otherObj)
   })


})



function goToDisplayPage(otherObj){
   localStorage.setItem("obj",JSON.stringify(otherObj))
   window.open("playVideo.html")
}




async function showInputBox(){
    inputBox.style.visibility = "visible"
}

function hideInputBox(){
    inputBox.style.visibility = "hidden"
}

async function searchMovies(){
   let qSearch = search.value;
   let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${qSearch}&key=${key}&type=video&maxResults=50`

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
window.location.href = "search.html"
}