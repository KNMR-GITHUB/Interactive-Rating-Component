rating = 0;

$(".circle").click(function(e){
    console.log(e.target.id);
    rating = e.target.id;
    localStorage.setItem("rating",rating);
});
