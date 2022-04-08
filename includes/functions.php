<?php
/*
Plugin Name: Administrar situação das compras
Description: Administração da situação de entrega das compras por cliente
Author: Henrique Moraes
Version: 0.1
*/

add_action('admin_menu', 'admin_area');
function admin_area(){
    add_menu_page( 'Administrar Compras', 'Administrar Compras', 'manage_options', plugin_dir_path(__FILE__) . 'admin.php' );
}
 
function acompanharCompras(){
    register_post_type('acompanhar_compras',
        array(
            'labels' => array(
                'name' => __('Acompanhar Compras', 'textdomain'),
                'singular_name' => __('Acompanhar Compras', 'textdomain'),
            ),
            'public' => true,
            'has_archive' => true,
        )
    );
}
add_action('init','acompanharCompras');

?>