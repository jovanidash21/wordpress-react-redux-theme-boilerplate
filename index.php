<!DOCTYPE html>
<html>
  <head>
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <!--[if lt IE 9]>
      <div class="alert alert-warning">
        <?php echo 'Your browser is <strong>OUT-OF-DATE</strong>. Please <a href="http://browsehappy.com/">upgrade your browser</a> to view this website correctly.'; ?>
      </div>
    <![endif]-->

    <div id="root"></div>
    <?php wp_footer(); ?>
  </body>
</html>
