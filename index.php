<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */
global  $wpdb;

\Modules\LikeAndDislike\DB::get_post_likes(64);
get_header('custom');
//
//?>
<div class="content">
    <main>
        <h2>Статьи</h2>

        <?php if ( have_posts() ) { while ( have_posts() ) { the_post();
            global $post;

            $author_id = get_post_field ('post_author', $post->ID);
            $display_name = get_the_author_meta( 'display_name' , $author_id );

            ?>
            <article class="post_preview" data-id="<?=$post->ID; ?>" >
                <div class="image">
                    <img src="<?=get_the_post_thumbnail_url($post->ID)?>" alt="thumb">
                </div>
                <div class="description">
                    <h3><?=get_the_title($post->ID)?></h3>
                    <div class="text">
                        <?php
                        echo get_the_excerpt( $post->ID ).'...';
                        ?>
                    </div>
                    <footer>
                        <div class="author">
                            Автор: <span><?=$display_name?></span>
                        </div>
                        <div class="like_system">
                            <div class="like"></div>
                            <div class="count"><?=\Modules\LikeAndDislike\DB::get_post_likes($post->ID)?></div>
                            <div class="dislike"></div>
                        </div>
                    </footer>
                </div>

            </article>
        <?php } } else { ?>
            <p>Записей нет.</p>
        <?php }
        the_posts_pagination(
                [
                        'end_size'     => 3,
                    'next_text'    => 'Вперед',
                ]
        );


        ?>

</main>
<?php
get_sidebar();
?>
</div>

<?php

get_footer();
