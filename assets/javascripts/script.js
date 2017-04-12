function addNextCard() {
  if( cardCount >= cardData.data.length){
    return;
  }

  var html    = cardTemplate(cardData.data[cardCount]);

  $(".timeline .wrapper ").append(html);
  $(".card").last().addClass(
    ((cardCount%2 === 0) ? "bounceInLeft even" : "bounceInRight odd")
  ).attr("order", cardCount+1);

  cardCount++;
  var heights = {};
  heights['head'] = $(".card").last().find(".head").outerHeight();
  heights['body'] = $(".card").last().find(".body").outerHeight();

  // console.log(cardCount, heights['head'], heights['body']);
  $(".card").last().height(heights['head'] + heights['body']);
  $(".card").last().find(".head").addClass("head-color-" + cardCount%8);

  // add phase label later so the card height can be used to determine the offset
  // for the label
  if(phaseCount !== cardData.data[cardCount-1].phase){
    $(".timeline .wrapper ").append("<div class='phase-label phase" + ((cardData.data[cardCount-1].phase%3) + 1) + "-color'>Phase " + cardData.data[cardCount-1].phase + "</div>");
    phaseCount = cardData.data[cardCount-1].phase;
    // need some offset on top of the position.top
    var offsetTop = $(".card").last().position().top;
    // because the position top is the same for 1,2 and 3,4 pairs
    // and only margin top changes between these pairs
    var offsetTopMargin = parseInt($(".card").last().css("margin-top"));
    $(".phase-label").last().css({top : (offsetTop == 0) ? offsetTop : offsetTop + offsetTopMargin - 50 })
  }
}

$(function () {

  // globals

  // keep track of current card count
  cardCount = 0;
  // keep track of current phase count
  phaseCount = 0;

  // define the card template
  cardSourceHTML   = $(".card-template").html();
  cardTemplate = Handlebars.compile(cardSourceHTML);

  // json card data
  // Current properties of a card are:
  // Properties:
  // num for the year/phase?
  // subtitle
  // title
  // body: non-HTML text
  // img: img url
  // iframe: iframe url
  // phase: num
  cardData = {
      "data": [
        {
          num: 2010,
          subtitle: "subtitle",
          title: "Technology",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
          img: "http://lorempixel.com/1000/500",
          phase: 1
        },
        {
          num: 2010,
          subtitle: "Pss.. Here is the scoop",
          title: "Abstract",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
          img: "http://lorempixel.com/800/500",
          phase: 1
        },
        {
          num: 2010,
          subtitle: "Pss.. Here is the scoop",
          title: "Abstract",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
          iframe: "https://www.youtube.com/embed/DiTECkLZ8HM",
          phase: 1
        },
        {
          num: 2011,
          subtitle: "Pss.. Here is the scoop",
          title: "Abstract",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
          iframe: "https://www.youtube.com/embed/DiTECkLZ8HM",
          img: "http://lorempixel.com/800/500",
          phase: 2
        },
        {
          num: 2012,
          subtitle: "Pss.. Here is the scoop",
          title: "Abstract",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
          img: "http://lorempixel.com/800/500",
          phase: 3
        },
        {
          num: 2013,
          subtitle: "Pss.. Here is the scoop",
          title: "Abstract",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
          img: "http://lorempixel.com/800/500",
          phase: 4
        },
      ]
  };

  // init the timeline with 3 cards
  addNextCard();
  addNextCard();
  addNextCard();

  // setup the timelify plugin
  // This is a modified timelify, in that it calls addNextCard()
  // when a scroll is triggered with a bit of a gap(the height of a card)
  $('.timeline .wrapper').timelify();

});
