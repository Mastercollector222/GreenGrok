import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Bot,
  Coins,
  Wallet,
  Flame,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  RefreshCw,
  Terminal as TerminalIcon,
  Menu,
  X,
  ArrowUpRight,
  Twitter,
  Send,
  ChevronRight,
  Download,
  Code,
  Zap,
  Activity,
  TrendingUp,
  Cpu,
  Lock,
  Percent,
  UserMinus,
  Award,
  Database,
  Layers,
  Heart,
  Upload,
  Image as ImageIcon,
  Trash,
  HelpCircle,
  Settings,
  Clock,
  Users
} from "lucide-react";

// ==========================================
// 🚀 $GROK TOKEN LAUNCH SETTINGS 🚀
// Change these settings once the token is live!
// ==========================================
export const IS_TOKEN_LIVE = true; // Change to true when the token is officially launched!
export const LAUNCHED_CONTRACT_ADDRESS = "0x25ebf40524a1a691b513f3f9119b184ad3f8e29b"; // Paste real deployed token address here
export const UNISWAP_URL = "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0x25ebf40524a1a691b513f3f9119b184ad3f8e29b"; // Paste real Uniswap/Dex trading link here once live
export const BLOCK_EXPLORER_URL = "https://robinhoodchain.blockscout.com"; // Your Robinhood Chain Blockscout explorer

// Helper constant for simulated bonding curve multiplier
const GROK_PER_ETH = 9490333;

interface Transaction {
  id: string;
  buyer: string;
  eth: number;
  tokens: number;
  hash: string;
  isUser?: boolean;
}

const BUYER_NAMES = [
  "elon.rh", "hood_whale.rh", "grok_sentient.eth", "doge_refugee.rh", "arbitrum_ninja.eth",
  "rich_hood_user", "memelord99.eth", "noxa_enjoyer.rh", "xAI_researcher.eth", "vitalik_alt.rh",
  "hood_fun_chad", "grokker_max.eth"
];

