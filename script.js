const getColor = () => {
    //hex code 
    const randomNumber = Math.floor(Math.random() * 1677215);  
    // we are multipling this number particularly because we want random hexa decimal code.
    
    // 16 is stands for hexa decimal code 
    const randomCode = "#" + randomNumber.toString(16);

    //console.log(randomNumber,randomCode);
    
    //to display the color on screen
    document.body.style.backgroundColor = randomCode;
    
    //to display the color code on screen
    document.getElementById("color-code").innerText = randomCode;

    //to copy color code 
    navigator.clipboard.writeText(randomCode);
}

//event call
document.getElementById("btn").addEventListener("click", getColor);

//initial call
getColor();
