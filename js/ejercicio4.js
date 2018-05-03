function codigo_html_mafia(){
    var ID_A_MODIFICAR="tabla";
    var i;
    var j;
    var texto='';
    var nombre= ["Ramses", "Jonathan", "Liz", "Jorge", "Ricardo", "Jair"];
    var apodo= ["Playa", "Seriedad", "Facilito", "Albures", "Anaya", "Co-chino"];
    var edad = ["55", "10", "18", "30", "41", "69"];
        texto+='<div class="row">\
                <div class="col-3">\
                <h4>\
                Alumno\
                </h4>\
                </div>\
                <div class="col-3">\
                <h4>\
                Nombre\
                </h4>\
                </div>\
                <div class="col-3">\
                <h4>\
                Apodo\
                </h4>\
                </div>\
                <div class="col-3">\
                <h4>\
                Edad\
                </h4>\
                </div>\
                </div>\
                ';
        for(j=0;j<6;j++){
            texto+='<div class="row">\
                        <div class="col-3">\
                        Alumno '+j+
                        '</div>\
                        <div class="col-3">'
                        +nombre[j]+
                        '</div>\
                        <div class="col-3">'
                        +apodo[j]+
                        '</div>\
                        <div class="col-3">'
                        +edad[j]+
                        '</div>\
                    </div>';
        }
        
    document.getElementById(ID_A_MODIFICAR).innerHTML= texto;
}