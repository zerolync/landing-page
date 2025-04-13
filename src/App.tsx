import React, { useState } from "react";
import { Shield, Coins, Github, Twitter, Mail } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-12 h-10 rounded-[100px] border-2 border-white flex items-center justify-center logo-container">
          <div className="absolute inset-0 logo-circle"></div>
          <div className="logo-bolt">
            <svg
              className="w-6 h-6 text-white relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-2xl font-light tracking-wider">
        <span className="text-white">ZERO</span>
        <span className="text-white">LYNC</span>
      </div>
    </div>
  );
}

function Terminal({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-white/10">
      <div className="flex items-center px-4 py-2 bg-[#2D2D2D] border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="flex-1 text-center text-sm text-white/60">
          zerolync_info.sh
        </div>
      </div>
      <div className="p-6 font-mono text-sm">{children}</div>
    </div>
  );
}

function UnderDevelopmentModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 fade-in">
      <div className="bg-[#1E1E1E] p-8 rounded-2xl border border-white/20 relative max-w-md w-full mx-4">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="w-24 h-24 flex items-center justify-center">
            <svg
              className="w-20 h-20 text-white animate-bolt"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
            </svg>
          </div>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-2xl font-light mb-4">Under Development</h3>
          <p className="text-white/80 mb-6">
            Our team is working hard to bring you the best cross-chain wallet
            experience. Stay tuned!
          </p>
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleActionClick = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <UnderDevelopmentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center fade-in">
        <Logo />
        <div className="flex items-center space-x-8">
          <a
            href="#features"
            className="hover:text-gray-300 transition-colors text-sm tracking-wider"
          >
            Features
          </a>
          <a
            href="#about"
            className="hover:text-gray-300 transition-colors text-sm tracking-wider"
          >
            About
          </a>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm transition-all hover:scale-105 tracking-wider">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center slide-in">
        <h1 className="text-7xl font-light mb-8 tracking-tight">
          Cross-Chain Wallet
          <br />
          Infrastructure
        </h1>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide fade-in">
          Keep your assets on your preferred chain while accessing dApps across
          any blockchain - all with a unified, self-custodial wallet experience.
        </p>
        <div className="flex justify-center space-x-6">
          <button
            onClick={handleActionClick}
            className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full transition-all hover:scale-105 text-sm font-medium tracking-wider"
          >
            Launch App
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://docs.zerolync.xyz/")
            }
            className="border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 px-8 py-3 rounded-full transition-all hover:scale-105 text-sm tracking-wider"
          >
            Read Docs
          </button>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section id="about" className="container mx-auto px-6 py-24">
        <Terminal>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">$</span>
              <span className="text-white">cat why_zerolync.md</span>
            </div>
            <div className="pl-4 space-y-6">
              <div>
                <h3 className="text-white/90 font-semibold mb-2">
                  # The Challenge
                </h3>
                <div className="text-gray-400 space-y-2">
                  <p>
                    Users face significant barriers in cross-chain interactions:
                  </p>
                  <div className="pl-4">
                    <p>- Multiple wallet creation</p>
                    <p>- Complex private key management</p>
                    <p>- Time-consuming bridging processes</p>
                    <p>- Repetitive wallet approvals</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-white/90 font-semibold mb-2">
                  # Our Innovation
                </h3>
                <div className="text-gray-400 space-y-2">
                  <p>Zerolync revolutionizes cross-chain interactions with:</p>
                  <div className="pl-4">
                    <p>- Cross-chain transactions without switching wallets</p>
                    <p>- Secure passkey account creation</p>
                    <p>- Leveraging existing bridge infrastructure</p>
                    <p>- Unified, seamless experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start animate-pulse">
              <span className="text-gray-500 mr-2">$</span>
              <span className="text-white">_</span>
            </div>
          </div>
        </Terminal>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-light text-center mb-16">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
            <Shield
              className="w-12 h-12 text-white mb-6 transform transition-transform group-hover:scale-110"
              strokeWidth={1.5}
            />
            <h3 className="text-xl font-light mb-4 tracking-wider">
              Self-Custodial Security
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Maintain complete control of your assets with our fully
              self-custodial solution, enhanced by secure passkey
              authentication.
            </p>
          </div>
          <div className="feature-card bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
            <Coins
              className="w-12 h-12 text-white mb-6 transform transition-transform group-hover:scale-110"
              strokeWidth={1.5}
            />
            <h3 className="text-xl font-light mb-4 tracking-wider">
              Unified Balance
            </h3>
            <p className="text-gray-400 leading-relaxed">
              View and manage all your cross-chain assets in one place with
              aggregated balances and simplified management.
            </p>
          </div>
          <div className="feature-card bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
            <div className="relative w-12 h-12 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wider">
              Gas-Free Experience
            </h3>
            <p className="text-gray-400 leading-relaxed">
              No native gas fees required - we handle the complexity with
              integrated paymaster and gas station networks.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <Logo />
            <div className="flex items-center space-x-6">
              <a
                href="https://x.com/zero_lync"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-all hover:scale-110"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://github.com/zerolync"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:zerolync@gmail.com"
                className="text-white hover:text-gray-300 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
            <div className="text-gray-400 text-sm tracking-wider">
              © 2025 Zerolync. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
