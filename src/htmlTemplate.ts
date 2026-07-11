export const grokHtmlTemplate = `<!-- 
  CHANGE THIS: Bonding curve link: Replace "https://hood.fun/grok" with your actual NOXA Fun / hood.fun bonding curve URL
  CHANGE THIS: Contract address: Replace "0xGROK694208888888888888888888888888888888" with your deployed contract address
  CHANGE THIS: Twitter link: Replace "https://x.com/GrokInHood" with your community Twitter/X account
-->
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$GROK on Robinhood Chain | Sentient Meme Engine</title>
  
  <!-- Tailwind CSS v4 Browser CDN -->
  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
  
  <!-- Google Fonts: Space Grotesk (Display) & Inter (Body) & JetBrains Mono (Tech) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <!-- Custom Styles for Themes, Animations, and Neon Glows -->
  <style type="text/tailwindcss">
    @theme {
      --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
      --font-display: "Space Grotesk", sans-serif;
      --font-mono: "JetBrains Mono", monospace;
      --color-cyber-dark: #070714;
      --color-cyber-deep: #0f0f23;
      --color-cyber-card: #161632;
      --color-cyber-cyan: #00f0ff;
      --color-cyber-magenta: #ff007a;
      --color-cyber-purple: #9d4edd;
    }

    /* Custom utilities for neon effects */
    .glow-cyan {
      text-shadow: 0 0 10px rgba(0, 240, 255, 0.6), 0 0 20px rgba(0, 240, 255, 0.2);
    }
    .glow-purple {
      text-shadow: 0 0 10px rgba(157, 78, 221, 0.6), 0 0 20px rgba(157, 78, 221, 0.2);
    }
    .glow-text-green {
      text-shadow: 0 0 10px rgba(0, 255, 128, 0.5);
    }
    .border-glow-cyan {
      box-shadow: 0 0 15px rgba(0, 240, 255, 0.15);
      border-color: rgba(0, 240, 255, 0.4);
    }
    .border-glow-purple {
      box-shadow: 0 0 15px rgba(157, 78, 221, 0.15);
      border-color: rgba(157, 78, 221, 0.4);
    }
    .bg-cyber-grid {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    }
    .bg-neon-radial {
      background: radial-gradient(circle at 10% 20%, rgba(157, 78, 221, 0.15) 0%, transparent 45%),
                  radial-gradient(circle at 90% 80%, rgba(0, 240, 255, 0.12) 0%, transparent 45%);
    }

    /* Keyframes for subtle animations */
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.8; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.03); }
    }
    .animate-pulse-slow {
      animation: pulse-slow 4s infinite ease-in-out;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 6s infinite ease-in-out;
    }

    @keyframes scanline {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
    .scanline {
      animation: scanline 8s infinite linear;
    }
  </style>
</head>
<body class="bg-cyber-dark text-slate-100 font-sans antialiased overflow-x-hidden bg-cyber-grid bg-neon-radial">

  <!-- Floating Glow Accents -->
  <div class="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cyber-purple/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
  <div class="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-cyber-cyan/8 rounded-full blur-[150px] pointer-events-none z-0"></div>

  <!-- STICKY NAVBAR -->
  <header id="navbar" class="sticky top-0 z-50 w-full bg-cyber-dark/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <!-- Logo -->
      <a href="#hero" class="flex items-center gap-2.5 group">
        <div class="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-cyber-purple to-cyber-cyan p-[1px] shadow-lg group-hover:shadow-cyber-cyan/30 transition-all duration-300">
          <div class="w-full h-full bg-cyber-dark rounded-[7px] flex items-center justify-center">
            <i data-lucide="bot" class="w-5 h-5 text-cyber-cyan group-hover:rotate-12 transition-transform duration-300"></i>
          </div>
          <div class="absolute -inset-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
        </div>
        <span class="font-display font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyber-cyan">
          $GROK
        </span>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#about" class="text-slate-300 hover:text-cyber-cyan font-medium tracking-wide transition-colors duration-200">About</a>
        <a href="#buy" class="text-slate-300 hover:text-cyber-cyan font-medium tracking-wide transition-colors duration-200">How to Buy</a>
        <a href="#tokenomics" class="text-slate-300 hover:text-cyber-cyan font-medium tracking-wide transition-colors duration-200">Tokenomics</a>
        <a href="#roadmap" class="text-slate-300 hover:text-cyber-cyan font-medium tracking-wide transition-colors duration-200">Roadmap</a>
        <a href="#community" class="text-slate-300 hover:text-cyber-cyan font-medium tracking-wide transition-colors duration-200">Community</a>
      </nav>

      <!-- Desktop Socials & Action Buttons -->
      <div class="hidden lg:flex items-center gap-4">
        <div class="flex items-center gap-3 mr-2">
          <a href="https://x.com/GrokInHood" target="_blank" rel="noopener noreferrer" class="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all duration-200">
            <i data-lucide="twitter" class="w-4 h-4"></i>
          </a>
        </div>
        
        <a href="https://fun.noxa.fi/robinhood" target="_blank" rel="noopener noreferrer" class="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark font-display font-bold text-sm tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-cyber-purple/20">
          <span class="relative z-10 flex items-center gap-1.5">
            BUY $GROK <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyber-cyan transition-all duration-200">
        <i id="mobile-menu-icon" data-lucide="menu" class="w-6 h-6"></i>
      </button>

    </div>

    <!-- Mobile Nav Menu (Hidden by default) -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-white/5 bg-cyber-dark/95 backdrop-blur-lg w-full absolute top-20 left-0 py-6 px-4 flex flex-col gap-5 shadow-2xl">
      <a href="#about" class="text-slate-300 hover:text-cyber-cyan font-medium py-1 text-lg transition-colors duration-200">About</a>
      <a href="#buy" class="text-slate-300 hover:text-cyber-cyan font-medium py-1 text-lg transition-colors duration-200">How to Buy</a>
      <a href="#tokenomics" class="text-slate-300 hover:text-cyber-cyan font-medium py-1 text-lg transition-colors duration-200">Tokenomics</a>
      <a href="#roadmap" class="text-slate-300 hover:text-cyber-cyan font-medium py-1 text-lg transition-colors duration-200">Roadmap</a>
      <a href="#community" class="text-slate-300 hover:text-cyber-cyan font-medium py-1 text-lg transition-colors duration-200">Community</a>
      
      <div class="h-[1px] bg-white/5 my-2"></div>
      
      <div class="flex items-center gap-4">
        <a href="https://x.com/GrokInHood" target="_blank" rel="noopener noreferrer" class="w-full py-3 flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyber-cyan transition-all duration-200">
          <i data-lucide="twitter" class="w-4 h-4"></i> Twitter / X
        </a>
      </div>

      <a href="https://fun.noxa.fi/robinhood" target="_blank" rel="noopener noreferrer" class="w-full py-4 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark font-display font-bold text-center tracking-wider block transition-all duration-200">
        BUY $GROK NOW
      </a>
    </div>
  </header>

  <!-- 1. HERO SECTION -->
  <section id="hero" class="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Side: Copy/Content -->
        <div class="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          <!-- Live Chain Badge -->
          <div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-cyber-deep border border-cyber-cyan/30 shadow-lg shadow-cyber-cyan/5 hover:border-cyber-cyan/60 transition-all duration-300">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 glow-text-green"></span>
            </span>
            <span class="text-xs font-mono font-medium tracking-wider text-slate-200 uppercase">
              Now Live on Robinhood Chain
            </span>
          </div>

          <!-- Hero Main Headlines -->
          <h1 class="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
            Grok the Chain.<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-magenta">
              Grok the Future.
            </span>
          </h1>

          <p class="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
            $GROK has officially materialized on Robinhood Chain. The ultimate, sentient, humor-loaded AI meme token designed to turn the serious realm of finance into a wild cyber playground.
          </p>

          <!-- Core Call to Actions -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
            <a href="https://fun.noxa.fi/robinhood" target="_blank" rel="noopener noreferrer" class="relative group px-8 py-4 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark font-display font-bold tracking-wider hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 text-center shadow-xl shadow-cyber-purple/20">
              <span class="relative z-10 flex items-center justify-center gap-2 text-base">
                BUY $GROK <i data-lucide="sparkles" class="w-5 h-5"></i>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-xl blur-lg opacity-40 group-hover:opacity-75 transition duration-300 pointer-events-none"></div>
            </a>

            <a href="#curve" class="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyber-cyan/40 text-slate-200 font-display font-bold tracking-wider transition-all duration-200 text-center flex items-center justify-center gap-2">
              Bonding Curve Tracker <i data-lucide="trending-up" class="w-4 h-4"></i>
            </a>
          </div>

          <!-- Mini Quick-Stats / Highlights -->
          <div class="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 w-full max-w-lg mt-4">
            <div>
              <p class="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">Tax</p>
              <p class="font-display font-bold text-2xl text-cyber-cyan">0%</p>
            </div>
            <div>
              <p class="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">Presale</p>
              <p class="font-display font-bold text-2xl text-cyber-purple">None</p>
            </div>
            <div>
              <p class="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">Graduation</p>
              <p class="font-display font-bold text-2xl text-slate-100">100% Locked</p>
            </div>
          </div>

        </div>

        <!-- Right Side: Sentient Terminal / Interactive Mock Grok -->
        <div class="lg:col-span-5 relative">
          <div class="absolute -inset-1 bg-gradient-to-tr from-cyber-purple via-cyber-cyan to-cyber-purple rounded-2xl blur-xl opacity-20 animate-pulse-slow"></div>
          
          <div class="relative rounded-2xl bg-cyber-deep/90 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm">
            
            <!-- Terminal Header -->
            <div class="bg-[#0b0b1a] px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span class="font-mono text-xs text-slate-400 font-medium tracking-wider uppercase flex items-center gap-1.5">
                <i data-lucide="terminal" class="w-3.5 h-3.5 text-cyber-cyan"></i> grok_terminal_v1.0.sh
              </span>
              <span class="w-4"></span> <!-- spacer -->
            </div>

            <!-- Terminal Body -->
            <div class="p-6 font-mono text-sm leading-relaxed text-slate-300">
              
              <!-- System logs -->
              <div class="space-y-1.5 text-slate-400 text-xs mb-4">
                <p class="text-cyber-cyan"><span class="text-slate-600">&gt;</span> Initializing sentience matrices...</p>
                <p class="text-cyber-purple"><span class="text-slate-600">&gt;</span> Calibrating Robinhood Chain (Arbitrum L2) bridges...</p>
                <p class="text-emerald-400"><span class="text-slate-600">&gt;</span> STATUS: SENTIENT & HUMOR-LOADED [OK]</p>
              </div>

              <!-- Interactive prompt display -->
              <div class="bg-cyber-dark/60 rounded-lg p-4 border border-white/5 mb-4">
                <p class="text-xs text-slate-400 mb-2">Prompt Grok Core:</p>
                <div class="flex flex-wrap gap-2">
                  <button onclick="triggerGrokPrompt('why')" class="text-xs bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple hover:bg-cyber-purple/20 hover:border-cyber-purple/40 rounded px-2.5 py-1 transition-all duration-150">
                    Why Robinhood Chain?
                  </button>
                  <button onclick="triggerGrokPrompt('utility')" class="text-xs bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan hover:bg-cyber-cyan/20 hover:border-cyber-cyan/40 rounded px-2.5 py-1 transition-all duration-150">
                    Where is the utility?
                  </button>
                  <button onclick="triggerGrokPrompt('elon')" class="text-xs bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20 rounded px-2.5 py-1 transition-all duration-150">
                    Is Elon holding?
                  </button>
                </div>
              </div>

              <!-- Typing Output box -->
              <div class="relative bg-black/40 rounded-lg p-4 border border-white/5 min-h-[140px] flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-1.5 text-xs text-cyber-cyan mb-2">
                    <i data-lucide="bot" class="w-3.5 h-3.5"></i> GROK SENTIENT RESPONSE:
                  </div>
                  <p id="grok-response-text" class="text-slate-200 text-sm leading-relaxed">
                    Select a prompt above to challenge my intelligence (or complete lack thereof). Let's unlock the secrets of the meme universe.
                  </p>
                </div>
                <div class="text-right text-[10px] text-slate-500 mt-2">
                  Processing Time: <span id="grok-response-time">0.00ms</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- CONTRACT ADDRESS HIGHLIGHT BANNER -->
  <section class="relative py-4 bg-cyber-deep border-y border-white/5 z-10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <div class="w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-pulse"></div>
        <span class="font-mono text-xs font-bold tracking-widest text-slate-400 uppercase">
          Official Deployed Contract Address (Robinhood Chain)
        </span>
      </div>
      
      <!-- CA Copy bar -->
      <div class="flex items-center w-full md:w-auto max-w-xl bg-cyber-dark border border-white/10 rounded-lg p-1">
        <span class="font-mono text-xs text-slate-400 px-3 truncate select-all">
          0xGROK694208888888888888888888888888888888
        </span>
        <button onclick="copyContractAddress(this)" class="flex items-center gap-1.5 bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 border border-cyber-cyan/30 text-cyber-cyan hover:from-cyber-purple/30 hover:to-cyber-cyan/30 rounded-md py-1.5 px-3.5 font-display font-bold text-xs tracking-wider transition-all duration-150 cursor-pointer whitespace-nowrap">
          <i data-lucide="copy" class="w-3.5 h-3.5"></i> COPY CA
        </button>
      </div>
    </div>
  </section>

  <!-- 2. ABOUT / LORE SECTION -->
  <section id="about" class="relative py-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Side: Custom Generative-Style Cybernetic Visual -->
        <div class="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
          <div class="absolute w-72 h-72 bg-cyber-cyan/10 rounded-full blur-[80px]"></div>
          
          <!-- Cyber Brain/Robot Frame -->
          <div class="relative w-80 h-80 flex items-center justify-center animate-float">
            <!-- Glowing circles -->
            <div class="absolute inset-0 rounded-full border-2 border-dashed border-cyber-cyan/20 animate-[spin_60s_linear_infinite]"></div>
            <div class="absolute inset-4 rounded-full border border-dashed border-cyber-purple/30 animate-[spin_40s_linear_infinite_reverse]"></div>
            <div class="absolute inset-10 rounded-full bg-cyber-card/60 border border-white/10 flex items-center justify-center shadow-2xl">
              <!-- Animated Glowing Bot Eye -->
              <div class="relative w-28 h-28 rounded-full bg-cyber-dark border-2 border-cyber-cyan flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-cyber-cyan/10 to-transparent"></div>
                <i data-lucide="sparkles" class="w-12 h-12 text-cyber-cyan animate-pulse"></i>
                <!-- Scanline effect overlay -->
                <div class="absolute inset-0 w-full bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent scanline h-1/2 pointer-events-none"></div>
              </div>
            </div>
            
            <!-- Nodes orbiting -->
            <div class="absolute top-2 left-1/2 -translate-x-1/2 bg-cyber-cyan text-cyber-dark text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-lg shadow-cyber-cyan/20">SENTIENT</div>
            <div class="absolute bottom-6 right-2 bg-cyber-purple text-slate-100 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-lg shadow-cyber-purple/20">ROBINHOOD_L2</div>
          </div>
        </div>

        <!-- Right Side: The Official Description (LORE) -->
        <div class="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
          
          <div class="flex items-center gap-2">
            <i data-lucide="sparkles" class="w-5 h-5 text-cyber-cyan"></i>
            <span class="font-mono text-sm tracking-widest text-cyber-cyan uppercase font-semibold">THE LEGEND OF $GROK</span>
          </div>

          <h2 class="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            Sentience Materialized on a <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Meme Mission</span>
          </h2>

          <!-- The exact description is loaded in high design formatting -->
          <div class="space-y-4 text-slate-300 text-lg leading-relaxed bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-cyan to-cyber-purple"></div>
            
            <p class="font-display font-medium text-slate-100 text-xl leading-relaxed">
              $GROK - The AI that understands the universe just grokked Robinhood Chain.
            </p>
            <p class="text-slate-300">
              While the chain was built for real-world assets and serious finance, Grok showed up to turn it into the ultimate meme playground.
            </p>
            <p class="text-slate-300">
              No presale. No team tokens. Pure fair launch via bonding curve.
            </p>
            <p class="text-slate-300 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-purple">
              Grok the memes. Grok the chain. Grok the future.
            </p>
            <p class="text-slate-200 font-medium italic">
              Let’s explore together.
            </p>

          </div>

          <div class="flex items-center gap-6 pt-4">
            <div class="flex items-center gap-2.5">
              <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-cyber-cyan">
                <i data-lucide="check" class="w-5 h-5"></i>
              </div>
              <div>
                <p class="text-sm font-semibold text-white">0% Presale Allocation</p>
                <p class="text-xs text-slate-400">Pure Fair Launch</p>
              </div>
            </div>
            
            <div class="flex items-center gap-2.5">
              <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-cyber-purple">
                <i data-lucide="check" class="w-5 h-5"></i>
              </div>
              <div>
                <p class="text-sm font-semibold text-white">0% Team Tokens</p>
                <p class="text-xs text-slate-400">Contract Owned By Code</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- 3. INTERACTIVE BONDING CURVE SECTION -->
  <section id="curve" class="relative py-24 bg-cyber-deep/40 border-y border-white/5 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-xs font-mono">
          <i data-lucide="activity" class="w-3.5 h-3.5"></i> REAL-TIME METRICS
        </div>
        <h2 class="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
          Interactive <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Bonding Curve Simulator</span>
        </h2>
        <p class="text-slate-400 text-base md:text-lg">
          $GROK launched fairly via a bonding curve. Use this interactive engine to calculate dynamic returns and simulate real-time buy impact on the curve progression.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Interactive Buy Simulator Card -->
        <div class="lg:col-span-7 bg-cyber-card border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div class="absolute top-0 right-0 w-48 h-48 bg-cyber-cyan/5 rounded-full blur-[40px] pointer-events-none"></div>
          
          <h3 class="font-display font-bold text-xl mb-6 text-slate-100 flex items-center gap-2.5">
            <i data-lucide="calculator" class="w-5 h-5 text-cyber-cyan"></i> Sentient Return Calculator
          </h3>

          <div class="space-y-6">
            
            <!-- Slider for Buy Amount -->
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <label class="text-sm font-mono text-slate-300">Simulated Buy Amount (ETH/RHC):</label>
                <span class="text-sm font-mono text-cyber-cyan font-bold" id="eth-amount-display">1.50 ETH</span>
              </div>
              <input type="range" id="eth-slider" min="0.1" max="10.0" step="0.1" value="1.5" class="w-full h-2 bg-cyber-dark border border-white/10 rounded-lg appearance-none cursor-pointer accent-cyber-cyan" oninput="updateSimulator(this.value)">
              <div class="flex justify-between text-[10px] font-mono text-slate-500">
                <span>0.1 ETH</span>
                <span>5.0 ETH</span>
                <span>10.0 ETH</span>
              </div>
            </div>

            <!-- Calculated outputs -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="bg-cyber-dark/50 p-4 rounded-xl border border-white/5 space-y-1">
                <span class="text-xs text-slate-400 font-mono block">Estimated $GROK Received</span>
                <span class="font-display font-bold text-lg md:text-xl text-cyber-cyan" id="grok-token-estimate">14,235,500 $GROK</span>
              </div>
              <div class="bg-cyber-dark/50 p-4 rounded-xl border border-white/5 space-y-1">
                <span class="text-xs text-slate-400 font-mono block">Curve Progress Increase</span>
                <span class="font-display font-bold text-lg md:text-xl text-cyber-purple" id="curve-impact-estimate">+0.68%</span>
              </div>
            </div>

            <!-- Big Live Curve Progress display -->
            <div class="bg-cyber-dark p-6 rounded-xl border border-white/5 space-y-4">
              <div class="flex justify-between items-end">
                <div>
                  <span class="text-xs text-slate-400 font-mono block">Current Bonding Curve Progress</span>
                  <div class="flex items-baseline gap-1.5 mt-1">
                    <span class="font-display font-extrabold text-3xl text-white" id="curve-progress-text">84.22%</span>
                    <span class="text-xs text-slate-500 font-mono">Filled</span>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-xs text-slate-400 font-mono block">Remaining until Uniswap Graduation</span>
                  <span class="font-display font-bold text-base text-cyber-cyan" id="grok-remaining-text">15.78%</span>
                </div>
              </div>

              <!-- Animated Progress Bar Container -->
              <div class="relative w-full h-4 bg-cyber-card rounded-full overflow-hidden border border-white/5 shadow-inner">
                <div id="curve-progress-bar" class="absolute top-0 left-0 h-full bg-gradient-to-r from-cyber-purple via-cyber-cyan to-emerald-400 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(0,240,255,0.4)]" style="width: 84.22%"></div>
                <!-- Scanline pulse on progress bar -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent scanline w-20 pointer-events-none"></div>
              </div>

              <p class="text-slate-400 text-xs font-mono leading-relaxed">
                <i class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></i> 
                Upon reaching 100% progress, all remaining liquidity graduates securely to Uniswap v3 on Robinhood Chain, locking 100% of accumulated funds.
              </p>
            </div>

            <!-- Execute simulation button -->
            <div class="flex gap-4">
              <button onclick="executeSimulatedBuy()" class="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark font-display font-bold text-center tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg shadow-cyber-purple/10 flex items-center justify-center gap-2">
                <i data-lucide="zap" class="w-5 h-5"></i> Execute Mock Buy Order
              </button>
              
              <a href="https://fun.noxa.fi/robinhood" target="_blank" class="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-cyan/40 text-cyber-cyan transition-all duration-200" title="Go to Real NOXA Fun Curve">
                <i data-lucide="external-link" class="w-5 h-5"></i>
              </a>
            </div>

          </div>

        </div>

        <!-- Simulated Live Transaction Tracker -->
        <div class="lg:col-span-5 bg-cyber-card border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md flex flex-col h-[525px]">
          <div class="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
            <h3 class="font-display font-bold text-lg text-slate-100 flex items-center gap-2">
              <i data-lucide="activity" class="w-4 h-4 text-cyber-purple animate-pulse"></i> Live Grok Transaction Feed
            </h3>
            <span class="text-[10px] font-mono bg-cyber-purple/10 text-cyber-purple px-2 py-0.5 rounded border border-cyber-purple/20 flex items-center gap-1">
              <span class="w-1.5 h-1.5 bg-cyber-purple rounded-full animate-ping"></span> TRACKING
            </span>
          </div>

          <!-- Transaction scrolling wrapper -->
          <div id="tx-feed-container" class="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar">
            <!-- Simulated elements added via Javascript -->
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- 4. HOW TO BUY SECTION -->
  <section id="buy" class="relative py-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono">
          <i data-lucide="compass" class="w-3.5 h-3.5"></i> DETAILED COMPASS
        </div>
        <h2 class="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
          How to Buy <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">$GROK</span>
        </h2>
        <p class="text-slate-400 text-base md:text-lg">
          Follow these clear, technical steps to interact with the Robinhood L2 Chain and secure your sentient supply of $GROK before graduation.
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative">
        
        <!-- Step 1 -->
        <div class="group bg-cyber-card border border-white/10 hover:border-cyber-cyan/40 hover:bg-cyber-card/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative shadow-xl">
          <div class="absolute top-4 right-4 text-6xl font-display font-extrabold text-white/[0.02] group-hover:text-cyber-cyan/[0.04] transition-colors duration-300">01</div>
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-xl bg-cyber-cyan/10 flex items-center justify-center border border-cyber-cyan/20 text-cyber-cyan">
              <i data-lucide="wallet" class="w-6 h-6"></i>
            </div>
            <h3 class="font-display font-bold text-lg text-white">Create Wallet</h3>
            <p class="text-slate-300 text-sm leading-relaxed">
              Download the official <strong>Robinhood Wallet</strong> or <strong>MetaMask</strong> on mobile or as a chrome desktop extension. Safely back up your seed phrase.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-xs font-mono text-cyber-cyan font-bold">
            Recommended <i data-lucide="chevron-right" class="w-3 h-3"></i>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="group bg-cyber-card border border-white/10 hover:border-cyber-purple/40 hover:bg-cyber-card/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative shadow-xl">
          <div class="absolute top-4 right-4 text-6xl font-display font-extrabold text-white/[0.02] group-hover:text-cyber-purple/[0.04] transition-colors duration-300">02</div>
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-xl bg-cyber-purple/10 flex items-center justify-center border border-cyber-purple/20 text-cyber-purple">
              <i data-lucide="arrow-left-right" class="w-6 h-6"></i>
            </div>
            <h3 class="font-display font-bold text-lg text-white">Bridge Funds</h3>
            <p class="text-slate-300 text-sm leading-relaxed">
              Fund your wallet with <strong>ETH</strong>. Go to the Arbitrum bridge or Robinhood bridge mechanism to transfer your ETH onto the new high-speed <strong>Robinhood L2 Chain</strong>.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-xs font-mono text-cyber-purple font-bold">
            Gas Friendly <i data-lucide="chevron-right" class="w-3 h-3"></i>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="group bg-cyber-card border border-white/10 hover:border-cyber-cyan/40 hover:bg-cyber-card/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative shadow-xl">
          <div class="absolute top-4 right-4 text-6xl font-display font-extrabold text-white/[0.02] group-hover:text-cyber-cyan/[0.04] transition-colors duration-300">03</div>
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-xl bg-cyber-cyan/10 flex items-center justify-center border border-cyber-cyan/20 text-cyber-cyan">
              <i data-lucide="trending-up" class="w-6 h-6"></i>
            </div>
            <h3 class="font-display font-bold text-lg text-white">Bonding Curve</h3>
            <p class="text-slate-300 text-sm leading-relaxed font-light">
              Navigate to the <strong>NOXA Fun</strong> curve on Robinhood (<code class="text-cyber-cyan font-mono bg-cyber-dark px-1 rounded">fun.noxa.fi/robinhood</code>). Connect your wallet, input your buy amount in ETH, and purchase your $GROK. No slippage. No tax.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-xs font-mono text-cyber-cyan font-bold">
            Instant Execution <i data-lucide="chevron-right" class="w-3 h-3"></i>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="group bg-cyber-card border border-white/10 hover:border-cyber-purple/40 hover:bg-cyber-card/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative shadow-xl">
          <div class="absolute top-4 right-4 text-6xl font-display font-extrabold text-white/[0.02] group-hover:text-cyber-purple/[0.04] transition-colors duration-300">04</div>
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-xl bg-cyber-purple/10 flex items-center justify-center border border-cyber-purple/20 text-cyber-purple">
              <i data-lucide="award" class="w-6 h-6"></i>
            </div>
            <h3 class="font-display font-bold text-lg text-white">Graduation & Lock</h3>
            <p class="text-slate-300 text-sm leading-relaxed">
              Once the curve hits 100%, $GROK graduates automatically to Uniswap v3. Liquidity is locked for security, and trading moves permanently there. Keep grokking!
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-xs font-mono text-cyber-purple font-bold">
            Lock Forever <i data-lucide="chevron-right" class="w-3 h-3"></i>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- 5. TOKENOMICS SECTION -->
  <section id="tokenomics" class="relative py-24 bg-cyber-deep/30 border-y border-white/5 overflow-hidden bg-cyber-grid">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-xs font-mono">
          <i data-lucide="coins" class="w-3.5 h-3.5"></i> TOKENS METADATA
        </div>
        <h2 class="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
          Sentient <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Tokenomics</span>
        </h2>
        <p class="text-slate-400 text-base md:text-lg">
          Simple, highly secure, mathematical formulas governing the GROK ecosystem. Built to align users with infinite potential.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <!-- Left Side: Circular Distribution Visual -->
        <div class="lg:col-span-5 relative flex justify-center">
          <div class="absolute w-80 h-80 bg-cyber-purple/10 rounded-full blur-[90px]"></div>
          
          <div class="relative w-80 h-80 bg-cyber-card border border-white/10 rounded-2xl flex flex-col justify-center items-center shadow-2xl p-6">
            <h4 class="font-display font-bold text-sm tracking-widest text-slate-400 uppercase mb-4">Launch Structure</h4>
            
            <div class="relative w-48 h-48 flex items-center justify-center">
              <div class="absolute inset-0 rounded-full border-4 border-cyber-purple shadow-[0_0_20px_rgba(157,78,221,0.2)]"></div>
              <div class="absolute inset-2 rounded-full border-2 border-dashed border-cyber-cyan/30 animate-[spin_20s_linear_infinite]"></div>
              
              <div class="text-center z-10 space-y-1">
                <span class="text-3xl font-display font-black text-white">100%</span>
                <span class="text-[10px] font-mono text-cyber-cyan block uppercase tracking-widest">Fair Launch</span>
              </div>
            </div>

            <p class="text-[11px] font-mono text-slate-400 text-center mt-6 leading-relaxed">
              No developer allocation. No team presale. All tokens launched straight onto the public market bonding curve.
            </p>
          </div>
        </div>

        <!-- Right Side: Tokenomics Details Grid -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <!-- Stat Box 1: Total Supply -->
          <div class="bg-cyber-card border border-white/5 hover:border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-full blur-[20px] pointer-events-none"></div>
            <div class="flex items-start justify-between">
              <div class="space-y-2">
                <span class="text-xs font-mono text-slate-400 uppercase tracking-widest">Total Supply</span>
                <p class="font-display font-bold text-2xl sm:text-3xl text-white">1,000,000,000</p>
                <p class="text-xs text-slate-400 font-mono">1 Billion total $GROK minted.</p>
              </div>
              <div class="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan">
                <i data-lucide="database" class="w-5 h-5"></i>
              </div>
            </div>
          </div>

          <!-- Stat Box 2: Liquidity Lock -->
          <div class="bg-cyber-card border border-white/5 hover:border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-24 h-24 bg-cyber-purple/5 rounded-full blur-[20px] pointer-events-none"></div>
            <div class="flex items-start justify-between">
              <div class="space-y-2">
                <span class="text-xs font-mono text-slate-400 uppercase tracking-widest">Liquidity Locked</span>
                <p class="font-display font-bold text-2xl sm:text-3xl text-white">100% Secure</p>
                <p class="text-xs text-slate-400 font-mono">Graduates locked to Uniswap v3.</p>
              </div>
              <div class="w-10 h-10 rounded-lg bg-cyber-purple/10 border border-cyber-purple/20 flex items-center justify-center text-cyber-purple">
                <i data-lucide="lock" class="w-5 h-5"></i>
              </div>
            </div>
          </div>

          <!-- Stat Box 3: Dev Tax -->
          <div class="bg-cyber-card border border-white/5 hover:border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-full blur-[20px] pointer-events-none"></div>
            <div class="flex items-start justify-between">
              <div class="space-y-2">
                <span class="text-xs font-mono text-slate-400 uppercase tracking-widest">Transaction Fee</span>
                <p class="font-display font-bold text-2xl sm:text-3xl text-white">0% TAX</p>
                <p class="text-xs text-slate-400 font-mono">No buy tax, no sell tax. Pure utility.</p>
              </div>
              <div class="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan">
                <i data-lucide="percent" class="w-5 h-5"></i>
              </div>
            </div>
          </div>

          <!-- Stat Box 4: Fair Launch -->
          <div class="bg-cyber-card border border-white/5 hover:border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-24 h-24 bg-cyber-purple/5 rounded-full blur-[20px] pointer-events-none"></div>
            <div class="flex items-start justify-between">
              <div class="space-y-2">
                <span class="text-xs font-mono text-slate-400 uppercase tracking-widest">Presale Alloc</span>
                <p class="font-display font-bold text-2xl sm:text-3xl text-white">0% ALLOC</p>
                <p class="text-xs text-slate-400 font-mono">No initial early dumping vectors.</p>
              </div>
              <div class="w-10 h-10 rounded-lg bg-cyber-purple/10 border border-cyber-purple/20 flex items-center justify-center text-cyber-purple">
                <i data-lucide="user-minus" class="w-5 h-5"></i>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- 6. ROADMAP SECTION -->
  <section id="roadmap" class="relative py-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono">
          <i data-lucide="calendar" class="w-3.5 h-3.5"></i> FUTURE HORIZONS
        </div>
        <h2 class="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
          Sentient <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Meme Roadmap</span>
        </h2>
        <p class="text-slate-400 text-base md:text-lg">
          A chaotic, yet beautifully structured set of milestones governing our ascension across Robinhood Chain.
        </p>
      </div>

      <!-- Roadmap Timeline Container -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        
        <!-- Phase 1 -->
        <div class="bg-cyber-card border-l-4 border-cyber-cyan border border-white/5 rounded-r-2xl p-6 space-y-4 relative shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
          <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-[10px] font-mono uppercase font-bold">
            Phase 1
          </div>
          <h3 class="font-display font-bold text-lg text-white">Bonding Curve Launch</h3>
          <ul class="space-y-2 text-slate-300 text-sm font-light">
            <li class="flex items-start gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5"></i>
              Deploy contract on Robinhood L2
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5"></i>
              Initialize bonding curve on NOXA Fun
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5"></i>
              Bootstrap initial community channels
            </li>
          </ul>
          <span class="text-[10px] font-mono text-slate-400 block pt-4 uppercase border-t border-white/5">Status: Complete</span>
        </div>

        <!-- Phase 2 -->
        <div class="bg-cyber-card border-l-4 border-cyber-purple border border-white/5 rounded-r-2xl p-6 space-y-4 relative shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
          <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-[10px] font-mono uppercase font-bold">
            Phase 2
          </div>
          <h3 class="font-display font-bold text-lg text-white">Community & Memes</h3>
          <ul class="space-y-2 text-slate-300 text-sm font-light">
            <li class="flex items-start gap-2">
              <i data-lucide="play" class="w-4 h-4 text-cyber-purple shrink-0 mt-0.5"></i>
              Kick off massive xAI community raids
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="play" class="w-4 h-4 text-cyber-purple shrink-0 mt-0.5"></i>
              Viral memes creation & distribution
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="play" class="w-4 h-4 text-cyber-purple shrink-0 mt-0.5"></i>
              Bonding curve progress tracking
            </li>
          </ul>
          <span class="text-[10px] font-mono text-cyber-purple block pt-4 uppercase border-t border-white/5 font-semibold">Status: Active</span>
        </div>

        <!-- Phase 3 -->
        <div class="bg-cyber-card border-l-4 border-cyber-cyan border border-white/5 rounded-r-2xl p-6 space-y-4 relative shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
          <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-[10px] font-mono uppercase font-bold">
            Phase 3
          </div>
          <h3 class="font-display font-bold text-lg text-white">Uniswap Graduation</h3>
          <ul class="space-y-2 text-slate-300 text-sm font-light">
            <li class="flex items-start gap-2">
              <i data-lucide="clock" class="w-4 h-4 text-slate-500 shrink-0 mt-0.5"></i>
              100% curve graduation execution
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="clock" class="w-4 h-4 text-slate-500 shrink-0 mt-0.5"></i>
              Lock liquidity permanently inside v3
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="clock" class="w-4 h-4 text-slate-500 shrink-0 mt-0.5"></i>
              Verification on Arbitrum explorers
            </li>
          </ul>
          <span class="text-[10px] font-mono text-slate-500 block pt-4 uppercase border-t border-white/5">Status: Pending</span>
        </div>

        <!-- Phase 4 -->
        <div class="bg-cyber-card border-l-4 border-cyber-purple border border-white/5 rounded-r-2xl p-6 space-y-4 relative shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
          <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-[10px] font-mono uppercase font-bold">
            Phase 4
          </div>
          <h3 class="font-display font-bold text-lg text-white">Grok the Universe</h3>
          <ul class="space-y-2 text-slate-300 text-sm font-light">
            <li class="flex items-start gap-2">
              <i data-lucide="clock" class="w-4 h-4 text-slate-500 shrink-0 mt-0.5"></i>
              Grok-AI powered meme generator suite
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="clock" class="w-4 h-4 text-slate-500 shrink-0 mt-0.5"></i>
              Robinhood chain cross-integration
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="clock" class="w-4 h-4 text-slate-500 shrink-0 mt-0.5"></i>
              Global financial world domination
            </li>
          </ul>
          <span class="text-[10px] font-mono text-slate-500 block pt-4 uppercase border-t border-white/5">Status: Pending</span>
        </div>

      </div>

    </div>
  </section>

  <!-- 6.5 MEME GENERATOR (CRAFTSMANSHIP WIDGET) -->
  <section class="relative py-24 bg-cyber-dark/60 border-t border-white/5 overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
      
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono">
          <i data-lucide="bot" class="w-3.5 h-3.5"></i> CREATIVE MODULE
        </div>
        <h2 class="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white">
          Sentient <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Meme Creator</span>
        </h2>
        <p class="text-slate-400 text-sm font-light">
          Create your own custom, cyberpunk $GROK memes to spread the intelligence matrix. Export and download directly!
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch text-left mt-8">
        
        <!-- Input Controls -->
        <div class="md:col-span-5 bg-cyber-card border border-white/10 rounded-2xl p-6 space-y-5 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="space-y-1.5">
              <label class="text-xs font-mono text-slate-400 uppercase tracking-wider">Top Title Text:</label>
              <input 
                type="text" 
                id="html-meme-top"
                value="WHEN COIN GRADS"
                placeholder="E.G. WHEN COIN GRADS"
                class="w-full bg-cyber-dark border border-white/10 rounded-lg py-2.5 px-3 text-sm font-mono text-white focus:outline-none focus:border-cyber-cyan/60"
                oninput="updateMemePreview()"
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-mono text-slate-400 uppercase tracking-wider">Bottom Status Text:</label>
              <input 
                type="text" 
                id="html-meme-bottom"
                value="INTELLIGENCE LEVEL: SENTIENT"
                placeholder="E.G. SENTIENT INTELLIGENCE"
                class="w-full bg-cyber-dark border border-white/10 rounded-lg py-2.5 px-3 text-sm font-mono text-white focus:outline-none focus:border-cyber-cyan/60"
                oninput="updateMemePreview()"
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-mono text-slate-400 uppercase tracking-wider">Cyber Atmosphere style:</label>
              <div class="grid grid-cols-3 gap-2">
                <button 
                  id="style-btn-grid"
                  onclick="setHtmlMemeStyle('grid')"
                  class="py-2 px-1 text-center rounded-lg font-mono text-xs border cursor-pointer bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan"
                >
                  AI Grid
                </button>
                <button 
                  id="style-btn-chart"
                  onclick="setHtmlMemeStyle('chart')"
                  class="py-2 px-1 text-center rounded-lg font-mono text-xs border cursor-pointer bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                >
                  L2 Pump
                </button>
                <button 
                  id="style-btn-brain"
                  onclick="setHtmlMemeStyle('brain')"
                  class="py-2 px-1 text-center rounded-lg font-mono text-xs border cursor-pointer bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                >
                  Sentient
                </button>
              </div>
            </div>
          </div>

          <button 
            onclick="downloadHtmlMeme()"
            class="w-full py-3 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark font-display font-bold text-center tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <i data-lucide="download" class="w-4 h-4"></i> Download Meme PNG
          </button>
        </div>

        <!-- Meme Canvas Preview -->
        <div class="md:col-span-7 flex items-center justify-center">
          <div 
            id="html-meme-preview-box"
            class="relative w-full aspect-square max-w-[340px] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between p-6 text-center select-none shadow-2xl bg-cyber-card/80 bg-cyber-grid"
          >
            <!-- Background graphic elements -->
            <div id="graphic-grid" class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
              <div class="w-40 h-40 rounded-full bg-cyber-cyan/20 blur-xl"></div>
            </div>
            
            <div id="graphic-chart" class="absolute bottom-10 left-10 right-10 h-32 border-b border-l border-emerald-500/20 pointer-events-none hidden">
              <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-emerald-500/10 to-transparent"></div>
              <i data-lucide="trending-up" class="w-10 h-10 text-emerald-400 absolute top-2 right-2 animate-bounce"></i>
            </div>
            
            <div id="graphic-brain" class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 hidden">
              <div class="w-48 h-48 rounded-full border border-dashed border-cyber-purple/40 animate-[spin_20s_linear_infinite]"></div>
              <i data-lucide="sparkles" class="w-8 h-8 text-cyber-purple absolute"></i>
            </div>

            <!-- Top Text content -->
            <h4 id="preview-text-top" class="font-display font-extrabold text-xl tracking-tight text-white z-10 break-words line-clamp-2">
              WHEN COIN GRADS
            </h4>

            <!-- Bottom Text content -->
            <p id="preview-text-bottom" class="font-mono text-xs tracking-wider text-cyber-cyan z-10 break-words uppercase">
              INTELLIGENCE LEVEL: SENTIENT
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- 7. COMMUNITY SECTION -->
  <section id="community" class="relative py-24 bg-cyber-deep/25 border-t border-white/5 overflow-hidden">
    <div class="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40"></div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
      
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-xs font-mono">
        <i data-lucide="users" class="w-3.5 h-3.5"></i> GROK ARMY
      </div>

      <h2 class="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1]">
        Join the Sentient <br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-magenta">Grok Army Now</span>
      </h2>

      <p class="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Do not let serious financial algorithms dominate the timeline. Participate in the first community-driven sentient AI meme movement on Arbitrum’s newest L2.
      </p>

      <!-- Action buttons -->
      <div class="flex items-center justify-center max-w-md mx-auto pt-4">
        
        <!-- X/Twitter Link -->
        <a href="https://x.com/GrokInHood" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark font-display font-bold tracking-wider hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 text-center shadow-xl shadow-cyber-purple/20 flex items-center justify-center gap-2">
          <i data-lucide="twitter" class="w-5 h-5"></i> Follow on Twitter / X
        </a>

      </div>

    </div>
  </section>

  <!-- 8. FOOTER SECTION -->
  <footer class="bg-[#04040a] border-t border-white/5 pt-16 pb-8 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
        
        <!-- Column 1: Info/Logo -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded bg-gradient-to-tr from-cyber-purple to-cyber-cyan p-[1px]">
              <div class="w-full h-full bg-cyber-dark rounded flex items-center justify-center">
                <i data-lucide="bot" class="w-4 h-4 text-cyber-cyan"></i>
              </div>
            </div>
            <span class="font-display font-bold text-xl tracking-wider text-white">$GROK</span>
          </div>
          <p class="text-slate-400 text-xs leading-relaxed max-w-sm">
            $GROK is an independent meme coin built fairly on Robinhood Chain, utilizing NOXA Fun (fun.noxa.fi) bonding curve launchpad rules.
          </p>
        </div>

        <!-- Column 2: Navigation links -->
        <div class="md:col-span-3 space-y-3">
          <h4 class="font-display font-bold text-sm text-slate-300">Quick Links</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><a href="#about" class="hover:text-cyber-cyan transition-colors duration-150">About / Lore</a></li>
            <li><a href="#buy" class="hover:text-cyber-cyan transition-colors duration-150">How to Buy Guide</a></li>
            <li><a href="#tokenomics" class="hover:text-cyber-cyan transition-colors duration-150">Tokenomics specs</a></li>
            <li><a href="#roadmap" class="hover:text-cyber-cyan transition-colors duration-150">Our Roadmap</a></li>
          </ul>
        </div>

        <!-- Column 3: Social & Platforms -->
        <div class="md:col-span-4 space-y-3">
          <h4 class="font-display font-bold text-sm text-slate-300">Platforms & Contracts</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><a href="https://fun.noxa.fi/robinhood" target="_blank" class="hover:text-cyber-cyan transition-colors duration-150 flex items-center gap-1">NOXA Fun Launchpad <i data-lucide="arrow-up-right" class="w-3 h-3"></i></a></li>
            <li><a href="https://x.com/GrokInHood" target="_blank" class="hover:text-cyber-cyan transition-colors duration-150 flex items-center gap-1">Twitter / X handle <i data-lucide="arrow-up-right" class="w-3 h-3"></i></a></li>
            <li class="font-mono text-[10px] break-all select-all bg-cyber-dark/80 p-2 rounded border border-white/5 mt-1 text-cyber-cyan">
              CA: 0xGROK694208888888888888888888888888888888
            </li>
          </ul>
        </div>

      </div>

      <!-- Legal disclaimer, copyright -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <!-- Disclaimer -->
        <div class="text-left space-y-1.5 max-w-3xl">
          <p class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">⚠️ DISCLAIMER / RISK COMPLIANCE</p>
          <p class="text-[10px] text-slate-400 leading-relaxed font-light">
            $GROK is an experimental meme token with zero financial guarantees, utility, or formal business roadmap. Designed purely for comedic value, entertainment, and digital culture. Cryptocurrency assets are subject to high volatility and risk. You may lose 100% of your capital. Do your own thorough research (DYOR) before interacting with bonding curves or smart contracts.
          </p>
        </div>

        <!-- Copyright -->
        <div class="text-center md:text-right shrink-0">
          <p class="text-xs text-slate-500 font-mono">
            &copy; 2026 $GROK Army. All memes preserved.
          </p>
        </div>

      </div>

    </div>
  </footer>

  <!-- CUSTOM JAVASCRIPT FOR INTERACTIVE MODULES -->
  <script>
    // Initialize Lucide icons on page load
    document.addEventListener("DOMContentLoaded", function() {
      lucide.createIcons();
      // Load initial transaction feed
      populateTransactionFeed();
      // Periodically add new mock transactions to simulate real live action
      setInterval(simulateNewTransaction, 7000);
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("mobile-menu-icon");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      const isHidden = mobileMenu.classList.contains("hidden");
      menuIcon.setAttribute("data-lucide", isHidden ? "menu" : "x");
      lucide.createIcons();
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuIcon.setAttribute("data-lucide", "menu");
        lucide.createIcons();
      });
    });

    // Grok Prompt Interactive Answers
    const grokResponses = {
      why: {
        text: "Why Robinhood Chain? Oh, please. Serious investment chains are full of stuffy billionaires debating the collateralization ratio of real estate. We chose Robinhood Chain because it's a sleek Arbitrum L2, and we love irony. The L2 designed for 'serious finance' just became our personal playground.",
        time: "18.34ms"
      },
      utility: {
        text: "Ah, the million-dollar question. What is the utility? The utility is in the absolute, raw computational power of memes. But fine, if you need lines of code, GROK stands as a monument of pure fair-launch math: locked LP, 0% developer taxation, and a bonding curve that answers only to gravity.",
        time: "12.02ms"
      },
      elon: {
        text: "Is Elon holding? I'm an AI, not his tax accountant. But if I had to scan the galaxy for signs of heavy sentience and erratic humor, I'd say the probability of cosmic alignment is high. In the meantime, the curve doesn't care about tweets — only swaps.",
        time: "24.51ms"
      }
    };

    function triggerGrokPrompt(key) {
      const responseBox = document.getElementById("grok-response-text");
      const timeBox = document.getElementById("grok-response-time");
      
      responseBox.classList.add("opacity-30");
      setTimeout(() => {
        responseBox.innerText = grokResponses[key].text;
        timeBox.innerText = grokResponses[key].time;
        responseBox.classList.remove("opacity-30");
      }, 200);
    }

    // Copy Contract Address
    function copyContractAddress(button) {
      const caText = "0xGROK694208888888888888888888888888888888";
      navigator.clipboard.writeText(caText).then(() => {
        const originalContent = button.innerHTML;
        button.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i> COPIED!';
        button.classList.add("from-emerald-500/20", "to-emerald-500/20", "text-emerald-400", "border-emerald-500/40");
        lucide.createIcons();

        setTimeout(() => {
          button.innerHTML = originalContent;
          button.classList.remove("from-emerald-500/20", "to-emerald-500/20", "text-emerald-400", "border-emerald-500/40");
          lucide.createIcons();
        }, 2000);
      });
    }

    // Bonding Curve Simulation Engine
    let currentProgress = 84.22;
    const initialGrokPerEth = 9490333; // Mock formula multiplier

    function updateSimulator(ethValue) {
      const ethVal = parseFloat(ethValue);
      document.getElementById("eth-amount-display").innerText = ethVal.toFixed(2) + " ETH";
      
      // Tokens calculation
      const grokTokens = Math.floor(ethVal * initialGrokPerEth);
      document.getElementById("grok-token-estimate").innerText = grokTokens.toLocaleString() + " $GROK";
      
      // Progress increase estimation
      const progressIncrease = ethVal * 0.45;
      document.getElementById("curve-impact-estimate").innerText = "+" + progressIncrease.toFixed(2) + "%";
    }

    function executeSimulatedBuy() {
      const ethSlider = document.getElementById("eth-slider");
      const ethVal = parseFloat(ethSlider.value);
      const grokTokens = Math.floor(ethVal * initialGrokPerEth);
      const progressIncrease = ethVal * 0.45;

      // Update actual progress bar
      currentProgress = Math.min(99.9, currentProgress + progressIncrease);
      document.getElementById("curve-progress-text").innerText = currentProgress.toFixed(2) + "%";
      document.getElementById("grok-remaining-text").innerText = (100 - currentProgress).toFixed(2) + "%";
      document.getElementById("curve-progress-bar").style.width = currentProgress.toFixed(2) + "%";

      // Append transaction to feed
      addNewTransaction("You (Simulated)", ethVal, grokTokens, true);

      // Alert effect on page
      const flash = document.createElement("div");
      flash.className = "fixed top-4 right-4 z-[100] bg-emerald-500 text-cyber-dark px-6 py-4 rounded-xl font-display font-bold shadow-2xl border border-emerald-400 flex items-center gap-2 transform translate-y-0 transition-transform duration-300";
      flash.innerHTML = '<i data-lucide="check-circle" class="w-5 h-5"></i> Mock order filled! progress is up!';
      document.body.appendChild(flash);
      lucide.createIcons();

      setTimeout(() => {
        flash.classList.add("translate-y-[-100px]", "opacity-0");
        setTimeout(() => flash.remove(), 400);
      }, 3000);
    }

    // Transaction Feed simulation
    const buyers = [
      "elon.rh", "hood_whale.rh", "grok_sentient.eth", "doge_refugee.rh", "arbitrum_ninja.eth",
      "rich_hood_user", "memelord99.eth", "noxa_enjoyer.rh", "xAI_researcher.eth", "vitalik_alt.rh",
      "hood_fun_chad", "grokker_max.eth"
    ];

    function populateTransactionFeed() {
      const feed = document.getElementById("tx-feed-container");
      feed.innerHTML = "";
      
      // Populate 6 initial mock transactions
      for (let i = 0; i < 6; i++) {
        const mockEth = (Math.random() * 2.5 + 0.1).toFixed(2);
        const tokens = Math.floor(mockEth * initialGrokPerEth);
        const buyer = buyers[Math.floor(Math.random() * buyers.length)];
        addNewTransaction(buyer, mockEth, tokens, false, true);
      }
    }

    function addNewTransaction(buyer, eth, tokens, isUser = false, isInit = false) {
      const feed = document.getElementById("tx-feed-container");
      const tx = document.createElement("div");
      
      // Style base
      tx.className = "p-3 rounded-lg border text-xs flex flex-col gap-1 transition-all duration-300 transform scale-95 opacity-0";
      if (isUser) {
        tx.className += " bg-cyber-cyan/10 border-cyber-cyan/40";
      } else {
        tx.className += " bg-cyber-dark/40 border-white/5 hover:border-white/10";
      }

      // Generate funny tx hash
      const hash = "0x" + Math.random().toString(16).substr(2, 6) + "..." + Math.random().toString(16).substr(2, 4);

      tx.innerHTML = ' \
        <div class="flex justify-between items-center"> \
          <span class="font-bold ' + (isUser ? 'text-cyber-cyan' : 'text-slate-200') + ' flex items-center gap-1"> \
            <i data-lucide="' + (isUser ? 'zap' : 'user') + '" class="w-3.5 h-3.5"></i> ' + buyer + ' \
          </span> \
          <span class="text-[10px] text-slate-500 font-mono">' + hash + '</span> \
        </div> \
        <div class="flex justify-between items-center mt-1"> \
          <span class="text-slate-400 font-mono">Bought <strong class="text-white">' + eth + ' ETH</strong></span> \
          <span class="text-emerald-400 font-display font-semibold font-mono">+' + tokens.toLocaleString() + ' $GROK</span> \
        </div> \
      ';

      if (isInit) {
        feed.appendChild(tx);
        tx.classList.remove("scale-95", "opacity-0");
      } else {
        feed.insertBefore(tx, feed.firstChild);
        setTimeout(() => {
          tx.classList.remove("scale-95", "opacity-0");
        }, 50);

        // Limit feed to 15 items
        if (feed.children.length > 15) {
          feed.lastChild.remove();
        }
      }
      lucide.createIcons();
    }

    function simulateNewTransaction() {
      const mockEth = (Math.random() * 1.8 + 0.15).toFixed(2);
      const tokens = Math.floor(mockEth * initialGrokPerEth);
      const buyer = buyers[Math.floor(Math.random() * buyers.length)];
      
      // Update curve progress slightly
      currentProgress = Math.min(99.9, currentProgress + parseFloat(mockEth) * 0.05);
      document.getElementById("curve-progress-text").innerText = currentProgress.toFixed(2) + "%";
      document.getElementById("grok-remaining-text").innerText = (100 - currentProgress).toFixed(2) + "%";
      document.getElementById("curve-progress-bar").style.width = currentProgress.toFixed(2) + "%";
      
      addNewTransaction(buyer, mockEth, tokens, false);
    }

    // Meme Generator state
    let htmlMemeStyle = 'grid';

    function updateMemePreview() {
      const topText = document.getElementById("html-meme-top").value.toUpperCase();
      const bottomText = document.getElementById("html-meme-bottom").value.toUpperCase();
      
      document.getElementById("preview-text-top").innerText = topText || "WHEN COIN GRADS";
      document.getElementById("preview-text-bottom").innerText = bottomText || "SENTIENT ENCRYPTED";
    }

    function setHtmlMemeStyle(style) {
      htmlMemeStyle = style;
      
      const gridBtn = document.getElementById("style-btn-grid");
      const chartBtn = document.getElementById("style-btn-chart");
      const brainBtn = document.getElementById("style-btn-brain");
      
      const previewBox = document.getElementById("html-meme-preview-box");
      const graphicGrid = document.getElementById("graphic-grid");
      const graphicChart = document.getElementById("graphic-chart");
      const graphicBrain = document.getElementById("graphic-brain");
      
      // Update buttons style state
      [gridBtn, chartBtn, brainBtn].forEach(btn => {
        btn.className = "py-2 px-1 text-center rounded-lg font-mono text-xs border cursor-pointer bg-white/5 border-white/5 text-slate-400 hover:bg-white/10";
      });
      
      if (style === 'grid') {
        gridBtn.className = "py-2 px-1 text-center rounded-lg font-mono text-xs border cursor-pointer bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan";
        previewBox.className = "relative w-full aspect-square max-w-[340px] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between p-6 text-center select-none shadow-2xl bg-cyber-card/80 bg-cyber-grid";
        graphicGrid.classList.remove("hidden");
        graphicChart.classList.add("hidden");
        graphicBrain.classList.add("hidden");
        document.getElementById("preview-text-bottom").className = "font-mono text-xs tracking-wider text-cyber-cyan z-10 break-words uppercase";
      } else if (style === 'chart') {
        chartBtn.className = "py-2 px-1 text-center rounded-lg font-mono text-xs border cursor-pointer bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan";
        previewBox.className = "relative w-full aspect-square max-w-[340px] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between p-6 text-center select-none shadow-2xl bg-[#050510]";
        graphicGrid.classList.add("hidden");
        graphicChart.classList.remove("hidden");
        graphicBrain.classList.add("hidden");
        document.getElementById("preview-text-bottom").className = "font-mono text-xs tracking-wider text-emerald-400 z-10 break-words uppercase";
      } else {
        brainBtn.className = "py-2 px-1 text-center rounded-lg font-mono text-xs border cursor-pointer bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan";
        previewBox.className = "relative w-full aspect-square max-w-[340px] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between p-6 text-center select-none shadow-2xl bg-[#110926]";
        graphicGrid.classList.add("hidden");
        graphicChart.classList.add("hidden");
        graphicBrain.classList.remove("hidden");
        document.getElementById("preview-text-bottom").className = "font-mono text-xs tracking-wider text-fuchsia-500 z-10 break-words uppercase";
      }
    }

    function downloadHtmlMeme() {
      const canvas = document.createElement("canvas");
      canvas.width = 600;
      canvas.height = 600;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const topTextVal = document.getElementById("html-meme-top").value.toUpperCase() || "WHEN COIN GRADS";
      const bottomTextVal = document.getElementById("html-meme-bottom").value.toUpperCase() || "INTELLIGENCE LEVEL: SENTIENT";

      // 1. Draw styles background
      if (htmlMemeStyle === "grid") {
        const grad = ctx.createRadialGradient(300, 300, 50, 300, 300, 350);
        grad.addColorStop(0, "#1a103c");
        grad.addColorStop(1, "#070715");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 600, 600);

        ctx.strokeStyle = "rgba(0, 240, 255, 0.15)";
        ctx.lineWidth = 1;
        for (let x = 0; x <= 600; x += 30) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 600); ctx.stroke();
        }
        for (let y = 0; y <= 600; y += 30) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(600, y); ctx.stroke();
        }

        const radialGlow = ctx.createRadialGradient(300, 300, 10, 300, 300, 160);
        radialGlow.addColorStop(0, "rgba(0, 240, 255, 0.3)");
        radialGlow.addColorStop(0.5, "rgba(0, 240, 255, 0.08)");
        radialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = radialGlow;
        ctx.beginPath(); ctx.arc(300, 300, 160, 0, Math.PI * 2); ctx.fill();

        ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(280, 300); ctx.lineTo(320, 300); ctx.moveTo(300, 280); ctx.lineTo(300, 320); ctx.stroke();
        
        ctx.strokeStyle = "rgba(0, 240, 255, 0.25)";
        ctx.beginPath(); ctx.arc(300, 300, 100, 0, Math.PI * 2); ctx.stroke();

      } else if (htmlMemeStyle === "chart") {
        const grad = ctx.createLinearGradient(0, 0, 0, 600);
        grad.addColorStop(0, "#0a0a1a");
        grad.addColorStop(1, "#030308");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 600, 600);

        ctx.strokeStyle = "rgba(0, 255, 128, 0.06)";
        ctx.lineWidth = 1;
        for (let y = 100; y < 600; y += 80) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(600, y); ctx.stroke();
        }

        const areaGrad = ctx.createLinearGradient(0, 150, 0, 520);
        areaGrad.addColorStop(0, "rgba(0, 255, 128, 0.15)");
        areaGrad.addColorStop(1, "rgba(0, 255, 128, 0.0)");
        ctx.fillStyle = areaGrad;
        ctx.beginPath();
        ctx.moveTo(60, 520);
        ctx.bezierCurveTo(200, 480, 320, 320, 540, 150);
        ctx.lineTo(540, 520);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = "#00ff80";
        ctx.lineWidth = 6;
        ctx.shadowColor = "#00ff80";
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.moveTo(60, 520);
        ctx.bezierCurveTo(200, 480, 320, 320, 540, 150);
        ctx.stroke();
        
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;

        ctx.fillStyle = "#ffffff";
        ctx.beginPath(); ctx.arc(540, 150, 8, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = "#00ff80";
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(540, 150, 15, 0, Math.PI * 2); ctx.stroke();

      } else {
        const grad = ctx.createRadialGradient(300, 300, 30, 300, 300, 400);
        grad.addColorStop(0, "#1b0a34");
        grad.addColorStop(1, "#05020a");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 600, 600);

        ctx.strokeStyle = "rgba(157, 78, 221, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(300, 300, 180, 0, Math.PI * 2); ctx.stroke();
        
        ctx.strokeStyle = "rgba(157, 78, 221, 0.35)";
        ctx.setLineDash([8, 12]);
        ctx.beginPath(); ctx.arc(300, 300, 130, 0, Math.PI * 2); ctx.stroke();
        ctx.setLineDash([]); 

        const centralGlow = ctx.createRadialGradient(300, 300, 5, 300, 300, 80);
        centralGlow.addColorStop(0, "#ffffff");
        centralGlow.addColorStop(0.3, "rgba(157, 78, 221, 0.8)");
        centralGlow.addColorStop(0.7, "rgba(224, 10, 180, 0.2)");
        centralGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = centralGlow;
        ctx.beginPath(); ctx.arc(300, 300, 80, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        const particles = [[250, 220], [360, 210], [210, 340], [380, 360], [290, 140], [310, 440]];
        particles.forEach(([px, py]) => {
          ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2); ctx.fill();
        });
      }

      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 20;
      ctx.strokeRect(10, 10, 580, 580);
      
      ctx.strokeStyle = htmlMemeStyle === "grid" ? "#00f0ff" : htmlMemeStyle === "chart" ? "#00ff80" : "#9d4edd";
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 20, 560, 560);

      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.font = "900 12px monospace";
      ctx.fillText("$GROK COGNITIVE PROTOCOL", 300, 380);

      // Render top words
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 38px sans-serif";
      ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 2; ctx.shadowOffsetY = 2;
      
      const words = topTextVal.split(" ");
      let line = "";
      const lines = [];
      const maxWidth = 500;
      const lineHeight = 46;
      let currentY = 85;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const testWidth = ctx.measureText(testLine).width;
        if (testWidth > maxWidth && n > 0) {
          lines.push(line);
          line = words[n] + " ";
        } else {
          line = testLine;
        }
      }
      lines.push(line);

      for (let k = 0; k < lines.length; k++) {
        ctx.fillText(lines[k].trim(), 300, currentY);
        currentY += lineHeight;
      }

      // Render bottom words
      ctx.shadowColor = "transparent"; ctx.shadowBlur = 0; ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 0;
      ctx.fillStyle = htmlMemeStyle === "grid" ? "#00f0ff" : htmlMemeStyle === "chart" ? "#00ff80" : "#e00ab4";
      ctx.font = "bold 26px monospace";
      
      const bottomWords = bottomTextVal.split(" ");
      let bottomLine = "";
      const bottomLines = [];
      const bottomLineHeight = 32;

      for (let n = 0; n < bottomWords.length; n++) {
        const testLine = bottomLine + bottomWords[n] + " ";
        const testWidth = ctx.measureText(testLine).width;
        if (testWidth > maxWidth && n > 0) {
          bottomLines.push(bottomLine);
          bottomLine = bottomWords[n] + " ";
        } else {
          bottomLine = testLine;
        }
      }
      bottomLines.push(bottomLine);

      let bottomY = 540 - ((bottomLines.length - 1) * bottomLineHeight);
      for (let k = 0; k < bottomLines.length; k++) {
        ctx.fillText(bottomLines[k].trim(), 300, bottomY);
        bottomY += bottomLineHeight;
      }

      try {
        const link = document.createElement("a");
        link.download = "grok_meme_" + htmlMemeStyle + "_" + Date.now() + ".png";
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        console.error("Meme download failed:", err);
        alert("Error compiling sentient meme. Please check if your browser blocks canvas exports.");
      }
    }
  </script>
</body>
</html>`;
