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
define( 'DB_NAME', 'wordpress3' );

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
define( 'AUTH_KEY',         'a8iG*0{jbrB3>2.Sso*&.>[(Ek#)W}kxJf2?Fb;^{)EvDMg}1L1(Wimc5h;}IS?R' );
define( 'SECURE_AUTH_KEY',  '??uQ5k0OM`DM7DTP9,`[s$+ Qb@CqVy_S 1 @RYcA@MEF#:}G=lDCRF[`B/MfKd3' );
define( 'LOGGED_IN_KEY',    '&0PCsu2~{p!2yWSjw9VcjvfhMXbNlvN*pa|f$Dz!B/wQJP}]!?}ZJyoDJ/=tzo]-' );
define( 'NONCE_KEY',        ';!-RaNysKKswwez8O0sPuy(~zOT0&nb<p#-ZC4a|&yfx#s#TRqV:[T%7K7,;]-l+' );
define( 'AUTH_SALT',        'V=p4>RivMHtqpmeM4TAZYc]:W.4Brz3lE*Fi;6QB%+f]B`~e?VvP{2b|}`UPgo8P' );
define( 'SECURE_AUTH_SALT', '}DN)dDC1BLs.h5Tsg$IQt!|y!Yu&7)m,76j(u`KXnWU e-r&t.1?ditOm9}w:!E?' );
define( 'LOGGED_IN_SALT',   'phM~Z+$Ro-|7;jJ?nfeE&vZ];rUp.QGL6Y,EmK`VD,yA+%3y<6wY6v9R6o3G-AT$' );
define( 'NONCE_SALT',       '5S/8i`1a?k(X;&-oRY32q^Z|;VDC1]gq?_VcY~? Gj%^iN#IpERwO5xpK zy/)ge' );

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
