(()=>{console.log("Connected!");const e=document.querySelector("#contact-form"),t=(e.querySelector(".submit"),document.querySelectorAll(".call-to-action")),o=document.querySelector("#project-modal"),c=document.querySelector(".close"),n=o.querySelector(".modal-img");function r(){let e=`/project/${this.dataset.target}`;fetch(e).then(e=>e.json()).then(e=>{!function(e,t){const c=bodyScrollLock.disableBodyScroll;o.querySelector(".title").innerHTML=`${e.title}`,o.querySelector(".team").innerHTML=`<b>TEAM: </b> ${e.team}`,o.querySelector(".discipline").innerHTML=`<b>DISCIPLINE:</b> ${e.discipline}`,o.querySelector(".stack").innerHTML=`<b>STACK: </b> ${e.stack}`,o.querySelector(".libraries").innerHTML=`<b>LIBRARIES: </b> ${e.libraries}`,o.querySelector(".software").innerHTML=`<b>SOFTWARE: </b> ${e.software}`,o.querySelector(".task").innerHTML=`${e.task}`,n.src=`images/${e.img}`,o.classList.remove("hide"),c(o)}(e)}).catch(e=>console.log(e))}window.onclick=function(e){if(e.target==o){(0,bodyScrollLock.enableBodyScroll)(o),o.classList.add("hide")}},e.addEventListener("submit",(function(t){t.preventDefault();let o=new FormData(e),c={};for(let[e,t]of o.entries())c[e]=t;let n=document.querySelector(".success");document.querySelector(".error"),fetch("/mail",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-type":"application/json"},body:JSON.stringify(c)}).then(e=>e.json()).then(t=>{console.log(t),t.response.includes("OK")&&(e.reset(),n.textContent="Success! Thanks for reaching out.")}).catch(e=>console.log(e))})),t.forEach(e=>e.addEventListener("click",r)),c.addEventListener("click",(function(){const e=bodyScrollLock.enableBodyScroll;o.classList.add("hide"),e(o)}))})();