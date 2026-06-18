async function loadNASA() {
  const result = document.getElementById("result");

  result.innerHTML = "Загрузка космоса... 🚀";

  try {
    
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
    );

    const data = await response.json();

    result.innerHTML = `
      <h2>${data.title}</h2>
      <img src="${data.url}" alt="NASA image">
      <p style="max-width:700px;margin:auto;">${data.explanation}</p>
    `;

  } catch (error) {
    result.innerHTML = "Ошибка загрузки NASA 😢";
    console.log(error);
  }
}
