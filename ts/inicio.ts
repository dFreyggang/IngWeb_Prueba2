var comunasPorRegion:any = {
    Valparaiso: ["Isla de Pascua","Los Andes","Petorca","Quillota","San Antonio","San Felipe","Marga Marga","Valparaiso"],
    Maule: ["Cauquenes","Curico","Linares","Talca"]
}

let comuna:any = document.getElementById("comuna");
let region:any = document.getElementById("region");
let idCiudad:any;

function mostrarComunasPorRegion(value:any) {
    if(value.length==0) comuna.innerHTML = "<option></option>";
    else {
        var opcionesDeComunas = "";
        for(idCiudad in comunasPorRegion[value]) {
            opcionesDeComunas+="<option>"+comunasPorRegion[value][idCiudad]+"</option>";
        }
        comuna.innerHTML = opcionesDeComunas;
    }
}