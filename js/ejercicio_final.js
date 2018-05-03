const  ID_A_MODIFICAR="tabla";

function codigo_html(){
    var texto= '<div class="row">\
                    <div class="col-2">Tabla del 1</div>\
                    <div class="col-1">1</div>\
                    <div class="col-1">2</div>\
                    <div class="col-1">3</div>\
                    <div class="col-1">4</div>\
                    <div class="col-1">5</div>\
                    <div class="col-1">6</div>\
                    <div class="col-1">7</div>\
                    <div class="col-1">8</div>\
                    <div class="col-1">9</div>\
                    <div class="col-1">10</div>\
                </div>\
                <div class="row">\
                    <div class="col-2">Tabla del 2</div>\
                    <div class="col-1">2</div>\
                    <div class="col-1">4</div>\
                    <div class="col-1">6</div>\
                    <div class="col-1">8</div>\
                    <div class="col-1">10</div>\
                    <div class="col-1">12</div>\
                    <div class="col-1">14</div>\
                    <div class="col-1">16</div>\
                    <div class="col-1">18</div>\
                    <div class="col-1">20</div>\
                </div>\
                <div class="row">\
                    <div class="col-2">Tabla del 3</div>\
                    <div class="col-1">3</div>\
                    <div class="col-1">6</div>\
                    <div class="col-1">9</div>\
                    <div class="col-1">12</div>\
                    <div class="col-1">15</div>\
                    <div class="col-1">18</div>\
                    <div class="col-1">21</div>\
                    <div class="col-1">24</div>\
                    <div class="col-1">27</div>\
                    <div class="col-1">30</div>\
                </div>\
                ';
    document.getElementById(ID_A_MODIFICAR).innerHTML = texto;
}

function codigo_html_for(){
    var i;
    var texto= '<div class="row">\
                    <div class="col-2">Tabla del 1</div>\
                ';
                for(i=1;i<=10;i=i+1){
                    texto+='<div class="col-1">';
                    texto+=i*1;
                    texto+='</div>';
                }
        texto+= '</div>';

        texto+= '<div class="row">\
                    <div class="col-2">Tabla del 2</div>\
                ';
                for(i=1;i<=10;i++){
                    texto+='<div class="col-1">';
                    texto+=i*2;
                    texto+='</div>';
                }
        texto+= '</div>';

        texto+= '<div class="row">\
                    <div class="col-2">Tabla del 3</div>\
                ';
                for(i=1;i<=10;i++){
                    texto+='<div class="col-1">';
                    texto+=i*3;
                    texto+='</div>';
                }
        texto+= '</div>';

        texto+= '<div class="row">\
                    <div class="col-2">Tabla del 4</div>\
                ';
                for(i=1;i<=10;i++){
                    texto+='<div class="col-1">';
                    texto+=i*4;
                    texto+='</div>';
                }
        texto+= '</div>';

        texto+= '<div class="row">\
                    <div class="col-2">Tabla del 5</div>\
                ';
                for(i=1;i<=10;i++){
                    texto+='<div class="col-1">';
                    texto+=i*5;
                    texto+='</div>';
                }
        texto+= '</div>';

    document.getElementById(ID_A_MODIFICAR).innerHTML= texto;
}

function codigo_html_for_anidado(){
    var i;
    var j;
    var texto='';
    for(i=1;i<=500;i++){
        texto+='<div class="row">\
                <div class="col-2">\
                Tabla del '
                +i+
                '</div>\
                ';
        for(j=1;j<=10;j++){
            texto+='<div class="col-1">'
                    +(i*j)+
                    '</div>\
                    ';
        }
        texto+='</div>';
    }

    document.getElementById(ID_A_MODIFICAR).innerHTML=texto;
}

function codigo_html_mafia(){
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