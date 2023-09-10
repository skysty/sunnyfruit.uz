// source --> https://sunnyfruit.uz/wp-content/plugins/sitepress-multilingual-cms/res/js/cookies/language-cookie.js?ver=4.5.13 
jQuery(function () {
    jQuery.each(wpml_cookies, function (cookieName, cookieData) {
        document.cookie = cookieName + '=' + cookieData.value + ';expires=' + cookieData.expires + '; path=' + cookieData.path
    });
});