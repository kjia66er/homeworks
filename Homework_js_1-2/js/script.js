
    var users = [];
function powerAction() {
    var base = +prompt('Введите основание (любое число)', 0);

    var power =  Math.round( prompt('Введите степень (любое число)', 0) );
    var res = myPow(base, power);
    console.log(base + ' в степени ' + power + ' = ' + res);
}
function usersInputAction() {
    for (var i = 0; i < 5; i++) {
        users[i] = prompt('Введите имя №'+(i+1), '')
    }
    console.log(users);
}

function usersCheckAction() {
    var userName = prompt('Введите имя пользователя', '');

    if (userName == '') {
        alert('Нельзя войти с пустым именем');
        return
    }
    var res = false;
    for (i = 0; i < users.length; i++) {
        if (users[i] === userName) {
            res = true;
            break;
        }
    }

    if (res) {
        console.log(userName+', Вы успешно вошли');
    } else {
        alert('Ошибка входа');
    }
}

 function myPow(base, power) {
    if (isNaN(base)) {
        return 'Ошибка в параметре "base"';
    }
    if (isNaN(power)) {
        return 'Ошибка в параметре "power"';
    }

    if (power == 0) {
        return 1;
    }

    if (base == 0 && power < 0) {
        return '0 не может быть в отрицательной степени'
    }

    if ([0, 1].indexOf(base) != -1) {
        return base
    }
    var r = 1;
    for (var i = 1; i <= Math.abs(power); i++) {
        r *= base;
    }
    if (power < 0) {
        r = 1 / r;
    }
    return r;
}
