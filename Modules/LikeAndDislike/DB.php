<?php
namespace Modules\LikeAndDislike;
class DB
{
   private string $table;
   private $wpdb;
    public function __construct(string $table)
    {
        global $wpdb;
        $this->wpdb = $wpdb;
        $this->table = $this->wpdb->get_blog_prefix() . $table;
    }

    public function create_table():array|null
    {
        $query = $this->wpdb->prepare( 'SHOW TABLES LIKE %s', $this->wpdb->esc_like( $this->table ) );

        if ( ! $this->wpdb->get_var( $query ) == $this->table )
        {



            $charset_collate = "DEFAULT CHARACTER SET {$this->wpdb->charset} COLLATE {$this->wpdb->collate}";


            $sql = "CREATE TABLE {$this->table} (
                    id INT AUTO_INCREMENT primary key NOT NULL,
                    postID INT REFERENCES wp_posts (ID),
                    ip int(10) unsigned NOT NULL DEFAULT '0',
                    likes_count int(11) NOT NULL default '0',
                    dislikes_count int(11) NOT NULL default '0'
                    ) {$charset_collate};";


            return dbDelta( $sql );
        }
        return null;
    }

    public function insert(int $post_id,$ip,int|null $value)
    {
        $query = $this->wpdb->get_row('SELECT * FROM `wp_like_and_dislike` WHERE `postID` ='.$post_id.' AND `ip`='.$this->insert_ip($ip),'ARRAY_A');
        $data = [
            'postID'=>$post_id,
            'ip'=>$this->insert_ip($ip),
            'value'=>$value,
            'date'=>date('Y-m-d H:i:s')
//            'likes_count'=>$like,
//            'dislikes_count'=>$dislike
        ] ;
        if(null === $query)
            $this->wpdb->insert( $this->table,$data );
        else
            $this->wpdb->update($this->table,$data,['id'=>$query['id']]);


    }

    public function get_all():array
    {
        $data = $this->wpdb->get_results('SELECT * FROM `wp_like_and_dislike`','ARRAY_A');
        foreach ($data as $key=>$item)
        {
            $data[$key]['ip']=$this->get_ip($item['ip']);
        }
        return $data;
    }
//2023-01-31 15:50:56
    private function insert_ip($ip)
    {
        return sprintf("%u", ip2long($ip));
    }

    private function get_ip($ip)
    {
        return long2ip(sprintf("%d", $ip));

    }

    public static function get_post_likes(int $id):int|null
    {
        global $wpdb;
        $data =  $wpdb->get_results('SELECT value FROM `wp_like_and_dislike` WHERE postID = '.$id,'ARRAY_A');

        if(null === $data)
            return null;

        $likes = 0;
        $dislikes = 0;
        foreach ($data as $item){
            if(null === $item['value'])
                continue;
            elseif(1===(int)$item['value'] )
                $likes++;
            elseif (0 ===(int)$item['value'] )
                $dislikes++;
        }


        return  $likes-$dislikes;
    }
}