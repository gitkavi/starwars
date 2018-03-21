$(document).ready(function () {
    var players = [
        {
            name: "Darth Vader",
            healthPoint: 110,
            attackPoint: 8,
            counterAttackPoint: 0,
            image: 'assets/images/darth.jpg'
        },
        {
            name: "Princess Leia",
            healthPoint: 150,
            attackPoint: 25,
            counterAttackPoint: 0,
            image: 'assets/images/leia.jpg'
        },
        {
            name: "Luke Skywalker",
            healthPoint: 200,
            attackPoint: 10,
            counterAttackPoint: 0,
            image: 'assets/images/luke.jpg'
        },
        {
            name: "Chewbacca",
            healthPoint: 180,
            attackPoint: 15,
            counterAttackPoint: 0,
            image: 'assets/images/Chewbacca.png'
        }];

    var isFirstClick = true;

    function reset() {
        for (var i = 0; i < 4; i++) {

            var player = "player" + i;

            //creates a div element with class as name, id as player0-name and sets the value
            var playerName = $("<div>");
            playerName.attr('id', player + '-name');
            playerName.attr('class', 'name');
            playerName.html(players[i].name);
            $("#" + player).append(playerName);

            //creates an img element with class as img-display, id as player0-img and sets the value
            var playerImage = $("<img>");
            playerImage.attr('id', player + '-img');
            playerImage.attr('class', 'img-display');
            playerImage.attr('src', players[i].image);
            $("#" + player).append(playerImage);

            //creates an img element with class as health, id as player0-hp and sets the value
            var playerHealth = $("<div>");
            playerHealth.attr('id', player + '-hp');
            playerHealth.attr('class', 'health');
            playerHealth.html(players[i].healthPoint);
            $("#" + player).append(playerHealth);
            $("#" + player).attr('data-index', i);

            //Show the created divs by calling the parent div element ex:player0
            $("#" + player).show();

            var enemy = "enemy" + i;

            var enemyName = $("<div>");
            enemyName.attr('id', enemy + '-name');
            enemyName.attr('class', 'name');
            enemyName.html(players[i].name);
            $("#" + enemy).append(enemyName);

            var enemyImage = $("<img>");
            enemyImage.attr('id', enemy + '-img');
            enemyImage.attr('class', 'img-display');
            enemyImage.attr('src', players[i].image);
            $("#" + enemy).append(enemyImage);

            var enemyHealth = $("<div>");
            enemyHealth.attr('id', enemy + '-hp');
            enemyHealth.attr('class', 'health');
            enemyHealth.html(players[i].healthPoint);
            $("#" + enemy).append(enemyHealth);
            $("#" + enemy).attr('data-index', i);


            $("#" + enemy).hide();

            var defendent = "defendent" + i;

            var defendentName = $("<div>");
            defendentName.attr('id', defendent + '-name');
            defendentName.attr('class', 'name');
            defendentName.html(players[i].name);
            $("#" + defendent).append(defendentName);

            var defendentImage = $("<img>");
            defendentImage.attr('id', defendent + '-img');
            defendentImage.attr('class', 'img-display');
            defendentImage.attr('src', players[i].image);
            $("#" + defendent).append(defendentImage);

            var defendentHealth = $("<div>");
            defendentHealth.attr('id', defendent + '-hp');
            defendentHealth.attr('class', 'health');
            defendentHealth.html(players[i].healthPoint);
            $("#" + defendent).append(defendentHealth);
            $("#" + defendent).attr('data-index', i);


            $("#" + defendent).hide();
        }

        $("#players_caption").show();
        $("#enemys_caption").hide();
        $("#defenders_caption").hide();
    }

    reset();

    var player = ['#player0', '#player1', '#player2', '#player3'];
    var enemy = ['#enemy0', '#enemy1', '#enemy2', '#enemy3'];
    var defendentArray = [];
    var defendentArrayLength = 0;

    for (var i = 0; i < 4; i++) {
        // var enemy = "enemy" + i;
        selectEnemy(i);
    }

    function selectEnemy(i) {
        $("#player" + i).on("click", function () {
            $("#enemys_caption").show();
            console.log("inside selectEnemy");
            for (var j = 0; j < 4; j++) {
                console.log("inside the j loop");
                console.log("i: " + i);
                console.log("j: " + j);
                if (i === j) {
                    console.log("inside res == i");
                    $(player[j]).show();
                    $(enemy[j]).hide();
                }
                else {
                    $(player[j]).hide();
                    $(enemy[j]).show();
                    defendentArray.push("#defendent"+j);
                    defendentArrayLength = defendentArray.length;
                }
            }
        console.log("defendentArrayLength inside: "+defendentArrayLength);
        });
    }
    console.log(defendentArray);
    console.log("defendentArrayLength outside: "+defendentArrayLength);

    // for (var i = 0; i < defendent.length; i++) {
    //     console.log("inside selectDefendent for loop");
    //     selectDefendent(i);
    // }

    function selectDefendent(i) {
        console.log("inside selectDefendent");
        $("#enemy" + i).on("click", function () {
            $("#defenders_caption").show();
            console.log("inside selectDefendent");
            for (var j = 0; j < 3; j++) {
                console.log("inside the j loop");
                console.log("i: " + i);
                console.log("j: " + j);
                if (i === j) {
                    $(enemy[j]).hide();
                    $(defendent[j]).show();
                }
                else {
                    $(enemy[j]).show();
                    $(defendent[j]).hide();
                }
            }
        });

    }


    // $("#attack").click(function () {
    //     console.log(player);
    //     var attackPower = player.attackPoint;
    //     var counterAttackPower = defender.attackPoint;

    //     if (isFirstClick) {
    //         player.healthPoint = player.healthPoint - defender.attackPoint;
    //         defender.healthPoint = defender.healthPoint - player.attackPoint;
    //         $("#")
    //     }

    //     isFirstClick = false;
    //     if (!isFirstClick) {
    //         attackPower += player.attackPoint;
    //     }



    // });
});