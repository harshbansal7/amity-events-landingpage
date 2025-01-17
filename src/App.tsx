import { Calendar, PlusCircle, LogIn, UserPlus, ArrowRight, Linkedin, User, Mail, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] mix-blend-overlay opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/90 via-indigo-600/90 to-indigo-800/90"></div>
        </div>
        
        <nav className="relative container mx-auto px-6 py-6 flex justify-between items-center border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
              <Calendar className="w-8 h-8" />
            </div>
            <span className="text-2xl font-bold tracking-tight">aup.events</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="group px-6 py-3 text-indigo-600 bg-white rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30">
              <span className="flex items-center">
                Login
                <LogIn className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </nav>

        <div className="relative container mx-auto px-6 py-32 sm:py-12 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Your Gateway to<br />
            <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Amity University Events
            </span>
          </h1>
          <p className="text-xl text-indigo-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Participate, host, and manage events seamlessly within the Amity University Punjab community
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30">
              <span className="flex items-center justify-center">
                Register Now
                <UserPlus className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
            <button className="group px-8 py-4 bg-indigo-500/20 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-indigo-500/30 transition-all duration-200 border border-white/10">
              <span className="flex items-center justify-center">
                Login
                <LogIn className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>
          <button className="mt-8 text-indigo-200 hover:text-white transition-colors flex items-center mx-auto group">
            <span className="border-b border-indigo-200/30 group-hover:border-indigo-200">
              Register as External Participant
            </span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-16 container mx-auto px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl -z-10 opacity-70"></div>
        <h2 className="text-4xl font-bold text-center mb-20 text-indigo-950">
            What you can do!
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="group p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-indigo-200/50 group-hover:scale-110 transition-transform duration-300">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-950">Register</h3>
            <p className="text-gray-600 leading-relaxed">
              Sign up with your university credentials to access all features
            </p>
          </div>
          <div className="group p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-indigo-200/50 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-950">Browse Events</h3>
            <p className="text-gray-600 leading-relaxed">
              Discover and participate in various university events
            </p>
          </div>
          <div className="group p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-indigo-200/50 group-hover:scale-110 transition-transform duration-300">
              <PlusCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-950">Host Events</h3>
            <p className="text-gray-600 leading-relaxed">
              Create and manage your own events with ease
            </p>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600">The amazing people who made this platform possible</p>
          </div>

          {/* Creator */}
          <div className="mb-16">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 bg-indigo-100 rounded-full -rotate-6"></div>
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQFmQyoZibMeLg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687975389029?e=1742428800&v=beta&t=FsT7JmYZCMr3ZzAHFaMymqdAq3e_12Yzw0jPlqvhcJs"
                  alt="Harsh Bansal"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Harsh Bansal</h3>
              <p className="text-indigo-600 mb-2">Creator & Lead Developer</p>
              <div className="flex justify-center space-x-3">
                <a href="https://harshmakes.tech/" className="text-gray-400 hover:text-indigo-600">
                  <Globe className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/harshbansal07/" className="text-gray-400 hover:text-indigo-600">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:harshbansal.contact@gmail.com" className="text-gray-400 hover:text-indigo-600">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contributors & Testers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contributor 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Jungbir Singh Hanspal</h4>
                  <p className="text-gray-600 text-sm">Tester</p>
                  <p className="text-indigo-600 text-sm">jungbirhanspal@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Contributor 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Shivansh Pathak</h4>
                  <p className="text-gray-600 text-sm">Tester</p>
                  <p className="text-indigo-600 text-sm">shivansh.pathak777@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Contributor 6 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Vikhyat Gupta</h4>
                  <p className="text-gray-600 text-sm">Tester</p>
                  <p className="text-indigo-600 text-sm">vikhyatgupta61@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Contributor 7 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Tushar Yadav</h4>
                  <p className="text-gray-600 text-sm">Tester</p>
                  <p className="text-indigo-600 text-sm">tushar.yadav16@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Contributor 7 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Chirag Gulati</h4>
                  <p className="text-gray-600 text-sm">Tester</p>
                  <p className="text-indigo-600 text-sm">chiraggulati098@gmail.com</p>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                AUP Events
              </h3>
              <p className="text-sm text-gray-600">
                Making university events accessible and organized.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://harshmakes.tech/" className="text-sm text-gray-600 hover:text-indigo-600">
                    About the Creator
                  </a>
                </li>
                <li>
                  <a href="https://harshmakes.tech/contact" className="text-sm text-gray-600 hover:text-indigo-600">
                    Contact
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-indigo-600">
                    Privacy Policy
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">
                  support@aup.events
                </li>
                {/* <li className="text-sm text-gray-600">
                  harshbansal.contact@gmail.com
                </li> */}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {/* <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </a> */}
                <a href="https://www.linkedin.com/in/harshbansal07/" className="text-gray-400 hover:text-indigo-600">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
                {/* <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </a> */}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Harsh Bansal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;