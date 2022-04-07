<?php
    $clientes = get_users(array('fields' =>array('user_email','id'),'search'=>'')); 
    $jclientes = json_encode($clientes);
    echo $jclientes;
    ?>