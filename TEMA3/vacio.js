function validarCampos() {
    var elementos = document.getElementById("miFormulario").elements;
  
    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].hasAttribute("required") && elementos[i].value.trim() == "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
      }
    }
  
    alert("Todos los campos obligatorios están completados.");
  }