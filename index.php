<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
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
