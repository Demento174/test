<?php
namespace Custom_classes\SimpleAJAX;


use const Modules\LikeAndDislike\TABLE;

class SimpleAJAX {
	public $action=[];

	public $functionWC;

	public $wpdb;

	public function __construct($action) {

	    global $wpdb;

		$this->wpdb=$wpdb;

		$this->action=$action;

		foreach ($this->action as $item){

			add_action(
				'wp_ajax_'.$item,
				array( $this, $item)
			);

			add_action(
				'wp_ajax_nopriv_'.$item,
				array( $this, $item )
			);
		}
	}

    public function like()
    {
        $db = new \Modules\LikeAndDislike\DB(TABLE);
        $id = $_POST['id'];
        $ip = $_POST['ip'];
        $db->insert($id,$ip,true);

    }
    public function dislike()
    {
        $db = new \Modules\LikeAndDislike\DB(TABLE);
        $id = $_POST['id'];
        $ip = $_POST['ip'];
        $db->insert($id,$ip,false);

    }
    public function null()
    {
        $db = new \Modules\LikeAndDislike\DB(TABLE);
        $id = $_POST['id'];
        $ip = $_POST['ip'];
        $db->insert($id,$ip,null);

    }
}