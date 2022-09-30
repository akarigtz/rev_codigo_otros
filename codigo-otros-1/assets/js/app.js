const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //cambio de # por . al tratarse de una clase.
const $b = document.querySelector('.blog'); 
const $l = document.querySelector('.location');

async function displayUser(username) { // se agrega async
  $n.textContent = 'cargando...';
  try{const response = await fetch(`${usersEndpoint}/${username}`); //await se utiliza con async function
  let data =  await response.json ()
  console.log(data);
  $n.textContent = `${data.name}`;     //corrección de comillas
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
} catch (e) {
  handleError(e);

}
}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //corrección de comillas
}

displayUser('stolinski').catch(handleError);