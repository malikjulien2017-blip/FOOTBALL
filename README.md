# Barcelona Football Website

An educational and interactive resource for football players and athletes to learn about Barcelona Football Club, understand player positions, explore team history, and compare legendary players.

## Features

- **Player Roster**: Full roster with search and filter functionality
- **Positions Guide**: Detailed guide to all football positions
- **Team History**: Barcelona's achievements, timeline, and playing philosophy
- **Player Comparison**: Interactive tool to compare players side-by-side

## Pages

- Home (index.html) - Landing page with overview
- Players (players.html) - Player roster
- Positions (positions.html) - Position guides
- History (history.html) - Team history
- Compare (compare.html) - Player comparison

## Technologies

- HTML5
- CSS3
- JavaScript

## Getting Started

Open `index.html` in your web browser to start exploring.
          <h3 class="card-title" style="font-size: 2.5rem; color: var(--secondary-red);">60+ Years</h3>
          <p>Of Excellence</p>
        </div>
      </div>

      <div class="card">
        <div class="card-body text-center">
          <h3 class="card-title" style="font-size: 2.5rem; color: var(--secondary-red);">Worldwide</h3>
          <p>Fans Support</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA SECTION -->
  <section class="container">
    <h2 style="text-align: center;">Ready to Learn?</h2>
    <div style="text-align: center; margin-top: 2rem;">
      <a href="players.html" class="btn">Meet Our Players</a>
      <a href="positions.html" class="btn" style="background: var(--primary-blue); border-color: var(--primary-blue);">Understand Positions</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="players.html">Players</a></li>
          <li><a href="positions.html">Positions</a></li>
          <li><a href="history.html">History</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>About</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Follow</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Barcelona Football Club. All rights reserved.</p>
    </div>
  </footer>

  <script src="js/script.js"></script>
=======
  <title>Soccer Hub</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<header>
  <h1>⚽ Soccer Hub</h1>
  <nav>
    <a href</header>

<main>
  <section>
    <h2>Welcome to Soccer Hub</h2>
    <p id="fact">Click the button to learn a soccer fact!</p>
    <button onclick="showFact()">Show Soccer Fact</button>
  </section>
</main>

<footer>
  <p>© 2026 Soccer Hub</p>
</footer>

