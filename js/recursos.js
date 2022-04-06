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
    console.log(error)
}
