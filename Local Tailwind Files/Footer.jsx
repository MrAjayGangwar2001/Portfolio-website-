import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2025 Ajay. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm1.5-15h3v3h-3v3h3v3h-3v3h-3v-3h-3v-3h3v-3h-3v-3h3v3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