js/script.js
>>>>>>> 8fef17beb659316514cfe3b02523528c7042f742
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
<<<<<<< HEAD
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Barcelona Players - View roster with complete player profiles">
  <title>Barcelona Players</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- HEADER NAV -->
  <header>
    <div class="header-container">
      <a href="index.html" class="logo">⚽ Barcelona FC</a>
      <button class="menu-toggle">☰</button>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="players.html">Players</a></li>
          <li><a href="positions.html">Positions</a></li>
          <li><a href="history.html">History</a></li>
          <li><a href="compare.html">Compare</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="hero">
    <div class="container">
      <h1>Barcelona Players</h1>
      <p>Discover the Legends and Talents of Barcelona FC</p>
    </div>
  </section>

  <!-- SEARCH & FILTER -->
  <section class="container">
    <h2>Find Your Player</h2>
    <div class="search-container">
      <input
        type="text"
        id="search-box"
        class="search-box"
        placeholder="Search by name, position, or nationality..."
        aria-label="Search players"
      >
      <select id="position-filter" class="filter-select" aria-label="Filter by position">
        <option value="">Loading positions...</option>
      </select>
    </div>
  </section>

  <!-- PLAYERS GRID -->
  <section class="container">
    <div id="players-grid" class="grid"></div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="players.html">Players</a></li>
          <li><a href="positions.html">Positions</a></li>
          <li><a href="history.html">History</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>About</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Follow</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Barcelona Football Club. All rights reserved.</p>
    </div>
  </footer>

  <script src="js/script.js"></script>
  <script src="js/search.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Barcelona Football Club History - From founding to modern era">
  <title>Barcelona History</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- HEADER NAV -->
  <header>
    <div class="header-container">
      <a href="index.html" class="logo">⚽ Barcelona FC</a>
      <button class="menu-toggle">☰</button>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="players.html">Players</a></li>
          <li><a href="positions.html">Positions</a></li>
          <li><a href="history.html">History</a></li>
          <li><a href="compare.html">Compare</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="hero">
    <div class="container">
      <h1>Barcelona's Legacy</h1>
      <p>Over a Century of Football Excellence and Glory</p>
    </div>
  </section>

  <!-- HISTORY TIMELINE -->
  <section class="container">
    <h2>A Timeline of Glory</h2>

    <div class="position-card">
      <h3 class="position-title">🏟️ 1899 - The Beginning</h3>
      <p>Barcelona Football Club was founded, becoming one of the oldest football clubs in Spain and Europe. The club was established by a group of Swiss, English, and Spanish football enthusiasts.</p>
    </div>

    <div class="position-card">
      <h3 class="position-title">🏆 1910s-1920s - Early Success</h3>
      <p>Barcelona won the Copa del Rey multiple times, establishing themselves as a dominant force in Spanish football. The club developed a strong fan base and playing philosophy.</p>
    </div>

    <div class="position-card">
      <h3 class="position-title">⚽ 1945-1974 - The Golden Era</h3>
      <p>Managed by Frank Rijkaard and others, Barcelona won numerous La Liga titles. The club developed a unique playing style focused on possession and technique.</p>
    </div>

    <div class="position-card">
      <h3 class="position-title">🌟 1988-1994 - Dream Team Era</h3>
      <p>Coach Frank Rijkaard transformed Barcelona into "Dream Team." With Ronaldinho, Stoichkov, and others, the club won 4 consecutive La Liga titles (1991-1994) and the 1992 European Cup.</p>
    </div>

    <div class="position-card">
      <h3 class="position-title">👑 1997-2002 - Continued Excellence</h3>
      <p>Barcelona maintained dominance under various coaches. The club developed young talents and maintained a strong competitive position in La Liga and European competitions.</p>
    </div>

    <div class="position-card">
      <h3 class="position-title">🔥 2003-2012 - The Messi Era Begins</h3>
      <p>Lionel Messi joined Barcelona's youth academy and developed into the world's best player. Manager Frank Rijkaard and later Pep Guardiola built incredible teams around Messi.</p>
    </div>

    <div class="position-card">
      <h3 class="position-title">🎯 2006-2011 - Pep Guardiola's Masterpiece</h3>
      <p>Under Pep Guardiola, Barcelona won 14 trophies in 4 seasons, including:</p>
      <div class="position-duties">
        <strong>Major Achievements:</strong>
        <ul>
          <li>3 La Liga titles (2006, 2009, 2011)</li>
          <li>2 UEFA Champions League titles (2006, 2009)</li>
          <li>Multiple Copa del Rey titles</li>
          <li>2 FIFA Club World Cups</li>
          <li>Pioneered the "Tiki-taka" possession-based style</li>
        </ul>
      </div>
    </div>

    <div class="position-card">
      <h3 class="position-title">💪 2008-2015 - Historic Treble & Beyond</h3>
      <p>2009: Barcelona won the historic treble - La Liga, Copa del Rey, and Champions League in same season. Messi was at his peak, and players like Xavi, Iniesta, and Busquets were world-class.</p>
    </div>

    <div class="position-card">
      <h3 class="position-title">🌍 2015 - Treble Again</h3>
      <p>Barcelona achieved the treble for the second time! Messi, Suárez, and Neymar formed the famous MSN attacking trio. Managed by Luis Enrique, the team played beautiful attacking football.</p>
    </div>

    <div class="position-card">
      <h3 class="position-title">📊 Club Records & Achievements</h3>
      <div class="position-duties">
        <strong>All-Time Records:</strong>
        <ul>
          <li><strong>26+ La Liga titles</strong> - Most in Spanish football</li>
          <li><strong>5 UEFA Champions League titles</strong> - Among the greatest in Europe</li>
          <li><strong>30+ Copa del Rey titles</strong> - Most successful in Copa history</li>
          <li><strong>2 FIFA Club World Cups</strong></li>
          <li><strong>3 UEFA Super Cups</strong></li>
          <li><strong>13 Super Copas de España</strong></li>
        </ul>
      </div>
    </div>

    <div class="position-card">
      <h3 class="position-title">⭐ Greatest Players of All Time</h3>
      <div class="position-duties">
        <strong>Barcelona Legends:</strong>
        <ul>
          <li><strong>Lionel Messi</strong> - The Greatest, 7 Ballon d'Or awards</li>
          <li><strong>Ronaldinho</strong> - Magical Brazilian, won 2002 World Cup</li>
          <li><strong>Xavi Hernández</strong> - Midfield Maestro, pass master</li>
          <li><strong>Andrés Iniesta</strong> - Elegance and control</li>
          <li><strong>Luis Suárez</strong> - Powerful striker, MSN trio member</li>
          <li><strong>Neymar Jr</strong> - Brazilian flair and skill</li>
          <li><strong>Sergio Busquets</strong> - Defensive Anchor</li>
          <li><strong>Gerard Piqué</strong> - Commanding defender</li>
        </ul>
      </div>
    </div>

    <div class="position-card">
      <h3 class="position-title">🎨 Football Philosophy</h3>
      <p>Barcelona is known for its unique football philosophy emphasizing:</p>
      <div class="position-duties">
        <ul>
          <li><strong>Possession Football:</strong> Keep the ball and control the game</li>
          <li><strong>Tiki-taka Style:</strong> Short passes and quick movement</li>
          <li><strong>Technical Excellence:</strong> Skilled, creative players</li>
          <li><strong>Youth Development:</strong> La Academia - world's best youth academy</li>
          <li><strong>Attacking Mindset:</strong> Score more goals than opponents</li>
          <li><strong>Team Over Individuals:</strong> Collective success is paramount</li>
        </ul>
      </div>
    </div>

    <div class="position-card">
      <h3 class="position-title">🏢 Camp Nou</h3>
      <p>Barcelona's iconic home stadium, Camp Nou, is one of the largest football stadiums in the world with a capacity of over 100,000. It's a fortress where Barcelona has created countless magical moments and unforgettable victories.</p>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="players.html">Players</a></li>
          <li><a href="positions.html">Positions</a></li>
          <li><a href="history.html">History</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>About</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Follow</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Barcelona Football Club. All rights reserved.</p>
    </div>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>
