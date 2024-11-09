
var quotes=[
  {quote:'“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.”'  ,  by:"― Socrates"},
  {quote:'“The wheel of the world swings through the same phases again and again.”'  ,  by:"― Rudyard Kipling, The Man Who Would Be King"},
  {quote:'“Insanity is doing the same thing, over and over again, but expecting different results.”'  ,  by:"― Narcotics Anonymous"},
  {quote:'“Time you enjoy wasting is not wasted time.”'  ,  by:"― Marthe Troly-Curtin, Phrynette Married"},
  {quote:'“Every night I dream a lot. Every day I live a little.”'  ,  by:"― Max Nowaz, Get Rich or Get Lucky"},
  {quote:'“Live as if you were to die tomorrow. Learn as if you were to live forever.”'  ,  by:"― Mahatma Gandhi"},
  {quote:'“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”'  ,  by:"― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches"},
  {quote:'“Always forgive your enemies; nothing annoys them so much.”'  ,  by:"― Oscar Wilde"},
  {quote:'“I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”'  ,  by:"― Maya Angelou"},
  {quote:'“If you want to know what a man is  like, take a good look at how he treats his inferiors, not his equals.”'  ,  by:"― J.K. Rowling, Harry Potter and the Goblet of Fire"},
];
var rand=0;
var prevRand=0;
function generateQuote(){
  rand=Math.floor(Math.random() * quotes.length);
  while(rand===prevRand){

    rand=Math.floor(Math.random() * quotes.length);
  }
  document.getElementById("quote").innerHTML=`
  <p>"${quotes[rand].quote}</p>
            <span>${quotes[rand].by}</span>
            </div>`;
  prevRand=rand;
          }