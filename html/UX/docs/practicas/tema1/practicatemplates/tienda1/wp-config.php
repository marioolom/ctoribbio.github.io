<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '<ICk!s)|Qv=g/y)9Z)[r9zD(1;mT;j2[jZe$WZw#tV!<j+Uxz3X}X;5G[+kY1Pv$' );
define( 'SECURE_AUTH_KEY',  'T40>VkyP`/!ly*U DBfkVJZgSm<;?>P?+AJgSXVP]x;B-k9T{~dx5u=~|h0{yGdP' );
define( 'LOGGED_IN_KEY',    '5>~R<3!{o+sCn^sGd9aboV~[9zU,#u~ScL)6=@0q=-]AJH7xH6hl(ZuXdw_/yh~w' );
define( 'NONCE_KEY',        ':4qM8mAgO>s;wKwgCC^P@!Cns*+?<|RR/iLm!bp&eLxT0]P*yf5aw=Aqe,0mKE$p' );
define( 'AUTH_SALT',        '*)qWwJyyNaM/1cywcO]6gF$BT3=r2!+4HK/=6~lf.%JwbJ/()Uf:xLYu)DjRLOkQ' );
define( 'SECURE_AUTH_SALT', ' 4GF1xy)%tWy4@~xSy9:~y~#T=mzA& <b+,GYx4E8ubU%JnmSCpU|d2Kjl1X8Vm8' );
define( 'LOGGED_IN_SALT',   '$!5twj>Gh~n`Tr[9*CQh{r>H$u R$I!bR?SpvD:b%;ear<V%N8q!<=r#jw^HUc=K' );
define( 'NONCE_SALT',       'i.!a:rOc!Kb|A*Y(~8BNkP.IT3{uS]E7,wn<CY5RW)yOS+s:v!BHb*VNf7+qm>7K' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
