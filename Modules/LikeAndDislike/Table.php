<?php
namespace Modules\LikeAndDislike;

use Cassandra\Date;

class Table extends \WP_List_Table {
    private $db;
    function __construct(){
        parent::__construct(array(
            'singular' => 'log',
            'plural'   => 'logs',
            'ajax'     => false,
        ));

        $this->bulk_action_handler();

        // screen option
        add_screen_option( 'per_page', array(
            'label'   => 'Показывать на странице',
            'default' => 20,
            'option'  => 'logs_per_page',
        ) );

        $this->prepare_items();



        add_action( 'wp_print_scripts', [ __CLASS__, '_list_table_css' ] );
    }

    // создает элементы таблицы
    function prepare_items(){
        global $wpdb;
        $this->db = new \Modules\LikeAndDislike\DB(TABLE);

        // пагинация
        $per_page = get_user_meta( get_current_user_id(), get_current_screen()->get_option( 'per_page', 'option' ), true ) ?: 20;

        $this->set_pagination_args( array(
            'total_items' => 20,
            'per_page'    => $per_page,
        ) );
        $cur_page = (int) $this->get_pagenum(); // желательно после set_pagination_args()

        // элементы таблицы
        // обычно элементы получаются из БД запросом
        // $this->items = get_posts();

        // чтобы понимать как должны выглядеть добавляемые элементы

        $this->items = $this->convert_to_table($this->db->get_all());


    }

    // колонки таблицы
    function get_columns(){
        return array(
                'id'=>'ID',
                'post' => 'Запись',
                'like'   => 'Количество лайков',
                'dislike'   => 'Количество дизлайков',
                'ip'=>'Последний IP адрес поставивший оценку',
                'date'=>'время последней оценки'
        );
    }

    // сортируемые колонки
    function get_sortable_columns(){
        return array(
            'customer_name' => array( 'post','like','dislike' ),
        );
    }

    protected function get_bulk_actions() {
        return array(
            'delete' => 'Delete',
        );
    }

    // Элементы управления таблицей. Расположены между групповыми действиями и панагией.
    function extra_tablenav( $which ){
        echo '';
    }

    // вывод каждой ячейки таблицы -------------

    static function _list_table_css(){
        ?>
        <style>
            table.logs .column-id{ width:2em; }
            table.logs .column-license_key{ width:8em; }
            table.logs .column-customer_name{ width:15%; }
        </style>
        <?php
    }

    // вывод каждой ячейки таблицы...
    function column_default( $item, $colname ){

        if( $colname === 'customer_name' ){
            // ссылки действия над элементом
            $actions = array();
            $actions['edit'] = sprintf( '<a href="%s">%s</a>', '#', __('edit','hb-users') );

            return esc_html( $item->name ) . $this->row_actions( $actions );
        }
        else {
            return isset($item->$colname) ? $item->$colname : print_r($item, 1);
        }

    }

    // заполнение колонки cb
    function column_cb( $item ){
        echo '<input type="checkbox" name="licids[]" id="cb-select-'. $item->id .'" value="'. $item->id .'" />';
    }

    // остальные методы, в частности вывод каждой ячейки таблицы...

    // helpers -------------

    private function bulk_action_handler(){
        if( empty($_POST['licids']) || empty($_POST['_wpnonce']) ) return;

        if ( ! $action = $this->current_action() ) return;

        if( ! wp_verify_nonce( $_POST['_wpnonce'], 'bulk-' . $this->_args['plural'] ) )
            wp_die('nonce error');

        // делает что-то...
        die( $action ); // delete
        die( print_r($_POST['licids']) );

    }

    /*
    // Пример создания действий - ссылок в основной ячейки таблицы при наведении на ряд.
    // Однако гораздо удобнее указать их напрямую при выводе ячейки - см ячейку customer_name...

    // основная колонка в которой будут показываться действия с элементом
    protected function get_default_primary_column_name() {
        return 'disp_name';
    }

    // действия над элементом для основной колонки (ссылки)
    protected function handle_row_actions( $post, $column_name, $primary ) {
        if ( $primary !== $column_name ) return ''; // только для одной ячейки

        $actions = array();

        $actions['edit'] = sprintf( '<a href="%s">%s</a>', '#', __('edit','hb-users') );

        return $this->row_actions( $actions );
    }
    */

    private function convert_to_table($data)
    {

        $result = [];
        $_result = [];


        foreach ($data as $item)
        {

            if(null === $item['value'])
                continue;




            if(1 === (int)$item['value'])
                $result[$item['postID']]['like']++;
            elseif(0 === (int)$item['value'])
                $result[$item['postID']]['dislike']++;

            if(false === key_exists('date',$result[$item['postID']])
                or
                $item['date']>$result[$item['postID']]['date'])
            {
                $result[$item['postID']]['date'] = $item['date'];
                $result[$item['postID']]['ip'] = $item['ip'];
            }

        }

        foreach ($result as $key=>$item){
            $title = get_the_title($key);

            $_result[] = (object)
            [
                    'id'=>$key,
                    'post'=>$title,
                    'like'=>key_exists('like',$item)?$item['like']:0,
                    'dislike' => key_exists('dislike',$item)?$item['dislike']:0,
                    'date'=>$item['date'],
                    'ip'=>$item['ip']
            ];
        }

        return $_result;

    }



}