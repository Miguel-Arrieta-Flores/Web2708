function generar(value){
    let numTel = document.getElementById('numTel').value.trim();
    let sms = encodeURIComponent(document.getElementById('mensaje').value.trim());
    var linkApi = `https://wa.me/${numTel}?text=${sms}`;
    if(numTel ===   ''&& sms === ''){
        alert("Rellena los campos, por favor");
    }else{
        open(linkApi);
    }
    console.log(linkApi);
}