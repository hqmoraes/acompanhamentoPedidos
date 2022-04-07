<?php
/*
Plugin Name: Administrar situação dos pedidos
Description: Administração da situação de entrega dos pedidos por cliente
Author: Henrique Moraes
Version: 0.1
*/

add_action('admin_menu', 'admin_area');
function admin_area(){
    add_menu_page( 'Administrar Pedidos', 'Administrar Pedidos', 'manage_options', plugin_dir_path(__FILE__) . 'admin.php' );
}
 
function acompanharPedidos(){
    register_post_type('acompanhar_pedidos',
        array(
            'labels' => array(
                'name' => __('Acompanhar Pedido', 'textdomain'),
                'singular_name' => __('Acompanhar Pedidos', textdomain),
            ),
            'public' => true,
            'has_archive' => true,
        )
    );
}
add_action('init','acompanharPedidos');

?>