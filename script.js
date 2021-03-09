const inpt = document.getElementById("input");
const btn = document.getElementById("button");
const output = document.getElementById("count");

function countUp(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countUp(n - 1);
        arr.push(n);
        return arr;
    }
}

btn.addEventListener('click', function() {
    output.innerHTML = countUp(inpt.value);
})