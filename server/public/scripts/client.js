// -- DOC READY ---------------------------------------

console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  $( '#addButton' ).on('click', submitKoala);
  $('#viewKoalas').on('click','#btn-mark-ready',transferKoala);
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

// -- GLOBAL VARS ----------------------------------


// for Clientside Testing 
// NOT FOR PRODUCTION
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

function submitKoala() {
  console.log( 'in addButton on click' );

  // declare koalaToSend from user
  let koalaToSend = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    readyForTransfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val(),
  }

  // Post newKoala to Server
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: koalaToSend,
  }).then(function(res){
    console.log('response from server!', res);
    getKoalas();
  }).catch(function(error){
    console.log('error in post', error);
    alert('unable to add koala at this time.');
  });
} // end submitKoala

// -- PUT ------------------------------------------
function transferKoala(){
console.log('does this work?');
let koalaId = $(this).closest('tr').data().id;
$.ajax({
  method: 'PUT',
  url: `koalas/${koalaId}`
}).then(function(res){
  console.log('RESPONSE FOR PUT, TRANSFER',res);
  getKoalas();
}).catch(function(err){
  console.log('rut ro scoob', err);
})

}

// -- HELPER FUNCTIONS -----------------------------

function renderKoalas(koalas){
  $('#viewKoalas').empty();
  for (let koala of koalas){
    $('#viewKoalas').append(`
    <tr data-id="${koala.id}">
      <td>${koala.name}</td>
      <td>${koala.age}</td>
      <td>${koala.gender}</td>
      <td>${koala.readyForTransfer}</td>
      <td>${koala.notes}</td>
      <td id="${koala.id}delete">
      <button id="btn-mark-ready">Ready for Transfer</button>
      </td>
    </tr>
    `)
  for ( let koala of koalas){
    if (koala.readyForTransfer === true){
      $(`#${koala.id}delete`).empty();
    }
  }
  }
}

