// References to settings elements
const settingsBox = document.getElementById('settingsBox');
const openSettingsButton = document.getElementById('openSettingsButton');
const closeSettingsButton = document.getElementById('closeSettingsButton');
const addLinkButton = document.getElementById('addLinkButton');
const linkNameInput = document.getElementById('linkNameInput');
const linkUrlInput = document.getElementById('linkUrlInput');
const buttonContainer = document.getElementById('buttonContainer');

// Links array
let links = [
    { name: 'JamF', url: 'https://mme-casper.princeton.edu:8443/' },
    { name: 'Intune', url: 'https://intune.microsoft.com/#home' },
    { name: 'Scala', url: 'https://avacmd34.scala.com:44324/ContentManager/#dashboard' }
];

// Render links
function renderLinks() {
    buttonContainer.innerHTML = '';
    links.forEach((link) => {
        const button = document.createElement('button');
        button.textContent = link.name;
        button.onclick = () => openUrl(link.url);
        buttonContainer.appendChild(button);
    });
}

// Open settings
openSettingsButton.addEventListener('click', () => {
    settingsBox.style.display = 'block';
});

// Close settings
closeSettingsButton.addEventListener('click', () => {
    settingsBox.style.display = 'none';
});

// Add a link
addLinkButton.addEventListener('click', () => {
    const name = linkNameInput.value.trim();
    const url = linkUrlInput.value.trim();

    if (name && url) {
        links.push({ name, url });
        renderLinks();
        linkNameInput.value = '';
        linkUrlInput.value = '';
    } else {
        alert('Please fill out both fields.');
    }
});

// Open a URL
function openUrl(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Initial render
renderLinks();

// References
const settingsBox = document.getElementById('settingsBox');
const closeSettingsButton = document.getElementById('closeSettingsButton');

// Close settings
closeSettingsButton.addEventListener('click', () => {
    settingsBox.style.display = 'none';
});

