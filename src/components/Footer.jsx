import { FaFacebookF, FaGithub, FaLinkedinIn,  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Brand & Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-500">
              Car<span className="text-white">Platform</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              আপনার পছন্দের গাড়ি খুঁজে পেতে এবং বুকিং করতে আমরা দিচ্ছি সবচেয়ে সহজ এবং নিরাপদ মাধ্যম। বিশ্বস্ততার সাথে আমরা আছি আপনার পাশে।
            </p>
          </div>

          {/* 2. Quick Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-blue-500 pl-3">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-blue-500 hover:pl-2 transition-all duration-300">Home</Link></li>
              <li><Link href="/explore" className="hover:text-blue-500 hover:pl-2 transition-all duration-300">Explore Cars</Link></li>
              <li><Link href="/add-car" className="hover:text-blue-500 hover:pl-2 transition-all duration-300">List Your Car</Link></li>
              <li><Link href="/my-bookings" className="hover:text-blue-500 hover:pl-2 transition-all duration-300">My Bookings</Link></li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-blue-500 pl-3">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" /> Kishoreganj, Dhaka, BD
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" /> +880 1690-123104
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" /> support@carplatform.com
              </li>
            </ul>
          </div>

          {/* 4. Social Connectivity */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-blue-500 pl-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100071816113262" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 group shadow-lg">
                <FaFacebookF className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/Rahim-Ahmed-10" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group shadow-lg">
                <FaGithub className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/rahimahmed01" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-500 transition-all duration-300 group shadow-lg">
                <FaLinkedinIn className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/rahimahmed_17" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-sky-400 transition-all duration-300 group shadow-lg">
                <BsInstagram  className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 italic">
              সবার আগে আপডেট পেতে আমাদের সোশ্যাল মিডিয়ায় যুক্ত হন।
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-blue-500 font-semibold">Car Platform</span>. All rights reserved by Rahim.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;