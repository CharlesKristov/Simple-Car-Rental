function cekLogin(){
    var name=document.getElementById("email").value
    var password=document.getElementById("password").value

    if(name===""){
        alert("Masukkan Email!")
    }

    if(password===""){
        alert("Masukkan Password")
    }

    if(name!="" && password!=""){
        alert("Login Berhasil!")
    }

}

function cekRegister(){
    var nama=document.getElementById("regisNama").value
    var email=document.getElementById("regisEmail").value
    var address=document.getElementById("regisAdress").value
    var male=document.getElementById("male").value
    var female = document.getElementById("female").value
    let harus=['Street']
    let cekAlamat = address.includes(harus);
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.+c+o+m/;

    if(nama != '' && email.match(mailformat) && (male.checked!=false || female.checked != false) && cekAlamat == true){
        alert('Registrasi Berhasil!\r\n Silahkan Login!');
    }
    else{
        alert("Isi semua kolom dengan benar!")
    }



}



