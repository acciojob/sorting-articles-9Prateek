//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sorted Bands List (JS)</title>
</head>
<body>
  <h1>Band List</h1>
  <ul id="band">
    <!-- list items will be added via JS -->
  </ul>

  <script>
    const bands = [
      'The Plot in You',
      'The Devil Wears Prada',
      'Pierce the Veil',
      'Norma Jean',
      'The Bled',
      'Say Anything',
      'The Midway State',
      'We Came as Romans',
      'Counterparts',
      'Oh, Sleeper',
      'A Skylit Drive',
      'Anywhere But Here',
      'An Old Dog'
    ];

    // Remove leading articles "a ", "an ", "the " (case‐insensitive) for comparison
    function stripLeadingArticle(name) {
      return name.replace(/^(?:a |an |the )/i, '').trim();
    }

    // Sort ignoring the articles
    const sorted = bands.slice().sort((a, b) => {
      const nameA = stripLeadingArticle(a).toLowerCase();
      const nameB = stripLeadingArticle(b).toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    const ul = document.getElementById('band');
    sorted.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      ul.appendChild(li);
    });
  </script>
</body>
</html>
