/* JsHint enabled via Codekit */
/* global Handlebars */

// keep track of current card count
var cardCount = 0;
// keep track of current phase count
var phaseCount = 0;

// define the card template
var cardSourceHTML   = $(".card-template").html();
var cardTemplate = Handlebars.compile(cardSourceHTML);

var cardData = {};


function addNextCard() {
  if( cardCount >= cardData.data.length){
    return;
  }

  var html    = cardTemplate(cardData.data[cardCount]);

  $(".timeline .wrapper ").append(html);
  var lastCard = $(".card").last();
  lastCard.addClass(
    ((cardCount%2 === 0) ? "bounceInLeft even" : "bounceInRight odd")
  ).attr("order", cardCount+1);

  cardCount++;
  var heights = {};
  heights.head = lastCard.find(".head").outerHeight();
  heights.body = lastCard.find(".body").outerHeight();

  // console.log(cardCount, heights['head'], heights['body']);
  lastCard.height(heights.head + heights.body);
  lastCard.find(".head").addClass("head-color-" + cardCount%8);

  // add phase label later so the card height can be used to determine the offset
  // for the label
  if(phaseCount !== cardData.data[cardCount-1].gsx$phase.$t){
    $(".timeline .wrapper ").append("<div class='phase-label animated bounceInDown phase" + ((cardData.data[cardCount-1].gsx$phase.$t%3) + 1) + "-color'>Phase " + cardData.data[cardCount-1].gsx$phase.$t + "</div>");
    phaseCount = cardData.data[cardCount-1].gsx$phase.$t;
    // need some offset on top of the position.top
    var offsetTop = lastCard.position().top;
    // because the position top is the same for 1,2 and 3,4 pairs
    // and only margin top changes between these pairs
    var offsetTopMargin = parseInt(lastCard.css("margin-top"));
    $(".phase-label").last().css({top : (offsetTop === 0) ? offsetTop : offsetTop + offsetTopMargin - 50 });
  }
}

$(function () {

  $.getJSON("https://spreadsheets.google.com/feeds/list/1wU78mvGOs58mmtBP3W-Ehclxke1nr1oMtlq7jXWOch8/od6/public/values?alt=json", function(data) {
    //first row "title" column
    cardData.data = data.feed.entry;

    // init the timeline with 3 cards
    addNextCard();
    addNextCard();
    addNextCard();
  });

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
  // cardData = {
  //     "data": [
  //       {
  //         num: 2010,
  //         subtitle: "subtitle",
  //         title: "Technology",
  //         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
  //         img: "http://lorempixel.com/1000/500",
  //         phase: 1
  //       },
  //       {
  //         num: 2010,
  //         subtitle: "Pss.. Here is the scoop",
  //         title: "Abstract",
  //         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
  //         img: "http://lorempixel.com/800/500",
  //         phase: 1
  //       },
  //       {
  //         num: 2010,
  //         subtitle: "Pss.. Here is the scoop",
  //         title: "Abstract",
  //         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
  //         iframe: "https://www.youtube.com/embed/DiTECkLZ8HM",
  //         phase: 1
  //       },
  //       {
  //         num: 2011,
  //         subtitle: "Pss.. Here is the scoop",
  //         title: "Abstract",
  //         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
  //         iframe: "https://www.youtube.com/embed/DiTECkLZ8HM",
  //         img: "http://lorempixel.com/800/500",
  //         phase: 2
  //       },
  //       {
  //         num: 2012,
  //         subtitle: "Pss.. Here is the scoop",
  //         title: "Abstract",
  //         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
  //         img: "http://lorempixel.com/800/500",
  //         phase: 3
  //       },
  //       {
  //         num: 2013,
  //         subtitle: "Pss.. Here is the scoop",
  //         title: "Abstract",
  //         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
  //         img: "http://lorempixel.com/800/500",
  //         phase: 4
  //       },
  //     ]
  // };

  // setup the timelify plugin
  // This is a modified timelify, in that it calls addNextCard()
  // when a scroll is triggered with a bit of a gap(the height of a card)
  $('.timeline .wrapper').timelify();

});
