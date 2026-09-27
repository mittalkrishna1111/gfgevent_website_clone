const fs = require('fs');
const path = require('path');

const heroes = [
  { name: 'spider-man', url: 'https://marvelcinematicuniverse.fandom.com/wiki/Spider-Man_(Peter_Parker)' },
  { name: 'doctor-strange', url: 'https://marvelcinematicuniverse.fandom.com/wiki/Doctor_Strange_(Stephen_Strange)' },
  { name: 'scarlet-witch', url: 'https://marvelcinematicuniverse.fandom.com/wiki/Scarlet_Witch_(Wanda_Maximoff)' },
  { name: 'thor', url: 'https://marvelcinematicuniverse.fandom.com/wiki/Thor_(Marvel_Cinematic_Universe)' },
  { name: 'thanos', url: 'https://marvelcinematicuniverse.fandom.com/wiki/Thanos' },
  { name: 'captain-america', url: 'https://marvelcinematicuniverse.fandom.com/wiki/Captain_America_(Steve_Rogers)' },
  { name: 'black-panther', url: 'https://marvelcinematicuniverse.fandom.com/wiki/Black_Panther_(T%27Challa)' }
];

const outDir = path.join(__dirname, 'public', 'images', 'heroes');

async function run() {
  for (const h of heroes) {
    try {
      console.log(`Fetching ${h.name}...`);
      const res = await fetch(h.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        redirect: 'follow'
      });
      const html = await res.text();
      // Match infobox or main character render
      const m1 = html.match(/class="pi-image-thumbnail"[^>]*src="([^"]+)"/);
      const m2 = html.match(/property="og:image"\s+content="([^"]+)"/);
      const m3 = html.match(/href="(https:\/\/static\.wikia\.nocookie\.net\/marvelcinematicuniverse\/images\/[^"]+)"/);
      
      const foundUrl = (m1 && m1[1]) || (m2 && m2[1]) || (m3 && m3[1]);
      if (foundUrl) {
        let cleanUrl = foundUrl.split('/revision/')[0] + '/revision/latest';
        console.log(`Found image for ${h.name}: ${cleanUrl}`);
        const imgRes = await fetch(cleanUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const buffer = Buffer.from(await imgRes.arrayBuffer());
        const ext = cleanUrl.includes('.png') ? '.png' : '.jpg';
        const target = path.join(outDir, `${h.name}${ext}`);
        fs.writeFileSync(target, buffer);
        console.log(`Saved ${target} (${buffer.length} bytes)`);
      } else {
        console.log(`No image match for ${h.name}`);
      }
    } catch (err) {
      console.error(`Error for ${h.name}:`, err.message);
    }
  }
}

run();
