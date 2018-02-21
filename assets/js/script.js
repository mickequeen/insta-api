$(document).ready(() => {
  const token = '269965923.644616c.ad391528970a46db965809d9e0b77e84';
  const id = 269965923;
  const num_photos = 20;

  $.ajax({
    url: `https://api.instagram.com/v1/users/${id}/media/recent`,
    datatype: 'json',
    type: 'GET',
    data: { // data se convierte en una cadena que se adjunta a la url de la petición GET
      access_token: token,
      count: num_photos
    }
  })
  .done(function(response) {
    console.log(response);
    showInfo(response);
  })
  .fail(function(error) {
    console.log('error al cargar api');
  })
})

function showInfo(info) {
  for (let i = 0; i < info.data.length; i++){
    $('#pictures').append(`<div class="col m4"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="${info.data[i].images.standard_resolution.url}"></div></div></div>`);
  }
}



