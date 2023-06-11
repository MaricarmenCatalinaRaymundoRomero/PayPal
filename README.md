# CREACION DEL PAYPAL

>Proposito: Crearemos una html con css para rellenar la venta y poder pagarlo por medio de PAYPAL

-En este caso el motor que usamos fue Visual Studio Code
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
+ Paso 4:
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
