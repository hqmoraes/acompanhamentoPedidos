<div class="wrap">

<div id="administrar">
    <header>
        <h2>Administração de Compras</h2>
    </header>
        <div class=".telaConsulta">
            <div id="pesquisarCompras">
                <div id="tipoCompra">
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
                <div id="adicionaEvento"></div>
                <input type="submit" onclick="adicionaEvento()" value="Criar Evento">                
        </div>
</div>
</div>
