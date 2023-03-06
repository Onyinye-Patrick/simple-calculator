var screen = document.getElementById("screen");
var buttons = Array.from(document.getElementsByClassName("btn"));


buttons.map(button =>{
    button.addEventListener("click", e=>{
        switch (e.target.innerText) {
            default:screen.innerText += e.target.innerText
                break;
           
                case "C":
                    screen.innerText = "";
                        break;
                case "←":
                    screen.innerText = screen.innerText.slice(0, -1);
                    break;

                    case "=":
                        try {
                            screen.innerText = eval(screen.innerText)

                        } catch (error) {
                            screen.innerText = "Error!"
                        }
        }
    })
})