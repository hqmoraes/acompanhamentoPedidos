function tipoConsulta(clt){
    let tipo = document.createElement('input');
    tipo.setAttribute('type','radio');
    tipo.setAttribute('name','tipoConsulta');
    tipo.setAttribute('id',clt);
    tipo.setAttribute('value',clt);
    let lTipo = document.createElement('label');
    lTipo.setAttribute('for',clt);
    lTipo.innerText = clt;
    document.querySelector('#divForm form .tipoConsulta').appendChild(tipo);
    document.querySelector('#divForm form .tipoConsulta').appendChild(lTipo);
}
try {
        let telaFundo = document.createElement('div');
        telaFundo.id = 'telaFundo';
        telaFundo.setAttribute('class','ocultarTela')
        document.body.appendChild(telaFundo);
        let telaConsulta = document.createElement('div');
        telaConsulta.setAttribute('class','telaConsulta');
        document.querySelector('#telaFundo').appendChild(telaConsulta);
        let tituloTela = document.createElement('h2');
        tituloTela.innerText = 'Acompanhamento de Pedidos';
        document.querySelector('.telaConsulta').appendChild(tituloTela);
        let divForm = document.createElement('div');
        divForm.id = 'divForm';
        document.querySelector('.telaConsulta').appendChild(divForm);
        let telaForm = document.createElement('form');
        document.querySelector('#divForm').appendChild(telaForm);
        let divTipo = document.createElement('div');
        divTipo.classList.add('tipoConsulta');
        document.querySelector('#divForm form').appendChild(divTipo);

        tipoConsulta('Pedido');
        tipoConsulta('Leilão');

        let divItems = document.createElement('div');
        divItems.classList.add('itemsConsulta');
        document.querySelector('#divForm form').appendChild(divItems);
        let listaPedidos = document.createElement('select');
        listaPedidos.setAttribute('size','5');
        document.querySelector('#divForm form .itemsConsulta').appendChild(listaPedidos);
        let listaSituacao = document.createElement('select');
        listaSituacao.setAttribute('size','5');
        document.querySelector('#divForm form .itemsConsulta').appendChild(listaSituacao);
        
} catch (error) {
    console.log(error);
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
