// -- DOC READY ---------------------------------------

console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

// -- GLOBAL VARS ----------------------------------

let koalas = [
  {
    name: 'testName',
    age: 'testName',
    gender: 'testName',
    readyForTransfer: 'testName',
    notes: 'testName',
  },
  {
    name: 'testName2',
    age: 'testName2',
    gender: 'testName2',
    readyForTransfer: 'testName2',
    notes: 'testName2',
  }
]

// -- GET -----------------------------------------

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    type: 'GET',
    url: '/koalas'
  }).then (function(res){
    console.log('getKoalas GET successful!');
    renderKoalas(res);
  }).catch (function(err){
    console.log('getKoalas GET Error:', err);
  });
} // end getKoalas

// -- POST -----------------------------------------

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}

// -- PUT ------------------------------------------


// -- HELPER FUNCTIONS -----------------------------

// function renderKoalas(koalas){
//   for (let koala of koalas){
//   }
// }