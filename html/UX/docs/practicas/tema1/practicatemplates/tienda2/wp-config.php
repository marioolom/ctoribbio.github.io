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
define( 'DB_NAME', 'wordpress2' );

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
define( 'AUTH_KEY',         'zMCC%G;0U=aD/I}(oEYot} ]%!|LJ4Gi1Xj.,;*,56*UjNO(RR*Y00j!|O/:j[ *' );
define( 'SECURE_AUTH_KEY',  'IS/_:f]h#Z$PZI*9n#5%s~b;OUm|yi1t2c.RAQzGnf[v.9NQFM9[=c]K[<KGOWWP' );
define( 'LOGGED_IN_KEY',    '%4[re Eh5h,FoyW~aAM)RU-goaS}wtzoGY<VaZUPuN6kokM&N_3+uQM, ReYI{t ' );
define( 'NONCE_KEY',        ']d%v~_L0O5]wJx#2[}3X86h]A|`bg2p>us0L)qB^m&S1#ja|/?n}EB_-_M,N}9+f' );
define( 'AUTH_SALT',        ')}fkW$o}c?0/[4G+aximR4P]>W({,(&n.ixh>rw$B-OhzZq1&k]fa3s{V=Y?cUEV' );
define( 'SECURE_AUTH_SALT', 'S.6VlDrO;o@5mPLdozgljrCQ]%{@}MmT$.aaF>lHyBJ &TQEn_K!?VC;9-7y d<^' );
define( 'LOGGED_IN_SALT',   '$.qs#[^%-hP2{~Kh6Q!h|2?|^**_IdcS?B@<UcK=n.C acx1fKfJf;]zF*|s{y3b' );
define( 'NONCE_SALT',       'uzMqAobK`Xi6|~sFaL{K6$[,w;vaAyVtB&c5CU?@}tCrQ?nzrs]s8k[ _BK[);tt' );

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
