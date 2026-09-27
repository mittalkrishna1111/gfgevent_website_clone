/**
 * ==========================================================================
 * AVENGERS: INITIATIVE '26 // Multiverse of Code
 * GeeksforGeeks Student Chapter — Bennett University
 * Web Audio API Tactile Sound Engine (Zero External MP3 Dependencies)
 * ==========================================================================
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ambientOsc = null;
    this.ambientGain = null;
    this.isAmbientPlaying = false;
  }

  /**
   * Lazy-initializes and safely resumes the Web Audio context
   */
  getCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioClass = window.AudioContext || window.webkitAudioContext;
      if (AudioClass) {
        this.ctx = new AudioClass();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  /**
   * Tactile Stark HUD Click / UI Chirp
   * @param {number} pitch - Base frequency in Hz
   */
  playClick(pitch = 880) {
    if (this.isMuted) return;
    const ctx = this.getCtx();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(pitch, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(pitch * 1.5, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // AudioContext error handling
    }
  }

  /**
   * Iron Man Repulsor Blast Acoustic FX
   * Descending triangle frequency swoop
   */
  playRepulsorBlast() {
    if (this.isMuted) return;
    const ctx = this.getCtx();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(1500, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {
      // AudioContext error handling
    }
  }

  /**
   * Arc Reactor Charging Surge FX
   * Ascending sawtooth frequency sweep with crescendo
   */
  playArcCharge() {
    if (this.isMuted) return;
    const ctx = this.getCtx();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) {
      // AudioContext error handling
    }
  }

  /**
   * Thanos Gauntlet Snap Acoustic Transient
   * Synthesized white noise buffer passed through a high-Q bandpass filter
   */
  playThanosSnap() {
    if (this.isMuted) return;
    const ctx = this.getCtx();
    if (!ctx) return;

    try {
      const bufferSize = ctx.sampleRate * 0.1;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.1));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(3200, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.4, ctx.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start();
    } catch (e) {
      // AudioContext error handling
    }
  }

  /**
   * Toggles Cosmic Multiverse Background Ambient Drone (55Hz Sine Wave)
   * @returns {boolean} True if now playing, false if stopped
   */
  toggleAmbientDrone() {
    const ctx = this.getCtx();
    if (!ctx) return false;

    if (this.isAmbientPlaying) {
      if (this.ambientGain) {
        this.ambientGain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      }
      setTimeout(() => {
        try {
          this.ambientOsc?.stop();
          this.ambientOsc?.disconnect();
          this.isAmbientPlaying = false;
        } catch (e) {}
      }, 600);
      return false;
    } else {
      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(55, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(this.isMuted ? 0 : 0.035, ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        this.ambientOsc = osc;
        this.ambientGain = gain;
        this.isAmbientPlaying = true;
        return true;
      } catch (e) {
        return false;
      }
    }
  }
}

// Global Sound Engine Singleton Instance
const soundFX = new SoundEngine();
window.soundFX = soundFX;
