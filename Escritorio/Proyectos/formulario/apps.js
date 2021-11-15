window.addEventListener("load", () => {
  const form = document.querySelector("#formulario");
  const usuario = document.querySelector("#usuario");
  const email = document.querySelector("#email");
  const clave = document.querySelector("#clave");
  const confirmarClave = document.querySelector("#confirmarClave");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarCampos();
  });
});

const validarCampos = () => {
  //capturar el valor ingresado por el usuario
  const usuarioValor = usuario.value.trim();
  const emailValor = email.value.trim();
  const claveValor = clave.value.trim();
  const confirmarClaveValor = confirmarClave.value.trim();

  if (!usuarioValor) {
    
    validacionNo(usuario, "campo vacio");
  } else {
    validacionOk(usuario);
  }

  //validando email

  if(!emailValor){
      validacionNo(email, 'Campo vacio')
  }else if(!validaEmail(emailValor)){
      validacionNo(email , 'El email no es valido')
  }else{
      validacionOk(email)
  }


  //validar password

  const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/

  if(!claveValor){
      validacionNo(clave, 'Campo vacio')
  }else if(claveValor.length < 8){
      validacionNo(clave, 'Debe tener 8 caracteres como minimo')
  } else if(!claveValor.match(er)){
      validacionNo(clave, 'Debe tener al menos una mayus., una min. y un num')
  } else{
      validacionOk(clave)
    
  }



  // validacion de passsword

  if (!confirmarClaveValor){
      validacionNo(confirmarClave, 'Confirme su password')
  }else if(claveValor !== confirmarClaveValor){
      validacionNo(confirmarClave, 'La paswword no coincide')
  }else{
      validacionOk(confirmarClave)
  }
};

  const validacionNo = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");
    aviso.innerText = msje;

    formControl.className = "form-control falla";
  };

  const validacionOk = (input, msge) => {
    const formControl = input.parentElement;
    formControl.className = "form-control ok";
  };

  const validaEmail = (email)=>{
      return /^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
