var config = {

    map: {
        '*': {
            slick :  'js/slick.min',
            select2: 'js/select2.min',
            kakaoSDK: 'https://developers.kakao.com/sdk/js/kakao.js',
            MZSCRIPT: 'Magento_Theme/js/mz-script',
            prototypeFix: 'js/prototype-fire-fix'
        }
    },
    config: {
        mixins: {
            'mage/validation': {
                'js/mage/validation-mixin': true,
                'js/validation-mixin': true
            }
        }
    },
    'shim': {
        'slick': {
            deps: ['jquery']
        },
        'select2': {
            deps: ['jquery']
        }
    },
    deps: [
        'js/prototype-fire-fix',
        'Magento_Theme/js/js-theme',
        'Magento_Theme/js/mz-script'
    ]
};
// app/design/frontend/Megazone/theme/requirejs-config.js
