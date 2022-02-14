// let button = document.getElementById('button');
$("button").click(function () {
  /*$('') = peguei elemento do html, ao clicar no html abre uma função*/ let data =
    $("#date").val(); /*pegando o valor do input data*/
  let img = $("#img"); /*atribuindo uma variavel e pegando o ID(#) de img */
  let video = $("#video"); /* atribuindo uma variavel e pegando ID de video */
  // console.log (data)

  $.ajax({
    method: "GET" /*jquery pegando a API da NASA com GET */,
    url: `https://api.nasa.gov/planetary/apod?api_key=CDlQHjsNwbVP3wmRJZNkPfoxAaFy51epdlyXXOh4&date=${data}`,
    /*usando as aspas pra poder juntar a URL com a variavel data =${data} */

    success: function (result) {
      /*em caso de sucesso vai realizar essa função */
      /*retornando o result com o objeto (que seria a API do dia) */

      if (result.media_type == "image") {
        /*media_type = atributo do objeto que é result */
        img.css("display", "block"); /*quero que apareça a imagem */
        video.css(
          "display",
          "none"
        ); /**nao aparecer = display none nao aparecer o video */
        img.attr("src", result.url); /*imagem pegando o atributo url */
      } else {
        video.css("display", "block"); /*aparecer* aparecer block*/
        img.css("display", "none");
        video.attr("src", result.url);
        /*attr mudar uma propriedade da tag */
      }

      console.log(result);
    },
  });
});

