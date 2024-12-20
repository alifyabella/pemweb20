// buat fungsi
// nilai username
// nilai password
// cek username dan password
// benar beri alert berhasil login
// username dan password kosong beri alert
// username dan password salah
// maka akan diberikan alert username dan password salah

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "admin" && password == "12345"){
       alert("berhasil login");
    window.location="index.html"
    return false;
    }
    else if(username==""|| password==""){
        alert("username dan password tidak boleh kosong");
    }
    else{
        alert("username dan password salah");
    }
}