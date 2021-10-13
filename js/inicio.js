"use strict";
var comunasPorRegion = {
    Valparaiso: ["Isla de Pascua", "Los Andes", "Petorca", "Quillota", "San Antonio", "San Felipe", "Marga Marga", "Valparaiso"],
    Maule: ["Cauquenes", "Curico", "Linares", "Talca"]
};
var comuna = document.getElementById("comuna");
var region = document.getElementById("region");
var idCiudad;
function mostrarComunasPorRegion(value) {
    if (value.length == 0)
        comuna.innerHTML = "<option></option>";
    else {
        var opcionesDeComunas = "";
        for (idCiudad in comunasPorRegion[value]) {
            opcionesDeComunas += "<option>" + comunasPorRegion[value][idCiudad] + "</option>";
        }
        comuna.innerHTML = opcionesDeComunas;
    }
}
