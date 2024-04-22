const quotes = ["Believe you can and you're halfway there. - Theodore Roosevelt",
"The only way to do great work is to love what you do. - Steve Jobs",
"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
"The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
"You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.- Albert Schweitzer",
"You miss 100% of the shots you don't take.- Wayne Gretzky",
"In the middle of difficulty lies opportunity. - Albert Einstein",
"The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)"]

const usedIndex = new Set();
const element = document.getElementById("quote");




function quoteGenerator(){
    if(usedIndex.size >= quotes.length)
{
    usedIndex.clear()
}
    while(true){
        const randomIndex = Math.floor( Math.random() * quotes.length);
        
        if(usedIndex.has(randomIndex)) {continue};
        
        const quote = quotes[randomIndex];
        element.innerHTML = quote;
        usedIndex.add(randomIndex);
        break;
    }
    
}
