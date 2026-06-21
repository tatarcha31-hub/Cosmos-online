const inp = document.querySelector('#weight');
const btn = document.querySelector('.btn');
const result = document.querySelector('#result');
const select = document.querySelector('#planet');

btn.addEventListener('click', () => {
    const weight = Number(inp.value);
    const height = Number(select.value);

    const resultt = (weight * height).toFixed(1);

    result.innerHTML = `
   🌌 Ваш вес на этой планете:
         <br><span style="font-size:40px;color:#9d6cff">
         ${resultt} кг
         </span>`

});