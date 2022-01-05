// Bài 1//
function trungbinh() {
    let vatly =  Number(document.getElementById("vatly").value);
    let hoahoc =  Number(document.getElementById("hoahoc").value);
    let sinhhoc =  Number(document.getElementById("sinhhoc").value);
    let result = (vatly + hoahoc + sinhhoc)/3;
    document.getElementById("tb").innerText = result

}
