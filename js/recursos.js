let pg;

if (window.location.href.search('acompanhamentoCompras') > 0){
    pg = 'admin';
}
else if (window.location.href.search('minha-conta') > 0){
    pg = 'cliente';
}

function exibirCompras(){
    try {
        let formCompras = `
        <div id="telaFundo">
            <div class="telaConsulta">
                <h2>Acompanhamento de Compras</h2>
                <div>
                    <div id="pesquisarCompras">
                       <div id="tipoCompra">
                            <input type="radio" value="Pedido" name="tipoCompra" id="pedido" onclick=exibeCompras()>
                            <label for="pedido">Pedido</label>
                            <input type="radio" value="Leilão" name="tipoCompra" id="leilao" onclick=exibeCompras()>
                            <label for="leilao">Leilão</label>

                        </div>
                        <div id="buscarEmail">
                            <input type="text" id="pesquisarEmail" onfocusout="pesquisarEmail()">
                            <input type="submit" value="Pesquisar Cliente">
                        </div>
                        <div id="listaCompras"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
    document.querySelector('.box-content').innerHTML = formCompras;
    if(pg == 'cliente'){
        document.getElementById('buscarEmail').style.display = 'none';
    }
    } catch (error) {
        
    }
}

try {
    document.querySelector('.woocommerce nav ul').classList.add('menuLateral');
    let menuLateral = document.querySelector('.menuLateral');
    let btnExibirTela = document.createElement('li');
    let lnkExibirTela = document.createElement('a');
    lnkExibirTela.classList.add('exibirTela');
    lnkExibirTela.innerText = 'Acompanhar Compras';
    menuLateral.appendChild(btnExibirTela);
    btnExibirTela.appendChild(lnkExibirTela);
    document.querySelector('.exibirTela').setAttribute('onclick','exibirCompras()');

} catch (error) {

}

if (window.location.href.search('acompanhar_compras') > 0){
    try {
        document.querySelector('#wpbody-content h1.wp-heading-inline').innerText = 'Incluir Novo Evento na Compra';
        document.addEventListener("DOMContentLoaded", function(){ 
            try {
                document.querySelector('input#title').value = 'Novo Evento' + Date.now();
                document.querySelectorAll('.postbox.acf-postbox')[1].style.display='none';
                let campoEmail = document.querySelector(`.acf-field .acf-input input[type=email]`);
                if(window.location.href.search('cliente') > 0){
                    let emailCliente = window.location.href.substring(window.location.href.search('cliente')+8,300);
                    emailCliente = emailCliente.replace('%40','@');
                    campoEmail.value = emailCliente;
                }

            }
            catch (error) {
                
            }   
        });
    }                
    catch (error) {
        
    }
}




function exibeCompras(res_email = 'cliente'){
    if(document.querySelector('iframe')){
        document.querySelector('iframe').remove();
    }

    let tpCompra;
    if (document.getElementById('pedido').checked == true){tpCompra = 'Pedido'}
    else if (document.getElementById('leilao').checked == true){tpCompra = 'Leilão'}
    else { tpCompra = ''};

    let listaCompras = document.createElement('iframe');
    if (pg == 'admin'){
        listaCompras.setAttribute('src','/acompanhar-compra/?cliente=' + res_email + '&tipoCompra=' + tpCompra + '&pg=' + pg);
    }
    else if (pg == 'cliente'){
        listaCompras.setAttribute('src','/acompanhar-compra/?tipoCompra=' + tpCompra + '&pg=' + pg);
    }
    document.getElementById('listaCompras').appendChild(listaCompras);
}


function adicionaEvento(res_email){
    window.open('/wp-admin/post-new.php?post_type=acompanhar_compras&cliente=' + res_email,'_blank' );
    adEvento.id = 'comprasRealizadas'
    document.getElementById('adicionaEvento').appendChild(adEvento);
}

function pesquisarEmail(){
    try {
        document.querySelector(`#buscarEmail input[type=submit]`).setAttribute("onclick","exibeCompras('" + document.getElementById('pesquisarEmail').value + "')");            
        document.querySelector(`#criarEvento input[type=submit]`).setAttribute("onclick","adicionaEvento('" + document.getElementById('pesquisarEmail').value + "')");                
    } catch (error) {
        
    }

}
