function addNextCard(){if(!(cardCount>=cardData.data.length)){$(".timeline .wrapper ").append(cards[cardCount]);var a=$(".card").last();if(a.addClass(cardCount%2===0?"bounceInLeft even":"bounceInRight odd").attr("order",cardCount+1),cardCount++,window.innerWidth>768){var t={};t.head=a.find(".card-wrapper").outerHeight(),t.body=0,a.height(t.head+t.body)}if(a.find(".head").addClass("head-color-white"),phaseCount!==cardData.data[cardCount-1].gsx$phase.$t){$(".timeline .wrapper ").append("<div class='phase-label animated bounceInDown phase"+(cardData.data[cardCount-1].gsx$phase.$t%3+1)+"-color'>Phase "+cardData.data[cardCount-1].gsx$phase.$t+"</div>"),phaseCount=cardData.data[cardCount-1].gsx$phase.$t;var d=a.position().top,e=parseInt(a.css("margin-top"));$(".phase-label").last().css({top:0===d?d:d+e-50})}}}function preloadCards(){_.each(cardData.data,function(a){cards.push(cardTemplate(a))})}var cardCount=0,phaseCount=0,cardSourceHTML=$(".card-template").html(),cardTemplate=Handlebars.compile(cardSourceHTML),cardData={},cards=[];$(function(){$.getJSON("https://spreadsheets.google.com/feeds/list/1wU78mvGOs58mmtBP3W-Ehclxke1nr1oMtlq7jXWOch8/od6/public/values?alt=json",function(a){cardData.data=a.feed.entry,console.log(cardData.data),preloadCards(),$(".sk-rotating-plane").remove(),addNextCard(),addNextCard(),addNextCard(),$(".timeline .wrapper").timelify()})});