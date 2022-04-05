try {
        let telaFundo = document.createElement('div');
        telaFundo.id = 'telaFundo';
        telaFundo.setAttribute('class','ocultarTela')
        document.body.appendChild(telaFundo);
        let botaoFechar = document.createElement('button');
        botaoFechar.setAttribute('onclick','ocultarTela()');
        botaoFechar.innerText = 'X';
        let telaConsulta = document.createElement('div');
        telaConsulta.setAttribute('class','telaConsulta');
        document.querySelector('#telaFundo').appendChild(telaConsulta);
        telaConsulta.prepend(botaoFechar);
        let tituloTela = document.createElement('h2');
        tituloTela.innerText = 'Acompanhamento de Pedidos';
        document.querySelector('.telaConsulta').appendChild(tituloTela);
        let divForm = document.createElement('div');
        divForm.id = 'divForm';
        document.querySelector('.telaConsulta').appendChild(divForm);
        let telaForm = document.createElement('form');
        document.querySelector('#divForm').appendChild(telaForm);
} catch (error) {
    
}



function exibirPedidos(){
try {
    document.querySelector('.box-content').innerHTML=document.querySelector('#telaFundo').innerHTML;
    /*
    document.querySelector('#telaFundo').classList.remove('ocultarTela');
    document.querySelector('#telaFundo').classList.add('exibirTela');
    */

} catch (error) {
    
}
}



/*

function exibirPedidos(){
    let telaConsulta = document.createElement('div');
    telaConsulta.setAttribute('class','telaConsulta exibeTela');
    document.querySelector('.acp').appendChild(telaConsulta);
    let tituloTela = document.createElement('h2');
    tituloTela.innerText = 'Acompanhamento de Pedidos';
    document.querySelector('.telaConsulta').appendChild(tituloTela);
}

*/

function ocultarTela(){
    document.querySelector('#telaFundo').classList.remove('exibirTela');
    document.querySelector('#telaFundo').classList.add('ocultarTela');
}


try {
    document.querySelector('.woocommerce nav ul').classList.add('menuLateral');
    let menuLateral = document.querySelector('.menuLateral');
    let btnExibirTela = document.createElement('li');
    let lnkExibirTela = document.createElement('a');
    lnkExibirTela.classList.add('exibirTela');
    lnkExibirTela.innerText = 'Acompanhar Pedidos';
    menuLateral.appendChild(btnExibirTela);
    btnExibirTela.appendChild(lnkExibirTela);
    document.querySelector('.exibirTela').setAttribute('onclick','exibirPedidos()');

} catch (error) {
    console.log(error)
}
