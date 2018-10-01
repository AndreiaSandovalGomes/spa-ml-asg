page('/', index);
page('/cars', cars);
page('/contact', contact);
page();


function index(){
  $('main').html(renderIndex());
}

async function cars() {
const mLCars = await renderCar();
$('main').html(showList(mLCars));
}

function contact(){
  $('main').html(form());
}

function renderIndex() {
  return `
  <div class = 'h-100 carStock'>
    <div class='sellCars'>
      <a href='/cars' class='btn essence-btn' id='show-cars'>Conheça nossos carros</a>
    </div>
  </div>
  `;
}

function erro(){
  console.log('erro');
}

function renderCar(){
const pegarNoticia = new XMLHttpRequest();
pegarNoticia.open('GET', `https://api.mercadolibre.com/sites/MLB/search?q=ferrari&limit=3`);
pegarNoticia.onload = showCars;
pegarNoticia.onerror = erro;
pegarNoticia.send();
}

function showCars(){
 let docs = JSON.parse(this.responseText)["results"];
 showList(docs);
}

async function showList(cars){
 console.log(cars)
 cars.map((arr) => {
  let template = `
  <div class = 'area-noticia'>
   <div class='noticia'>
    <h3>${arr.title}</h3>
    <p>${arr.price}</p>
    <img src='${arr.thumbnail}'>
   </div>
  </div>`
  $('main').append(template)
 })
}

function form(){
  return  `
  <form>
  <div class="form-group">
    <label class='text-white' for="exampleFormControlInput1">Nome</label>
    <input type="nome" class="form-control" id="exampleFormControlInput1" placeholder="Nome">
  </div>
  <div class="form-group">
    <label class='text-white' for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label class='text-white' for="exampleFormControlTextarea1">Deixe sua mensagem</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
  `
}
