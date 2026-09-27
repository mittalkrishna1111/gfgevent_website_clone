/**
 * ==========================================================================
 * AVENGERS: INITIATIVE '26 // Multiverse of Code
 * GeeksforGeeks Student Chapter — Bennett University
 * Main Application Logic Controller
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {

  // 1. Multiverse Interactive Particle Vortex Canvas
  const canvas = document.getElementById("multiverse-canvas");
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let primaryColor = "#e23636";
  let secondaryColor = "#fbbf24";
  const mouse = { x: width / 2, y: height / 2, active: false };

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  const particles = [];
  const PARTICLE_COUNT = 75;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2,
    });
  }

  function renderCanvas() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse Gravitational Repulsion
      if (mouse.active) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          const force = (1 - dist / 120) * 1.5;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      // Draw Particle
      ctx.fillStyle = primaryColor;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Draw Energy Filaments
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const d = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (d < 90) {
          ctx.strokeStyle = primaryColor;
          ctx.globalAlpha = (1 - d / 90) * 0.15;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(renderCanvas);
  }
  renderCanvas();

  // 2. Stark HUD Expanding Reticle Cursor
  const cursor = document.getElementById("custom-cursor");
  const cursorContent = document.getElementById("cursor-content");
  const cursorFeatureText = document.getElementById("cursor-feature-text");
  const cursorTag = document.getElementById("cursor-tag");
  const cursorTagName = document.getElementById("cursor-tag-name");

  window.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    }
    if (cursorTag) {
      cursorTag.style.left = e.clientX + 22 + "px";
      cursorTag.style.top = e.clientY - 36 + "px";
    }
  });

  document.addEventListener("mouseover", (e) => {
    const featEl = e.target.closest("[data-feature]");
    if (featEl) {
      const featName = featEl.getAttribute("data-feature");
      const color = featEl.getAttribute("data-feature-color") || "#00f0ff";

      cursor.style.width = "88px";
      cursor.style.height = "88px";
      cursor.style.backgroundColor = "rgba(4, 8, 20, 0.85)";
      cursor.style.borderColor = color;
      cursor.style.borderWidth = "2px";
      cursor.style.boxShadow = `0 0 25px ${color}60, inset 0 0 15px ${color}30`;

      cursorContent.classList.remove("hidden");
      cursorContent.classList.add("flex");
      cursorFeatureText.innerText = featName;
      cursorFeatureText.style.color = color;

      cursorTag.classList.remove("hidden");
      cursorTag.classList.add("flex");
      cursorTagName.innerText = featName;
      cursorTag.style.borderColor = color;
    } else {
      const btn = e.target.closest("button, a, select, input");
      if (btn) {
        cursor.style.width = "48px";
        cursor.style.height = "48px";
        cursor.style.backgroundColor = "rgba(226, 54, 54, 0.25)";
        cursor.style.borderColor = "rgba(251, 191, 36, 0.9)";
        cursor.style.borderWidth = "1.5px";
        cursor.style.boxShadow = "0 0 15px rgba(251, 191, 36, 0.4)";
      } else {
        cursor.style.width = "16px";
        cursor.style.height = "16px";
        cursor.style.backgroundColor = "rgba(226, 54, 54, 0.9)";
        cursor.style.borderColor = "rgba(255, 255, 255, 0.6)";
        cursor.style.borderWidth = "1px";
        cursor.style.boxShadow = "0 0 10px rgba(226, 54, 54, 0.6)";
      }
      cursorContent.classList.add("hidden");
      cursorContent.classList.remove("flex");
      cursorTag.classList.add("hidden");
      cursorTag.classList.remove("flex");
    }
  });

  // 3. Countdown Timer to Bennett University Event
  const targetDate = new Date("2026-10-16T09:00:00+05:30").getTime();
  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff > 0) {
      document.getElementById("cd-days").innerText = String(
        Math.floor(diff / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      document.getElementById("cd-hours").innerText = String(
        Math.floor((diff / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      document.getElementById("cd-minutes").innerText = String(
        Math.floor((diff / 1000 / 60) % 60)
      ).padStart(2, "0");
      document.getElementById("cd-seconds").innerText = String(
        Math.floor((diff / 1000) % 60)
      ).padStart(2, "0");
    }
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // 4. Hero Factions Rendering & Protocol Switching
  const factionBtns = document.getElementById("faction-buttons-container");
  if (factionBtns && typeof FACTIONS !== "undefined") {
    FACTIONS.forEach((f, idx) => {
      const btn = document.createElement("button");
      btn.className = `flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
        idx === 0
          ? "bg-white/10 text-white shadow-xl scale-105 border-red-500"
          : "bg-[#0a0e1a] text-zinc-400 border-white/10 hover:text-white"
      }`;
      btn.setAttribute("data-feature", f.alias.toUpperCase());
      btn.setAttribute("data-feature-color", f.color);
      btn.innerHTML = `<span style="color: ${f.color}">●</span> <span>${f.name}</span>`;
      btn.onclick = () => selectFaction(f, btn);
      factionBtns.appendChild(btn);
    });

    function selectFaction(f, activeBtn) {
      window.soundFX?.playClick(650);
      primaryColor = f.color;
      secondaryColor = f.secondary;

      document.querySelectorAll("#faction-buttons-container button").forEach((b) => {
        b.className =
          "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase transition-all cursor-pointer bg-[#0a0e1a] text-zinc-400 border-white/10 hover:text-white";
        b.style.borderColor = "";
      });
      activeBtn.className =
        "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase transition-all cursor-pointer bg-white/10 text-white shadow-xl scale-105";
      activeBtn.style.borderColor = f.color;

      const dossier = document.getElementById("active-faction-dossier");
      if (dossier) {
        dossier.style.borderColor = f.color;
        dossier.style.boxShadow = `0 0 35px ${f.color}50`;
      }

      document.getElementById("faction-alias").innerText = f.alias;
      document.getElementById("faction-alias").style.color = f.color;
      document.getElementById("faction-name").innerText = f.name;
      document.getElementById("faction-motto").innerText = `"${f.motto}"`;
      document.getElementById("faction-domain").innerText = f.domain;
      document.getElementById("faction-desc").innerText = f.desc;

      const cta = document.getElementById("faction-cta");
      if (cta) {
        cta.style.backgroundColor = f.color;
        cta.innerText = `CLAIM PASS AS ${f.name.toUpperCase()}`;
      }

      const iconBox = document.getElementById("faction-icon-box");
      if (iconBox) {
        iconBox.style.borderColor = f.color;
        iconBox.style.backgroundColor = `${f.color}20`;
        iconBox.style.color = f.color;
      }

      const techContainer = document.getElementById("faction-tech");
      if (techContainer) {
        techContainer.innerHTML = "";
        f.tech.forEach((t) => {
          const span = document.createElement("span");
          span.className =
            "px-3 py-1 rounded-md text-xs font-mono bg-black/60 border border-white/10 text-zinc-200";
          span.innerText = `#${t}`;
          techContainer.appendChild(span);
        });
      }
    }

    if (factionBtns.children.length > 0) {
      selectFaction(FACTIONS[0], factionBtns.children[0]);
    }
  }

  // 5. The 6 Infinity Stone Tracks Rendering & Modal
  const tracksGrid = document.getElementById("tracks-grid");
  if (tracksGrid && typeof TRACKS !== "undefined") {
    TRACKS.forEach((t) => {
      const card = document.createElement("div");
      card.className =
        "glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:-translate-y-1.5 transition-all cursor-pointer flex flex-col justify-between";
      card.setAttribute("data-feature", t.stone.toUpperCase());
      card.setAttribute("data-feature-color", t.color);
      card.style.borderColor = `${t.color}30`;
      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded" style="background: ${t.color}20; color: ${t.color}">● ${t.stone}</span>
            <span class="text-xs font-mono font-bold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">BOUNTY ${t.bounty}</span>
          </div>
          <div class="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">${t.domain}</div>
          <h3 class="text-lg font-bold text-white mb-2">${t.title}</h3>
          <p class="text-zinc-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">${t.desc}</p>
        </div>
        <div>
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${t.tech
              .map(
                (tc) =>
                  `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-zinc-300 border border-white/5">${tc}</span>`
              )
              .join("")}
          </div>
          <div class="pt-3 border-t border-white/5 text-xs font-mono text-cyan-400 flex justify-between items-center">
            <span>VIEW PROBLEM STATEMENTS</span>
            <span>→</span>
          </div>
        </div>
      `;
      card.onclick = () => openModal(t);
      tracksGrid.appendChild(card);
    });
  }

  window.openModal = function (t) {
    window.soundFX?.playClick(900);
    const modal = document.getElementById("track-modal");
    const card = document.getElementById("track-modal-card");
    if (!modal || !card) return;

    card.style.borderColor = t.color;
    card.style.boxShadow = `0 0 35px ${t.color}50`;

    document.getElementById("modal-stone-tag").innerText = `${t.stone} PROTOCOL`;
    document.getElementById("modal-stone-tag").style.backgroundColor = `${t.color}20`;
    document.getElementById("modal-stone-tag").style.color = t.color;
    document.getElementById("modal-title").innerText = t.title;
    document.getElementById("modal-bounty").innerText = `TRACK BOUNTY: ${t.bounty}`;
    document.getElementById("modal-desc").innerText = t.desc;

    document.getElementById("modal-problems").innerHTML = t.problems
      .map(
        (p) => `
      <div class="flex items-start gap-2.5 p-3 rounded-xl bg-black/60 border border-white/10 text-xs text-zinc-200 font-mono">
        <span style="color: ${t.color}">✓</span>
        <span>${p}</span>
      </div>
    `
      )
      .join("");

    document.getElementById("modal-tech").innerHTML = t.tech
      .map(
        (tc) => `
      <span class="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-white">#${tc}</span>
    `
      )
      .join("");

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  };

  window.closeModal = function () {
    const modal = document.getElementById("track-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  };

  // 6. TVA Sacred Timeline Rendering & Navigation
  const timelineTabs = document.getElementById("timeline-tabs");
  if (timelineTabs && typeof TIMELINE_DATA !== "undefined") {
    TIMELINE_DATA.forEach((item, idx) => {
      const tab = document.createElement("button");
      tab.className = `p-3 rounded-xl border text-left min-w-[190px] font-mono cursor-pointer transition-all ${
        idx === 0
          ? "bg-amber-950/40 border-amber-400 text-white"
          : "bg-[#0a0e1a] border-white/10 text-zinc-400"
      }`;
      tab.setAttribute("data-feature", item.codename);
      tab.setAttribute("data-feature-color", "#fbbf24");
      tab.innerHTML = `
        <div class="text-[10px] font-bold text-amber-400">${item.phase}</div>
        <div class="text-xs font-bold text-white truncate uppercase">${item.codename}</div>
        <div class="text-[9px] text-zinc-500 mt-1">${item.date}</div>
      `;
      tab.onclick = () => selectTimelinePhase(item, tab);
      timelineTabs.appendChild(tab);
    });

    function selectTimelinePhase(item, tab) {
      window.soundFX?.playClick(720);
      document.querySelectorAll("#timeline-tabs button").forEach((b) => {
        b.className =
          "p-3 rounded-xl border text-left min-w-[190px] font-mono cursor-pointer transition-all bg-[#0a0e1a] border-white/10 text-zinc-400";
      });
      tab.className =
        "p-3 rounded-xl border text-left min-w-[190px] font-mono cursor-pointer transition-all bg-amber-950/40 border-amber-400 text-white";

      const detail = document.getElementById("timeline-detail-card");
      if (detail) {
        detail.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono">
            <div class="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pr-6">
              <span class="inline-block px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-black mb-2">${item.phase} // ${item.codename}</span>
              <h3 class="text-2xl font-black text-white uppercase mb-4">${item.title}</h3>
              <div class="text-xs text-zinc-400 space-y-1.5">
                <div><strong class="text-white">DATE:</strong> ${item.date}</div>
                <div><strong class="text-white">TIME:</strong> ${item.time}</div>
                <div><strong class="text-white">LOCATION:</strong> ${item.location}</div>
              </div>
            </div>
            <div class="lg:col-span-8 flex flex-col justify-center">
              <div class="text-xs uppercase text-zinc-500 font-bold mb-2">MISSION DIRECTIVE</div>
              <p class="text-zinc-200 text-sm leading-relaxed">${item.desc}</p>
            </div>
          </div>
        `;
      }
    }

    if (timelineTabs.children.length > 0) {
      selectTimelinePhase(TIMELINE_DATA[0], timelineTabs.children[0]);
    }
  }

  // 7. Stark Treasury Prizes Rendering
  const prizesGrid = document.getElementById("prizes-grid");
  if (prizesGrid && typeof PRIZES !== "undefined") {
    PRIZES.forEach((pz, idx) => {
      const card = document.createElement("div");
      card.className = `glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-white/30 hover:-translate-y-1.5 transition-all cursor-default ${
        idx === 0 ? "border-amber-400 bg-amber-950/20" : ""
      }`;
      card.setAttribute("data-feature", pz.amount);
      card.setAttribute("data-feature-color", pz.color);
      card.innerHTML = `
        <div>
          <div class="flex justify-between items-center mb-3">
            <span class="text-xs font-mono font-bold uppercase text-amber-400">${pz.rank}</span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded uppercase" style="background: ${pz.color}20; color: ${pz.color}">● ${pz.stone}</span>
          </div>
          <h3 class="text-xl font-black text-white uppercase mb-2">${pz.title}</h3>
          <div class="text-3xl sm:text-4xl font-mono font-black mb-4" style="color: ${pz.color}">${pz.amount}</div>
          <div class="space-y-2 mb-4">
            ${pz.perks
              .map(
                (pk) =>
                  `<div class="text-xs text-zinc-300 flex items-center gap-2 font-mono"><span style="color:${pz.color}">✓</span> <span>${pk}</span></div>`
              )
              .join("")}
          </div>
        </div>
      `;
      prizesGrid.appendChild(card);
    });
  }

  // 8. S.H.I.E.L.D. Clearance Badge Interactive Generator
  const avatarSelector = document.getElementById("avatar-selector");
  if (avatarSelector && typeof AVATARS !== "undefined") {
    AVATARS.forEach((av, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `flex flex-col items-center p-2 rounded-xl border transition-all cursor-pointer ${
        idx === 0 ? "bg-white/15 border-red-500 scale-105" : "bg-black/40 border-white/10"
      }`;
      btn.setAttribute("data-feature", av.name.toUpperCase());
      btn.setAttribute("data-feature-color", av.color);
      btn.innerHTML = `
        <div class="h-8 w-8 rounded-full flex items-center justify-center font-black text-xs text-white mb-1 shadow" style="background:${av.color}">${av.initials}</div>
        <span class="text-[10px] font-mono text-zinc-200 truncate w-full text-center">${av.name}</span>
      `;
      btn.onclick = () => {
        window.soundFX?.playClick(750);
        document
          .querySelectorAll("#avatar-selector button")
          .forEach((b) => (b.className = "flex flex-col items-center p-2 rounded-xl border bg-black/40 border-white/10"));
        btn.className = "flex flex-col items-center p-2 rounded-xl border bg-white/15 border-red-500 scale-105";

        const avatarBox = document.getElementById("badge-avatar-box");
        if (avatarBox) {
          avatarBox.style.borderColor = av.color;
          avatarBox.style.backgroundColor = `${av.color}25`;
          document.getElementById("badge-avatar-initials").innerText = av.initials;
        }
      };
      avatarSelector.appendChild(btn);
    });
  }

  // Live Input Bindings
  const inputName = document.getElementById("input-name");
  if (inputName) {
    inputName.addEventListener("input", (e) => {
      document.getElementById("badge-name-display").innerText =
        e.target.value.toUpperCase() || "UNKNOWN OPERATIVE";
    });
  }

  const inputUniv = document.getElementById("input-univ");
  if (inputUniv) {
    inputUniv.addEventListener("input", (e) => {
      document.getElementById("badge-univ-display").innerText =
        e.target.value || "Bennett University";
    });
  }

  const inputRole = document.getElementById("input-role");
  if (inputRole) {
    inputRole.addEventListener("change", (e) => {
      document.getElementById("badge-role-display").innerText = `Track: ${e.target.value}`;
    });
  }

  const inputGithub = document.getElementById("input-github");
  if (inputGithub) {
    inputGithub.addEventListener("input", (e) => {
      document.getElementById("badge-github-display").innerText = `@${
        e.target.value || "hacker"
      }`;
    });
  }

  const badgeForm = document.getElementById("badge-form");
  if (badgeForm) {
    badgeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.soundFX?.playArcCharge();
      if (typeof confetti === "function") {
        confetti({
          particleCount: 110,
          spread: 75,
          origin: { y: 0.6 },
          colors: ["#e23636", "#fbbf24", "#00f0ff", "#10b981", "#a855f7"],
        });
      }
      const successAlert = document.getElementById("badge-success-alert");
      if (successAlert) {
        successAlert.classList.remove("hidden");
      }
    });
  }

  // 9. Avengers Council Mentors Rendering
  const councilGrid = document.getElementById("council-grid");
  if (councilGrid && typeof COUNCIL !== "undefined") {
    COUNCIL.forEach((c) => {
      const card = document.createElement("div");
      card.className =
        "glass-panel rounded-2xl p-5 border border-white/10 hover:border-red-500/40 transition-all font-mono";
      card.setAttribute("data-feature", c.codename.toUpperCase());
      card.setAttribute("data-feature-color", "#e23636");
      card.innerHTML = `
        <div class="h-10 w-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center font-bold text-red-400 mb-3">#AV</div>
        <div class="text-[10px] text-amber-400 font-bold uppercase tracking-wider">${c.codename}</div>
        <h4 class="text-base font-black text-white uppercase">${c.name}</h4>
        <div class="text-xs text-zinc-300 font-sans mt-0.5">${c.role}</div>
        <div class="text-[10px] text-zinc-500 mb-3">${c.aff}</div>
        <div class="p-2.5 rounded bg-black/60 border border-white/5 text-[11px] text-zinc-300 font-sans">
          <span class="text-[9px] font-mono text-amber-400 font-bold block mb-0.5">SUPERPOWER</span>
          ${c.power}
        </div>
      `;
      councilGrid.appendChild(card);
    });
  }

  // 10. Sponsors & Allies Grid Rendering
  const sponsorsGrid = document.getElementById("sponsors-grid");
  if (sponsorsGrid && typeof SPONSORS !== "undefined") {
    SPONSORS.forEach((s) => {
      const el = document.createElement("div");
      el.className =
        "glass-panel p-4 rounded-xl text-center border border-white/10 hover:border-red-500/30 transition-all";
      el.innerHTML = `
        <div class="text-[9px] text-zinc-500 uppercase">${s.tier}</div>
        <div class="text-sm font-black text-white uppercase">${s.name}</div>
      `;
      sponsorsGrid.appendChild(el);
    });
  }

  // 11. J.A.R.V.I.S. FAQs Rendering & Accordion
  const faqContainer = document.getElementById("faq-container");
  if (faqContainer && typeof FAQS !== "undefined") {
    FAQS.forEach((f, idx) => {
      const el = document.createElement("div");
      el.className = "rounded-2xl border border-white/10 glass-panel overflow-hidden transition-all";
      el.setAttribute("data-feature", "JARVIS QUERY");
      el.setAttribute("data-feature-color", "#00f0ff");
      el.innerHTML = `
        <button class="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer" onclick="toggleFaq(${idx})">
          <div class="flex items-center gap-2">
            <span class="font-mono text-cyan-400 text-xs font-bold">> QUERY:</span>
            <span class="font-bold text-sm text-white">${f.q}</span>
          </div>
          <span id="faq-icon-${idx}" class="text-cyan-400 font-mono text-lg">↓</span>
        </button>
        <div id="faq-ans-${idx}" class="hidden px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 font-mono">
          <div class="p-3.5 rounded-xl bg-black/60 border border-white/5 text-zinc-200">
            <span class="text-cyan-400 font-bold block mb-1">J.A.R.V.I.S. RESPONSE:</span>
            ${f.a}
          </div>
        </div>
      `;
      faqContainer.appendChild(el);
    });
  }

  window.toggleFaq = function (idx) {
    window.soundFX?.playClick(800);
    const ans = document.getElementById(`faq-ans-${idx}`);
    const icon = document.getElementById(`faq-icon-${idx}`);
    if (ans.classList.contains("hidden")) {
      ans.classList.remove("hidden");
      icon.innerText = "↑";
    } else {
      ans.classList.add("hidden");
      icon.innerText = "↓";
    }
  };

  // 12. Thanos Snap Easter Egg & Time Stone Reverse
  const gauntletBtn = document.getElementById("gauntlet-btn");
  const snapBanner = document.getElementById("snap-banner");
  const reverseBtn = document.getElementById("reverse-snap-btn");
  let isSnapped = false;

  if (gauntletBtn) {
    gauntletBtn.onclick = () => {
      if (isSnapped) {
        reverseSnap();
      } else {
        window.soundFX?.playThanosSnap();
        const targets = document.querySelectorAll(".glass-panel, .glass-panel-elevated");
        targets.forEach((el, i) => {
          if (i % 2 === 0) el.classList.add("dusted-element");
        });
        isSnapped = true;
        if (snapBanner) {
          snapBanner.classList.remove("hidden");
          snapBanner.classList.add("flex");
        }
        gauntletBtn.classList.add("border-emerald-400", "animate-pulse");
        document.getElementById("snap-tooltip").innerText = "Time Stone: Restore Multiverse";
      }
    };
  }

  if (reverseBtn) {
    reverseBtn.onclick = reverseSnap;
  }

  function reverseSnap() {
    window.soundFX?.playClick(990);
    document.querySelectorAll(".dusted-element").forEach((el) => {
      el.classList.remove("dusted-element");
      el.classList.add("ring-2", "ring-emerald-400");
      setTimeout(() => el.classList.remove("ring-2", "ring-emerald-400"), 1200);
    });
    isSnapped = false;
    if (snapBanner) {
      snapBanner.classList.add("hidden");
      snapBanner.classList.remove("flex");
    }
    gauntletBtn?.classList.remove("border-emerald-400", "animate-pulse");
    const tooltip = document.getElementById("snap-tooltip");
    if (tooltip) tooltip.innerText = "Thanos Snap // Disintegrate 50%";
  }

  // 13. Audio Navigation Controls
  const humBtn = document.getElementById("cosmic-hum-btn");
  if (humBtn) {
    humBtn.onclick = () => {
      window.soundFX?.playClick(880);
      const isPlaying = window.soundFX?.toggleAmbientDrone();
      document.getElementById("hum-text").innerText = isPlaying
        ? "COSMIC HUM: ON"
        : "COSMIC HUM";
      humBtn.classList.toggle("border-cyan-400", isPlaying);
      humBtn.classList.toggle("text-cyan-300", isPlaying);
    };
  }

  const muteBtn = document.getElementById("mute-btn");
  if (muteBtn) {
    muteBtn.onclick = () => {
      if (window.soundFX) {
        window.soundFX.isMuted = !window.soundFX.isMuted;
        muteBtn.innerHTML = window.soundFX.isMuted
          ? '<i data-lucide="volume-x" class="h-4 w-4 text-red-400"></i>'
          : '<i data-lucide="volume-2" class="h-4 w-4 text-emerald-400"></i>';
        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }
      }
    };
  }

  // 14. Live Bennett University IST Digital Clock
  function updateClock() {
    const clockEl = document.getElementById("footer-ist-clock");
    if (clockEl) {
      const now = new Date();
      clockEl.innerText =
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: false,
        }) + " IST";
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 15. Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
