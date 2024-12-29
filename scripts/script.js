// 로그인-회원가입 기능 구현

const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 폼 제출 기본 동작 막기

        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (username === '' || password === '' || confirmPassword === '') {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 회원가입 데이터 저장
        const userData = { username, password };
        localStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = 'index.html';
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 폼 제출 기본 동작 막기

        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // 회원가입 데이터 가져오기
        const savedUserData = JSON.parse(localStorage.getItem('userData'));

        if (!savedUserData) {
            alert('회원가입된 사용자가 없습니다. 회원가입을 먼저 진행해주세요.');
            return;
        }

        if (username === savedUserData.username && password === savedUserData.password) {
            alert('로그인 성공!');
            window.location.href = 'lobby.html';
        } else {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    });
}

