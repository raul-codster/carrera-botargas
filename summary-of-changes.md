# Summary of Changes to Fix the Race Position Board

## The Issue

In the current implementation of the "Carrera de Botargas" (Mascot Race) game, the leaderboard doesn't correctly display the final positions of the botargas based on the order they crossed the finish line. Instead, it continues to sort them by their position on the track even after the race is complete.

## The Solution

The solution is to modify the `updateLeaderboard()` function to check if the race is complete (all botargas have crossed the finish line) and, if so, use the `finishOrder` array to display the botargas in the order they finished. If the race is still in progress, it should continue to sort them by their current position on the track.

## Implementation Details

### Current Function (lines 629-651):

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

### Updated Function:

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

## Key Changes

1. **Added Conditional Logic**: The updated function checks if all botargas have finished the race (`finishOrder.length === botargas.length && finishOrder.length > 0`).

2. **Dynamic Sorting**: 
   - If the race is complete, it uses the `finishOrder` array which contains botargas in the order they crossed the finish line.
   - If the race is still in progress, it continues to sort botargas by their current position on the track.

3. **Variable Renaming**: Changed `sortedBotargas` to `displayBotargas` to better reflect its purpose, as it may contain either position-sorted or finish-order-sorted botargas.

## How to Test

After implementing the changes:

1. Open the `carrera-botargas.html` file in a web browser.
2. Start a race by clicking the "Iniciar Carrera" button.
3. Observe the leaderboard during the race - it should show botargas sorted by their current position.
4. Wait for all botargas to finish the race.
5. Verify that the leaderboard now shows the botargas in the order they crossed the finish line, with the first to finish at the top (position 1), the second to finish in position 2, and so on.

This change ensures that the leaderboard correctly displays the race results according to the order in which the botargas crossed the finish line, as requested.