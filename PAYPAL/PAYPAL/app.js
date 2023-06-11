const paypalBtn = document.getElementById('paypal-btn');

paypalBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correo = document.getElementById('correo').value;
  const monto = document.getElementById('monto').value;
  const url = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${correo}&amount=${monto}&item_name=${nombre} ${apellido}&currency_code=USD`;
  window.open(url);
});


const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

