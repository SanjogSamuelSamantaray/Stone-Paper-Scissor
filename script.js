var compscore=0
var userscore=0
function play(clicked_id) {
    var compscore_span=document.querySelector("#comp-score")
    var userscore_span=document.querySelector("#user-score")

    var img = document.getElementById(clicked_id)
    var clone = img.cloneNode(true)
    document.getElementById("player").innerHTML=""
    document.getElementById("computer").innerHTML=""
    document.getElementById("player").appendChild(clone)

    var reflect
    if (img.id == "paper") {
        reflect = 0
    }
    else if (img.id == "stone") {
        reflect = 1
    }
    else if (img.id == "scissor") {
        reflect = 2
    }
    console.log("You=" + reflect)

    var num = Math.floor((Math.random() * 10) % 3)
    switch (num) {
        case 0:
            var img = document.getElementById("paper")
            var clone = img.cloneNode(true)
            document.getElementById("computer").appendChild(clone)
            break
        case 1:
            var img = document.getElementById("stone")
            var clone = img.cloneNode(true)
            document.getElementById("computer").appendChild(clone)
            break
        case 2:
            var img = document.getElementById("scissor")
            var clone = img.cloneNode(true)
            document.getElementById("computer").appendChild(clone)
            break
    }
    console.log("Computer=" + num)

    if (num == reflect) {
        document.getElementById("Result").innerHTML = "TIED 🤝"
    }
    else if (num == 0) {
        if (reflect == 1) {
            compscore++
            compscore_span.innerHTML=compscore
            document.getElementById("Result").innerHTML = "YOU LOST 💩"
        }
        else {
            userscore++
            userscore_span.innerHTML=userscore
            document.getElementById("Result").innerHTML = "YOU WON 😁"
        }
    }
    else if (num == 1) {
        if (reflect == 0) {
            userscore++
            userscore_span.innerHTML=userscore
            document.getElementById("Result").innerHTML = "YOU WON 😁"
        }
        else {
            compscore++
            compscore_span.innerHTML=compscore
            document.getElementById("Result").innerHTML = "YOU LOST 💩"
        }
    }
    else if (num == 2) {
        if (reflect == 0) {
            compscore++
            compscore_span.innerHTML=compscore
            document.getElementById("Result").innerHTML = "YOU LOST 💩"
        }
        else {
            userscore++
            userscore_span.innerHTML=userscore
            document.getElementById("Result").innerHTML = "YOU WON 😁"
        }
    }
    document.getElementById("player").classList.add(this.clicked_class)
    

}

