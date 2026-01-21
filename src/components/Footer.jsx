export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="HP House Cleaning Logo"
                className="w-20 h-10 object-contain"
              />
              <span className="text-[1.25rem] font-bold">
                HP House Cleaning
              </span>
            </div>

            <p className="text-gray-400 max-w-sm">
              Making your spaces shine with professional cleaning services since 2015.
            </p>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white">
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Office Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Deep Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Move In / Out
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white">
                  Review
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61565389241957"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2A3072] transition"
              >
                F
              </a>
              <a
                href="https://www.instagram.com/pesantezhilda/reels/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2A3072] transition"
              >
                I
              </a>
            </div>
          </div>
        </div>

      
      </div>
    </footer>
  );
}
