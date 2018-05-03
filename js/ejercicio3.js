const ID_A_MODIFICAR="tabla";

function codigo_html(){
    var i;
    var j;
    var texto='';
    for(i=1;i<=10;i++){
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