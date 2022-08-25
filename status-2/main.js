

$( document ).ready(function() {
    $.getJSON("test-list.json", function(data) {
        eps = data;

        displayStatus()

        
        var Arr = Array.from(Array(40).keys())
        var randomArr = shuffleArr(Arr)
        console.log(randomArr)

        // shuffle the display every 8 seconds
        setInterval(()=>{
            randomArr.forEach(item=>{
                console.log(item)
                 setTimeout(function(){
                    $(`#entry-${item}`).toggle("slide", {direction:'left'}, {duration:'slow'}, function(){
                        $(`#entry-${item+40}`).toggle("slide", {direction:'right'}, {duration:'slow'})
                    })
                },  Math.floor(Math.random() * 2000))
            })
        }, 8000)



    })

    


 })


//  function displayStatus(round){
//     $('.arrival-screen').append(`<div class='batch-${round}'></div>`)
//     for (var i = 50*(round-1); i<50*round;i++){
//         $(`.batch-${round}`).append(`<div class="entry" id="entry-${i}"></div>`)
//         $(`#entry-${i}`).append(`<div class="time" id="time-${i}">${eps[i].Time}</div>`)
//         $(`#entry-${i}`).append(`<div class="visitor" id="visitor-${i}">${eps[i].Visitor}</div>`)
//         $(`#entry-${i}`).append(`<div class="status" id="status-${i}">${eps[i].Status}</div>`)
//        if(eps[i].Status=='Viewed'){
//            $(`#entry-${i}`).addClass('viewed')
//        }
//        if(eps[i].Status=='Minted'){
//            $(`#entry-${i}`).addClass('minted')
//        }
//        if(i==50*round-1){
//            $(`#entry-${i}`).addClass('last-entry')
//        }
//     }
//  }

 function displayStatus(){
    $('.arrival-screen').append(`<div class='batch'></div>`)
    for (var i = 0; i<40;i++){
        $(`.batch`).append(`<div class="entry" id="entry-${i}"></div>`)
        $(`.batch`).append(`<div class="entry" id="entry-${i+40}"></div>`)
        $(`#entry-${i+40}`).hide()
        $(`#entry-${i}`).append(`<div class="time" id="time-${i}">${eps[i].Time}</div>`)
        $(`#entry-${i+40}`).append(`<div class="time" id="time-${i+40}">${eps[i+40].Time}</div>`)
        $(`#entry-${i}`).append(`<div class="visitor" id="visitor-${i}">${eps[i].Visitor}</div>`)
        $(`#entry-${i+40}`).append(`<div class="visitor" id="visitor-${i+40}">${eps[i+40].Visitor}</div>`)
        $(`#entry-${i}`).append(`<div class="status" id="status-${i}">${eps[i].Status}</div>`)
        $(`#entry-${i+40}`).append(`<div class="status" id="status-${i}">${eps[i+40].Status}</div>`)

       if(eps[i].Status=='Viewed'){
           $(`#entry-${i}`).addClass('viewed')
       }
       if(eps[i].Status=='Minted'){
           $(`#entry-${i}`).addClass('minted')
       }

       if(eps[i+50].Status=='Viewed'){
        $(`#entry-${i+40}`).addClass('viewed')
    }
    if(eps[i+50].Status=='Minted'){
        $(`#entry-${i+40}`).addClass('minted')
    }
       if(i==39){
        $(`#entry-${i}`).addClass('last-entry')
           $(`#entry-${i+40}`).addClass('last-entry')
       }
    }
 }

 function shuffleArr(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


 