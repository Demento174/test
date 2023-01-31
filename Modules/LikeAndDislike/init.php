<?php
namespace Modules\LikeAndDislike;
require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

const TABLE = 'like_and_dislike';

class Index
{
    private bool $init = false;
    function __construct()
    {
        if(true === $this->init)
            return;
        $db = new DB(TABLE);
        $db ->create_table();
        new \Modules\LikeAndDislike\Menu();

        $this->init = true;
    }



    static function init()
    {
        return new self();
    }
}
















