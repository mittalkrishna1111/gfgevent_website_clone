const fs = require('fs');
const path = require('path');

const assets = [
  { name: 'iron-man-85.png', url: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/f2/Iron_Man_Armor_-_Mark_LXXXV.png/revision/latest' },
  { name: 'hulkbuster.png', url: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0b/Iron_Man_Armor_-_Mark_XLIV.png/revision/latest' },
  { name: 'war-machine.png', url: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/17/War_Machine_Armor_-_Mark_VI.png/revision/latest' },
  { name: 'thanos.png', url: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/27/Thanos_Infobox.png/revision/latest' },
  { name: 'doctor-strange.jpg', url: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b2/Doctor_Strange_MoM_Profile.jpeg/revision/latest' },
  { name: 'spider-man.jpg', url: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/41/Spider-Man_Infobox.jpg/revision/latest' },
  { name: 'scarlet-witch.jpg', url: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/60/Scarlet_Witch_Infobox.jpg/revision/latest' },
  { name: 'thor.jpg', url: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2b/Thor_Infobox.jpg/revision/latest' },
  { name: 'black-panther.jpg', url: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/93/Black_Panther_Infobox.jpg/revision/latest' },
  { name: 'captain-america.jpg', url: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9d/Captain_America_Infobox.jpg/revision/latest' },
  { name: 'infinity-gauntlet.jpg', url: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/00/InfinityGauntletProfilePicture.jpg/revision/latest' }
];

const outDir = path.join(__dirname, 'public', 'images', 'heroes');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  for (const item of assets) {
    try {
      console.log(`Downloading ${item.name}...`);
      const res = await fetch(item.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      if (!res.ok) {
        console.error(`Failed ${item.name}: ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      const dest = path.join(outDir, item.name);
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${item.name} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error for ${item.name}:`, err.message);
    }
  }
}

run();
