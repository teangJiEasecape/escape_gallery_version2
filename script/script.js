

document.addEventListener("DOMContentLoaded", function() {

    let password;
    while (true) {
        password = prompt("비밀번호를 입력해주세요", "");
        if (password === "1234") {
            break; // 비밀번호가 맞으면 반복 종료
        } else {
            alert("비밀번호가 틀렸습니다. 다시 시도해주세요.");
        }
    }
});

