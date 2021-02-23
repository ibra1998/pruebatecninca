
function countRepeatedLetters(letters){
    arrayLetters=[];//Where we store results
    let countLetters=1;//Counter of letters
    for(let i=0 ; i<letters.length;i++){//we loop over our string
        if ( letters[ i ] != letters[ i-1 ] && i != 0 ) {//In case previous and actual letter are different
            arrayLetters.push([letters[i-1], countLetters]);//We add new element
            countLetters=1;//Restart counter
        }
        if (letters[i]==letters[i-1] && i!=0){//previous and actual letter differents
            countLetters ++;//We increment counter
        }
        if(letters.length-1==i){//In case it's last letter
            arrayLetters.push([letters[i], countLetters]);//We add last element
        }

    }
    return arrayLetters;
}