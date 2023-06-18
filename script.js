/* Main Process */
ipcMain.on('portFrom', (event, arg) => {
    //se no prompt de comando os scripts JS nao aceita acento(nao saem direito) 
    //digite no prompt de comando "chcp 65001" 
    //para mudar a configuração do prompt para 'utf-8'    
    console.log(arg); // Exibe a mensagem recebida do processo de renderização

    // Envia a resposta de volta para o processo de renderização
    event.reply('portTo', 'Resposta do processo principal');
});

/* Renderer Process */
const { ipcRenderer } = require('electron');
function sendMessageToMain() {
    ipcRenderer.send('portFrom', {'msg':'Mensagem do processo de renderização á'});
}

ipcRenderer.on('portTo', (event, arg) => {
    console.log(arg); // Exibe a resposta recebida do processo principal
});
sendMessageToMain()