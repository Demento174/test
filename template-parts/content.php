<?php
/**
 * The default template for displaying content
 *
 * Used for both singular and index.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */
$author_id = get_post_field ('post_author', the_ID());
$display_name = get_the_author_meta( 'display_name' , $author_id );
?>


<article class="post_preview" data-id="<?php the_ID(); ?>" >
    <div class="image">
        <img src="<?=get_the_post_thumbnail_url(the_ID())?>" alt="thumb">
    </div>
    <div class="description">
        <h3><?=get_the_title(the_ID())?></h3>
        <div class="text">
            <?php
            if ( is_search() || ! is_singular() && 'summary' === get_theme_mod( 'blog_content', 'full' ) ) {
                the_excerpt();
            } else {
                the_content( __( 'Continue reading', 'twentytwenty' ) );
            }
            ?>
        </div>
        <footer>
            <div class="author">
                Автор: <span><?=$display_name?></span>
            </div>
            <div class="like_system">
                <div class="like"></div>
                <div class="count"><?=get_post_likes(the_ID())?></div>
                <div class="dislike"></div>
            </div>
        </footer>
    </div>

</article>