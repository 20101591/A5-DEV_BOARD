// theme change
document.getElementById("theme-btn").addEventListener("click", function () {
    const value= getRandomColor(); 
    document.body.style.backgroundColor=value;
})
function getRandomColor(){
    const red = parseInt(Math.random() * 256);
    const green = parseInt(Math.random() * 256); 
    const blue = parseInt(Math.random() * 256);  
    return `rgb(${red}, ${green}, ${blue})`;
}

// current date
const options = { 
    weekday: 'short',  
    month: 'short',     
    day: '2-digit',   
    year: 'numeric'   
};
function getDate(){
    const dateString = new Date().toLocaleDateString('en-US', options);
    document.getElementById("get-Date").innerText=dateString;
}
window.onload = getDate;

// completed button

let clickNumber=0;
const totalButtons =document.getElementsByClassName("btn-complete");
document.getElementById("task-number").innerText=totalButtons.length;
for (let i = 0; i < totalButtons.length; i++) {
    // alert
    totalButtons[i].addEventListener("click", function (event){
    const cardTitle= event.target.closest('.card').querySelector(".card-title").innerText;
    alert("You have completed the task "+cardTitle+" at " +new Date().toLocaleTimeString());
    event.target.disabled = true;
    // history
    const taskHistory= document.createElement("span");
    taskHistory.innerText = ("You have completed the task "+ cardTitle +" at "+ new Date().toLocaleTimeString());
    taskHistory.style.padding = "10px";
    taskHistory.style.margin= "10px";
    taskHistory.style.borderRadius = "8px";
    taskHistory.style.backgroundColor = "#F4F7FF";
    document.getElementById("task-history").append(taskHistory);
    clickNumber++;  
    console.log( clickNumber);
    console.log( typeof clickNumber);
    // task number decrease
    document.getElementById("task-number").innerText=totalButtons.length-clickNumber;
    // congrats alert
    if(clickNumber===6){
        alert("🎉Congrats ! 🎉You have completed all the tasks")
    }
});   
}

// history button
document.getElementById("history-btn").addEventListener("click", function (event){
    document.getElementById("task-history").innerHTML="";  
})

// discover
document.getElementById("btn-discover").addEventListener ("click", function (event){
    window.location.href="blog.html"; 
})










