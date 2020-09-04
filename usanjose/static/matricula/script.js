window.onload = function() {

    function initElement() {
        var slider = document.getElementById("estudianteRegular");
        slider.onclick = modifyDOM;

    };

    function modifyDOM(event) {

        var redundante1 = document.getElementById("NacionalidadMain");

        if (redundante1.style.display === "none") {

            redundante1.style.display = "block";
            document.getElementById("Nacionalidad").setAttribute("required", "true")

        } else {

            redundante1.style.display = "none";
            document.getElementById("Nacionalidad").removeAttribute("required")
        }

        var redundante2 = document.getElementById("provinciaMain");

        if (redundante2.style.display === "none") {

            redundante2.style.display = "block";
            document.getElementById("provincia").setAttribute("required", "true")

        } else {

            redundante2.style.display = "none";
            document.getElementById("provincia").removeAttribute("required")
        }     

        var redundante3 = document.getElementById("cantonMain");

        if (redundante3.style.display === "none") {

            redundante3.style.display = "block";
            document.getElementById("canton").setAttribute("required", "true")

        } else {

            redundante3.style.display = "none";
            document.getElementById("canton").removeAttribute("required")
        }  

        var redundante4 = document.getElementById("distritoMain");

        if (redundante4.style.display === "none") {

            redundante4.style.display = "block";
            document.getElementById("distrito").setAttribute("required", "true")

        } else {

            redundante4.style.display = "none";
            document.getElementById("distrito").removeAttribute("required")
        }  

        var redundante5 = document.getElementById("direccionMain");

        if (redundante5.style.display === "none") {

            redundante5.style.display = "block";
            document.getElementById("direccion").setAttribute("required", "true")

        } else {

            redundante5.style.display = "none";
            document.getElementById("direccion").removeAttribute("required")
        } 

        var redundante6 = document.getElementById("telMain");

        if (redundante6.style.display === "none") {

            redundante6.style.display = "block";
            document.getElementById("tel").setAttribute("required", "true")

        } else {

            redundante6.style.display = "none";
            document.getElementById("tel").removeAttribute("required")
        } 

        var redundante7 = document.getElementById("celMain");

        if (redundante7.style.display === "none") {

            redundante7.style.display = "block";
            document.getElementById("cel").setAttribute("required", "true")

        } else {

            redundante7.style.display = "none";
            document.getElementById("cel").removeAttribute("required")
        }

        var redundante8 = document.getElementById("dobMain");

        if (redundante8.style.display === "none") {

            redundante8.style.display = "block";
            document.getElementById("dob").setAttribute("required", "true")

        } else {

            redundante8.style.display = "none";
            document.getElementById("dob").removeAttribute("required")
        }

        var redundante9 = document.getElementById("fotoCedulaMain");

        if (redundante9.style.display === "none") {

            redundante9.style.display = "block";
            document.getElementById("fotoCedula").setAttribute("required", "true")

        } else {

            redundante9.style.display = "none";
            document.getElementById("fotoCedula").removeAttribute("required")
        }

        var redundante10 = document.getElementById("fotoTituloMain");

        if (redundante10.style.display === "none") {

            redundante10.style.display = "block";
            document.getElementById("fotoTitulo").setAttribute("required", "true")

        } else {

            redundante10.style.display = "none";
            document.getElementById("fotoTitulo").removeAttribute("required")
        }

        var redundante11 = document.getElementById("fotoPasaporteMain");

        if (redundante11.style.display === "none") {

            redundante11.style.display = "block";
            document.getElementById("foto").setAttribute("required", "true")

        } else {

            redundante11.style.display = "none";
            document.getElementById("foto").removeAttribute("required")

        }

        var redundante12 = document.getElementById("estadoCivilMain");

        if (redundante12.style.display === "none") {

            redundante12.style.display = "block";

        } else {

            redundante12.style.display = "none";

        }

      }

      initElement();

  };
  