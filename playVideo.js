import navbar from "/navbar.js";
Import.innerHTML = navbar();
// console.log("hlo")

logoimg.addEventListener("click",goToHome)
function goToHome(){
   window.location.href="index.html"
}


let obj = JSON.parse(localStorage.getItem("obj"));

let{videoId,channelTitle,title,logoImgsrc,description,views,daysAgo} = obj;


let videoTitle = document.createElement("p");
videoTitle.textContent = title;

let channelName = document.createElement("p");
channelName.textContent = channelTitle;


let videoDescription = document.createElement("videoDescription");
videoDescription.textContent = description;


let logoImg = document.createElement("img");
logoImg.src = logoImgsrc;

let iframe = document.createElement("iframe");
iframe.setAttribute("id","iframe")
iframe.allowFullscreen = "true";
iframe.allow = "autoplay"
iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
iframeVideo.append(iframe);

aboutVideo.append(videoTitle,views,daysAgo,channelTitle)
