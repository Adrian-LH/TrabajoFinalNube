document.addEventListener('DOMContentLoaded', function() {
   
    const toggleButton = document.getElementById('toggleTheme');
    let modoOscuro = false;
   
    toggleButton.addEventListener('click', function() {
        if (!modoOscuro) {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            toggleButton.textContent = '☀️';
            modoOscuro = true;
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            toggleButton.textContent = '🌙';
            modoOscuro = false;
        }
    });
   
    
    console.log('Modo oscuro simple cargado');
});