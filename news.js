//news.js

document.addEventListener("DOMContentLoaded", function () {
  fetch("news.json") // Assuming the JSON file is in the same directory
    .then((resposta) => resposta.json())
    .then((noticias) => {
      const secaoNoticias = document.getElementById("news");

      noticias.forEach(function (noticia) {
        const divNoticia = document.createElement("div");
        divNoticia.classList.add("noticia-card");

        let mediaElement;

        if (noticia.media.tipo === "imagem") {
          mediaElement = `<img src="${noticia.media.url}" alt="Imagem da Notícia">`;
        } else if (noticia.media.tipo === "video") {
          mediaElement = `<video src="${noticia.media.url}" controls></video>`;
        } else if (noticia.media.tipo === "audio") {
          mediaElement = `<audio src="${noticia.media.url}" controls></audio>`;
        }

        divNoticia.innerHTML = `
          <div class="noticia-info">
            <h2 class="noticia-titulo">${noticia.titulo}</h2>
            <p class="noticia-descricao">${noticia.descricao}</p>
            <span class="noticia-data">${new Date(
              noticia.data
            ).toLocaleDateString()}</span>
          </div>
          <div class="noticia-media">
            ${mediaElement}
          </div>
        `;

        secaoNoticias.appendChild(divNoticia);
      });
    })
    .catch((error) => console.error("Error fetching news:", error));
});
