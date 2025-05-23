
window.addEventListener("hashchange",(event)=>{
    // console.log(location.hash)
    router()

})

function router (){
   switch (location.hash){
    case "":
        render ({title : "HOME", color : 'red', href : "#home"})
        break;
    
   case "#home" :
        render ({title: 'HOME', color :"red", href : "#home"})
        break;
    
    case "#search":
        render ({title: "SEARCH", color : 'blue', href : "#search"})
        break;

    case "#likes" :
        render ({title : "LIKES", color : "yellow", href : "#likes"})
        break;

    case "#profile" :
        render ({title : 'PROFILE', color : "pink", href : "#profile"})
        break;
    }
}

function render  (data) {
 
    document.querySelector("h1").innerText = data.title
    document.querySelector(".container_home").style.backgroundColor = data.color
 
    document.querySelectorAll('A').forEach((element) => {
      
        element.style.color = element.href.includes(data.href) ? "silver" : "black"
    });
}

