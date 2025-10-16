window.addEventListener("DOMContentLoaded", () => {
  const sites = ['ram', 'shyam', 'hari', 'prashad'];
  const main_container = document.querySelector('.main-container');
  console.log(main_container);

  const html = sites.map(s => `
      <div class="site-container">
        <h2><i class="fas fa-user"></i> ${s}</h2>
        <p>
          <i class="fas fa-link"></i> 
          <a href="${window.location.origin}/sites/${s}" target="_blank">
            ${window.location.origin}/sites/${s}
          </a>
        </p>
      </div>
  `);

  main_container.innerHTML = html.join('');
});
