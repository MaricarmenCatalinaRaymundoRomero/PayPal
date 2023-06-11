# CREACION DEL PAYPAL

>Proposito: Crearemos una html con css para rellenar la venta y poder pagarlo por medio de PAYPAL.

-En este caso el motor que usamos fue Visual Studio Code. Lo isimos en grupo de dos personas.
Integrantes:
 -Maricarmen Catalina Raymundo Romero
 -Adrian Alvarado
###### RECOMENDACION:
###### Tener instalador el Go Live en Visual Studio

+ Paso 1: 
    * Creamos una carpeta donde vamos a poner toda la información
    * Comenzamos creando un index.HTML en el cual comenzaremos a poner el formulario para el registro de compra

![image](https://github.com/Bloddy20Moon/Junio_Buho/assets/118792974/dc97a706-0043-4ae0-9933-2789fa217a56)

+ Paso 2: 
    * Agregamos los Framework de PayPal
![image](https://github.com/Bloddy20Moon/Junio_Buho/assets/118792974/3ebf51f9-f2b5-43f7-9f58-c7d2da5eb844)
![image](https://github.com/Bloddy20Moon/Junio_Buho/assets/118792974/5aba1a5b-9b75-431c-b789-d9142e1d4f95)

###### RECOMENDACION:
###### Entrar a este link para copiar los Framework
https://developer.paypal.com/demo/checkout/#/pattern/style
![image](https://github.com/Bloddy20Moon/Junio_Buho/assets/118792974/89b07e0d-9b8a-45cf-97e9-0885fe130b68)
+ Paso 3:
* Para que al rellenar el monto, pusimos que el value del PAYPAL, sea igual al monto, de esta manera
```html
<div class="form-group">
                <label for="monto">Monto a pagar:</label>
                <input type="text" id="monto" name="monto" placeholder="Ingresa el monto a pagar">
            </div>
```
* Y para el monto sería:
```html
 <script>
        paypal.Buttons({
            style: {
                color:  'blue',
                shape:  'pill',
                label:  'pay',
                height: 40
            },
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units:[{
                        amount: {
                            value: document.getElementById('monto').value
                        }
                    }]
                });
            },
            onCancel: function(data) {
                alert("Pago cancelado");
            }
        }).render("#paypal-button-container");

        
    </script>
```
* Siendo donde se ve el cambio en:
![image](https://github.com/Bloddy20Moon/Junio_Buho/assets/118792974/408cbaac-985f-4b00-b607-5ed7ad35e7cd)

+ Paso 4:
* Para que la pagina se vea mas presentable le vamos a agregar los estilos, estos estan en la carpeta styles/style.css
* En este caso hemos agregados estos datos

```Css
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  
  background-color: #485358;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form-container {
  width: 50%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
}
.form-container {
  margin: 0 auto;
  max-width: 400px;
}


h1 {
  color: #333;
  font-size: 32px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  color: #333;
  margin-bottom: 5px;
}

input {
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #f2f2f2;
}

.paypal-button {
  display: block;
  margin: 20px auto 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
}

.paypal-button img {
  width: 150px;
}

.paypal-button {
    display: block;
    margin: 20px auto 0;
    border: none;
    background-color: #67bbff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease;
}

.paypal-button:hover {
    background-color: #156797;
}

body {
  background-repeat: no-repeat;
  background-size: 180vh;

  
}
``` 
+ Paso 5:
* Vamos a agregarle un boton para que se pueda oscurecer el formulario

``` html
<button class=" switch" id="switch">
        <span><i class="fas fa-sun"></i></span>
        <span><i class="fas fa-moon"></i></span>

    </button>
``` 
* Para que el se pueda ver una trasicion pusimos los datos en una carpeta llamado boton cambios
* Siendo estos los cambios:
* En css sería
```css
.switch {
  background: #343D5B;
  border-radius: 1000px;
  border: none;
  position: relative;
  cursor: pointer;
  display: flex;
  outline: none;
}
.switch::after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  background: #F1F1F1;
  top: 0;
  left: 0;
  right: unset;
  border-radius: 100px;
  transition: 0.3s ease all;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
}
.switch.active {
  background: orange;
  color: #000;
}
.switch.active::after {
  right: 0;
  left: unset;
}
.switch span {
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: block;
  background: none;
  color: #fff;
}

body {
  background-repeat: no-repeat;
  background-size: 180vh;

}
body.dark {
  background: #f8e1e1;
}/*# sourceMappingURL=estilos.css.map */
```
* En scss sería:
``` scss
$negro:#111111;
$blanco:#f8e1e1;

.switch{
    background: #343D5B;
    border-radius: 1000px;
    border: none;
    position:  relative;
    cursor: pointer;
    display: flex;
    outline: none;
    
   

    &::after{
        content: "";
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        background: #F1F1F1;
        top:0;
        left: 0;
        right: unset;
        border-radius: 100px;
        transition: .3s ease all;
        box-shadow: 0px 0px 2px 2px rgba(0,0,0,.2);
    }
    &.active{
        background: orange;
        color:  #000;
        &::after{
            right: 0;
            left: unset;
        }
    }
    span{
        width: 30px;
        height: 30px;
        line-height: 30px;
        display: block;
        background: none;
        color: #fff;

    }

}

body {
    background-repeat: no-repeat;
    background-size: 180vh;
    background-image: linear-gradient(#0a090985, rgb(14, 12, 12));
    
    &.dark{
      background:$blanco ;
    }
  }
```
* Por ultimo le agregamos el Javascrip llamado main.js
``` css
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click',()=> {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});
```
* El boton se vería de esta forma tenemos dos botones, los cuales se verían de esta manera
* Opción oscurecer:
![image](https://github.com/Bloddy20Moon/Junio_Buho/assets/118792974/55167044-27b5-420a-b301-d8f0fccc4ec3)
* Opción aclarar:
![image](https://github.com/Bloddy20Moon/Junio_Buho/assets/118792974/1402c64e-728d-481c-be85-387caaa92675)

# RESULTADO:
* Ya llenado todos los pasos se vería de esta manera (de manera oscura)
![image](https://github.com/Bloddy20Moon/Junio_Buho/assets/118792974/783e96a5-eb3d-455f-9b20-5cce315c4b29)
* De manera clara:
 ![image](https://github.com/Bloddy20Moon/Junio_Buho/assets/118792974/d99aa428-100f-4e1c-b67c-5df801a2d38d)
* El monto se vería de esta manera: 
* 
![image](https://github.com/Bloddy20Moon/Junio_Buho/assets/118792974/dcee4f61-de7b-4b33-b1f2-e6e49ba5c008)
* Al querer pagar se vería así en el PAYPAL
* 
![image](https://github.com/Bloddy20Moon/Junio_Buho/assets/118792974/9c685b40-e115-47fb-a9ca-70e3a5e9beee)

