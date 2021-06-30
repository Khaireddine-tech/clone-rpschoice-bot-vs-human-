function game(yourchoice){
    console.log(yourchoice)
    let humanchoice, botchoice
    humanchoice = yourchoice.id

    botchoice = nbrchoice(rpsint())
    console.log('computer choice:', botchoice)

    results = decidewinner(humanchoice, botchoice)
    console.log(results)

    message = finalmessage(results)
    console.log(message)

    rpsfront(yourchoice.id, botchoice, message)
}

function rpsint(){
    return Math.floor(Math.random()*3)
}

function nbrchoice(number){
    return ['rock', 'paper','scissors'][number]
}

function decidewinner(yourchoice, computerchoice){
    let rpsdata={
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
    }

    let yourscore = rpsdata[yourchoice][computerchoice]
    let computerscore = rpsdata[computerchoice][yourchoice]

    return [yourscore, computerscore]
}

function finalmessage(yourscore, computerscore){
    if (yourscore === 0) {
        return{'message':'you lost', 'color':'red'}
    } else if (yourscore === 0.5){
        return{'message':'you tied', 'color':'yellow'}
    } else{
        return{'message':'you won', 'color':'green'}
    }
}

function rpsfront(humanimagechoice, computerimagechoice, finalmessage){
    let imgdata = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
}

document.getElementById('rock').remove()
document.getElementById('paper').remove()
document.getElementById('scissors').remove()

let humandiv = document.createElement('div')
let botdiv = document.createElement('div')
let messagediv = document.createElement('div')

humandiv.innerHTML = "<img src='" + imgdata[humanimagechoice] + "'height = 150 width= 150 style='box-shadow: opx 10px 50px rgba(37, 50, 233, 1);'>"
messagediv.innerHTML = "<h1 style='color: " + finalmessage['color'] + ";font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
botdiv.innerHTML = "<img src='" + imgdata[botimagechoice] + "'height = 150px width= 150px style='box-shadow: opx 10px 50px rgba(243, 38, 24, 1);'>"

document.getElementById('flex-box-rps-div').appendChild(humandiv)
document.getElementById('flex-box-rps-div').appendChild(messagediv)
document.getElementById('flex-box-rps-div').appendChild(botdiv)