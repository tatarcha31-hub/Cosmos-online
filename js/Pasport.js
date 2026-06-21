const btn = document.getElementById("createPassport");
const result = document.getElementById("result");
const birthInput = document.getElementById("birthDate");

btn.addEventListener("click", () => {
    const birthDate = new Date(birthInput.value);

    if (!birthInput.value) {
        result.innerHTML = "Введите дату рождения!";
        return;
    }

    const zodiac = getZodiacSign(birthDate);

    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];

    const weekDay = days[birthDate.getDay()];

    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }
    const orbitDistance = (age * 940000000).toLocaleString();

    result.innerHTML = `
        <div style="
            margin-top:20px;
            padding:20px;
            border-radius:15px;
            background:rgba(255,255,255,0.08);
        ">
            <h3>🚀 Космический паспорт</h3>

            <p><b>Дата рождения:</b> ${birthInput.value}</p>

            <p><b>Знак зодиака:</b> ${zodiac}</p>

            <p><b>День недели рождения:</b> ${weekDay}</p>

            <p><b>Возраст:</b> ${age} лет</p>

            <p><b>Оборотов вокруг Солнца:</b> ${age}</p>

            <p><b>Пройдено по орбите:</b><br>
            ${orbitDistance} км 🌍</p>
        </div>
    `;
});

function getZodiacSign(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18))
        return "♒ Водолей";

    if ((month == 2 && day >= 19) || (month == 3 && day <= 20))
        return "♓ Рыбы";

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19))
        return "♈ Овен";

    if ((month == 4 && day >= 20) || (month == 5 && day <= 20))
        return "♉ Телец";

    if ((month == 5 && day >= 21) || (month == 6 && day <= 20))
        return "♊ Близнецы";

    if ((month == 6 && day >= 21) || (month == 7 && day <= 22))
        return "♋ Рак";

    if ((month == 7 && day >= 23) || (month == 8 && day <= 22))
        return "♌ Лев";

    if ((month == 8 && day >= 23) || (month == 9 && day <= 22))
        return "♍ Дева";

    if ((month == 9 && day >= 23) || (month == 10 && day <= 22))
        return "♎ Весы";

    if ((month == 10 && day >= 23) || (month == 11 && day <= 21))
        return "♏ Скорпион";

    if ((month == 11 && day >= 22) || (month == 12 && day <= 21))
        return "♐ Стрелец";

    return "♑ Козерог";
}