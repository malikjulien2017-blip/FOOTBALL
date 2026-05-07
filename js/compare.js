// Player Comparison Functionality

let allPlayers = [];
let selectedPlayers = [];

// Fetch players data
async function loadPlayers() {
  try {
    const response = await fetch('./assets/data/players.json');
    allPlayers = await response.json();
    setupCompare();
  } catch (error) {
    console.error('Error loading players:', error);
  }
}

// Setup comparison selectors
function setupCompare() {
  const selectors = document.querySelectorAll('select[data-player-slot]');
  selectors.forEach(selector => {
    // Populate player options
    selector.innerHTML = '<option value="">Select a player...</option>' +
      allPlayers.map(p => `<option value="${p.id}">${p.name} - ${p.position}</option>`).join('');

    selector.addEventListener('change', updateComparison);
  });
}

// Update comparison display
function updateComparison() {
  selectedPlayers = [];
  const selectors = document.querySelectorAll('select[data-player-slot]');

  selectors.forEach(selector => {
    const playerId = parseInt(selector.value);
    if (playerId) {
      const player = allPlayers.find(p => p.id === playerId);
      if (player) {
        selectedPlayers.push(player);
      }
    }
  });

  displayComparison();
}

// Display comparison
function displayComparison() {
  const comparisonTable = document.getElementById('comparison-table');
  if (!comparisonTable) return;

  if (selectedPlayers.length === 0) {
    comparisonTable.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Select players to compare</p>';
    return;
  }

  const attributes = ['Name', 'Position', 'Number', 'Height', 'Nationality', 'Description'];

  let html = '<div style="grid-column: 1/-1;">';
  html += '<table style="width:100%; border-collapse: collapse;">';

  // Header
  html += '<tr style="background: var(--primary-blue); color: white;">';
  html += '<th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Attribute</th>';
  selectedPlayers.forEach(player => {
    html += `<th style="padding: 1rem; border: 1px solid #ddd;">${player.name}</th>`;
  });
  html += '</tr>';

  // Rows
  attributes.forEach(attr => {
    html += '<tr style="border-bottom: 1px solid #ddd;">';
    html += `<td style="padding: 1rem; font-weight: bold; background: var(--light-gray);">${attr}</td>`;

    selectedPlayers.forEach(player => {
      const value = player[attr.toLowerCase()] || 'N/A';
      html += `<td style="padding: 1rem; border-left: 1px solid #ddd;">${value}</td>`;
    });

    html += '</tr>';
  });

  html += '</table>';
  html += '</div>';

  comparisonTable.innerHTML = html;
}

// Initialize comparison page
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('comparison-table')) {
    loadPlayers();
  }
});