/* Barcelona Football Website - Responsive CSS */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-blue: #004687;
  --secondary-red: #d41028;
  --accent-gold: #ffc52f;
  --light-gray: #f5f5f5;
  --dark-text: #333;
  --border-radius: 8px;
  --transition: all 0.3s ease;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--dark-text);
  background-color: #fff;
}

/* HEADER & NAVIGATION */
header {
  background: linear-gradient(135deg, var(--primary-blue) 0%, #003366 100%);
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--accent-gold);
  text-decoration: none;
  transition: var(--transition);
}

.logo:hover {
  transform: scale(1.05);
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  flex-wrap: wrap;
=======
  <title>Famous Players</title>
  css/style.css
</head>
<body>

<header>
  <h1>Famous Soccer Players</h1>
  <nav>
    ">Home</a>
  </nav>
</header>

<main>
  <ul>
    <li>Lionel Messi</li>
    <li>Cristiano Ronaldo</li>
    <li>Pelé</li>
    <li>Ronaldinho</li>
  </ul>
</main>

<footer>
  <p>Soccer Hub</p>
</footer>

</body>
</html>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f4f4f4;
}

header {
  background-color: #1e7f3b;
  color: white;
  padding: 15px;
>>>>>>> 8fef17beb659316514cfe3b02523528c7042f742
}

nav a {
  color: white;
<<<<<<< HEAD
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
}

nav a:hover {
  background: var(--secondary-red);
  transform: translateY(-2px);
}

/* MOBILE MENU TOGGLE */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

/* CONTAINER & SECTIONS */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

section {
  padding: 3rem 0;
}

section h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-blue);
  text-align: center;
}

section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-blue);
}

/* HERO SECTION */
.hero {
  background: linear-gradient(rgba(0, 70, 135, 0.8), rgba(212, 16, 40, 0.8)),
    url('../assets/images/barcelona-stadium.jpg') center/cover no-repeat;
  color: white;
  padding: 6rem 1rem;
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

/* BUTTONS */
.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: var(--secondary-red);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius);
  border: 2px solid var(--secondary-red);
  cursor: pointer;
  font-weight: 600;
  transition: var(--transition);
  margin-right: 1rem;
}

