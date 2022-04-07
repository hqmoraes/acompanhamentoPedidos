function carregarIframe() {
    let frame = document.getElementById('#wpadminbar');
    frame.style.display = 'none;'
}

function exibirPedidos(){
    try {
        let formPedido = `
        <div id="telaFundo">
            <div class="telaConsulta">
                <h2>Acompanhamento de Pedidos</h2>
                <div id="divForm">
                    <form>
                        <div class="tipoConsulta">
                            <input type="radio" name="tipoConsulta" id="pedidos" value="Pedido">
                            <label for="pedidos">Pedido</label>
                            <input type="radio" name="tipoConsulta" id="leilao" value="Leilao">
                            <label for="leilao">Leilão</label>
                        </div>
                        <div class="itemsConsulta">
                            <select size=5></select>
                            <select size=5></select>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        `;
    document.querySelector('.box-content').innerHTML = formPedido;
    } catch (error) {
        
    }
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

}

if (window.location.href.search('acompanhar_pedidos') > 0){
    document.querySelector('#wpbody-content h1.wp-heading-inline').innerText = 'Incluir Novo Evento na Compra';
    document.addEventListener("DOMContentLoaded", function(){    
        document.querySelector('input#title').value = 'Novo Evento' + Date.now();
        document.querySelector('.inside.acf-fields.-top').id = 'camposPedido';
        document.querySelectorAll('.postbox.acf-postbox')[1].style.display='none';
        let campoEmail = document.querySelectorAll(`.acf-field .acf-input input[type=email]`);
        if(window.location.href.search('cliente') > 0){
            let emailCliente = window.location.href.substring(window.location.href.search('cliente')+8,300);
            emailCliente = emailCliente.replace('%40','@');
            campoEmail.value = emailCliente;
        }
    });

}

function exibeCompras(res_email){
    let listaCompras = document.createElement('iframe');
    listaCompras.setAttribute('src','/acompanhar-pedidos/?cliente=' + res_email);
    document.getElementById('listaCompras').appendChild(listaCompras);
}


function adicionaEvento(res_email){
    let adEvento = document.createElement('iframe');
    adEvento.setAttribute('src','/wp-admin/post-new.php?post_type=acompanhar_pedidos&cliente=' + res_email);
    adEvento.id = 'comprasRealizadas'
    adEvento.setAttribute('onload','carregarIFrame()');
    document.getElementById('adicionaEvento').appendChild(adEvento);
}

function pesquisarEmail(){
    document.querySelector(`#buscarEmail input[type=submit]`).setAttribute("onclick","exibeCompras('" + document.getElementById('pesquisarEmail').value + "')");        
    document.querySelector(`#criarEvento input[type=submit]`).setAttribute("onclick","adicionaEvento('" + document.getElementById('pesquisarEmail').value + "')");        
}


