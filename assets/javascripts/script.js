function addNextCard() {
  if( cardCount >= cardData.data.length){
    return;
  }

  if(cardCount % 5 === 0){
    $(".timeline .wrapper ").append("<div class='phase-label'>Phase 1</div>")
    $(".phase-label").last().css({top : $(".timeline .wrapper ").height() })
  }
  // console.log("new height", $(".timeline .wrapper ").height());
  $(".timeline .wrapper ").append(cardData.data[cardCount]);
  $(".card").last().addClass(
    ((cardCount%2 === 0) ? "bounceInLeft even" : "bounceInRight odd")
  ).attr("order", cardCount+1);

  cardCount++;
  var heights = {};
  heights['head'] = $(".card").last().find(".head").outerHeight();
  heights['body'] = $(".card").last().find(".body").outerHeight();

  console.log(cardCount, heights['head'], heights['body']);
  $(".card").last().height(heights['head'] + heights['body']);
  $(".card").last().find(".head").addClass("head-color-" + cardCount%8);
}

$(function () {
  cardCount = 0;

  cardData = {
      "data": [
        "<div class='card animated'><div class='head'><div class='number-box'><span>2010</span></div><h2><span class='small'>Subtitle</span> Technology</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><img src='http://lorempixel.com/1000/500' alt='Graphic'></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2020</span></div><h2><span class='small'>Subtitle</span> Confidence</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2030</span></div><h2><span class='small'>Subtitle</span> Confidence</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2040</span></div><h2><span class='small'>Subtitle</span> Confidence</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2010</span></div><h2><span class='small'>Subtitle</span> Technology</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><img src='http://lorempixel.com/1000/600' alt='Graphic'></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2030</span></div><h2><span class='small'>Subtitle</span> Confidence</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2040</span></div><h2><span class='small'>Subtitle</span> Confidence</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2010</span></div><h2><span class='small'>Subtitle</span> Technology</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><img src='http://lorempixel.com/1000/500' alt='Graphic'></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2030</span></div><h2><span class='small'>Subtitle</span> Confidence</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2040</span></div><h2><span class='small'>Subtitle</span> Confidence</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2010</span></div><h2><span class='small'>Subtitle</span> Technology</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><img src='http://lorempixel.com/1000/500' alt='Graphic'></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2030</span></div><h2><span class='small'>Subtitle</span> Confidence</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2040</span></div><h2><span class='small'>Subtitle</span> Confidence</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2010</span></div><h2><span class='small'>Subtitle</span> Technology</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><img src='http://lorempixel.com/1000/500' alt='Graphic'></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2030</span></div><h2><span class='small'>Subtitle</span> Confidence</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2040</span></div><h2><span class='small'>Subtitle</span> Confidence</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><iframe width='100%' height='315' src='https://www.youtube.com/embed/DiTECkLZ8HM' frameborder='0' allowfullscreen></iframe></div></div>",
        "<div class='card animated'><div class='head'><div class='number-box'><span>2010</span></div><h2><span class='small'>Subtitle</span> Technology</h2></div><div class='body'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><img src='http://lorempixel.com/1000/500' alt='Graphic'></div></div>"
      ]
  };

  addNextCard();
  addNextCard();
  addNextCard();

  $('.timeline .wrapper').timelify();

});
