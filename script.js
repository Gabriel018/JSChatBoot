const ChatBoot = document.querySelector(".chat-body")
const texto = document.querySelector("#txto")
const enviar = document.querySelector(".enviar")

enviar.addEventListener("click",()=> renderUserMenssager())
    const renderUserMenssager = () =>{
        const userInput = texto.value;
        renderMenssagerEle(userInput)
    }
    const renderMenssagerEle = (txt) => {
        const MenssagerEle = document.createElement("div")
        const txtNode = document.createTextNode(txt)
        MenssagerEle.classList.add("user-messager")
        MenssagerEle.append(txtNode)
        ChatBoot.append(MenssagerEle)
    }