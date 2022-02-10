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


// for Clientside Testing
let koalas = [
  {
    id: 1,
    name: 'testName',
    age: 'testage',
    gender: 'testGender',
    readyForTransfer: 'true',
    notes: 'testNotes2',
  },
  {
    id: 2,
    name: 'testName2',
    age: 'testAge2',
    gender: 'testGender2',
    readyForTransfer: 'false',
    notes: 'testNotes2',
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

function saveKoala( ){
  console.log( 'in saveKoala' );
  // ajax call to server to get koalas
  let newKoala = {
    name: $('#nameIn').val(),
    age: $('ageIn').val(),
    gender: $('#genderIn').val(),
    readyForTransfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val(),
  }
  $.ajax({
    type: 'POST',
    url: '/koalas'
    data: newKoala /////START HERE WHEN COMING BACK
  })  
 
}

// -- PUT ------------------------------------------


// -- HELPER FUNCTIONS -----------------------------

function renderKoalas(koalas){
  for (let koala of koalas){
    $('#viewKoalas').append(`
    <tr data-id="${koala.id}">
      <td>${koala.name}</td>
      <td>${koala.age}</td>
      <td>${koala.gender}</td>
      <td>${koala.readyForTransfer}</td>
      <td>${koala.notes}</td>
      <td>
        <button id="btn-mark-ready">Ready for Transfer</button>
      </td>
    </tr>
    `)
  }
}

