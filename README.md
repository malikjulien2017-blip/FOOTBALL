<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
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
}

nav a {
  color: white;
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
