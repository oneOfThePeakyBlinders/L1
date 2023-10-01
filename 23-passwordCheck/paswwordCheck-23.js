function checkPasswordStrength(password) {
    // минимальная длина пароля;
    const minLength = 8;

    // проверка длины пароля;
    if (password.length < minLength) {
        return 'Пароль слишком короткий. Минимальная длина пароля: ' + minLength + ' символов.';
    }

    // проверка наличия букв в разных регистрах;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    // проверка наличия цифр;
    const hasNumbers = /\d/.test(password);

    // проверка наличия специальных символов;
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    // оценка сложности пароля на основе проверок;
    if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
        return 'Пароль сильный.';
    } else if ((hasUpperCase || hasLowerCase) && hasNumbers && password.length >= minLength) {
        return 'Пароль средней сложности. Рекомендуется добавить специальные символы для усиления безопасности.';
    } else {
        return 'Пароль слабый. Рекомендуется использовать буквы в верхнем и нижнем регистре, цифры и специальные символы.';
    }
}

const userPassword = 'Password007!$';
const passwordStrength = checkPasswordStrength(userPassword);
console.log(passwordStrength);
