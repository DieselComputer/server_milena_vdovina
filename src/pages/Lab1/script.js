let a = document.getElementById("dig1")
let b = document.getElementById("dig2")
let r = document.getElementById("res")

document.getElementsByName("plus")[0].onclick = function() {
r.value = Number(a.value) + Number(b.value)
};
document.getElementsByName("minus")[0].onclick = function() {
    r.value = Number(a.value) - Number(b.value)
    };
document.getElementsByName("mult")[0].onclick = function() {
    r.value = Number(a.value) * Number(b.value)
    };
document.getElementsByName("div")[0].onclick = function() {
    if (b.value === "0")
        {
        r.value = "You can't"
        }
        else{
    r.value = Number(a.value) / Number(b.value)
    };}
document.getElementsByName("C")[0].onclick = function() {
    a.value = ""
    b.value = ""    
    r.value = ""
        };
