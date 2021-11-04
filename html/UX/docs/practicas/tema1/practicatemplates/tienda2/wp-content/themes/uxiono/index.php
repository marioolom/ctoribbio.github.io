<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inicial Theme</title>
  <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?= get_template_directory_uri() ?>/style.css">
</head>
<body>
  <div class="container">
    <header class="">Tema Personalizado. Que es uxiono</header>
    <main>
      <?php
      if ( have_posts() ) {
        while ( have_posts() ) {
          the_post();
         ?>
          <h1><?= the_title(); ?></h1>
          <div><?= the_content(); ?></div>
          <?php
        }
      }
      ?>
    </main>
    <footer>
      @ Mi tema 2020
    </footer>
  </div>
</body>
</html>