// Search and Filter Functionality

let allPlayers = [];

// Fetch players data
async function loadPlayers() {
  try {
    const response = await fetch('./assets/data/players.json');
    allPlayers = await response.json();
    displayPlayers(allPlayers);
  } catch (error) {
    console.error('Error loading players:', error);
  }
}

// Display players in grid
function displayPlayers(players) {
  const grid = document.getElementById('players-grid');
  if (!grid) return;

  if (players.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No players found.</p>';
    return;
  }

  grid.innerHTML = players.map(player => `
    <div class="player-card">
      <div class="player-number">#${player.number}</div>
      <h3 class="player-name">${player.name}</h3>
      <span class="player-position">${player.position}</span>
      <div class="player-info"><strong>Height:</strong> ${player.height}</div>
      <div class="player-info"><strong>Nationality:</strong> ${player.nationality}</div>
      <div class="player-description">${player.description}</div>
    </div>
  `).join('');
}

// Search functionality
function setupSearch() {
  const searchBox = document.getElementById('search-box');
  if (!searchBox) return;

  searchBox.addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const filtered = allPlayers.filter(player =>
      player.name.toLowerCase().includes(query) ||
      player.position.toLowerCase().includes(query) ||
      player.nationality.toLowerCase().includes(query)
    );
    displayPlayers(filtered);
  });
}

// Filter by position
function setupPositionFilter() {
  const filterSelect = document.getElementById('position-filter');
  if (!filterSelect) return;

  // Populate unique positions
  const positions = ['All', ...new Set(allPlayers.map(p => p.position))];
  filterSelect.innerHTML = positions.map(pos =>
    `<option value="${pos}">${pos}</option>`
  ).join('');

  filterSelect.addEventListener('change', function (e) {
    const selected = e.target.value;
    const filtered = selected === 'All'
      ? allPlayers
      : allPlayers.filter(player => player.position === selected);
    displayPlayers(filtered);
  });
}

// Initialize search page
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('players-grid')) {
    loadPlayers();
    setupSearch();
    setupPositionFilter();
  }
});
