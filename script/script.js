document.addEventListener("DOMContentLoaded", function() {
    const $input = $('.imgBox .passwordDiv .ipt');
    const $button = $('.imgBox .passwordDiv .submitBtn');
    const $error = $('.imgBox .error');
    const $countdown = $('.imgBox .error span');

    const LOCK_KEY = 'passwordLockUntil';

    function updateLockState() {
        const now = Date.now();
        const lockUntil = localStorage.getItem(LOCK_KEY);

        if (lockUntil && parseInt(lockUntil) > now) {
            const remaining = Math.ceil((parseInt(lockUntil) - now) / 1000);
            $error.show();
            $countdown.text(remaining);
            $button.prop('disabled', true);
            $input.prop('disabled', true);

            const interval = setInterval(() => {
                const newNow = Date.now();
                const newRemaining = Math.ceil((parseInt(lockUntil) - newNow) / 1000);

                if (newRemaining <= 0) {
                    clearInterval(interval);
                    localStorage.removeItem(LOCK_KEY);
                    $error.hide();
                    $button.prop('disabled', false);
                    $input.prop('disabled', false);
                    $input.val('');
                } else {
                    $countdown.text(newRemaining);
                }
            }, 1000);
        }
    }

    updateLockState();

    $button.click(function() {
        const password = $input.val();
        if (password === "943706") {
            $('.passwordDiv').hide();
            $('.imgBox .img').show();
        } else {
            // 비밀번호 틀림 → 10초 후까지 잠금 설정
            const lockUntil = Date.now() + 10000;
            localStorage.setItem(LOCK_KEY, lockUntil.toString());
            updateLockState();
        }
    });
});
