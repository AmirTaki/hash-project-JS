const router =  ()=>{
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

    case "#LIKES" :
        render ({title : "LIKES", color : "yellow", href : "#likes"})
        break;

    case "#profile" :
        render ({title : 'PROFILE', color : "pink", href : "#profile"})
        break;
    }
}

window.addEventListener("hashchange",(event)=>{
    console.log(location.hash)
})

