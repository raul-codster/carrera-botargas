# Integration Instructions

To fix the issue with the race position board not ordering the botargas according to their finish order, you need to replace the current `updateLeaderboard()` function with the updated version provided in the `updated-leaderboard-function.js` file.

## The Issue

Currently, the leaderboard is sorting botargas based on their position on the track, not by the order in which they cross the finish line. This means that when the race is over, the leaderboard doesn't show the correct finishing positions.

## The Solution

The updated function checks if the race is complete (all botargas have crossed the finish line) and, if so, uses the `finishOrder` array to display the botargas in the order they finished. If the race is still in progress, it continues to sort them by their current position on the track.

## How to Implement the Fix

1. Open the `carrera-botargas.html` file in your preferred code editor.
2. Locate the `updateLeaderboard()` function (around line 629).
3. Replace the entire function with the code from the `updated-leaderboard-function.js` file.

### Original Function (to be replaced):
```javascript
function updateLeaderboard() {
    const sortedBotargas = [...botargas].sort((a, b) => b.position - a.position);
    positions.innerHTML = '';
    
    sortedBotargas.forEach((botarga, index) => {
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
```

### Updated Function (to be inserted):
```javascript
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
```

## Testing the Fix

After implementing the fix:

1. Open the `carrera-botargas.html` file in a web browser.
2. Start a race by clicking the "Iniciar Carrera" button.
3. Observe the leaderboard during the race - it should show botargas sorted by their current position.
4. Wait for all botargas to finish the race.
5. Verify that the leaderboard now shows the botargas in the order they crossed the finish line, with the first to finish at the top (position 1), the second to finish in position 2, and so on.

This fix ensures that the leaderboard correctly displays the race results according to the order in which the botargas crossed the finish line, as requested.