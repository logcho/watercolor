let flag = true;

window.addEventListener('scroll', function() {

    
    let txt = '1. Tap the dots in the order they appear in';
    let txt2 = '2. Avoid the bad dots';
    let txt3 = '3. Watch out for the timer';
    let txt4 = '4. Have fun';

    let speed = 100;
    let a = 0;
    let b = 0
    let c = 0;
    let d = 0;

    
    function typeWriter() {
        if (a < txt.length) {
          document.getElementById("demo").innerHTML += txt.charAt(a);
          a++;
          setTimeout(typeWriter, speed);
        }
        if(a == txt.length && b < txt2.length) {
            document.getElementById("demo2").innerHTML += txt2.charAt(b);
            b++;
            setTimeout(typeWriter, speed);
        }
        if(b == txt2.length && c < txt3.length) {
            document.getElementById("demo3").innerHTML += txt3.charAt(c);
            c++;
            setTimeout(typeWriter, speed);
        }
        if(c == txt3.length && d < txt4.length) {
            document.getElementById("demo4").innerHTML += txt4.charAt(d);
            d++;
            setTimeout(typeWriter, speed);
        }
        
    }

    if (window.scrollY >= 500 && flag) {  // Replace 100 with the actual scroll position where you want the text to change
        typeWriter();
        flag = false;
    } 

    
}
)

