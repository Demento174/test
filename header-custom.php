<?php
/**
 * Header file for the Twenty Twenty WordPress default theme.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

?><!DOCTYPE html>

<html class="no-js" <?php language_attributes(); ?>>

<head>

    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >

    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>

</head>

<body <?php body_class(); ?> data-ip="<?=$_SERVER['GEOIP_ADDR']?>">



<?php
wp_body_open();
?>
<div class="container">
<header>
    <h2>Header</h2>
</header>
<nav>
    <li><a href="#">Главная</a></li>
    <li><a href="#">Статьи</a></li>
    <li><a href="#">Новости</a></li>
</nav>

