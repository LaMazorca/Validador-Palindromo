const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const palindrome = (str) => {
    const separate = /[\W_+]/g;
    str = textInput.value
    .toLowerCase()
    .replace(separate,'');
    let reverseStr = str.split('').reverse().join('');
    if(str === ""){
        alert("Please input a value");
    }else{
        if (reverseStr === str){
            result.innerHTML = `<p class="result-text"><strong>${textInput.value}</strong> is a palindrome.</p>`;
        }else{
            result.innerHTML = `<p class="result-text"><strong>${textInput.value}</strong> is not a palindrome.</p>`;
        };
    }
};


checkBtn.addEventListener("click",palindrome);