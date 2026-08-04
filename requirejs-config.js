var config = {

    map: {
        '*': {
            slick :  'js/slick.min',
            kakaoSDK: 'https://developers.kakao.com/sdk/js/kakao.js',
            scrollmagic: 'js/scrollmagic',
            custom_account: 'js/custom_account',
            prototypeFix: 'js/prototype-fire-fix'
        }
    },
    config: {
        mixins: {
            'mage/validation': {
                'js/mage/validation-mixin': true,
                'js/prototype-fire-fix': true
            }
        }
    },
    'shim': {
        'slick': {
            deps: ['jquery']
        },
        scrollmagic: {
            exports: "ScrollMagic",
          },
    },
    deps: [
        'js/prototype-fire-fix',
        'Magento_Theme/js/js-theme'
    ]
};
// app/design/frontend/Megazone/theme/requirejs-config.js
