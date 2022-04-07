<div class="wrap">

<div id="administrar">
    <header>
        <h2>Administração de pedidos</h2>
    </header>
        <div>
            <div id="pesquisarCompras">
                <div id="tipoPedido">
                    <input type="radio" value="Pedido" name="tipoCompra" id="pedido">
                    <label for="pedido">Pedido</label>
                    <input type="radio" value="Leilão" name="tipoCompra" id="leilao">
                    <label for="leilao">Leilão</label>

                </div>
                <div id="buscarEmail">
                    <input type="text" id="pesquisarEmail" onfocusout="pesquisarEmail()">
                    <input type="submit" value="Pesquisar Cliente">
                </div>
                <div id="listaCompras"></div>
            </div>
        </div>
        <div id="criarEvento">
                <input type="submit" onclick="adicionaEvento()" value="Criar Evento">
                <div id="adicionaEvento"></div>
        </div>
</div>
</div>
