import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bungee font-bold">
              Dev.<span className="text-accent">Portfolio</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus
              qui blanditiis praesentium voluptatum deleniti atque corrupti
              quos dolores et molestias excepturi sint occaecati.
            </p>

            <p className="mt-6 text-lg font-semibold">
              Dev.Portfolio@gmail.com
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Explore Link</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-accent transition">About</li>
              <li className="hover:text-accent transition">Resume</li>
              <li className="hover:text-accent transition">Portfolio</li>
              <li className="hover:text-accent transition">Blog</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">My Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-accent transition">UI/UX Design</li>
              <li className="hover:text-accent transition">Mobile App</li>
              <li className="hover:text-accent transition">Graphics Design</li>
              <li className="hover:text-accent transition">Web Developer</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Follow me</h3>

            {/* Social Icons */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded text-primary bg-accent hover:bg-accent-hover transition">
                <FaFacebookF />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded text-primary bg-accent hover:bg-accent-hover transition">
                <FaTwitter />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded text-primary bg-accent hover:bg-accent-hover transition">
                <FaDribbble />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded text-primary  bg-accent hover:bg-accent-hover transition">
                <FaBehance />
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <HiLocationMarker className="text-accent mt-1" />
                <p>202 Dog Hill Lane Beloit,KS 67420</p>
              </div>

              <div className="flex items-center gap-3">
                <HiPhone className="text-accent" />
                <p>1-800-915-6270</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}