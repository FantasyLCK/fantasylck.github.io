const users = {};

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (users[username]) {
        alert('이미 존재하는 사용자 이름입니다.');
    } else {
        users[username] = password; // 사용자 정보 저장
        alert('회원가입이 완료되었습니다!');
        this.reset(); // 폼 초기화
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (users[username] && users[username] === password) {
        alert('로그인 성공!');
    } else {
        alert('사용자 이름 또는 비밀번호가 잘못되었습니다.');
    }
});