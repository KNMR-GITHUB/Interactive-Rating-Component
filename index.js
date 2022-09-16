rating = 0;

$(".circle").click(function(e){
    $("#"+rating).removeClass("backgroundChange");
    console.log(e.target.id);
    console.log()
    rating = e.target.id;
    $("#"+rating).addClass("backgroundChange");
    localStorage.setItem("rating",rating);
});
