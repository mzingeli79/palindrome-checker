document.querySelector('.explanation-link').addEventListener('click', () => {
    document.querySelector('.description').style.display='block';
    document.querySelector('.explanation-link').style.display='none';
});

document.querySelector('.close-paragraph').addEventListener('click', () =>{
    document.querySelector('.description').style.display='none';
    document.querySelector('.explanation-link').style.display='block';
});

document.querySelector('.submit-btn').addEventListener('click', (e) =>{
    e.preventDefault();
    let textCheck = document.querySelector('.text-check').value;
    if(textCheck !== ''){
    document.querySelector('.output').style.display='block';
    let reverseText = document.querySelector('.reverse-text');
    let newStr = textCheck.split('').reverse().join();
    let finalString = newStr.split(/[_\W+]/g).join('').toLowerCase();
    for(let i = 0; i<finalString.length; i++){
        let userText = document.querySelector('.user-text');
        let results = document.querySelector('.results');
        if(textCheck.split(/[_\W+]/g).join('').toLowerCase() === finalString){
            userText.innerHTML = `Your Text: <span class="answer">'${textCheck}'</span>`;
            reverseText.innerHTML = `Your string reversed: <span class="answer">${finalString}</span>`;
            results.innerHTML =   `This returns <span class="answer">${true}</span>. Congratulations, your text is a palindrome, it is the same spelled backwards.`
        }else{
            userText.innerHTML = `Your Text: <span class="answer">'${textCheck}'</span>`;
            reverseText.innerHTML = `Your string reversed: <span class="answer">${finalString}</span>`;
            results.innerHTML =  `This returns <span class="answer">${false}</span>. Sorry, your text is not a palindrome, it is not the same spelled backwards.`;
        } 
    }
    }
    textCheck.value='';
});

document.querySelector('.reset').addEventListener('click', ()=>{
    let text = document.querySelector('.text-check');
    let userText = document.querySelector('.user-text');
    let results = document.querySelector('.results');
    document.querySelector('.output').style.display='none';
    userText.innerHTML = '';
    results.innerHTML = '';
    text.value='';
});
