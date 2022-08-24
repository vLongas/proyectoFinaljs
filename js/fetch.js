const apiMl = () => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=buzos')
      .then((response) => response.json())
      .then(info => {
        let acumulador = ``;
        info.results.forEach((producto) => {
          console.log(producto)
          acumulador += `<div class="card">
          <img src="${producto.thumbnail}">  
          <h2>${producto.title}</h2>
            <h2>$${producto.price}</h2>
          </div>`
        })
  
        document.getElementById('cards').innerHTML = acumulador;
      })
  }
  
apiMl(); 