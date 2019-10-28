$(document).ready(function() {
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
  shuffleArray(Deck)

  var cardbuttons = Deck.map(function(e) {
    return `
  <div class="${e.value} worker">${e.value}</div>
  `
  })
  $(".boss").html(cardbuttons)

  //reload game
  // function ResetGame() {
  //   document.location.reload(true)
  // }

  var card1 = ""
  var card2 = ""
  var matches = []

  // Handling game play//

  $(".boss").on("click", ".worker", function(e) {
    e.preventDefault()

    ShowValue = $(this).attr("class")

    $(this).addClass("show")
    if ((card1 = "")) {
      card1 = ShowValue
      matches.push($(card1))
      console.log("---> card1", card1)
    } else if (card1 !== "" && card2 == "") {
      card2 = ShowValue
      matches.push($(card2))
    }
    // Match cards
    // {
    //   matches.push($(card1))
    //   matches.push($(card2))
    //   if (card1 === card2) {
    //   }
    // }

    console.log("---> showValue", ShowValue)
    console.log("---> matches", matches)
  }) ////////////

  //  TIMER //
  function getTimeStr(milliseconds) {
    var minutes = milliseconds / 60000
    var intMinutes = Math.floor(minutes)
    var seconds = Math.floor((minutes - intMinutes) * 60)

    return (
      intMinutes +
      ":" +
      (seconds < 10 ? "0" + seconds.toFixed(0) : seconds.toFixed(0))
    )
  }

  var startTime = new Date()
  setInterval(function() {
    var elapsedTime = Date.now() - startTime
    $(".timer").html(getTimeStr(elapsedTime))
    // console.log(getTimeStr(elapsedTime))
  }, 100)

  ///////////////////
})
