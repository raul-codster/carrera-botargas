// Actualizar tabla de posiciones
function updateLeaderboard() {
    let displayBotargas = [];
    
    // Si la carrera ha terminado y todos han cruzado la meta, usar el orden de llegada
    if (finishOrder.length === botargas.length && finishOrder.length > 0) {
        // Usar el orden de llegada para mostrar las posiciones
        displayBotargas = [...finishOrder];
    } else {
        // Si la carrera está en progreso, ordenar por posición actual
        displayBotargas = [...botargas].sort((a, b) => b.position - a.position);
    }
    
    positions.innerHTML = '';
    
    displayBotargas.forEach((botarga, index) => {
        const posDiv = document.createElement('div');
        posDiv.className = 'position';
        
        if (index === 0) posDiv.classList.add('gold');
        else if (index === 1) posDiv.classList.add('silver');
        else if (index === 2) posDiv.classList.add('bronze');
        
        const finished = finishOrder.find(f => f.id === botarga.id);
        const timeText = finished ? formatTime(finished.time) : 'En carrera...';
        
        posDiv.innerHTML = `
            <span>${index + 1}° ${botarga.emoji} ${botarga.name}</span>
            <span>${timeText}</span>
        `;
        
        positions.appendChild(posDiv);
    });
}