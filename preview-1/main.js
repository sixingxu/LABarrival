var mintedArr = [];
var orderArr = [];


$( document ).ready(function() {

    $.getJSON("test-list.json", function(data) {
        eps = data;
        eps.forEach(item=>{
            if(item.Status=='Minted'){
                console.log(item.Status)
                mintedArr.push(item)
            }
        })
        orderArr = Array.from(Array(mintedArr.length).keys())


            setInterval(()=>{
                $('.logo').fadeIn('slow');
                $('.nft-status').css('filter','blur(50px)')
                $('.nft-status').css('-webkit-filter','blur(50px)')
            },17000)
    
            setInterval(()=>{
                $('.logo').fadeOut('slow');
                $('.nft-status').css('filter','blur(0px)')
                $('.nft-status').css('-webkit-filter','blur(0px)')
            },20000)
 


        orderArr.forEach(item=>{
            var currentIndex = orderArr.indexOf(item)
            //$('.name-display').append(`<span class="visitor-name" id="visitor-${mintedArr.indexOf(item)}">${item.Visitor}</span>`)
            //$('.visitor-name').first().show();
            if((currentIndex+1)%3 ==0){
                    $('.splide__list').append(`
                    <li class="splide__slide" data-splide-interval="8000">
                    <div class="visitor-name" id="visitor-${orderArr.indexOf(item)}"><b>${mintedArr[currentIndex].Visitor}'s TRUE NAME:</b></div>
                    <div class="nft-image">
                    <img src="imgs/truename-mockup.jpg">
                    </div></li>`)  
            }else{
                $('.splide__list').append(`
                <li class="splide__slide" data-splide-interval="8000">
                <div class="visitor-name" id="visitor-${orderArr.indexOf(item)}"><b>${mintedArr[currentIndex].Visitor}'s TRUE NAME:</b></div>
                <div class="nft-image">
                <img src="imgs/truename-mockup.jpg">
                </div></li>`)
            }


            // $('.nft-image').first().show();

        })

        var splide = new Splide( '.splide', {
            type   : 'loop',
            perPage: 1,
            autoplay:true,
            cover:true,
            pagination:false,
            arrows:false,
          } );
        // splide.on( 'autoplay:playing', function ( rate ) {
        //     console.log( rate ); // 0-1
        //   } );
         splide.mount();

    })

    console.log(mintedArr)

 })

function imageShuffle(){
        orderArr.forEach(item=>{
            console.log(item)
             setTimeout(function(){
                $(`#visitor-${item}`).slideToggle('slow')
                $(`#visitor-${item+1}`).slideToggle('slow')
                $(`#nft-${item}`).slideToggle('slow')
                $(`#nft-${item+1}`).slideToggle('slow')
            },  2000)
        })

}