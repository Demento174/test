<?php
namespace Modules\LikeAndDislike;
class Menu
{
    public function __construct()
    {
        add_filter( 'set_screen_option_lisense_table_per_page', function( $status, $option, $value )
        {
            return (int) $value;
        }, 10, 3 );

        add_action( 'admin_menu', function()
        {
            $hook = add_menu_page(
                'Тестовое задание',
                'Тестовое задание',
                'administrator',
                'page_slug',
                [$this,'table_page'],
                'dashicons-products',
                100 );

            add_action( "load-$hook", [$this,'table_page_load'] );
        } );
    }

    public function table_page_load()
    {
        $GLOBALS['Example_List_Table'] = new \Modules\LikeAndDislike\Table();
    }


    public function  table_page(){
        ?>
        <div class="wrap">
            <h2><?php echo get_admin_page_title() ?></h2>

            <?php
            // выводим таблицу на экран где нужно
            echo '<form action="" method="POST">';
            $GLOBALS['Example_List_Table']->display();
            echo '</form>';
            ?>

        </div>
        <?php
    }
}