.btn:hover {
  background: var(--primary-blue);
  border-color: var(--primary-blue);
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.btn-secondary:hover {
  background: white;
  color: var(--primary-blue);
}

/* GRID LAYOUTS */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  border-top: 4px solid var(--primary-blue);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-img {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-red));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--primary-blue);
}

.card-text {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* PLAYER CARDS */
.player-card {
  background: white;
  border: 2px solid var(--light-gray);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: var(--transition);
  cursor: pointer;
}

.player-card:hover {
  border-color: var(--secondary-red);
  box-shadow: 0 6px 12px rgba(212, 16, 40, 0.2);
}

.player-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--accent-gold);
  display: inline-block;
  margin-bottom: 0.5rem;
}

.player-name {
  font-size: 1.3rem;
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
}

.player-position {
  display: inline-block;
  background: var(--secondary-red);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.player-info {
  font-size: 0.9rem;
  color: #666;
  margin: 0.5rem 0;
}

.player-description {
  color: #444;
  font-style: italic;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--light-gray);
}

/* SEARCH & FILTERS */
.search-container {
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.search-box,
.filter-select {
  padding: 0.8rem;
  border: 2px solid var(--light-gray);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
}

.search-box:focus,
.filter-select:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 6px rgba(0, 70, 135, 0.2);
}

.search-box {
  flex: 1;
  min-width: 200px;
}

/* POSITIONS GUIDE */
.position-card {
  background: var(--light-gray);
  border-left: 4px solid var(--secondary-red);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
}

.position-title {
  font-size: 1.3rem;
  color: var(--primary-blue);
  margin-bottom: 0.8rem;
}

.position-duties {
  background: white;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

.position-duties li {
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
}

/* FOOTER */
footer {
  background: var(--primary-blue);
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section a {
  color: var(--accent-gold);
  text-decoration: none;
  transition: var(--transition);
}

.footer-section a:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1.5rem;
}

/* RESPONSIVE DESIGN - TABLETS */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  nav ul {
    gap: 1rem;
    font-size: 0.9rem;
  }

  section h1 {
    font-size: 2rem;
  }

  .grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .search-container {
    flex-direction: column;
  }

  .search-box {
    min-width: 100%;
  }

  .menu-toggle {
    display: block;
  }

  nav ul {
    display: none;
  }

  nav ul.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 1rem;
    background: var(--primary-blue);
    padding: 1rem;
    border-radius: var(--border-radius);
    width: calc(100% - 2rem);
  }
}

/* RESPONSIVE DESIGN - MOBILE */
@media (max-width: 480px) {
  .hero {
    padding: 4rem 1rem;
  }

  .hero h1 {
    font-size: 1.8rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .header-container {
    flex-wrap: wrap;
  }

  .logo {
    font-size: 1.3rem;
  }

  section {
    padding: 1.5rem 0;
  }

  section h1 {
    font-size: 1.5rem;
  }

  section h2 {
    font-size: 1.3rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .btn {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
  }

  .player-card {
    padding: 1rem;
  }

  .card-img {
    height: 200px;
    font-size: 2rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* UTILITY CLASSES */
.text-center {
  text-align: center;
}

.mt-2 {
  margin-top: 1.5rem;
}

.mb-2 {
  margin-bottom: 1.5rem;
}

.hide {
  display: none;
}
Barcelona Football Website - Main Script

// Mobile Menu Toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        nav.classList.remove('active');
      });
    });
  }
}

// Smooth Scrolling for anchor links
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for sticky header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Add Active State to Navigation
function highlightActiveNav() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.includes(href) || (currentPath === '/' && href === 'index.html')) {
      link.style.background = 'var(--secondary-red)';
    }
  });
}

// Fade-in animations on scroll
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  document.querySelectorAll('.card, .player-card, .position-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  smoothScroll();
  highlightActiveNav();
  observeElements();
});
=======
  margin-right: 15px;
  text-decoration: none;
}

main {
  padding: 20px;
}

button {
  padding: 10px;
  background-color: #1e7f3b;
  color: white;
  border: none;
  cursor: pointer;
}
const facts = [
  "Soccer is the most popular sport in the world.",
  "A soccer match lasts 90 minutes.",
  "The World Cup happens every 4 years."
];

function showFact() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").textContent = randomFact;
}
>>>>>>> 8fef17beb659316514cfe3b02523528c7042f742
