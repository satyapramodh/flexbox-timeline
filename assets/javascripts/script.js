function setCardStyles() {
  $.each($(".card"), function (idx, card) {
    // rotate head-color-class between 0-8
    $(card).find(".head").addClass("head-color-" + idx%8);
  });
}

function animateCards() {
  var windowHeight = $(window).height();
  var scrollHeight = $(window).scrollTop();
  // console.log("scrollHeight", scrollHeight);
  $.each($(".card"), function(idx, card){
      // console.log("idx, position, bool", idx, $(card).position().top + 400 - scrollHeight, $(card).position().top + 400 -  scrollHeight < 600);
      var position = $($(".card")[idx]).position();

      console.log("idx, position", idx, position);
      // debugger;
      if( (position.top + 400 - scrollHeight) < (windowHeight*0.6) ){
        var effectClass = ((idx%2 === 0) ? "bounceInLeft" : "bounceInRight");
        console.log("windowHeight, scrollHeight, position", windowHeight, scrollHeight, position.top);
        $(card).removeClass("hide-card animated bounceInLeft bounceInRight").addClass("animated " + effectClass);
      }
  });
}

$(function () {
  // Get demo-card-wrapper height
  // $(".demo-card-wrapper").height(
  //
  //   function(){
  //     // return _.reduce(
  //     //   $(".demo-card"),
  //     //   function(sum, card){
  //     //     return sum + $(card).height()
  //     //   },
  //     //   400
  //     // );
  //     console.log("height", $(".demo-card-wrapper").height(), $(".demo-card").last().height());
  //     return $(".demo-card-wrapper").height() + $(".demo-card").last().height()
  //   }
  // );

  // _.each($(".demo-card"), function(card){
  //   $(".demo-card-wrapper").height(
  //     function(){
  //       console.log("height", $(".demo-card-wrapper").height(), $(card).height());
  //       return $(".demo-card-wrapper").height() + $(card).height() + 90 + 50;
  //     }
  //   );
  // })

  setCardStyles();
  animateCards();

  var json = {
      "data": [
        "<div class='card'>
          <div class='head'>
            <div class='number-box'>
              <span>03</span>
            </div>
            <h2><span class='small'>Subtitle</span> Confidence</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe>
          </div>
        </div>",
        "<div class='card hide-card'>
          <div class='head'>
            <div class='number-box'>
              <span>04</span>
            </div>
            <h2><span class='small'>Subtitle</span> Confidence</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe>
          </div>
        </div>",
        "<div class='card hide-card'>
          <div class='head'>
            <div class='number-box'>
              <span>01</span>
            </div>
            <h2><span class='small'>Subtitle</span> Technology</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <img src='http://lorempixel.com/1000/500' alt='Graphic'>
          </div>
        </div>",
        "<div class='card'>
          <div class='head'>
            <div class='number-box'>
              <span>03</span>
            </div>
            <h2><span class='small'>Subtitle</span> Confidence</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe>
          </div>
        </div>",
        "<div class='card hide-card'>
          <div class='head'>
            <div class='number-box'>
              <span>04</span>
            </div>
            <h2><span class='small'>Subtitle</span> Confidence</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe>
          </div>
        </div>",
        "<div class='card hide-card'>
          <div class='head'>
            <div class='number-box'>
              <span>01</span>
            </div>
            <h2><span class='small'>Subtitle</span> Technology</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <img src='http://lorempixel.com/1000/500' alt='Graphic'>
          </div>
        </div>",
        "<div class='card'>
          <div class='head'>
            <div class='number-box'>
              <span>03</span>
            </div>
            <h2><span class='small'>Subtitle</span> Confidence</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe>
          </div>
        </div>",
        "<div class='card hide-card'>
          <div class='head'>
            <div class='number-box'>
              <span>04</span>
            </div>
            <h2><span class='small'>Subtitle</span> Confidence</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe>
          </div>
        </div>",
        "<div class='card hide-card'>
          <div class='head'>
            <div class='number-box'>
              <span>01</span>
            </div>
            <h2><span class='small'>Subtitle</span> Technology</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <img src='http://lorempixel.com/1000/500' alt='Graphic'>
          </div>
        </div>",
        "<div class='card'>
          <div class='head'>
            <div class='number-box'>
              <span>03</span>
            </div>
            <h2><span class='small'>Subtitle</span> Confidence</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe>
          </div>
        </div>",
        "<div class='card hide-card'>
          <div class='head'>
            <div class='number-box'>
              <span>04</span>
            </div>
            <h2><span class='small'>Subtitle</span> Confidence</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe>
          </div>
        </div>",
        "<div class='card hide-card'>
          <div class='head'>
            <div class='number-box'>
              <span>01</span>
            </div>
            <h2><span class='small'>Subtitle</span> Technology</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <img src='http://lorempixel.com/1000/500' alt='Graphic'>
          </div>
        </div>",
        "<div class='card'>
          <div class='head'>
            <div class='number-box'>
              <span>03</span>
            </div>
            <h2><span class='small'>Subtitle</span> Confidence</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe>
          </div>
        </div>",
        "<div class='card hide-card'>
          <div class='head'>
            <div class='number-box'>
              <span>04</span>
            </div>
            <h2><span class='small'>Subtitle</span> Confidence</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe>
          </div>
        </div>",
        "<div class='card hide-card'>
          <div class='head'>
            <div class='number-box'>
              <span>01</span>
            </div>
            <h2><span class='small'>Subtitle</span> Technology</h2>
          </div>
          <div class='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
            <img src='http://lorempixel.com/1000/500' alt='Graphic'>
          </div>
        </div>"
      ]
  };

  var totalObjects = json;

  $(window).scroll(function () {
    animateCards();
  });

});
