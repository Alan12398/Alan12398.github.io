function sumar(){
    //Ingreso de datos
    var numero1 = document.getElementById("cent").value;
    var numero2 = document.getElementById("f_cent").value;
    var numero3 = document.getElementById("t_cent").value;
    var numero4 = document.getElementById("q_dollar").value;
    var numero5 = document.getElementById("dollar").value;
    //Proceso
    var c_cent = parseInt(numero1);
    var c_fcent = parseInt(numero2);
    var c_tcent = parseInt(numero3);
    var c_qdollar = parseInt(numero4);
    var c_dollar = parseInt(numero5);
    if ((c_cent < 500) || (c_cent > 500)) {
        //necesita
        var ct_cent = 500 - Math.abs(c_cent);
        var ctt_cent = (parseFloat(ct_cent) * 0.01).toFixed(2);
    }
    if (c_cent == 500) {
        //no necesita
        ct_cent = 0;
        ctt_cent = 0;
    }

    if ((c_fcent < 100) || (c_fcent > 100)) {
        //necesita
        var ct_fcent = 100 - Math.abs(c_fcent);
        var ctt_fcent = (parseFloat(ct_fcent) * 0.05).toFixed(2);
    }
    if (c_fcent == 100) {
        //no necesita
        ct_fcent = 0;
        ctt_fcent = 0;
    }

    if ((c_tcent < 200) || (c_tcent > 200)) {
        //necesita
        var ct_tcent = 200 - Math.abs(c_tcent);
        var ctt_tcent = (parseFloat(ct_tcent) * 0.10).toFixed(2);
    }
    if (c_tcent == 200) {
        //no necesita
        ct_tcent = 0;
        ctt_tcent = 0;
    }

    if ((c_qdollar < 200) || (c_qdollar > 200)) {
        //necesita
        var ct_qdollar = 200 - Math.abs(c_qdollar);
        var ctt_qdollar = (parseFloat(ct_qdollar) * 0.25).toFixed(2);
    }
    if (c_qdollar == 200) {
        //no necesita
        ct_qdollar = 0;
        ctt_qdollar = 0;
    }

    if ((c_dollar < 110) || (c_dollar > 110)) {
        //necesita
        var ct_dollar = 110 - Math.abs(c_dollar);
        var ctt_dollar = (parseFloat(ct_dollar) * 1.00).toFixed(2);
    }
    if (c_dollar == 110) {
        //no necesita
        ct_dollar = 0;
        ctt_dollar = 0;
    }
    //Salida
    document.getElementById("resultado1").value = ct_cent;
    document.getElementById("resultado2").value = ctt_cent;
    
    document.getElementById("resultado3").value = ct_fcent;
    document.getElementById("resultado4").value = ctt_fcent;

    document.getElementById("resultado5").value = ct_tcent;
    document.getElementById("resultado6").value = ctt_tcent;

    document.getElementById("resultado7").value = ct_qdollar;
    document.getElementById("resultado8").value = ctt_qdollar;

    document.getElementById("resultado9").value = ct_dollar;
    document.getElementById("resultado10").value = ctt_dollar;
    //document.writeln(suma);
}