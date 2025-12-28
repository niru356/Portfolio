// Animated Timeline Slide-in
const timelineItems = document.querySelectorAll('.timeline-item');

function slideInTimeline(){
  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      item.classList.add('active');
    }
  });
}
window.addEventListener('scroll', slideInTimeline);
slideInTimeline(); // initial check



/* STARS */
const starContainer = document.getElementById("stars");
for(let i=0;i<80;i++){
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random()*100 + "%";
  star.style.top = Math.random()*120 + "%";
  star.style.animationDuration = (3+Math.random()*5) + "s";
  starContainer.appendChild(star);
}

/* TYPING EFFECT */
const text="Turning complex data into meaningful business insights.";
let i=0;
(function type(){
  if(i<text.length){document.getElementById("typing").innerHTML+=text.charAt(i++);setTimeout(type,50);}
})();

/* ROLE ANIMATION */
const roles=["Data Analyst","MCA Student","BI Enthusiast","Python Programmer"];
let r=0,c=0;
const roleText=document.getElementById("roleText");
function typeRole(){if(c<=roles[r].length){roleText.textContent=roles[r].substring(0,c++);setTimeout(typeRole,100);}else setTimeout(eraseRole,1500);}
function eraseRole(){if(c>=0){roleText.textContent=roles[r].substring(0,c--);setTimeout(eraseRole,50);}else{r=(r+1)%roles.length;setTimeout(typeRole,500);}}
typeRole();

/* SCROLL REVEAL */
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{reveals.forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight-120){el.classList.add("active");}})});

/* CHARTS */
let charts=[];
const chartData={
  programming:{labels:["Python","R","SQL","Excel"],values:[90,75,85,80]},
  bi:{labels:["Power BI","Tableau","Excel"],values:[88,70,85]},
  statistics:{labels:["Descriptive","Inferential","Predictive","Prescriptive"],values:[80,75,85,70]}
};
function loadCharts(skill){
  charts.forEach(c=>c.destroy());
  charts=[];
  ["chart1","chart2","chart3"].forEach(id=>{
    charts.push(new Chart(document.getElementById(id),{
      type:"bar",
      data:{labels:chartData[skill].labels,datasets:[{data:chartData[skill].values,backgroundColor:"rgba(34,197,94,.6)"}]},
      options:{plugins:{legend:{display:false}}}
    }));
  });
}
loadCharts("programming");
document.querySelectorAll(".filter-btns button").forEach(btn=>{btn.onclick=()=>{
  document.querySelector(".filter-btns .active").classList.remove("active");
  btn.classList.add("active");
  loadCharts(btn.dataset.skill);
}});
