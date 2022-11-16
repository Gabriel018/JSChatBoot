const ChatBoot = document.querySelector(".chat-body")
const texto = document.querySelector("#txto")
const enviar = document.querySelector(".enviar")

enviar.addEventListener("click",()=> renderUserMenssager())
    const renderUserMenssager = () =>{
        const userInput = texto.value;
        texto.value = ''
        renderMenssagerEle(userInput,'usuario')
        renderChatbootReponse(userInput)
    }
    const renderChatbootReponse = (userInput) =>{
      
        const res = getResponde(userInput)
        renderMenssagerEle(res)
    }

    const renderMenssagerEle = (txt,type) => {
        let className = "user-messager"
        if (type !== 'usuario'){
            className = "chatboot"
        }
        const MenssagerEle = document.createElement("div")
        const txtNode = document.createTextNode(txt)
        MenssagerEle.classList.add(className)
        MenssagerEle.append(txtNode)
        ChatBoot.append(MenssagerEle)
    }

    const getResponde = (userInput) => {  
       return Respostas[userInput] == undefined ? "Nao entendi": Respostas[userInput]

       

    }