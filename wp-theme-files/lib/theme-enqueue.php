<?php
class Theme_Enqueue {

    function __construct() {
    }
    function init() {
        add_action( 'wp_enqueue_scripts', [ $this, 'theme' ], 20 );
    }
    function theme() {
        wp_enqueue_style("bootstrap-min","https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css");
        wp_enqueue_style("bootstrap-theme-min","https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css");
        wp_enqueue_style("index", get_template_directory_uri() . "/index.css");
        wp_enqueue_style( 'theme_stylesheet', get_template_directory_uri() . '/static/css/main.303740f1.css');
        wp_enqueue_script("google-ads", "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js") ;
        wp_enqueue_script("google-ads-script", get_template_directory_uri() . "/static/js/google.js") ;

    }
}
?>

<?php /*
    all of the style sheet and script enqueues should use the mini-fied versions
*/?>
