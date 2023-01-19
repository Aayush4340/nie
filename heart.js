const bodyEl = document.querySelector("body");
setInterval(() => {
    x = Math.floor(Math.random()*(screen.width))
    y = Math.floor(Math.random()*screen.height*10)
    const xPosition = x
   const ypoistion = y
   const spanEl = document.createElement("span");

   spanEl.style.left = xPosition + "px";
   spanEl.style.top = ypoistion + "px";

   const size = Math.random()*100;
   spanEl.style.width = size + "px";
   spanEl.style.height = size + "px";

   bodyEl.appendChild(spanEl);

   setTimeout(()=>{
    spanEl.remove();
   }, 4000);

}, 50);