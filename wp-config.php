<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'shop' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2e r$WuU@.X0[$GOoeXN-YCM~=rS_d*.ruFqthE=p4LKP&TP-$.!Q toi-Y}a>#$' );
define( 'SECURE_AUTH_KEY',  'M}7kf{_HOV`bkb#FAID[?t/IhNg=,mC=U@f6qI4M2vetco Gp^QSsfRk1/lo_zu=' );
define( 'LOGGED_IN_KEY',    'no4qOkW;4?Jrl;Q<),q0~twv^a[y!Zh|y^*6`A >$J>)7h&pWNg:uMpy?Wp+HeBZ' );
define( 'NONCE_KEY',        'ym1|CoM+p7e?3^)5/C*vV#+LtThLp%bn|a%C?Y5N$8g&rD`9=$$@~V(`kgP1lc$G' );
define( 'AUTH_SALT',        '&@(XK1f~KS-L/}]R1~4*Dc#s[,86Y} VrkaC=u#I |Osvalc/1d5c4mv@pa#&?<=' );
define( 'SECURE_AUTH_SALT', 'HXbz%/tiTs1Hl*%aqQDoQw|?Ae+6,z9~sMIE?SSWAxq$v:Xq8WOUt$:#`;9l8@`7' );
define( 'LOGGED_IN_SALT',   'B6@A[n`Y&4tL}X6.yWGe$&cEXqE:fvn/4*1hA=26KH[P/gf%[?y_b*qiP4N?=r>j' );
define( 'NONCE_SALT',       'S/{`sTysnO`|}-{jfVQj3C<&x/apz-SrD3MN6k-++j/sjMagp&LWnW^yB8mlCU*}' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
