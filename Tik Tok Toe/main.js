var clicks = 0;
function reply_click(clicked_id){
    // prevent each box from being clicked twice
    document.getElementById(clicked_id).onclick = false;

    // alternate between "x" & "o"
    if(clicks % 2) {
        document.getElementById(clicked_id).innerHTML = "X";
        console.log(document.getElementById(clicked_id).innerHTML)
    } else {
        document.getElementById(clicked_id).innerHTML = "O";
        console.log(document.getElementById(clicked_id).innerHTML)
    }
    clicks++;

    // Check 1,2,3
    if(document.getElementById("one").innerHTML === document.getElementById("two").innerHTML && 
        document.getElementById("two").innerHTML === document.getElementById("three").innerHTML
        && document.getElementById("three").innerHTML.trim() != '') {
            // change background color if won
            document.getElementById("one").style.backgroundColor = "#b35e5e";
            document.getElementById("two").style.backgroundColor = "#b35e5e";
            document.getElementById("three").style.backgroundColor = "#b35e5e";
            // change text if won
            document.getElementById("one").style.color = "#fff";
            document.getElementById("two").style.color = "#fff";
            document.getElementById("three").style.color = "#fff";
    }
    // Check 4,5,6
    if(document.getElementById("four").innerHTML === document.getElementById("five").innerHTML && 
        document.getElementById("five").innerHTML === document.getElementById("six").innerHTML 
        && document.getElementById("six").innerHTML.trim() != '') {
            // change background color if won
            document.getElementById("four").style.backgroundColor = "#b35e5e";
            document.getElementById("five").style.backgroundColor = "#b35e5e";
            document.getElementById("six").style.backgroundColor = "#b35e5e";
            // change text if won
            document.getElementById("four").style.color = "#fff";
            document.getElementById("five").style.color = "#fff";
            document.getElementById("six").style.color = "#fff";
    }
    // Check 7,8,9
    if(document.getElementById("seven").innerHTML === document.getElementById("eight").innerHTML && 
        document.getElementById("eight").innerHTML === document.getElementById("nine").innerHTML 
        && document.getElementById("eight").innerHTML.trim() != '') {
            // change background color if won
            document.getElementById("seven").style.backgroundColor = "#b35e5e";
            document.getElementById("eight").style.backgroundColor = "#b35e5e";
            document.getElementById("nine").style.backgroundColor = "#b35e5e";
            // change text if won
            document.getElementById("seven").style.color = "#fff";
            document.getElementById("eight").style.color = "#fff";
            document.getElementById("nine").style.color = "#fff";
    }
     // Check 1,4,7
    if(document.getElementById("one").innerHTML === document.getElementById("four").innerHTML && 
        document.getElementById("four").innerHTML === document.getElementById("seven").innerHTML 
        && document.getElementById("four").innerHTML.trim() != '') {
            // change background color if won
            document.getElementById("one").style.backgroundColor = "#b35e5e";
            document.getElementById("four").style.backgroundColor = "#b35e5e";
            document.getElementById("seven").style.backgroundColor = "#b35e5e";
            // change text if won
            document.getElementById("one").style.color = "#fff";
            document.getElementById("four").style.color = "#fff";
            document.getElementById("seven").style.color = "#fff";
    }
    // Check 2,5,8
    if(document.getElementById("two").innerHTML === document.getElementById("five").innerHTML && 
        document.getElementById("five").innerHTML === document.getElementById("eight").innerHTML 
        && document.getElementById("five").innerHTML.trim() != '') {
            // change background color if won
            document.getElementById("five").style.backgroundColor = "#b35e5e";
            document.getElementById("two").style.backgroundColor = "#b35e5e";
            document.getElementById("eight").style.backgroundColor = "#b35e5e";
            // change text if won
            document.getElementById("five").style.color = "#fff";
            document.getElementById("two").style.color = "#fff";
            document.getElementById("eight").style.color = "#fff";
    }
    // Check 3,6,9
    if(document.getElementById("three").innerHTML === document.getElementById("six").innerHTML && 
        document.getElementById("six").innerHTML === document.getElementById("nine").innerHTML 
        && document.getElementById("nine").innerHTML.trim() != '') {
            // change background color if won
            document.getElementById("nine").style.backgroundColor = "#b35e5e";
            document.getElementById("six").style.backgroundColor = "#b35e5e";
            document.getElementById("three").style.backgroundColor = "#b35e5e";
            // change text if won
            document.getElementById("nine").style.color = "#fff";
            document.getElementById("six").style.color = "#fff";
            document.getElementById("three").style.color = "#fff";
    }
    // Check 1,5,9
    if(document.getElementById("one").innerHTML === document.getElementById("five").innerHTML && 
        document.getElementById("five").innerHTML === document.getElementById("nine").innerHTML 
        && document.getElementById("five").innerHTML.trim() != '') {
            // change background color if won
            document.getElementById("one").style.backgroundColor = "#b35e5e";
            document.getElementById("five").style.backgroundColor = "#b35e5e";
            document.getElementById("nine").style.backgroundColor = "#b35e5e";
            // change text if won
            document.getElementById("one").style.color = "#fff";
            document.getElementById("five").style.color = "#fff";
            document.getElementById("nine").style.color = "#fff";
    }
    // Check 3,5,7
    if(document.getElementById("three").innerHTML === document.getElementById("five").innerHTML && 
        document.getElementById("five").innerHTML === document.getElementById("seven").innerHTML 
        && document.getElementById("seven").innerHTML.trim() != '') {
            // change background color if won
            document.getElementById("seven").style.backgroundColor = "#b35e5e";
            document.getElementById("five").style.backgroundColor = "#b35e5e";
            document.getElementById("three").style.backgroundColor = "#b35e5e";
            // change text if won
            document.getElementById("seven").style.color = "#fff";
            document.getElementById("five").style.color = "#fff";
            document.getElementById("three").style.color = "#fff";
    }

}