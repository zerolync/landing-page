import { Mail, Github, Twitter } from "lucide-react";
import Logo from "./Logo";
function Footer() {
  return (
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
  );
}

export default Footer;
