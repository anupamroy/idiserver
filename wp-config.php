<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

define('DB_NAME', 'tiraadb');
define('DB_USER', 'root');
define('DB_PASSWORD', 'Tiraa@jweles.com2021');
/*
define('DB_NAME', 'apptoxic_tiraa');
define('DB_USER', 'apptoxic_atfun');
define('DB_PASSWORD', 'JsnDB@123!');*/

define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '- ]`VK+$/sp`Vx}v$lFhaGw{JA<zFfgiac5|_i!FluCUu,IiU T?]Bz#WDeEj1];');
define('SECURE_AUTH_KEY',  'wLh#d}S|<59 ~ $<k$}D7d1vgo=h+~J#2#>:=R4kI~A:?hHc/^A^@vV@Q2Yy6gt.');
define('LOGGED_IN_KEY',    'z99s:W{jive0YchK.#y.rsj=n3W11@E[kjf6eOESgB[85Lg3Y8?YeBT~N,v)lPP8');
define('NONCE_KEY',        '=[g tO?bjV0-jBoh1VTR_G_-6e]4)4BmpzX0~Jxiw0uR?8)]e^M|@Ti.W0/GG {N');
define('AUTH_SALT',        'LC$y ,VWl<dnBi=elZ4<?~l>J/6o~zpt~Ot^C4`ZLKMt0]Zu#b:sJgX<ZRz0YsDx');
define('SECURE_AUTH_SALT', 'S;7Z%x5[plI1KVN;;#-?MABWw[_xoWL|M2i|HR})mY6g?=z;_u_5dptijYnbhifd');
define('LOGGED_IN_SALT',   '$5GjDG37V4{e-nI#EJ{${rpn4#0g]=c$|D@KF_f8RPMVuuwH9wLM-B/tH=_nJLp2');
define('NONCE_SALT',       '!zyQV,HF)UT%0->}*`}B-g}GmiB-xxV2?5L.oV;3Pq:WIO[>q/8#]%)({3uHIOfj');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
