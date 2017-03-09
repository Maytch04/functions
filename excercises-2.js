// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){
    //...
    if(a>b){
    	return a
    }else{
    	return b
    }
}



// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
  
    if(a>b && a>c){
    	return a
    }else if(b>c && b>a){
    	return b
    }else{
    	return c
    }
  
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
function isVowel(char){
    //...

    var vowel = ["a","e","i","o","u"]
    for(var i =0; i<vowel.length; i++)
    
    if (vowel[i] == char){
    	return "True"
    }else{
    	return "false"
    }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    //...

var vowel = ["a","e","i","o","u"]
newStr = ""

for(var i=0; i<phrase.length; i++){
 
 if (phrase.charAt(i) == vowel){
    	  newStr += phrase.charAt(i)
    }else{
    	  newStr += phrase.charAt(i) + "o" + phrase.charAt(i) 
    }
  }
  return newStr
}
  

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    //...
    var string1 = phrase
    string1 = string1.split("")
    string1 = string1.reverse()

    return.log(string1)

}