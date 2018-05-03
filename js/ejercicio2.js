function codigo_html(){
    var ID_A_CAMBIAR= 'tabla';
    var i;
    var texto= '<div class="row">\
                    <div class="col-2">Tabla del 1</div>\
                ';
                for(i=1;i<=10;i++){
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

        texto+= '<div class="row">\
                    <div class="col-2">Tabla del 6</div>\
                ';
                for(i=1;i<=10;i++){
                    texto+='<div class="col-1">';
                    texto+=i*6;
                    texto+='</div>';
                }
        texto+= '</div>';

        texto+= '<div class="row">\
                    <div class="col-2">Tabla del 7</div>\
                ';
                for(i=1;i<=10;i++){
                    texto+='<div class="col-1">';
                    texto+=i*7;
                    texto+='</div>';
                }
        texto+= '</div>';

        texto+= '<div class="row">\
                    <div class="col-2">Tabla del 8</div>\
                ';
                for(i=1;i<=10;i++){
                    texto+='<div class="col-1">';
                    texto+=i*8;
                    texto+='</div>';
                }
        texto+= '</div>';

        texto+= '<div class="row">\
                    <div class="col-2">Tabla del 9</div>\
                ';
                for(i=1;i<=10;i++){
                    texto+='<div class="col-1">';
                    texto+=i*9;
                    texto+='</div>';
                }
        texto+= '</div>';

        texto+= '<div class="row">\
                    <div class="col-2">Tabla del 10</div>\
                ';
                for(i=1;i<=10;i++){
                    texto+='<div class="col-1">';
                    texto+=i*10;
                    texto+='</div>';
                }
        texto+= '</div>';

    document.getElementById(ID_A_CAMBIAR).innerHTML= texto;
}