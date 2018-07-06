function getJoke(searchTerm){
  var searchTerm = $("#food").val();
  var jokesUrl = "https://api.icndb.com/jokes/random?firstName=" + searchTerm;
  $.ajax({
    url:jokesUrl,
    dataType: "json",
    success:function(response){
      console.log(response.value.joke);
      $("#jokes").append("<li>"+response.value.joke+"</li>");
    },
    error:function(r){
      console.log(r);
    }
  });
}

$("form").on("submit",function(e){
    e.preventDefault();
  var comida = $("#food").val()
  var apiKey = "rLbRTh0Fc2ANMteil8qM8m9D22k2QMidSKrLUcYc";
  var apiUrl = "https://api.nal.usda.gov/ndb/search/?format=json&q="+comida+"&sort=n&max=25&offset=0&api_key="+apiKey;
  $.ajax({
    url:apiUrl,
    success:function(r){//function runs after 200 level response
      // console.log(r)
      $("li").remove();
      r.list.item.forEach(function(e){
      $("#foodBrands").append("<li>"+e.name+"</li>");
      getJoke(e.name);
        // console.log(e.name);//test//logs json object //json objects can only be made up of properties and methods
    });
    },
    error:function(r){
      console.log("error");
    }
  });
});
