(function() {
    'use strict';

    function applyPrototypeFix() {
        if (typeof Event === 'undefined' || typeof Event.fire !== 'function') {
            return;
        }

        if (Event._firePatched) {
            return;
        }

        // Helper: dispatchEvent가 없는 객체에 더미 함수 부여
        function ensureDispatchEvent(element) {
            if (element && typeof element.dispatchEvent !== 'function') {
                element.dispatchEvent = function() {
                    return true; // 뉴렐릭이 호출했을 때 에러 없이 정상 통과하도록 더미 함수 주입
                };
            }
        }

        var originalEventFire = Event.fire;

        Event.fire = function(element, eventName, memo, bubble) {
            if (!element) {
                return null;
            }

            // dispatchEvent 함수가 없으면 안전하게 주입
            ensureDispatchEvent(element);

            try {
                return originalEventFire.call(this, element, eventName, memo, bubble);
            } catch (e) {
                console.error('[Prototype.js Fix] Event.fire error:', e.message);
                return element;
            }
        };

        Event._firePatched = true;

        if (typeof Element !== 'undefined' && Element.Methods && Element.Methods.fire) {
            var originalElementFire = Element.Methods.fire;

            Element.Methods.fire = function(element, eventName, memo, bubble) {
                if (!element) {
                    return null;
                }

                ensureDispatchEvent(element);

                try {
                    return originalElementFire.call(this, element, eventName, memo, bubble);
                } catch (e) {
                    console.error('[Prototype.js Fix] Element.fire error:', e.message);
                    return element;
                }
            };
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyPrototypeFix);
    } else {
        applyPrototypeFix();
    }

    window.addEventListener('load', applyPrototypeFix);
})();
