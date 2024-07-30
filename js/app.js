
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const url = event.target.href;
    const zoomWindow = window.open(url, 'zoomWindow', 'width=800,height=600');
    zoomWindow.document.write(`
      <html>
      <head>
          <title>Zoom</title>
          <style>
              body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #fff; }
              embed { width: 100%; height: 100%; }
          </style>
      </head>
      <body>
          <embed src="${url}" type="application/pdf">
      </body>
      </html>
    `);
  });
});

