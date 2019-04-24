
function togglenav() {
    var x = document.getElementById("mySidebar").style.width;
    if(x=="250px")
    {
        document.getElementById("mySidebar").style.width="75px";
    }
    else{
        document.getElementById("mySidebar").style.width="250px";
    }
  }
  
  $(document).ready(function(){
      $(this).addClass("active");
  })