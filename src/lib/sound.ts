// Web Audio API Cinematic Synthesizer: UI SFX & Continuous Marvel Background Music
// 100% Client-side, zero latency, no external mp3 assets needed.

class SoundController {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false;
  public isMusicPlaying: boolean = false;

  // BGM Nodes & Timers
  private musicMasterGain: GainNode | null = null;
  private droneOsc: OscillatorNode | null = null;
  private droneGain: GainNode | null = null;
  private chordOscs: OscillatorNode[] = [];
  private chordGains: GainNode[] = [];
  private filterNode: BiquadFilterNode | null = null;
  private chordTimer: ReturnType<typeof setInterval> | null = null;
  private pulseTimer: ReturnType<typeof setInterval> | null = null;
  private chordIndex: number = 0;

  // Heroic Marvel Multiverse Cinematic Progression (Dm -> Bb -> C -> Am)
  private readonly CHORDS = [
    [146.83, 174.61, 220.0, 293.66], // Dm (D3, F3, A3, D4)
    [116.54, 146.83, 174.61, 233.08], // Bb (Bb2, D3, F3, Bb3)
    [130.81, 164.81, 196.0, 261.63], // C  (C3, E3, G3, C4)
    [110.0, 130.81, 164.81, 220.0], // Am (A2, C3, E3, A3)
  ];

  public init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  // ==========================================
  // 1. CINEMATIC MARVEL BACKGROUND MUSIC (BGM)
  // ==========================================

  public toggleBgm(): boolean {
    this.init();
    if (this.isMusicPlaying) {
      this.stopBgm();
      this.enabled = false;
      return false;
    } else {
      this.enabled = true;
      this.startBgm();
      return true;
    }
  }

  public startBgm(): boolean {
    this.init();
    if (!this.ctx) return false;
    if (this.isMusicPlaying) return true;

    try {
      const ctx = this.ctx;
      this.isMusicPlaying = true;
      this.enabled = true;

      // Master BGM Gain
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.001, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 1.5);

      // Low-pass warmth filter for cinematic analog sound
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(850, ctx.currentTime);
      filter.Q.setValueAtTime(2.0, ctx.currentTime);

      master.connect(filter);
      filter.connect(ctx.destination);
      this.musicMasterGain = master;
      this.filterNode = filter;

      // 1. Cosmic Sub-Bass Drone (Low D 73.4Hz + Sub 36.7Hz)
      const drone = ctx.createOscillator();
      const droneGain = ctx.createGain();
      drone.type = "sine";
      drone.frequency.setValueAtTime(73.42, ctx.currentTime);
      droneGain.gain.setValueAtTime(0.04, ctx.currentTime);

      drone.connect(droneGain);
      droneGain.connect(master);
      drone.start();
      this.droneOsc = drone;
      this.droneGain = droneGain;

      // 2. Multi-Voice Cinematic Chord Synthesizer (4 Oscillators)
      this.chordOscs = [];
      this.chordGains = [];
      this.chordIndex = 0;

      const currentChord = this.CHORDS[0];
      for (let i = 0; i < 4; i++) {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();

        // Warm saw/triangle hybrid feel
        osc.type = i % 2 === 0 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(currentChord[i], ctx.currentTime);

        g.gain.setValueAtTime(0.025, ctx.currentTime);
        osc.connect(g);
        g.connect(master);
        osc.start();

        this.chordOscs.push(osc);
        this.chordGains.push(g);
      }

      // 3. Smooth Chord Transitions Every 4.5 Seconds
      if (this.chordTimer) clearInterval(this.chordTimer);
      this.chordTimer = setInterval(() => {
        if (!this.isMusicPlaying || !this.ctx) return;
        this.chordIndex = (this.chordIndex + 1) % this.CHORDS.length;
        const nextChord = this.CHORDS[this.chordIndex];
        const now = this.ctx.currentTime;

        this.chordOscs.forEach((osc, i) => {
          osc.frequency.exponentialRampToValueAtTime(nextChord[i], now + 2.0);
        });

        // Filter breathing sweep
        if (this.filterNode) {
          const targetFreq = this.chordIndex % 2 === 0 ? 950 : 700;
          this.filterNode.frequency.linearRampToValueAtTime(targetFreq, now + 2.0);
        }
      }, 4500);

      // 4. Subtle Arc Reactor Heartbeat Pulse Every 2 Seconds
      if (this.pulseTimer) clearInterval(this.pulseTimer);
      this.pulseTimer = setInterval(() => {
        if (!this.isMusicPlaying || !this.ctx) return;
        try {
          const now = this.ctx.currentTime;
          const pulseOsc = this.ctx.createOscillator();
          const pulseGain = this.ctx.createGain();

          pulseOsc.type = "sine";
          pulseOsc.frequency.setValueAtTime(55, now);
          pulseGain.gain.setValueAtTime(0.03, now);
          pulseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

          pulseOsc.connect(pulseGain);
          pulseGain.connect(master);
          pulseOsc.start(now);
          pulseOsc.stop(now + 0.35);
        } catch {
          // Ignore
        }
      }, 2000);

      this.playPowerUp();
      return true;
    } catch {
      return false;
    }
  }

  public stopBgm(): boolean {
    if (!this.isMusicPlaying) return false;
    try {
      if (this.chordTimer) clearInterval(this.chordTimer);
      if (this.pulseTimer) clearInterval(this.pulseTimer);
      this.chordTimer = null;
      this.pulseTimer = null;

      if (this.ctx && this.musicMasterGain) {
        this.musicMasterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
      }

      setTimeout(() => {
        try {
          this.droneOsc?.stop();
          this.droneOsc?.disconnect();
          this.chordOscs.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {}
          });
          this.chordGains.forEach((g) => {
            try {
              g.disconnect();
            } catch {}
          });
          this.musicMasterGain?.disconnect();
          this.filterNode?.disconnect();
        } catch {}
      }, 600);

      this.isMusicPlaying = false;
      return true;
    } catch {
      this.isMusicPlaying = false;
      return false;
    }
  }

  public toggle(): boolean {
    return this.toggleBgm();
  }

  // ==========================================
  // 2. TACTILE UI SOUND EFFECTS (MICRO-SFX)
  // ==========================================

  public playClick(freq = 900) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch {
      // Ignore
    }
  }

  public playBeep(freq = 440, duration = 0.08, type: OscillatorType = "sine") {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Ignore
    }
  }

  public playHover() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.02);

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.02);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.02);
    } catch {
      // Ignore
    }
  }

  public playPowerUp() {
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.22);

      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.06, this.ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch {
      // Ignore
    }
  }

  public playConfirm() {
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [587.33, 880, 1174.66].forEach((f, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now + i * 0.06);

        gain.gain.setValueAtTime(0.04, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.14);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.14);
      });
    } catch {
      // Ignore
    }
  }
}

export const soundFx = new SoundController();
