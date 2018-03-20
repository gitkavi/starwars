$(document).ready(function () {
    var player1 = {
        name: "Darth Vader",
        healthPoint: 110,
        activePoint: 8,
        counterActivePoint: 0,
        image:'assets/images/darth.jpg'
    };
    var player2 = {
        name: "Princess Leia",
        healthPoint: 150,
        activePoint: 5,
        counterActivePoint: 0,
        image:'assets/images/leia.jpg'
    };
    var player3 = {
        name: "Luke Skywalker",
        healthPoint: 200,
        activePoint: 10,
        counterActivePoint: 0,
        image:'assets/images/luke.jpg'
    };
    var player4 = {
        name: "Chewbacca",
        healthPoint: 180,
        activePoint: 9,
        counterActivePoint: 0,
        image:'assets/images/Chewbacca.png'
    };

    function reset(){
        
        $("#player1-name").html(player1.name);
        $("#player2-name").html(player2.name);
        $("#player3-name").html(player3.name);
        $("#player4-name").html(player4.name);
        $("#player1-img").attr('src', player1.image);
        $("#player2-img").attr('src', player2.image);
        $("#player3-img").attr('src', player3.image);
        $("#player4-img").attr('src', player4.image);
        $("#player1-hp").html(player1.healthPoint);
        $("#player2-hp").html(player2.healthPoint);
        $("#player3-hp").html(player3.healthPoint);
        $("#player4-hp").html(player4.healthPoint);
    }

    reset();

    $("#player1-img").on("click", function(){
        console.log("Clicked on player1");
        console.log(player1);
        $("#player1-name").html(player1.name);
        $("#player1-img").attr('src', player1.image);
        $("#player1-hp").html(player1.healthPoint);
        $("#player2").hide();
        $("#player3").hide();
        $("#player4").hide();

        // Move all the other players to enemy's row
        $("#enemy1").html("<div id='enemy1-name' class='name'>"+player2.name+"</div>");
        $("#enemy1").append("<img id='enemy1-img' class='img-display' src='"+player2.image+"'>");
        $("#enemy1").append("<div id='enemy1-hp' class='health'>"+player2.healthPoint+"</div>");
        $("#enemy2").html("<div id='enemy1-name' class='name'>"+player3.name+"</div>");
        $("#enemy2").append("<img id='enemy1-img' class='img-display' src='"+player3.image+"'>");
        $("#enemy2").append("<div id='enemy1-hp' class='health'>"+player3.healthPoint+"</div>");
        $("#enemy3").html("<div id='enemy1-name' class='name'>"+player4.name+"</div>");
        $("#enemy3").append("<img id='enemy1-img' class='img-display' src='"+player4.image+"'>");
        $("#enemy3").append("<div id='enemy1-hp' class='health'>"+player4.healthPoint+"</div>");
    });

});