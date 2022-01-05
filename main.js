// Bài 1//
function diemtb() {
    let a,b,c;
    a = document.getElementById("vatly").value;
    b = document.getElementById("hoahoc").value;
    c = document.getElementById("sinhhoc").value;
    let tb = (a+b+c)/3;
    document.getElementById("in").innerText = "Điểm trung bình bằng: " + tb;
}


