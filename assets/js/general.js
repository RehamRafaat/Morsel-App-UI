
function togglenav() {
    var x = document.getElementById("mySidebar").style.width;
    if(x=="250px")
    {
        document.getElementById("mySidebar").style.width="75px";
        $(document).ready(function(){
            $(".hideit").css('visibility', 'hidden');
        });
    }
    else{
        document.getElementById("mySidebar").style.width="250px";
        $(document).ready(function(){
            $(".hideit").css('visibility', 'visible');
        });
    }
  }
  
  $(document).ready(function(){
      $(this).addClass("active");
  })