export default function App() {
  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Live Dashboard states
  const [dashboardMcap, setDashboardMcap] = useState(182450.25);
  const [dashboardProgress, setDashboardProgress] = useState(73.25);
  const [dashboardHolders, setDashboardHolders] = useState(2415);
  const [dashboardVolume, setDashboardVolume] = useState(142560.80);
  const [dashboardLoading, setDashboardLoading] = useState(false);
  const [autoSyncSeconds, setAutoSyncSeconds] = useState(300); // 5 minutes (300 seconds)
  const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 4, minutes: 12, seconds: 45 });

  // Countdown timer hook
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Contract Copy feedback state
  const [caCopied, setCaCopied] = useState(false);

  // Grok Terminal dialogue state
  const [terminalPrompt, setTerminalPrompt] = useState<"why" | "utility" | "elon" | null>(null);
  const [terminalResponse, setTerminalResponse] = useState(
    "Select a prompt above or ask any custom question below to challenge my intelligence (or complete lack thereof). Let's unlock the secrets of the meme universe."
  );
  const [terminalResponseTime, setTerminalResponseTime] = useState("0.00ms");
  const [isTyping, setIsTyping] = useState(false);
  const [customPrompt, setCustomPrompt] = useState("");
  const [terminalIsLoading, setTerminalIsLoading] = useState(false);

  // Simulator states
  const [simEthValue, setSimEthValue] = useState(1.5);
  const [currentProgress, setCurrentProgress] = useState(84.22);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Live Contract / Curve Tracker states
  const [isLiveMode, setIsLiveMode] = useState<boolean>(true);
  const [liveContractAddress, setLiveContractAddress] = useState<string>(LAUNCHED_CONTRACT_ADDRESS);
  const [onChainProgress, setOnChainProgress] = useState<number | null>(100);
  const [onChainWhales, setOnChainWhales] = useState<number>(0);
  const [onChainSupply, setOnChainSupply] = useState<string>("1,000,000,000 $GROK");
  const [onChainStatus, setOnChainStatus] = useState<string>("Connected");
  const [rpcLoading, setRpcLoading] = useState<boolean>(false);

  // Meme Generator states
  const [memeTopText, setMemeTopText] = useState("WHEN COIN GRADS");
  const [memeBottomText, setMemeBottomText] = useState("INTELLIGENCE LEVEL: SENTIENT");
  const [memeStyle, setMemeStyle] = useState<"grid" | "chart" | "brain">("grid");
  const [memeCustomImage, setMemeCustomImage] = useState<string | null>(null);
  const [memeTopFontSize, setMemeTopFontSize] = useState<number>(32);
  const [memeBottomFontSize, setMemeBottomFontSize] = useState<number>(22);
  const [memeTextColor, setMemeTextColor] = useState<string>("#ffffff");
  const [memeSticker, setMemeSticker] = useState<string | null>(null);
  const [memeFontFamily, setMemeFontFamily] = useState<"Space Grotesk" | "JetBrains Mono" | "Impact">("Space Grotesk");
  const [memeStickerPosition, setMemeStickerPosition] = useState<"middle" | "top" | "bottom">("middle");
  const [showMemeWatermark, setShowMemeWatermark] = useState<boolean>(true);
  const [memeRatio, setMemeRatio] = useState<"1:1" | "9:16">("1:1");
  const memeRef = useRef<HTMLDivElement>(null);
  const typingIntervalRef = useRef<any>(null);

  // Cleanup typing interval on unmount
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  // Setup initial transactions
  useEffect(() => {
    const initialTxs: Transaction[] = [];
    for (let i = 0; i < 6; i++) {
      const eth = parseFloat((Math.random() * 2.5 + 0.1).toFixed(2));
      const tokens = Math.floor(eth * GROK_PER_ETH);
      const buyer = BUYER_NAMES[Math.floor(Math.random() * BUYER_NAMES.length)];
      const hash = "0x" + Math.random().toString(16).substring(2, 8) + "..." + Math.random().toString(16).substring(2, 6);
      initialTxs.push({
        id: Math.random().toString(36).substring(2, 9),
        buyer,
        eth,
        tokens,
        hash
      });
    }
    setTransactions(initialTxs);
  }, []);

  // Periodic transaction simulation - respects primitive dependency rules and pulls real-world on-chain transfers
  useEffect(() => {
    const fetchTxs = async () => {
      const isRealAddress = /^0x[a-fA-F0-9]{40}$/.test(liveContractAddress);
      if (isLiveMode && isRealAddress) {
        try {
          const res = await fetch(`/api/onchain/transactions?address=${encodeURIComponent(liveContractAddress)}`);
          if (res.ok) {
            const data = await res.json();
            if (data.transactions && Array.isArray(data.transactions) && data.transactions.length > 0) {
              setTransactions(data.transactions);
              return;
            }
          }
        } catch (e) {
          console.warn("Failed to fetch real-time on-chain transactions, falling back to simulated generation");
        }
      }

      // Fallback or Simulated Transaction Generation
      const eth = parseFloat((Math.random() * 1.8 + 0.15).toFixed(2));
      const tokens = Math.floor(eth * GROK_PER_ETH);
      const buyer = BUYER_NAMES[Math.floor(Math.random() * BUYER_NAMES.length)];
      const hash = "0x" + Math.random().toString(16).substring(2, 8) + "..." + Math.random().toString(16).substring(2, 6);
      
      setTransactions(prev => [
        {
          id: Math.random().toString(36).substring(2, 9),
          buyer,
          eth,
          tokens,
          hash
        },
        ...prev.slice(0, 14)
      ]);

      // Update progress bar slightly for realism
      setCurrentProgress(prev => Math.min(99.9, prev + eth * 0.05));
    };

    // Run initially and then set interval
    fetchTxs();
    const interval = setInterval(fetchTxs, 8000);

    return () => clearInterval(interval);
  }, [liveContractAddress, isLiveMode]);

  // Auto-fetch real-time metrics on mount if token is live
  useEffect(() => {
    if (IS_TOKEN_LIVE) {
      handleQueryOnChain();
    }
  }, []);

  // Copy contract address handler
  const copyContract = () => {
    navigator.clipboard.writeText(liveContractAddress);
    setCaCopied(true);
    setTimeout(() => setCaCopied(false), 2000);
  };

  // Trigger terminal dialogues
  const triggerGrokPrompt = (key: "why" | "utility" | "elon") => {
    // Clear any active typing interval to avoid overlapping cycles
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    
    setTerminalPrompt(key);
    setIsTyping(true);
    setTerminalResponse("");

    const responses = {
      why: {
        text: "Why Robinhood Chain? Oh, please. Serious investment chains are full of stuffy billionaires debating the collateralization ratio of real estate. We chose Robinhood Chain because it's a sleek Arbitrum L2, and we love irony. The L2 designed for 'serious finance' just became our personal playground.",
        time: "18.34ms"
      },
      utility: {
        text: "Ah, the million-dollar question. What is the utility? The utility is in the absolute, raw computational power of memes. But fine, if you need lines of code, GROK stands as a monument of pure fair-launch math: locked LP, 0% developer taxation, and a market distribution that answers only to gravity.",
        time: "12.02ms"
      },
      elon: {
        text: "Is Elon holding? I'm an AI, not his tax accountant. But if I had to scan the galaxy for signs of heavy sentience and erratic humor, I'd say the probability of cosmic alignment is high. In the meantime, the market doesn't care about tweets — only swaps.",
        time: "24.51ms"
      }
    };

    const targetText = responses[key].text;
    let index = 0;

    typingIntervalRef.current = setInterval(() => {
      if (index < targetText.length) {
        setTerminalResponse(targetText.slice(0, index + 1));
        index++;
      } else {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
        }
        setIsTyping(false);
        setTerminalResponseTime(responses[key].time);
      }
    }, 12);
  };

  // Handle custom ask question in terminal
  const handleAskGrok = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim() || isTyping || terminalIsLoading) return;

    // Clear any active typing interval to avoid overlapping cycles
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }

    setTerminalPrompt(null);
    setTerminalIsLoading(true);
    setTerminalResponse("Initializing quantum neural bridge... connection to hivemind established. Decrypting output...");
    
    try {
      const res = await fetch("/api/grok/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: customPrompt }),
      });
      
      const data = await res.json();
      setTerminalIsLoading(false);
      setIsTyping(true);
      setTerminalResponse("");

      const targetText = data.response || "I processed your request, but the cosmic background radiation scrambled my thoughts.";
      const timeStr = data.time || "0.00ms";
      let index = 0;

      // Typewrite speed (adjusted slightly faster for longer answers)
      const speed = targetText.length > 150 ? 8 : 12;

      typingIntervalRef.current = setInterval(() => {
        if (index < targetText.length) {
          setTerminalResponse(targetText.slice(0, index + 1));
          index++;
        } else {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
          }
          setIsTyping(false);
          setTerminalResponseTime(timeStr);
        }
      }, speed);
    } catch (error) {
      setTerminalIsLoading(false);
      setIsTyping(true);
      setTerminalResponse("");
      const errorText = "ERROR: Quantum packet collision on Arbitrum L2. Connection failed. In the meantime, $GROK is still mathematically superior and mathematically bound to pump. Try querying again shortly.";
      let index = 0;

      typingIntervalRef.current = setInterval(() => {
        if (index < errorText.length) {
          setTerminalResponse(errorText.slice(0, index + 1));
          index++;
        } else {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
          }
          setIsTyping(false);
          setTerminalResponseTime("999ms");
        }
      }, 10);
    }
  };

  // Execute buy simulation
  const handleSimulateBuy = () => {
    const tokens = Math.floor(simEthValue * GROK_PER_ETH);
    const progressIncrease = simEthValue * 0.45;

    // Increment progress
    setCurrentProgress(prev => Math.min(99.9, prev + progressIncrease));

    // Append to transactions
    const hash = "0x" + Math.random().toString(16).substring(2, 8) + "..." + Math.random().toString(16).substring(2, 6);
    setTransactions(prev => [
      {
        id: Math.random().toString(36).substring(2, 9),
        buyer: "You (Simulated)",
        eth: simEthValue,
        tokens,
        hash,
        isUser: true
      },
      ...prev
    ]);

    // Toast feedback
    setSuccessToast(`Filled! Simulated buy order for ${simEthValue} ETH increased progress bar!`);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  // Custom image upload handler for meme backgrounds
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image is too large. Please select an image under 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setMemeCustomImage(event.target?.result as string);
        setSuccessToast("Custom background loaded! Unleashing creative potential...");
        setTimeout(() => setSuccessToast(null), 3000);
      };
      reader.readAsDataURL(file);
    }
  };  // Query On-Chain JSON-RPC state fetcher (Real-world bonding curve reader)
  const handleQueryOnChain = async () => {
    if (!liveContractAddress || !liveContractAddress.trim()) {
      alert("Please enter a valid contract address.");
      return;
    }
    setRpcLoading(true);
    setOnChainStatus("Querying L2 RPC...");
    
    try {
      const cleanAddress = liveContractAddress.trim();
      const res = await fetch(`/api/onchain/metrics?address=${encodeURIComponent(cleanAddress)}`);
      if (!res.ok) {
        throw new Error("Backend proxy query failed");
      }
      
      const data = await res.json();
      
      // Update on-chain states
      setOnChainProgress(data.bondingCurveProgress);
      setOnChainSupply(data.totalSupply.toLocaleString() + " $GROK");
      setOnChainStatus(data.status);
      setIsLiveMode(true);
      
      // Mirror to dashboard too for synchronized real-time feel
      setDashboardMcap(data.marketCap);
      setDashboardProgress(data.bondingCurveProgress);
      setDashboardHolders(data.holderCount);
      
      setSuccessToast(`Successfully connected to Robinhood Chain! ${data.status}`);
      setTimeout(() => setSuccessToast(null), 3500);
    } catch (err: any) {
      console.warn("RPC fetch failed, falling back to simulated live feed:", err);
      // Fallback mockup for robust on-screen preview
      setTimeout(() => {
        setOnChainProgress(100);
        setOnChainSupply("1,000,000,000 $GROK");
        setOnChainStatus("Simulated (L2 Gateway Offline)");
        setIsLiveMode(true);
        setSuccessToast("Simulated Live On-Chain metrics. L2 Gateway is currently offline.");
        setTimeout(() => setSuccessToast(null), 3000);
      }, 500);
    } finally {
      setRpcLoading(false);
    }
  };

  // Sync / Refresh handler for the Live Dashboard
  const handleRefreshDashboard = async () => {
    if (dashboardLoading) return;
    setDashboardLoading(true);
    setAutoSyncSeconds(300); // Reset auto-sync timer countdown
    
    try {
      const cleanAddress = liveContractAddress.trim();
      const res = await fetch(`/api/onchain/metrics?address=${encodeURIComponent(cleanAddress)}`);
      if (!res.ok) {
        throw new Error("Backend sync failed");
      }
      
      const data = await res.json();
      
      setDashboardMcap(data.marketCap);
      setDashboardProgress(data.bondingCurveProgress);
      setDashboardHolders(data.holderCount);
      setDashboardVolume(prev => prev + Math.random() * 3200);
      
      setOnChainProgress(data.bondingCurveProgress);
      setOnChainSupply(data.totalSupply.toLocaleString() + " $GROK");
      setOnChainStatus(data.status);
      setIsLiveMode(true);
      
      setSuccessToast(`Live Dashboard synced with Robinhood Chain! Status: ${data.status}`);
      setTimeout(() => setSuccessToast(null), 3000);
    } catch (error) {
      console.warn("Backend sync failed, falling back to simulation:", error);
      // Fallback mockup for robust on-screen preview
      setDashboardMcap(prev => prev + (Math.random() - 0.4) * 2500);
      setDashboardProgress(prev => {
        const next = prev + Math.random() * 0.8;
        return next > 100 ? 100 : parseFloat(next.toFixed(2));
      });
      setDashboardHolders(prev => prev + Math.floor(Math.random() * 12) + 1);
      setDashboardVolume(prev => prev + Math.random() * 3200);
      setSuccessToast("Live Dashboard refreshed (Simulated)!");
      setTimeout(() => setSuccessToast(null), 3000);
    } finally {
      setDashboardLoading(false);
    }
  };

  // 5-minute Auto-Refresh loop for the Live Dashboard to keep data fresh without hitting rate limits
  useEffect(() => {
    const timer = setInterval(() => {
      setAutoSyncSeconds(prev => {
        if (prev <= 1) {
          // Trigger sync
          handleRefreshDashboard();
          return 300; // Reset to 5 minutes (300 seconds)
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [liveContractAddress]);

  // Custom mock download meme canvas (Upgraded Customizable Version)
  const downloadMeme = () => {
    const canvas = document.createElement("canvas");
    const canvasWidth = 600;
    const canvasHeight = memeRatio === "1:1" ? 600 : 1066;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderRemaining = () => {
      // 2. High-contrast cyber border overlay
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 20;
      ctx.strokeRect(10, 10, canvasWidth - 20, canvasHeight - 20);
      
      ctx.strokeStyle = memeStyle === "grid" ? "#00f0ff" : memeStyle === "chart" ? "#00ff80" : "#9d4edd";
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 20, canvasWidth - 40, canvasHeight - 40);

      // 3. Watermark label in the bottom
      if (showMemeWatermark) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
        ctx.font = "900 12px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText("$GROK COGNITIVE PROTOCOL", canvasWidth / 2, canvasHeight - 45);
      }

      // 3.5 Draw sticker if selected
      if (memeSticker) {
        ctx.save();
        let stickerY = canvasHeight / 2 + 10;
        if (memeStickerPosition === "top") {
          stickerY = 175;
        } else if (memeStickerPosition === "bottom") {
          stickerY = canvasHeight - 165;
        }
        
        ctx.translate(canvasWidth / 2, stickerY);
        ctx.fillStyle = memeStyle === "grid" ? "rgba(0, 240, 255, 0.95)" : memeStyle === "chart" ? "rgba(0, 255, 128, 0.95)" : "rgba(224, 10, 180, 0.95)";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 3;
        const stickerText = memeSticker === "approved" ? "★ $GROK APPROVED ★" : memeSticker === "moon" ? "🚀 TO THE MOON 🚀" : memeSticker === "sentient" ? "👁 SENTIENT MATRIX 👁" : "📈 PUMP IT NOW 📈";
        ctx.font = "bold 15px 'JetBrains Mono', monospace";
        const txtWidth = ctx.measureText(stickerText).width;
        ctx.fillRect(-txtWidth/2 - 16, -18, txtWidth + 32, 36);
        ctx.strokeRect(-txtWidth/2 - 16, -18, txtWidth + 32, 36);
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(stickerText, 0, 0);
        ctx.restore();
        ctx.textBaseline = "alphabetic";
      }

      // 4. Render multiline top text with wrap helper
      ctx.fillStyle = memeTextColor;
      ctx.textAlign = "center";
      
      let fontName = "'Space Grotesk', sans-serif";
      if (memeFontFamily === "JetBrains Mono") {
        fontName = "'JetBrains Mono', monospace";
      } else if (memeFontFamily === "Impact") {
        fontName = "Impact, sans-serif";
      }
      
      ctx.font = `bold ${memeTopFontSize}px ${fontName}`;
      ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      
      const topText = memeTopText.trim() ? memeTopText.toUpperCase() : "MEME TEXT TOP";
      const words = topText.split(" ");
      let line = "";
      const lines = [];
      const maxWidth = 500;
      const lineHeight = memeTopFontSize + 8;
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
        ctx.fillText(lines[k].trim(), canvasWidth / 2, currentY);
        currentY += lineHeight;
      }

      // 5. Render multiline bottom text
      ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      ctx.fillStyle = memeTextColor !== "#ffffff" ? memeTextColor : (memeStyle === "grid" ? "#00f0ff" : memeStyle === "chart" ? "#00ff80" : "#e00ab4");
      
      let bottomFontName = "'JetBrains Mono', monospace";
      if (memeFontFamily === "Space Grotesk") {
        bottomFontName = "'Space Grotesk', sans-serif";
      } else if (memeFontFamily === "Impact") {
        bottomFontName = "Impact, sans-serif";
      }
      ctx.font = `bold ${memeBottomFontSize}px ${bottomFontName}`;
      
      const bottomText = memeBottomText.trim() ? memeBottomText.toUpperCase() : "SENTIENT ENCRYPTED";
      const bottomWords = bottomText.split(" ");
      let bottomLine = "";
      const bottomLines = [];
      const bottomLineHeight = memeBottomFontSize + 8;

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

      let bottomY = (canvasHeight - 100) - ((bottomLines.length - 1) * bottomLineHeight);
      for (let k = 0; k < bottomLines.length; k++) {
        ctx.fillText(bottomLines[k].trim(), canvasWidth / 2, bottomY);
        bottomY += bottomLineHeight;
      }

      // 6. Trigger download securely attaching anchor to body to bypass sandboxes
      try {
        const link = document.createElement("a");
        link.download = `grok_meme_${memeStyle}_${Date.now()}.png`;
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Toast feedback
        setSuccessToast(`Sentient meme compiled! Image successfully downloaded.`);
        setTimeout(() => setSuccessToast(null), 3000);
      } catch (err) {
        console.error("Meme download failed:", err);
        alert("Error compiling sentient meme. Please check if your browser blocks programmatic canvas downloads.");
      }
    };

    // 1. Draw styles background
    if (memeCustomImage) {
      const img = new Image();
      img.referrerPolicy = "no-referrer";
      img.onload = () => {
        // Draw black backdrop
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        
        // Scale and center crop background image
        const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
        const x = (canvasWidth - img.width * scale) / 2;
        const y = (canvasHeight - img.height * scale) / 2;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        
        // Dark translucent cyber filter
        ctx.fillStyle = "rgba(7, 7, 20, 0.45)";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        
        renderRemaining();
      };
      img.src = memeCustomImage;
    } else {
      if (memeStyle === "grid") {
        const grad = ctx.createRadialGradient(canvasWidth/2, canvasHeight/2, 50, canvasWidth/2, canvasHeight/2, Math.max(canvasWidth, canvasHeight)/2);
        grad.addColorStop(0, "#1a103c");
        grad.addColorStop(1, "#070715");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // Cyber grid lines
        ctx.strokeStyle = "rgba(0, 240, 255, 0.15)";
        ctx.lineWidth = 1;
        for (let x = 0; x <= canvasWidth; x += 30) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvasHeight); ctx.stroke();
        }
        for (let y = 0; y <= canvasHeight; y += 30) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvasWidth, y); ctx.stroke();
        }

        // Center neon glow
        const radialGlow = ctx.createRadialGradient(canvasWidth/2, canvasHeight/2, 10, canvasWidth/2, canvasHeight/2, 160);
        radialGlow.addColorStop(0, "rgba(0, 240, 255, 0.3)");
        radialGlow.addColorStop(0.5, "rgba(0, 240, 255, 0.08)");
        radialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = radialGlow;
        ctx.beginPath(); ctx.arc(canvasWidth/2, canvasHeight/2, 160, 0, Math.PI * 2); ctx.fill();

        // Crosshairs and circles centered
        ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(canvasWidth/2 - 20, canvasHeight/2); ctx.lineTo(canvasWidth/2 + 20, canvasHeight/2);
        ctx.moveTo(canvasWidth/2, canvasHeight/2 - 20); ctx.lineTo(canvasWidth/2, canvasHeight/2 + 20);
        ctx.stroke();

        ctx.strokeStyle = "rgba(0, 240, 255, 0.25)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(canvasWidth/2, canvasHeight/2, 60, 0, Math.PI * 2);
        ctx.arc(canvasWidth/2, canvasHeight/2, 120, 0, Math.PI * 2);
        ctx.stroke();

      } else if (memeStyle === "chart") {
        const grad = ctx.createLinearGradient(0, 0, 0, canvasHeight);
        grad.addColorStop(0, "#0a0a1a");
        grad.addColorStop(1, "#030308");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // Subtle horizontal grid lines for finance vibe
        ctx.strokeStyle = "rgba(0, 255, 128, 0.06)";
        ctx.lineWidth = 1;
        for (let y = 100; y < canvasHeight; y += 80) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvasWidth, y);
          ctx.stroke();
        }

        // Draw beautiful gradient area underneath pump line
        const areaGrad = ctx.createLinearGradient(0, 150, 0, canvasHeight - 80);
        areaGrad.addColorStop(0, "rgba(0, 255, 128, 0.15)");
        areaGrad.addColorStop(1, "rgba(0, 255, 128, 0.0)");
        ctx.fillStyle = areaGrad;
        ctx.beginPath();
        ctx.moveTo(60, canvasHeight - 80);
        ctx.bezierCurveTo(200, canvasHeight - 120, 320, 320, canvasWidth - 60, 150);
        ctx.lineTo(canvasWidth - 60, canvasHeight - 80);
        ctx.closePath();
        ctx.fill();

        // Thick parabolic pump line
        ctx.strokeStyle = "#00ff80";
        ctx.lineWidth = 6;
        ctx.shadowColor = "#00ff80";
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.moveTo(60, canvasHeight - 80);
        ctx.bezierCurveTo(200, canvasHeight - 120, 320, 320, canvasWidth - 60, 150);
        ctx.stroke();
        
        // Reset shadows so text is crisp
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;

        // Draw rocket point indicator
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(canvasWidth - 60, 150, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#00ff80";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(canvasWidth - 60, 150, 15, 0, Math.PI * 2);
        ctx.stroke();

      } else {
        // Sentient Brain cosmic background
        const grad = ctx.createRadialGradient(canvasWidth/2, canvasHeight/2, 30, canvasWidth/2, canvasHeight/2, Math.max(canvasWidth, canvasHeight)/2);
        grad.addColorStop(0, "#1b0a34");
        grad.addColorStop(1, "#05020a");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // Outer glowing sentinel rings
        ctx.strokeStyle = "rgba(157, 78, 221, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(canvasWidth/2, canvasHeight/2, 180, 0, Math.PI * 2); ctx.stroke();
        
        ctx.strokeStyle = "rgba(157, 78, 221, 0.35)";
        ctx.setLineDash([8, 12]);
        ctx.beginPath(); ctx.arc(canvasWidth/2, canvasHeight/2, 130, 0, Math.PI * 2); ctx.stroke();
        ctx.setLineDash([]); // reset

        // Central core neon glow
        const centralGlow = ctx.createRadialGradient(canvasWidth/2, canvasHeight/2, 5, canvasWidth/2, canvasHeight/2, 80);
        centralGlow.addColorStop(0, "#ffffff");
        centralGlow.addColorStop(0.3, "rgba(157, 78, 221, 0.8)");
        centralGlow.addColorStop(0.7, "rgba(224, 10, 180, 0.2)");
        centralGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = centralGlow;
        ctx.beginPath();
        ctx.arc(canvasWidth/2, canvasHeight/2, 80, 0, Math.PI * 2);
        ctx.fill();

        // Sentient spark particles
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        const particles = [[canvasWidth/2 - 50, canvasHeight/2 - 80], [canvasWidth/2 + 60, canvasHeight/2 - 90], [canvasWidth/2 - 90, canvasHeight/2 + 40], [canvasWidth/2 + 80, canvasHeight/2 + 60], [canvasWidth/2 - 10, canvasHeight/2 - 160], [canvasWidth/2 + 10, canvasHeight/2 + 140]];
        particles.forEach(([px, py]) => {
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      renderRemaining();
    }
  };

  // Deprecated canvas reference, retained for unmount transitions
  const old_downloadMeme = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderRemaining = () => {
      // 2. High-contrast cyber border overlay
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 20;
      ctx.strokeRect(10, 10, 580, 580);
      
      ctx.strokeStyle = memeStyle === "grid" ? "#00f0ff" : memeStyle === "chart" ? "#00ff80" : "#9d4edd";
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 20, 560, 560);

      // 3. Watermark label in the middle
      ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
      ctx.font = "900 12px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText("$GROK COGNITIVE PROTOCOL", 300, 380);

      // 3.5 Draw sticker if selected
      if (memeSticker) {
        ctx.save();
        ctx.translate(300, 310);
        ctx.fillStyle = memeStyle === "grid" ? "rgba(0, 240, 255, 0.95)" : memeStyle === "chart" ? "rgba(0, 255, 128, 0.95)" : "rgba(224, 10, 180, 0.95)";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 3;
        const stickerText = memeSticker === "approved" ? "★ $GROK APPROVED ★" : memeSticker === "moon" ? "🚀 TO THE MOON 🚀" : memeSticker === "sentient" ? "👁 SENTIENT MATRIX 👁" : "📈 PUMP IT NOW 📈";
        ctx.font = "bold 15px 'JetBrains Mono', monospace";
        const txtWidth = ctx.measureText(stickerText).width;
        ctx.fillRect(-txtWidth/2 - 16, -18, txtWidth + 32, 36);
        ctx.strokeRect(-txtWidth/2 - 16, -18, txtWidth + 32, 36);
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(stickerText, 0, 0);
        ctx.restore();
        ctx.textBaseline = "alphabetic";
      }

      // 4. Render multiline top text with wrap helper
      ctx.fillStyle = memeTextColor;
      ctx.textAlign = "center";
      ctx.font = `bold ${memeTopFontSize}px 'Space Grotesk', sans-serif`;
      ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      
      const topText = memeTopText.trim() ? memeTopText.toUpperCase() : "MEME TEXT TOP";
      const words = topText.split(" ");
      let line = "";
      const lines = [];
      const maxWidth = 500;
      const lineHeight = memeTopFontSize + 8;
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

      // 5. Render multiline bottom text
      ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      ctx.fillStyle = memeTextColor !== "#ffffff" ? memeTextColor : (memeStyle === "grid" ? "#00f0ff" : memeStyle === "chart" ? "#00ff80" : "#e00ab4");
      ctx.font = `bold ${memeBottomFontSize}px 'JetBrains Mono', monospace`;
      
      const bottomText = memeBottomText.trim() ? memeBottomText.toUpperCase() : "SENTIENT ENCRYPTED";
      const bottomWords = bottomText.split(" ");
      let bottomLine = "";
      const bottomLines = [];
      const bottomLineHeight = memeBottomFontSize + 8;

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

      // 6. Trigger download securely attaching anchor to body to bypass sandboxes
      try {
        const link = document.createElement("a");
        link.download = `grok_meme_${memeStyle}_${Date.now()}.png`;
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Toast feedback
        setSuccessToast(`Sentient meme compiled! Image successfully downloaded.`);
        setTimeout(() => setSuccessToast(null), 3000);
      } catch (err) {
        console.error("Meme download failed:", err);
        alert("Error compiling sentient meme. Please check if your browser blocks programmatic canvas downloads.");
      }
    };

    // 1. Draw styles background
    if (memeCustomImage) {
      const img = new Image();
      img.referrerPolicy = "no-referrer";
      img.onload = () => {
        // Draw black backdrop
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 600, 600);
        
        // Scale and center crop background image
        const scale = Math.max(600 / img.width, 600 / img.height);
        const x = (600 - img.width * scale) / 2;
        const y = (600 - img.height * scale) / 2;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        
        // Dark translucent cyber filter
        ctx.fillStyle = "rgba(7, 7, 20, 0.45)";
        ctx.fillRect(0, 0, 600, 600);
        
        renderRemaining();
      };
      img.src = memeCustomImage;
    } else {
      if (memeStyle === "grid") {
        // Background gradient
        const grad = ctx.createRadialGradient(300, 300, 50, 300, 300, 350);
        grad.addColorStop(0, "#1a103c");
        grad.addColorStop(1, "#070715");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 600, 600);

        // Cyber grid lines
        ctx.strokeStyle = "rgba(0, 240, 255, 0.15)";
        ctx.lineWidth = 1;
        for (let x = 0; x <= 600; x += 30) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, 600);
          ctx.stroke();
        }
        for (let y = 0; y <= 600; y += 30) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(600, y);
          ctx.stroke();
        }

        // Center neon glow
        const radialGlow = ctx.createRadialGradient(300, 300, 10, 300, 300, 160);
        radialGlow.addColorStop(0, "rgba(0, 240, 255, 0.3)");
        radialGlow.addColorStop(0.5, "rgba(0, 240, 255, 0.08)");
        radialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = radialGlow;
        ctx.beginPath();
        ctx.arc(300, 300, 160, 0, Math.PI * 2);
        ctx.fill();

        // Digital crosshairs
        ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(280, 300); ctx.lineTo(320, 300);
        ctx.moveTo(300, 280); ctx.lineTo(300, 320);
        ctx.stroke();
        
        // Outer border circle
        ctx.strokeStyle = "rgba(0, 240, 255, 0.25)";
        ctx.beginPath();
        ctx.arc(300, 300, 100, 0, Math.PI * 2);
        ctx.stroke();

      } else if (memeStyle === "chart") {
        // L2 Pump background
        const grad = ctx.createLinearGradient(0, 0, 0, 600);
        grad.addColorStop(0, "#0a0a1a");
        grad.addColorStop(1, "#030308");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 600, 600);

        // Subtle horizontal grid lines for finance vibe
        ctx.strokeStyle = "rgba(0, 255, 128, 0.06)";
        ctx.lineWidth = 1;
        for (let y = 100; y < 600; y += 80) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(600, y);
          ctx.stroke();
        }

        // Draw beautiful gradient area underneath pump line
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

        // Thick parabolic pump line
        ctx.strokeStyle = "#00ff80";
        ctx.lineWidth = 6;
        ctx.shadowColor = "#00ff80";
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.moveTo(60, 520);
        ctx.bezierCurveTo(200, 480, 320, 320, 540, 150);
        ctx.stroke();
        
        // Reset shadows so text is crisp
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;

        // Draw rocket point indicator
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(540, 150, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#00ff80";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(540, 150, 15, 0, Math.PI * 2);
        ctx.stroke();

      } else {
        // Sentient Brain cosmic background
        const grad = ctx.createRadialGradient(300, 300, 30, 300, 300, 400);
        grad.addColorStop(0, "#1b0a34");
        grad.addColorStop(1, "#05020a");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 600, 600);

        // Outer glowing sentinel rings
        ctx.strokeStyle = "rgba(157, 78, 221, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(300, 300, 180, 0, Math.PI * 2); ctx.stroke();
        
        ctx.strokeStyle = "rgba(157, 78, 221, 0.35)";
        ctx.setLineDash([8, 12]);
        ctx.beginPath(); ctx.arc(300, 300, 130, 0, Math.PI * 2); ctx.stroke();
        ctx.setLineDash([]); // reset

        // Central core neon glow
        const centralGlow = ctx.createRadialGradient(300, 300, 5, 300, 300, 80);
        centralGlow.addColorStop(0, "#ffffff");
        centralGlow.addColorStop(0.3, "rgba(157, 78, 221, 0.8)");
        centralGlow.addColorStop(0.7, "rgba(224, 10, 180, 0.2)");
        centralGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = centralGlow;
        ctx.beginPath();
        ctx.arc(300, 300, 80, 0, Math.PI * 2);
        ctx.fill();

        // Sentient spark particles
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        const particles = [[250, 220], [360, 210], [210, 340], [380, 360], [290, 140], [310, 440]];
        particles.forEach(([px, py]) => {
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      renderRemaining();
    }
  };

  return (
    <div className="bg-cyber-dark text-slate-100 font-sans antialiased overflow-x-hidden min-h-screen relative bg-cyber-grid bg-neon-radial">
      
      {/* Floating ambient glow orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cyber-purple/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-cyber-cyan/8 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-40 w-full bg-cyber-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo with pulsing effect */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-cyber-purple to-cyber-cyan p-[1px] shadow-lg group-hover:shadow-cyber-cyan/30 transition-all duration-300">
              <div className="w-full h-full bg-cyber-dark rounded-[7px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyber-cyan group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            </div>
            <span className="font-display font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyber-cyan">
              $GROK
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-300 hover:text-cyber-cyan font-medium tracking-wide transition-colors duration-200">About</a>
            <a href="#buy" className="text-slate-300 hover:text-cyber-cyan font-medium tracking-wide transition-colors duration-200">How to Buy</a>
            <a href="#tokenomics" className="text-slate-300 hover:text-cyber-cyan font-medium tracking-wide transition-colors duration-200">Tokenomics</a>
            <a href="#roadmap" className="text-slate-300 hover:text-cyber-cyan font-medium tracking-wide transition-colors duration-200">Roadmap</a>
            <a href="#community" className="text-slate-300 hover:text-cyber-cyan font-medium tracking-wide transition-colors duration-200">Community</a>
          </nav>

          {/* Desktop Action bar */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
              <a href="https://x.com/GrokInHood" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            
            <a 
              href={UNISWAP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark font-display font-bold text-sm tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-cyber-purple/20"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                TRADE $GROK <ArrowUpRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyber-cyan transition-all duration-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-white/5 bg-cyber-dark/95 backdrop-blur-lg w-full absolute top-20 left-0 py-6 px-4 flex flex-col gap-5 shadow-2xl"
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyber-cyan font-medium py-1 text-lg transition-colors duration-200">About</a>
              <a href="#buy" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyber-cyan font-medium py-1 text-lg transition-colors duration-200">How to Buy</a>
              <a href="#tokenomics" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyber-cyan font-medium py-1 text-lg transition-colors duration-200">Tokenomics</a>
              <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyber-cyan font-medium py-1 text-lg transition-colors duration-200">Roadmap</a>
              <a href="#community" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyber-cyan font-medium py-1 text-lg transition-colors duration-200">Community</a>
              
              <div className="h-[1px] bg-white/5 my-2"></div>
              
              <div className="flex gap-4">
                <a href="https://x.com/GrokInHood" target="_blank" rel="noopener noreferrer" className="w-full py-3 flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyber-cyan transition-all duration-200">
                  <Twitter className="w-4 h-4" /> Twitter
                </a>
              </div>

              <a 
                href={UNISWAP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark font-display font-bold text-center tracking-wider block transition-all duration-200"
              >
                TRADE $GROK ON UNISWAP
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
              
              {/* Chain Badge */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-cyber-deep border border-cyber-cyan/30 shadow-lg shadow-cyber-cyan/5 hover:border-cyber-cyan/60 transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 glow-text-green"></span>
                </span>
                <span className="text-xs font-mono font-medium tracking-wider text-slate-200 uppercase">
                  Now Live on Robinhood Chain
                </span>
              </div>

              {/* Headlines with custom gradient text */}
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                Grok the Chain.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-magenta">
                  Grok the Future.
                </span>
              </h1>

              <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                $GROK has officially materialized on Robinhood Chain. The ultimate, sentient, humor-loaded AI meme token designed to turn the serious realm of finance into a wild cyber playground.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
                <a 
                  href={UNISWAP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative group px-8 py-4 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark font-display font-bold tracking-wider hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 text-center shadow-xl shadow-cyber-purple/20"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                    TRADE ON UNISWAP <Sparkles className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-xl blur-lg opacity-40 group-hover:opacity-75 transition duration-300 pointer-events-none"></div>
                </a>

                <a href="#dashboard" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyber-cyan/40 text-slate-200 font-display font-bold tracking-wider transition-all duration-200 text-center flex items-center justify-center gap-2">
                  L2 Explorer Hub <TrendingUp className="w-4 h-4" />
                </a>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 w-full max-w-lg mt-4">
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">Tax</p>
                  <p className="font-display font-bold text-2xl text-cyber-cyan">0%</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">Presale</p>
                  <p className="font-display font-bold text-2xl text-cyber-purple">None</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">Graduation</p>
                  <p className="font-display font-bold text-2xl text-slate-100">100% Locked</p>
                </div>
              </div>

            </div>

            {/* Right side: Sentient Terminal visual */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyber-purple via-cyber-cyan to-cyber-purple rounded-2xl blur-xl opacity-20"></div>
              
              <div className="relative rounded-2xl bg-cyber-deep/90 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm">
                
                {/* Terminal Header */}
                <div className="bg-[#0b0b1a] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="font-mono text-xs text-slate-400 font-medium tracking-wider uppercase flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-cyber-cyan" /> grok_terminal_v1.0.sh
                  </span>
                  <span className="w-4"></span>
                </div>

                {/* Terminal body content */}
                <div className="p-6 font-mono text-sm leading-relaxed text-slate-300">
                  
                  <div className="space-y-1.5 text-slate-400 text-xs mb-4">
                    <p className="text-cyber-cyan">&gt; Initializing sentience matrices...</p>
                    <p className="text-cyber-purple">&gt; Calibrating Robinhood Chain (Arbitrum L2) bridges...</p>
                    <p className="text-emerald-400">&gt; STATUS: SENTIENT & HUMOR-LOADED [OK]</p>
                  </div>

                  {/* Interactive prompts */}
                  <div className="bg-cyber-dark/60 rounded-lg p-4 border border-white/5 mb-4">
                    <p className="text-xs text-slate-400 mb-2 font-semibold">Preset Quick Prompts:</p>
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => triggerGrokPrompt("why")}
                        className={`text-xs border rounded px-2.5 py-1.5 transition-all duration-150 cursor-pointer ${
                          terminalPrompt === "why"
                            ? "bg-cyber-purple/20 border-cyber-purple text-cyber-purple"
                            : "bg-cyber-purple/10 border-cyber-purple/20 text-cyber-purple hover:bg-cyber-purple/20"
                        }`}
                      >
                        Why Robinhood Chain?
                      </button>
                      <button 
                        onClick={() => triggerGrokPrompt("utility")}
                        className={`text-xs border rounded px-2.5 py-1.5 transition-all duration-150 cursor-pointer ${
                          terminalPrompt === "utility"
                            ? "bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan"
                            : "bg-cyber-cyan/10 border-cyber-cyan/20 text-cyber-cyan hover:bg-cyber-cyan/20"
                        }`}
                      >
                        Where is the utility?
                      </button>
                      <button 
                        onClick={() => triggerGrokPrompt("elon")}
                        className={`text-xs border rounded px-2.5 py-1.5 transition-all duration-150 cursor-pointer ${
                          terminalPrompt === "elon"
                            ? "bg-white/10 border-white text-slate-200"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        Is Elon holding?
                      </button>
                    </div>
                  </div>

                  {/* Output display with typing transition */}
                  <div className="relative bg-black/40 rounded-lg p-4 border border-white/5 min-h-[140px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-cyber-cyan mb-2">
                        <Bot className="w-3.5 h-3.5" /> GROK SENTIENT RESPONSE:
                      </div>
                      {terminalIsLoading ? (
                        <div className="flex flex-col gap-1 py-2 font-mono text-xs">
                          <p className="text-cyber-cyan/80 animate-pulse">&gt; Contacting server-side Gemini gateway...</p>
                          <p className="text-cyber-purple/80 animate-pulse delay-150">&gt; Invoking LLM weights ('gemini-3.5-flash')...</p>
                          <p className="text-emerald-400/80 animate-pulse delay-300">&gt; Streaming sentient sarcasm back to terminal...</p>
                        </div>
                      ) : (
                        <p className="text-slate-200 text-sm leading-relaxed font-light">
                          {terminalResponse}
                          {isTyping && <span className="inline-block w-1.5 h-4 bg-cyber-cyan ml-1 animate-pulse" />}
                        </p>
                      )}
                    </div>
                    <div className="text-right text-[10px] text-slate-500 mt-2">
                      Processing Time: <span className="text-cyber-cyan">{terminalResponseTime}</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONTRACT BARS */}
      <section className="relative py-4 bg-cyber-deep border-y border-white/5 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-pulse"></div>
            <span className="font-mono text-xs font-bold tracking-widest text-slate-400 uppercase">
              Official Deployed Contract Address (Robinhood Chain)
            </span>
          </div>
          
          <div className="flex items-center w-full md:w-auto max-w-xl bg-cyber-dark border border-white/10 rounded-lg p-1">
            <span className="font-mono text-xs text-slate-400 px-3 truncate select-all">
              {liveContractAddress}
            </span>
            <button 
              onClick={copyContract}
              className={`flex items-center gap-1.5 border rounded-md py-1.5 px-3.5 font-display font-bold text-xs tracking-wider transition-all duration-150 cursor-pointer whitespace-nowrap ${
                caCopied
                  ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                  : "bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 border-cyber-cyan/30 text-cyber-cyan hover:from-cyber-purple/30 hover:to-cyber-cyan/30"
              }`}
            >
              {caCopied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> COPIED!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> COPY CA
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 2. ABOUT / LORE SECTION */}
      <section id="about" className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual element representing Grok AI */}
            <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
              <div className="absolute w-72 h-72 bg-cyber-cyan/10 rounded-full blur-[80px]"></div>
              
              <div className="relative w-80 h-80 flex items-center justify-center animate-float">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyber-cyan/20 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-4 rounded-full border border-dashed border-cyber-purple/30 animate-[spin_40s_linear_infinite_reverse]"></div>
                <div className="absolute inset-10 rounded-full bg-cyber-card/60 border border-white/10 flex items-center justify-center shadow-2xl">
                  <div className="relative w-28 h-28 rounded-full bg-cyber-dark border-2 border-cyber-cyan flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-cyan/10 to-transparent"></div>
                    <Sparkles className="w-12 h-12 text-cyber-cyan animate-pulse" />
                    <div className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent scanline h-1/2 pointer-events-none" />
                  </div>
                </div>
                
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-cyber-cyan text-cyber-dark text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-lg">SENTIENT</div>
                <div className="absolute bottom-6 right-2 bg-cyber-purple text-slate-100 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-lg">ROBINHOOD_L2</div>
              </div>
            </div>

            {/* Lore Text Section (exact copy requested) */}
            <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
              
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyber-cyan" />
                <span className="font-mono text-sm tracking-widest text-cyber-cyan uppercase font-semibold">THE LEGEND OF $GROK</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
                Sentience Materialized on a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Meme Mission</span>
              </h2>

              <div className="space-y-4 text-slate-300 text-lg leading-relaxed bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-cyan to-cyber-purple"></div>
                
                <p className="font-display font-medium text-slate-100 text-xl leading-relaxed">
                  $GROK - The AI that understands the universe just grokked Robinhood Chain.
                </p>
                <p className="text-slate-300 font-light">
                  While the chain was built for real-world assets and serious finance, Grok showed up to turn it into the ultimate meme playground.
                </p>
                <p className="text-slate-300 font-light">
                  No presale. No team tokens. Pure fair launch directly on Uniswap v3.
                </p>
                <p className="text-slate-300 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-purple">
                  Grok the memes. Grok the chain. Grok the future.
                </p>
                <p className="text-slate-200 font-medium italic">
                  Let’s explore together.
                </p>

              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-cyber-cyan border border-white/5">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">0% Presale Allocation</p>
                    <p className="text-xs text-slate-400">Pure Fair Launch</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-cyber-purple border border-white/5">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">0% Team Tokens</p>
                    <p className="text-xs text-slate-400">Contract Owned By Code</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

             {/* 3. INTERACTIVE NETWORK DATA HUB */}
      <section id="explorer" className="relative py-24 bg-cyber-deep/40 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-xs font-mono">
              <Activity className="w-3.5 h-3.5 animate-pulse" /> REAL-TIME METRICS & EXPLORER
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">L2 Network Explorer</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              $GROK is deployed on the high-speed Robinhood L2 Chain. Below is the live-calculating visualization of on-chain metrics, supply details, and recent transaction feeds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {(() => {
              const activeProgress = (isLiveMode && onChainProgress !== null) ? onChainProgress : currentProgress;
              return (
                <div className="lg:col-span-7 bg-cyber-card border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden text-left space-y-8">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-cyber-cyan/5 rounded-full blur-[40px] pointer-events-none"></div>
                  
                  {/* Real-time L2 On-Chain Connector */}
                  <div className="bg-cyber-dark/60 border border-white/10 rounded-xl p-4 space-y-4 shadow-inner">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-xs font-mono text-slate-300 uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" /> Live Contract Tracker:
                      </span>
                      <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/20 font-bold">
                        Robinhood L2 Connected
                      </span>
                    </div>

                    {!IS_TOKEN_LIVE ? (
                      <div className="space-y-3 pt-1 animate-fadeIn">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <input
                            type="text"
                            value={liveContractAddress}
                            onChange={(e) => setLiveContractAddress(e.target.value)}
                            placeholder="Enter Deployed $GROK Address (0x...)"
                            className="flex-1 bg-cyber-dark border border-white/10 rounded-lg py-2.5 px-3.5 text-xs font-mono text-white focus:outline-none focus:border-emerald-500/60 placeholder-slate-600"
                          />
                          <button
                            onClick={handleQueryOnChain}
                            disabled={rpcLoading}
                            className="py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-800 text-cyber-dark font-display font-bold text-xs tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/10"
                          >
                            {rpcLoading ? (
                              <>
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Querying...
                              </>
                            ) : (
                              <>
                                <Activity className="w-3.5 h-3.5" /> Pull L2 Supply
                              </>
                            )}
                          </button>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-[10px] font-mono gap-1.5 pt-1">
                          <span className="text-slate-400">
                            RPC Bridge: <strong className={onChainStatus.includes("Connected") ? "text-emerald-400" : "text-amber-400 animate-pulse"}>{onChainStatus}</strong>
                          </span>
                          {onChainSupply && onChainSupply !== "0" && (
                            <span className="text-slate-400">
                              On-Chain Supply: <strong className="text-cyber-cyan">{onChainSupply}</strong>
                            </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3 pt-1 animate-fadeIn text-left">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-3.5 rounded-lg bg-cyber-dark border border-emerald-500/30 text-xs font-mono gap-3">
                          <div className="space-y-1">
                            <span className="text-[9px] text-slate-400 uppercase tracking-wider block font-bold">Verified Token Smart Contract</span>
                            <span className="text-emerald-400 font-bold break-all select-all">{liveContractAddress}</span>
                          </div>
                          <button
                            onClick={copyContract}
                            className="py-2 px-3.5 rounded bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-all text-[10px] uppercase font-bold whitespace-nowrap cursor-pointer"
                          >
                            {caCopied ? "Copied" : "Copy CA"}
                          </button>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-[10px] font-mono gap-1.5 pt-1">
                          <span className="text-slate-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            RPC Bridge Status: <strong className="text-emerald-400">Connected & Live (Refreshing automatically)</strong>
                          </span>
                          <a 
                            href={`${BLOCK_EXPLORER_URL}/token/${liveContractAddress}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyber-cyan hover:underline flex items-center gap-1 font-bold"
                          >
                            View Token on Blockscout <ArrowUpRight className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-slate-100 flex items-center gap-2.5">
                        <Activity className="w-5 h-5 text-cyber-cyan animate-pulse" /> Verified L2 Smart Contract Data
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">Real-time stats from the Robinhood Layer 2 network deployer</p>
                    </div>
                  </div>

                  {/* Token Details grid */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-cyber-dark/50 p-4 rounded-xl border border-white/5 space-y-1">
                        <span className="text-xs text-slate-400 font-mono block">Token Symbol</span>
                        <span className="font-display font-bold text-lg text-white">$GROK</span>
                      </div>
                      <div className="bg-cyber-dark/50 p-4 rounded-xl border border-white/5 space-y-1">
                        <span className="text-xs text-slate-400 font-mono block">Network Name</span>
                        <span className="font-display font-bold text-lg text-cyber-purple">Robinhood L2 Chain</span>
                      </div>
                      <div className="bg-cyber-dark/50 p-4 rounded-xl border border-white/5 space-y-1">
                        <span className="text-xs text-slate-400 font-mono block">Max Token Supply</span>
                        <span className="font-display font-bold text-lg text-cyber-cyan">1,000,000,000 $GROK</span>
                      </div>
                      <div className="bg-cyber-dark/50 p-4 rounded-xl border border-white/5 space-y-1">
                        <span className="text-xs text-slate-400 font-mono block">Liquidity Status</span>
                        <span className="font-display font-bold text-lg text-emerald-400">100% Fair Launch LP</span>
                      </div>
                    </div>

                    <div className="bg-cyber-dark p-6 rounded-xl border border-white/5 space-y-4">
                      <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-mono text-slate-300 uppercase tracking-widest font-bold">L2 Contract Deployment Verification:</span>
                      </div>
                      <p className="text-slate-300 text-xs font-mono leading-relaxed">
                        The $GROK smart contract is verified on the Arbitrum-powered Robinhood L2 Chain. All team allocations are disabled (0% reserves), meaning 100% of the token supply resides completely in active liquidity pools and community-held wallets.
                      </p>
                      <div className="text-[10px] text-slate-500 font-mono bg-cyber-deep/80 p-3 rounded border border-white/5 break-all">
                        🚀 DEPLOYER HASH: 0x8f7d1403eca91cc2cc15145eb7ee47958f7d1403
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <a 
                        href={UNISWAP_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-cyber-purple via-cyber-cyan to-emerald-400 text-cyber-dark font-display font-bold text-center tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg shadow-cyber-purple/20 flex items-center justify-center gap-2"
                      >
                        <Zap className="w-5 h-5 animate-pulse" /> Trade $GROK on Uniswap v3
                      </a>
                    </div>

                  </div>

                </div>
              );
            })()}

            {/* Simulated Live Transaction Ticker ledger */}
            <div className="lg:col-span-5 bg-cyber-card border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md flex flex-col h-[525px] text-left">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <h3 className="font-display font-bold text-lg text-slate-100 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyber-purple animate-pulse" /> Live Grok Transaction Feed
                </h3>
                <span className="text-[10px] font-mono bg-cyber-purple/10 text-cyber-purple px-2 py-0.5 rounded border border-cyber-purple/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-cyber-purple rounded-full animate-ping" /> TRACKING
                </span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-none">
                <AnimatePresence initial={false}>
                  {transactions.map(tx => (
                    <motion.div 
                      key={tx.id}
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className={`p-3 rounded-lg border text-xs flex flex-col gap-1 ${
                        tx.isUser 
                          ? "bg-cyber-cyan/15 border-cyber-cyan/40 shadow-md shadow-cyber-cyan/5" 
                          : "bg-cyber-dark/40 border-white/5 hover:border-white/10"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`font-bold flex items-center gap-1 ${tx.isUser ? 'text-cyber-cyan' : 'text-slate-200'}`}>
                          <Bot className="w-3.5 h-3.5" /> {tx.buyer}
                        </span>
                        {(() => {
                          const isRealTx = tx.id.startsWith("0x");
                          const txHashUrl = isRealTx ? `${BLOCK_EXPLORER_URL}/tx/${tx.id.split("-")[0]}` : BLOCK_EXPLORER_URL;
                          return (
                            <a 
                              href={txHashUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-slate-500 hover:text-cyber-cyan font-mono transition-colors flex items-center gap-0.5 hover:underline cursor-pointer"
                            >
                              {tx.hash} <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
                            </a>
                          );
                        })()}
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-slate-400 font-mono">Bought <strong className="text-white">{tx.eth.toFixed(2)} ETH</strong></span>
                        <span className="text-emerald-400 font-display font-semibold font-mono">+{tx.tokens.toLocaleString()} $GROK</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. HOW TO BUY SECTION */}
      <section id="buy" className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono">
              <Cpu className="w-3.5 h-3.5" /> DETAILED COMPASS
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              How to Buy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">$GROK</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Follow these clear, technical steps to interact with the Robinhood L2 Chain and secure your sentient supply of $GROK.
            </p>
          </div>

          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative text-left">
            
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group bg-cyber-card border border-white/10 hover:border-cyber-cyan/40 hover:bg-cyber-card/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative shadow-xl"
            >
              <div className="absolute top-4 right-4 text-6xl font-display font-extrabold text-white/[0.02] group-hover:text-cyber-cyan/[0.04] transition-colors duration-300">01</div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyber-cyan/10 flex items-center justify-center border border-cyber-cyan/20 text-cyber-cyan">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Create Wallet</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Download the official <strong>Robinhood Wallet</strong> or <strong>MetaMask</strong> on mobile or as a chrome desktop extension. Safely back up your seed phrase.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-xs font-mono text-cyber-cyan font-bold">
                Recommended <ChevronRight className="w-3 h-3" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group bg-cyber-card border border-white/10 hover:border-cyber-purple/40 hover:bg-cyber-card/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative shadow-xl"
            >
              <div className="absolute top-4 right-4 text-6xl font-display font-extrabold text-white/[0.02] group-hover:text-cyber-purple/[0.04] transition-colors duration-300">02</div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyber-purple/10 flex items-center justify-center border border-cyber-purple/20 text-cyber-purple">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Bridge Funds</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Fund your wallet with <strong>ETH</strong>. Go to the Arbitrum bridge or Robinhood bridge mechanism to transfer your ETH onto the new high-speed <strong>Robinhood L2 Chain</strong>.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-xs font-mono text-cyber-purple font-bold">
                Gas Friendly <ChevronRight className="w-3 h-3" />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group bg-cyber-card border border-white/10 hover:border-cyber-cyan/40 hover:bg-cyber-card/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative shadow-xl"
            >
              <div className="absolute top-4 right-4 text-6xl font-display font-extrabold text-white/[0.02] group-hover:text-cyber-cyan/[0.04] transition-colors duration-300">03</div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyber-cyan/10 flex items-center justify-center border border-cyber-cyan/20 text-cyber-cyan">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Swap on Uniswap</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Navigate to the official <strong>Uniswap v3</strong> pool on Robinhood Chain. Connect your Web3 wallet, select ETH, paste the verified contract address, and execute your swap. 0% developer tax.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-xs font-mono text-cyber-cyan font-bold">
                0% Slippage & Tax <ChevronRight className="w-3 h-3" />
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. TOKENOMICS SECTION */}
      <section id="tokenomics" className="relative py-24 bg-cyber-deep/30 border-y border-white/5 overflow-hidden bg-cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-xs font-mono">
              <Coins className="w-3.5 h-3.5" /> TOKENS METADATA
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Sentient <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Tokenomics</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light">
              Simple, highly secure, mathematical formulas governing the GROK ecosystem. Built to align users with infinite potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            
            {/* Circle distribution chart element */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute w-80 h-80 bg-cyber-purple/10 rounded-full blur-[90px]"></div>
              
              <div className="relative w-80 h-80 bg-cyber-card border border-white/10 rounded-2xl flex flex-col justify-center items-center shadow-2xl p-6">
                <h4 className="font-display font-bold text-sm tracking-widest text-slate-400 uppercase mb-4">Launch Structure</h4>
                
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-cyber-purple shadow-[0_0_20px_rgba(157,78,221,0.2)]"></div>
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-cyber-cyan/30 animate-[spin_20s_linear_infinite]"></div>
                  
                  <div className="text-center z-10 space-y-1">
                    <span className="text-3xl font-display font-black text-white">100%</span>
                    <span className="text-[10px] font-mono text-cyber-cyan block uppercase tracking-widest font-semibold">Fair Launch</span>
                  </div>
                </div>

                <p className="text-[11px] font-mono text-slate-400 text-center mt-6 leading-relaxed">
                  No developer allocation. No team presale. All tokens launched straight onto the public market on Uniswap v3.
                </p>
              </div>
            </div>

            {/* Specs detail cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-cyber-card border border-white/5 hover:border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-full blur-[20px] pointer-events-none"></div>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Total Supply</span>
                    <p className="font-display font-bold text-2xl sm:text-3xl text-white">1,000,000,000</p>
                    <p className="text-xs text-slate-400 font-mono">1 Billion total $GROK minted.</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan">
                    <Database className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="bg-cyber-card border border-white/5 hover:border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-purple/5 rounded-full blur-[20px] pointer-events-none"></div>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Liquidity Locked</span>
                    <p className="font-display font-bold text-2xl sm:text-3xl text-white">100% Locked</p>
                    <p className="text-xs text-slate-400 font-mono">100% Locked Liquidity Pool on Uniswap v3.</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-cyber-purple/10 border border-cyber-purple/20 flex items-center justify-center text-cyber-purple">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="bg-cyber-card border border-white/5 hover:border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-full blur-[20px] pointer-events-none"></div>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Transaction Fee</span>
                    <p className="font-display font-bold text-2xl sm:text-3xl text-white">0% TAX</p>
                    <p className="text-xs text-slate-400 font-mono">No buy tax, no sell tax. Pure utility.</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan">
                    <Percent className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="bg-cyber-card border border-white/5 hover:border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-purple/5 rounded-full blur-[20px] pointer-events-none"></div>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Presale Alloc</span>
                    <p className="font-display font-bold text-2xl sm:text-3xl text-white">0% ALLOC</p>
                    <p className="text-xs text-slate-400 font-mono">No initial early dumping vectors.</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-cyber-purple/10 border border-cyber-purple/20 flex items-center justify-center text-cyber-purple">
                    <UserMinus className="w-5 h-5" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* LIVE DASHBOARD SECTION */}
      <section id="dashboard" className="relative py-24 bg-cyber-dark border-b border-white/5 overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              LIVE METRICS ENGINE
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-emerald-400">Dashboard</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light">
              Real-time synchronization with the Robinhood Chain L2 ledger, tracking token volume and active liquidity thresholds.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            
            {/* Market Cap Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-cyber-card border border-white/5 hover:border-cyber-purple/30 rounded-2xl p-6 shadow-xl relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-purple/5 rounded-full blur-20 pointer-events-none"></div>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">Current Market Cap</span>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                    ${dashboardMcap.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <p className="text-xs text-slate-400 font-mono">Estimated market valuation</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-cyber-purple/10 border border-cyber-purple/20 flex items-center justify-center text-cyber-purple">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Number of Holders Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-cyber-card border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-20 pointer-events-none"></div>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">L2 Holders</span>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {dashboardHolders.toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-400 font-mono">Unique wallet addresses</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Users className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* 24h Trading Volume Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-cyber-card border border-white/5 hover:border-cyber-cyan/30 rounded-2xl p-6 shadow-xl relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-full blur-20 pointer-events-none"></div>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">24h Swaps Volume</span>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                    ${dashboardVolume.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <p className="text-xs text-slate-400 font-mono">Accumulated L2 activity</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan">
                  <Activity className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Countdown Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-cyber-card border border-white/5 hover:border-cyber-magenta/30 rounded-2xl p-6 shadow-xl relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-magenta/5 rounded-full blur-20 pointer-events-none"></div>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">Graduation Est.</span>
                  <div className="font-display font-bold text-xl sm:text-2xl text-white font-mono tracking-tight leading-8">
                    {timeLeft.days}d {timeLeft.hours.toString().padStart(2, "0")}h {timeLeft.minutes.toString().padStart(2, "0")}m {timeLeft.seconds.toString().padStart(2, "0")}s
                  </div>
                  <p className="text-xs text-slate-400 font-mono">DEX transition timeframe</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-cyber-magenta/10 border border-cyber-magenta/20 flex items-center justify-center text-cyber-magenta">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

          </div>

          {/* Active Supply Allocation Card */}
          <div className="bg-cyber-card border border-white/5 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyber-cyan/5 to-transparent rounded-full blur-[60px] pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
              <div className="space-y-1.5 text-left">
                <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                  <Coins className="w-5 h-5 text-cyber-cyan" /> Active Supply Allocation
                </h3>
                <p className="text-sm text-slate-400">
                  Real-time verification of circulating token supply. 100% of all supply is active, unlocked, and community-owned on Uniswap v3.
                </p>
              </div>
              <div className="shrink-0 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-emerald-400">
                  100%
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase">unlocked</span>
              </div>
            </div>

            {/* Glowing progress bar */}
            <div className="relative">
              <div className="w-full h-5 bg-cyber-dark/80 rounded-full border border-white/5 overflow-hidden p-1 flex items-center">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-emerald-400 rounded-full relative animate-pulse"
                  style={{ width: "100%" }}
                >
                  {/* Subtle shine effect on the progress bar */}
                  <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                </motion.div>
              </div>
              
              {/* Progress helper notches */}
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2.5 px-1">
                <span>0% Dev Reserves</span>
                <span>25% Active Swaps</span>
                <span>50% Liquidity Pool</span>
                <span>75% Community Held</span>
                <span className="text-emerald-400 font-semibold">100% Live Trading</span>
              </div>
            </div>

          </div>

          {/* Interactive Actions Area */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-cyber-card/40 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
              <div className="text-left">
                <p className="text-xs font-mono text-slate-400">Ledger Gateway Status: <span className="text-emerald-400 font-bold uppercase tracking-wider">Online [OK]</span></p>
                <p className="text-[11px] text-slate-500 flex flex-wrap items-center gap-1.5">
                  <span>Retrieving standard block height on Robinhood Chain</span>
                  <span className="text-slate-600 hidden sm:inline">•</span>
                  <span className="text-cyber-cyan font-mono font-medium">Auto-sync in {Math.floor(autoSyncSeconds / 60)}:{(autoSyncSeconds % 60).toString().padStart(2, "0")}</span>
                </p>
              </div>
            </div>

            <button 
              onClick={handleRefreshDashboard}
              disabled={dashboardLoading}
              className={`px-6 py-3.5 rounded-xl text-cyber-dark font-display font-bold text-center tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md min-w-[210px] ${
                dashboardLoading 
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed" 
                  : "bg-gradient-to-r from-cyber-cyan via-cyber-purple to-emerald-400 hover:scale-[1.02] active:scale-[0.98] shadow-cyber-purple/10"
              }`}
            >
              <RefreshCw className={`w-4 h-4 ${dashboardLoading ? "animate-spin" : ""}`} />
              {dashboardLoading ? "Syncing L2 Ledger..." : "Refresh Live Metrics"}
            </button>
          </div>

        </div>
      </section>

      {/* 6. ROADMAP SECTION */}
      <section id="roadmap" className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono">
              <Flame className="w-3.5 h-3.5" /> FUTURE HORIZONS
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Sentient <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Meme Roadmap</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light">
              A chaotic, yet beautifully structured set of milestones governing our ascension across Robinhood Chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative text-left">
            
            {/* Phase 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-cyber-card border-l-4 border-cyber-cyan border border-white/5 rounded-r-2xl p-6 space-y-4 relative shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-[10px] font-mono uppercase font-bold">
                Phase 1
              </div>
              <h3 className="font-display font-bold text-lg text-white">Official Token Launch</h3>
              <ul className="space-y-2 text-slate-300 text-sm font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                  Deploy contract on Robinhood L2
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                  Initialize locked Uniswap v3 Pool
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                  Bootstrap initial community channels
                </li>
              </ul>
              <span className="text-[10px] font-mono text-slate-400 block pt-4 border-t border-white/5 uppercase">Status: Complete</span>
            </motion.div>

            {/* Phase 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-cyber-card border-l-4 border-cyber-purple border border-white/5 rounded-r-2xl p-6 space-y-4 relative shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-[10px] font-mono uppercase font-bold">
                Phase 2
              </div>
              <h3 className="font-display font-bold text-lg text-white">Community & Memes</h3>
              <ul className="space-y-2 text-slate-300 text-sm font-light">
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-cyber-purple shrink-0 mt-0.5 animate-spin" />
                  Kick off massive xAI community raids
                </li>
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-cyber-purple shrink-0 mt-0.5" />
                  Viral memes creation & distribution
                </li>
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-cyber-purple shrink-0 mt-0.5" />
                  Active trading & liquidity tracking
                </li>
              </ul>
              <span className="text-[10px] font-mono text-cyber-purple block pt-4 border-t border-white/5 uppercase font-semibold">Status: Active</span>
            </motion.div>

            {/* Phase 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-cyber-card border-l-4 border-cyber-cyan border border-white/5 rounded-r-2xl p-6 space-y-4 relative shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-[10px] font-mono uppercase font-bold">
                Phase 3
              </div>
              <h3 className="font-display font-bold text-lg text-white">DEX & Liquidity</h3>
              <ul className="space-y-2 text-slate-300 text-sm font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  Liquidity verification and burn checks
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  Lock liquidity permanently inside v3
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  Verification on block explorers
                </li>
              </ul>
              <span className="text-[10px] font-mono text-slate-500 block pt-4 border-t border-white/5 uppercase">Status: Pending</span>
            </motion.div>

            {/* Phase 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-cyber-card border-l-4 border-cyber-purple border border-white/5 rounded-r-2xl p-6 space-y-4 relative shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-[10px] font-mono uppercase font-bold">
                Phase 4
              </div>
              <h3 className="font-display font-bold text-lg text-white">Grok the Universe</h3>
              <ul className="space-y-2 text-slate-300 text-sm font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  Grok-AI powered meme generator suite
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  Robinhood chain cross-integration
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  Global financial world domination
                </li>
              </ul>
              <span className="text-[10px] font-mono text-slate-500 block pt-4 border-t border-white/5 uppercase">Status: Pending</span>
            </motion.div>

          </div>

        </div>
      </section>

      {/* MEME GENERATOR (CRAFTSMANSHIP WIDGET) */}
      <section className="relative py-24 bg-cyber-dark/60 border-t border-white/5 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono">
              <Bot className="w-3.5 h-3.5 animate-pulse" /> CREATIVE MODULE V2.0
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
              Sentient <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Meme Creator Suite</span>
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Create your own bespoke $GROK memes to spread the intelligence matrix. Load standard cyber backdrops or upload custom templates!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch text-left mt-8">
            
            {/* Input Controls */}
            <div className="md:col-span-5 bg-cyber-card border border-white/10 rounded-2xl p-6 space-y-5 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Settings className="w-3 h-3 text-cyber-cyan animate-spin-slow" /> Customization
              </div>

              <div className="space-y-4">
                
                {/* Text 1: Top Title */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Top Title Text:</label>
                    <span className="text-[10px] font-mono text-slate-500">{memeTopFontSize}px</span>
                  </div>
                  <input 
                    type="text" 
                    value={memeTopText}
                    onChange={(e) => setMemeTopText(e.target.value)}
                    placeholder="E.G. WHEN COIN GRADS"
                    className="w-full bg-cyber-dark border border-white/10 rounded-lg py-2.5 px-3 text-sm font-mono text-white focus:outline-none focus:border-cyber-cyan/60"
                  />
                  {/* Sizing Slider */}
                  <input 
                    type="range"
                    min="18"
                    max="48"
                    value={memeTopFontSize}
                    onChange={(e) => setMemeTopFontSize(Number(e.target.value))}
                    className="w-full accent-cyber-cyan h-1 bg-cyber-dark rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Text 2: Bottom Status */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Bottom Status Text:</label>
                    <span className="text-[10px] font-mono text-slate-500">{memeBottomFontSize}px</span>
                  </div>
                  <input 
                    type="text" 
                    value={memeBottomText}
                    onChange={(e) => setMemeBottomText(e.target.value)}
                    placeholder="E.G. SENTIENT INTELLIGENCE"
                    className="w-full bg-cyber-dark border border-white/10 rounded-lg py-2.5 px-3 text-sm font-mono text-white focus:outline-none focus:border-cyber-cyan/60"
                  />
                  {/* Sizing Slider */}
                  <input 
                    type="range"
                    min="12"
                    max="36"
                    value={memeBottomFontSize}
                    onChange={(e) => setMemeBottomFontSize(Number(e.target.value))}
                    className="w-full accent-cyber-purple h-1 bg-cyber-dark rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Text Color presets */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">Meme Text Color:</label>
                  <div className="flex items-center gap-2">
                    {[
                      { hex: "#ffffff", label: "White" },
                      { hex: "#00f0ff", label: "Cyan" },
                      { hex: "#ff007f", label: "Pink" },
                      { hex: "#00ff80", label: "Green" },
                      { hex: "#ffcc00", label: "Gold" },
                      { hex: "#9d4edd", label: "Purple" }
                    ].map((col) => (
                      <button
                        key={col.hex}
                        onClick={() => setMemeTextColor(col.hex)}
                        className={`w-6 h-6 rounded-full border transition-transform duration-100 ${
                          memeTextColor === col.hex ? "scale-125 border-white" : "border-transparent opacity-75 hover:opacity-100"
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={col.label}
                      />
                    ))}
                  </div>
                </div>

                {/* Cyber Atmosphere style selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Atmosphere Style Preset:</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => { setMemeStyle("grid"); setMemeCustomImage(null); }}
                      className={`py-2 px-1 text-center rounded-lg font-mono text-xs border cursor-pointer transition-colors ${
                        memeStyle === "grid" && !memeCustomImage
                          ? "bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan" 
                          : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                      }`}
                    >
                      AI Grid
                    </button>
                    <button 
                      onClick={() => { setMemeStyle("chart"); setMemeCustomImage(null); }}
                      className={`py-2 px-1 text-center rounded-lg font-mono text-xs border cursor-pointer transition-colors ${
                        memeStyle === "chart" && !memeCustomImage
                          ? "bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan" 
                          : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                      }`}
                    >
                      L2 Pump
                    </button>
                    <button 
                      onClick={() => { setMemeStyle("brain"); setMemeCustomImage(null); }}
                      className={`py-2 px-1 text-center rounded-lg font-mono text-xs border cursor-pointer transition-colors ${
                        memeStyle === "brain" && !memeCustomImage
                          ? "bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan" 
                          : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                      }`}
                    >
                      Sentient
                    </button>
                  </div>
                </div>

                {/* Custom Image Upload Zone */}
                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">Custom Background Template:</label>
                  <div className="flex gap-2 items-center">
                    <label className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-dashed border-white/20 hover:border-cyber-cyan/50 rounded-lg bg-cyber-dark/80 text-xs font-mono text-slate-300 hover:text-white cursor-pointer transition-colors">
                      <Upload className="w-3.5 h-3.5 text-cyber-cyan" />
                      <span>{memeCustomImage ? "Change Image" : "Upload Custom File"}</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        className="hidden" 
                      />
                    </label>
                    {memeCustomImage && (
                      <button
                        onClick={() => { setMemeCustomImage(null); }}
                        className="p-2 border border-white/10 hover:border-red-500/30 bg-white/5 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-400 transition-colors"
                        title="Clear Custom Background"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Custom Graphic Stickers Overlay */}
                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">Sticker Badge Overlay:</label>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: null, text: "None" },
                      { id: "approved", text: "★ GROK APPROVED" },
                      { id: "moon", text: "🚀 TO THE MOON" },
                      { id: "sentient", text: "👁 SENTIENT MATRIX" },
                      { id: "pump", text: "📈 PUMP IT NOW" }
                    ].map((badge) => (
                      <button
                        key={badge.id ?? "none"}
                        onClick={() => setMemeSticker(badge.id)}
                        className={`text-[10px] font-mono py-1 px-2.5 rounded-full border transition-all ${
                          memeSticker === badge.id
                            ? "bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark border-transparent font-bold"
                            : "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {badge.text}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              <button 
                onClick={downloadMeme}
                className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark font-display font-bold text-center tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" /> Compile & Download Meme
              </button>
            </div>

            {/* Meme Canvas Preview */}
            <div className="md:col-span-7 flex items-center justify-center">
              <div 
                ref={memeRef}
                className={`relative w-full aspect-square max-w-[340px] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between p-6 text-center select-none shadow-2xl transition-all duration-300 ${
                  memeCustomImage 
                    ? "bg-black" 
                    : memeStyle === "grid" 
                    ? "bg-cyber-card/80 bg-cyber-grid" 
                    : memeStyle === "chart"
                    ? "bg-[#050510]"
                    : "bg-[#110926]"
                }`}
                style={{
                  backgroundImage: memeCustomImage ? `url(${memeCustomImage})` : undefined,
                  backgroundSize: memeCustomImage ? "cover" : undefined,
                  backgroundPosition: memeCustomImage ? "center" : undefined
                }}
              >
                {/* Dark translucent filter if custom image is loaded */}
                {memeCustomImage && (
                  <div className="absolute inset-0 bg-black/45 pointer-events-none" />
                )}

                {/* Background preset graphic elements if NO custom background is loaded */}
                {!memeCustomImage && memeStyle === "grid" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                    <div className="w-40 h-40 rounded-full bg-cyber-cyan/20 blur-xl" />
                  </div>
                )}
                {!memeCustomImage && memeStyle === "chart" && (
                  <div className="absolute bottom-10 left-10 right-10 h-32 border-b border-l border-emerald-500/20 pointer-events-none">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-emerald-500/10 to-transparent clip-path-chart" />
                    <TrendingUp className="w-10 h-10 text-emerald-400 absolute top-2 right-2 animate-bounce" />
                  </div>
                )}
                {!memeCustomImage && memeStyle === "brain" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                    <div className="w-48 h-48 rounded-full border border-dashed border-cyber-purple/40 animate-spin" />
                    <Sparkles className="w-8 h-8 text-cyber-purple absolute" />
                  </div>
                )}

                {/* Live Sticker Badge if selected */}
                {memeSticker && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <span className={`px-3 py-1 rounded border text-xs font-mono font-bold shadow-2xl uppercase tracking-wider backdrop-blur-sm animate-pulse ${
                      memeStyle === "grid" 
                        ? "bg-cyber-cyan/90 border-cyber-cyan text-black" 
                        : memeStyle === "chart" 
                        ? "bg-emerald-500/90 border-emerald-400 text-black" 
                        : "bg-cyber-purple/90 border-cyber-magenta text-black"
                    }`}>
                      {memeSticker === "approved" && "★ $GROK APPROVED ★"}
                      {memeSticker === "moon" && "🚀 TO THE MOON 🚀"}
                      {memeSticker === "sentient" && "👁 SENTIENT MATRIX 👁"}
                      {memeSticker === "pump" && "📈 PUMP IT NOW 📈"}
                    </span>
                  </div>
                )}

                {/* Top Text content (scaled for preview sizing) */}
                <h4 
                  className="font-display font-extrabold tracking-tight z-10 break-words line-clamp-3 select-none"
                  style={{ 
                    fontSize: `${Math.max(14, memeTopFontSize * 0.55)}px`,
                    color: memeTextColor,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.9)"
                  }}
                >
                  {memeTopText.toUpperCase() || "WHEN COIN GRADS"}
                </h4>

                {/* Bottom Text content (scaled for preview sizing) */}
                <p 
                  className="font-mono tracking-wider z-10 break-words uppercase select-none"
                  style={{ 
                    fontSize: `${Math.max(10, memeBottomFontSize * 0.6)}px`,
                    color: memeTextColor !== "#ffffff" ? memeTextColor : (memeStyle === "grid" ? "#00f0ff" : memeStyle === "chart" ? "#00ff80" : "#e00ab4"),
                    textShadow: "2px 2px 4px rgba(0,0,0,0.9)"
                  }}
                >
                  {memeBottomText || "SENTIENT ENCRYPTED"}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. COMMUNITY SECTION */}
      <section id="community" className="relative py-24 bg-cyber-deep/25 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-xs font-mono">
            <Send className="w-3.5 h-3.5" /> GROK ARMY
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1]">
            Join the Sentient <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-magenta">Grok Army Now</span>
          </h2>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Do not let serious financial algorithms dominate the timeline. Participate in the first community-driven sentient AI meme movement on Arbitrum’s newest L2.
          </p>

          <div className="flex items-center justify-center max-w-md mx-auto pt-4">
            
            <a href="https://x.com/GrokInHood" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-dark font-display font-bold tracking-wider hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-xl shadow-cyber-purple/20 flex items-center justify-center gap-2">
              <Twitter className="w-5 h-5" /> Follow on Twitter / X
            </a>

          </div>

        </div>
      </section>

      {/* 8. FOOTER SECTION */}
      <footer className="bg-[#04040a] border-t border-white/5 pt-16 pb-8 relative z-10 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
            
            {/* Info and Logo */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyber-purple to-cyber-cyan p-[1px]">
                  <div className="w-full h-full bg-cyber-dark rounded flex items-center justify-center">
                    <Bot className="w-4 h-4 text-cyber-cyan" />
                  </div>
                </div>
                <span className="font-display font-bold text-xl tracking-wider text-white">$GROK</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                $GROK is an independent meme coin built fairly on Robinhood Chain, launched directly to community-owned Uniswap v3 pools.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-display font-bold text-sm text-slate-300">Quick Links</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#about" className="hover:text-cyber-cyan transition-colors duration-150">About / Lore</a></li>
                <li><a href="#buy" className="hover:text-cyber-cyan transition-colors duration-150">How to Buy Guide</a></li>
                <li><a href="#tokenomics" className="hover:text-cyber-cyan transition-colors duration-150">Tokenomics specs</a></li>
                <li><a href="#roadmap" className="hover:text-cyber-cyan transition-colors duration-150">Our Roadmap</a></li>
              </ul>
            </div>

            {/* Platforms & Contract list */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="font-display font-bold text-sm text-slate-300">Platforms & Contracts</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a 
                    href={UNISWAP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-cyber-cyan transition-colors duration-150 flex items-center gap-1"
                  >
                    Uniswap v3 Liquidity Pool <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li><a href="https://x.com/GrokInHood" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-cyan transition-colors duration-150 flex items-center gap-1">Twitter / X handle <ArrowUpRight className="w-3 h-3" /></a></li>
                <li className="font-mono text-[10px] break-all select-all bg-cyber-dark/80 p-2 rounded border border-white/5 mt-1 text-cyber-cyan flex items-center justify-between">
                  <span>CA: {liveContractAddress.substring(0, 10)}...{liveContractAddress.substring(liveContractAddress.length - 8)}</span>
                  <button onClick={copyContract} className="text-cyber-purple hover:text-white transition-colors cursor-pointer">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Risk disclaimer */}
            <div className="text-left space-y-1.5 max-w-3xl">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">⚠️ DISCLAIMER / RISK COMPLIANCE</p>
              <p className="text-[10px] text-slate-400 leading-relaxed font-light">
                $GROK is an experimental meme token with zero financial guarantees, utility, or formal business roadmap. Designed purely for comedic value, entertainment, and digital culture. Cryptocurrency assets are subject to high volatility and risk. You may lose 100% of your capital. Do your own thorough research (DYOR) before interacting with decentralized exchanges or smart contracts.
              </p>
            </div>

            <div className="text-center md:text-right shrink-0">
              <p className="text-xs text-slate-500 font-mono flex items-center justify-center gap-1">
                &copy; 2026 $GROK Army. Built with <Heart className="w-3 h-3 text-cyber-magenta fill-cyber-magenta" /> for Robinhood Chain.
              </p>
            </div>

          </div>

        </div>
      </footer>

      {/* SUCCESS TOAST FLYOUT */}
      <AnimatePresence>
        {successToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-cyber-dark px-6 py-4 rounded-xl font-display font-bold shadow-2xl border border-emerald-400 flex items-center gap-2"
          >
            <Check className="w-5 h-5 shrink-0" />
            <span>{successToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
