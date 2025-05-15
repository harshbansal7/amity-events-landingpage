import {
  Calendar,
  PlusCircle,
  LogIn,
  UserPlus,
  ArrowRight,
  Linkedin,
  User,
  Mail,
  Globe,
  Github,
  Bell,
  Filter,
  Award,
  BarChart,
  Users,
  QrCode,
  Quote,
} from "lucide-react";
import { useState, useEffect } from "react";
import featuresData from "./data/features.json";

const iconMap = {
  Calendar: Calendar,
  Bell: Bell,
  Filter: Filter,
  Award: Award,
  BarChart: BarChart,
  Users: Users,
  QrCode: QrCode,
  PlusCircle: PlusCircle,
  UserPlus: UserPlus,
  Linkedin: Linkedin,
  User: User,
  Mail: Mail,
  Globe: Globe,
  Github: Github,
  LogIn: LogIn,
  ArrowRight: ArrowRight,
};

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Chirag Gulati",
    quote:
      "AUP Events has made managing events in Amity Punjab effortless! It provides us a hassle free experience, all the way from Registration to Attendance and Reports. Highly recommended!",
    role: "BTech CSE, 3rd Year",
    club: "Technometer Club, AUP",
  },
  {
    id: 2,
    name: "Yashika Arora",
    quote:
      "When I got to know about this I was very happy because its a very unique step and opportunity for us towards organising events and participating in them. It's a great initiative.",
    role: "B.Sc Animation Game Design, 2nd Year",
    club: "Nritya Dance Club, AUP",
  },
  {
    id: 3,
    name: "Aarush Guha Chaudhuri",
    quote:
      "I used the site to host an event. Making and hosting the event was leaps and bounds better than using Google forms. From taking attendance of the participants to easily monitoring participation it's an absolute joy to use!!!",
    role: "B.Com. (Hons.), 2nd Year",
    club: "Technometer Club, AUP",
  },
  // {
  //   id: 4,
  //   name: "Ananya Gupta",
  //   quote: "We've seen a 40% increase in attendance since we started using AUP Events for our workshops. The platform's reach is excellent!",
  //   role: "MSc Biotechnology, 1st Year",
  //   club: "Science Club"
  // },
  // {
  //   id: 5,
  //   name: "Vikram Singh",
  //   quote: "The analytics feature helps us understand what kind of events students prefer. It's been invaluable for our event planning strategy.",
  //   role: "BTech ECE, 3rd Year",
  //   club: "IEEE Student Branch"
  // }
];

function App() {
  // Add auto-scroll functionality for testimonials
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  // Track active feature for the interactive showcase
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  // Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Manually change testimonial
  const goToTestimonial = (index: number) => {
    setActiveTestimonialIndex(index);
  };

  // Change active feature
  const setActiveFeature = (index: number) => {
    setActiveFeatureIndex(index);
  };

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
            <span className="text-2xl font-bold tracking-tight">
              aup.events
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                (window.location.href = "https://app.aup.events/login")
              }
              className="group px-6 py-3 text-indigo-600 bg-white rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
            >
              <span className="flex items-center">
                Login
                <LogIn className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </nav>

        <div className="relative container mx-auto px-6 py-12 md:py-28 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Your Gateway to
            <br />
            <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Amity University Events
            </span>
          </h1>
          <p className="text-xl text-indigo-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Participate, host, and manage events seamlessly within the Amity
            University Punjab community
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() =>
                (window.location.href = "https://app.aup.events/register")
              }
              className="group px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
            >
              <span className="flex items-center justify-center">
                Register Now
                <UserPlus className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
            <button
              onClick={() =>
                (window.location.href = "https://app.aup.events/login")
              }
              className="group px-8 py-4 bg-indigo-500/20 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-indigo-500/30 transition-all duration-200 border border-white/10"
            >
              <span className="flex items-center justify-center">
                Login
                <LogIn className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>
          <button
            onClick={() =>
              (window.location.href =
                "https://app.aup.events/external-register")
            }
            className="mt-8 text-indigo-200 hover:text-white transition-colors flex items-center mx-auto group"
          >
            <span className="border-b border-indigo-200/30 group-hover:border-indigo-200">
              Register as External Participant
            </span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </header>

      {/* Combined Feature Showcase Section - Redesigned */}
      <section className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-40 left-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10 opacity-40"></div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium inline-block mb-3">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 mb-4">
              Power Up Your Campus Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to discover, participate in, and create
              memorable events at Amity University
            </p>
          </div>

          {/* Interactive Feature Showcase */}
          <div className="grid lg:grid-cols-5 gap-8 mt-16">
            {/* Feature Navigation */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="space-y-4">
                {featuresData.features.map((feature, index) => {
                  const Icon = iconMap[feature.icon as keyof typeof iconMap];
                  return (
                    <div
                      key={feature.id}
                      onClick={() => setActiveFeature(index)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                        activeFeatureIndex === index
                          ? "bg-gradient-to-r from-indigo-50 to-white shadow-lg border-l-4 border-indigo-600"
                          : "hover:bg-indigo-50/50"
                      }`}
                    >
                      <div
                        className={`${
                          activeFeatureIndex === index
                            ? "bg-gradient-to-br from-indigo-600 to-indigo-700"
                            : "bg-indigo-100"
                        } w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300`}
                      >
                        <Icon
                          className={`w-6 h-6 ${activeFeatureIndex === index ? "text-white" : "text-indigo-600"}`}
                        />
                      </div>
                      <div>
                        <h3
                          className={`font-semibold mb-1 ${activeFeatureIndex === index ? "text-indigo-800" : "text-gray-800"}`}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={`text-sm ${activeFeatureIndex === index ? "text-indigo-700" : "text-gray-600"}`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Feature Visualization */}
            <div className="lg:col-span-3 order-1 lg:order-2 bg-white rounded-3xl shadow-2xl shadow-indigo-100/70 overflow-hidden relative">
              {/* Dynamic Feature Illustration */}
              <div className="relative h-60 bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 overflow-hidden">
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-16 translate-y-16"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Feature-specific illustrations */}
                  {activeFeatureIndex === 0 && (
                    <div className="text-center">
                      <Calendar
                        className="w-24 h-24 text-white/90 mx-auto mb-6"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Create & Manage Events
                      </h3>
                      <p className="text-indigo-100 max-w-xs mx-auto">
                        Your one-stop solution for organizing campus activities
                      </p>
                    </div>
                  )}

                  {activeFeatureIndex === 1 && (
                    <div className="text-center">
                      <Users
                        className="w-24 h-24 text-white/90 mx-auto mb-6"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Effortless Attendance
                      </h3>
                      <p className="text-indigo-100 max-w-xs mx-auto">
                        Track participation with digital check-ins
                      </p>
                    </div>
                  )}

                  {activeFeatureIndex === 2 && (
                    <div className="text-center">
                      <Users
                        className="w-24 h-24 text-white/90 mx-auto mb-6"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Open Participation
                      </h3>
                      <p className="text-indigo-100 max-w-xs mx-auto">
                        Welcome participants from other institutions
                      </p>
                    </div>
                  )}

                  {activeFeatureIndex === 3 && (
                    <div className="text-center">
                      <PlusCircle
                        className="w-24 h-24 text-white/90 mx-auto mb-6"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Instant Reports
                      </h3>
                      <p className="text-indigo-100 max-w-xs mx-auto">
                        Generate comprehensive event analytics
                      </p>
                    </div>
                  )}

                  {activeFeatureIndex === 4 && (
                    <div className="text-center">
                      <User
                        className="w-24 h-24 text-white/90 mx-auto mb-6"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Host Without Limits
                      </h3>
                      <p className="text-indigo-100 max-w-xs mx-auto">
                        Anyone can organize events, no university level
                        approvals needed
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* User Journey Steps - Replacing the numbers section */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Getting Started is Simple
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-indigo-100 text-indigo-700 font-bold w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      1
                    </div>
                    <div className="flex-1 bg-indigo-50 group-hover:bg-indigo-100 rounded-lg p-3 transition-colors">
                      <p className="font-medium text-indigo-900">
                        Sign up with your university email
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="bg-purple-100 text-purple-700 font-bold w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      2
                    </div>
                    <div className="flex-1 bg-purple-50 group-hover:bg-purple-100 rounded-lg p-3 transition-colors">
                      <p className="font-medium text-purple-900">
                        Explore upcoming events or create your own
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="bg-blue-100 text-blue-700 font-bold w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      3
                    </div>
                    <div className="flex-1 bg-blue-50 group-hover:bg-blue-100 rounded-lg p-3 transition-colors">
                      <p className="font-medium text-blue-900">
                        Connect with your campus community
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA */}
              <div className="px-6 pb-6">
                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-indigo-900 mb-1">
                        Ready to start?
                      </h4>
                      <p className="text-sm text-indigo-700">
                        Join your peers on AUP Events
                      </p>
                    </div>
                    <a
                      href="https://app.aup.events/register"
                      className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 flex items-center"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App Teaser */}
          <div className="mt-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-indigo-100 rounded-full opacity-70"></div>
            <div className="absolute -left-16 -top-16 w-48 h-48 bg-purple-100 rounded-full opacity-70"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
                  Ready for an easier campus life?
                </h3>
                <p className="text-indigo-700 mb-6">
                  Join hundreds of students already using our platform to
                  enhance their university events experience!
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() =>
                      (window.location.href = "https://app.aup.events/register")
                    }
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = "https://app.aup.events/login")
                    }
                    className="px-6 py-3 bg-white text-indigo-600 border border-indigo-200 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
                  >
                    Sign In
                  </button>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-white p-3 rounded-3xl shadow-xl rotate-3 transform hover:rotate-0 transition-all duration-300">
                  <img
                    src="https://app.aup.events/assets/meta-image.jpeg"
                    alt="Amity Events App"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      {/* Testimonials Section */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl -z-10 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl -z-10 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl -z-10 opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium inline-block mb-3">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students and club representatives who use AUP Events
              platform
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeTestimonialIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <div
                      className={`bg-gradient-to-br ${
                        idx % 3 === 0
                          ? "from-indigo-50 to-white"
                          : idx % 3 === 1
                            ? "from-purple-50 to-white"
                            : "from-blue-50 to-white"
                      } rounded-2xl p-8 shadow-lg border border-indigo-100 relative overflow-hidden`}
                    >
                      {/* Decorative elements */}
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-100 rounded-full opacity-50"></div>
                      <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>

                      <div className="flex justify-center mb-6">
                        <div
                          className={`${
                            idx % 3 === 0
                              ? "bg-indigo-600"
                              : idx % 3 === 1
                                ? "bg-purple-600"
                                : "bg-blue-600"
                          } p-3 rounded-full`}
                        >
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <blockquote className="text-xl font-medium text-gray-800 text-center mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-16 h-16 ${
                            idx % 3 === 0
                              ? "bg-gradient-to-br from-indigo-500 to-indigo-600"
                              : idx % 3 === 1
                                ? "bg-gradient-to-br from-purple-500 to-purple-600"
                                : "bg-gradient-to-br from-blue-500 to-blue-600"
                          } rounded-full flex items-center justify-center mb-3 text-white font-bold text-xl`}
                        >
                          {testimonial.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p
                          className={`${
                            idx % 3 === 0
                              ? "text-indigo-600"
                              : idx % 3 === 1
                                ? "text-purple-600"
                                : "text-blue-600"
                          }`}
                        >
                          {testimonial.role}
                        </p>
                        <div
                          className={`mt-2 px-3 py-1 text-sm rounded-full ${
                            idx % 3 === 0
                              ? "bg-indigo-100 text-indigo-800"
                              : idx % 3 === 1
                                ? "bg-purple-100 text-purple-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {testimonial.club}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-2">
              <button
                onClick={() =>
                  goToTestimonial(
                    activeTestimonialIndex === 0
                      ? testimonials.length - 1
                      : activeTestimonialIndex - 1,
                  )
                }
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-indigo-100 hover:border-indigo-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowRight className="w-4 h-4 text-indigo-600 transform rotate-180" />
              </button>

              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeTestimonialIndex
                      ? "bg-indigo-600"
                      : "bg-indigo-200"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}

              <button
                onClick={() =>
                  goToTestimonial(
                    activeTestimonialIndex === testimonials.length - 1
                      ? 0
                      : activeTestimonialIndex + 1,
                  )
                }
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-indigo-100 hover:border-indigo-300 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4 text-indigo-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600">
              The amazing people who made this platform possible
            </p>
          </div>

          {/* Creator */}
          <div className="mb-16">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 bg-indigo-100 rounded-full -rotate-6"></div>
                <img
                  src="https://res.cloudinary.com/diwvz2qok/image/upload/v1747323657/yz5k2hugvwtbylmg6pf5.jpg"
                  alt="Harsh Bansal"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Harsh Bansal
              </h3>
              <p className="text-indigo-600 mb-2">Creator & Lead Developer</p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://harshmakes.tech/"
                  className="text-gray-400 hover:text-indigo-600"
                >
                  <Globe className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/harshbansal07/"
                  className="text-gray-400 hover:text-indigo-600"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:harshbansal.contact@gmail.com"
                  className="text-gray-400 hover:text-indigo-600"
                >
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
                  <h4 className="text-lg font-semibold text-gray-900">
                    Jungbir Singh Hanspal
                  </h4>
                  <p className="text-gray-600 text-sm">Contributor</p>
                  <p className="text-indigo-600 text-sm">
                    jungbirhanspal@gmail.com
                  </p>
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
                  <h4 className="text-lg font-semibold text-gray-900">
                    Shivansh Pathak
                  </h4>
                  <p className="text-gray-600 text-sm">Contributor</p>
                  <p className="text-indigo-600 text-sm">
                    shivansh.pathak777@gmail.com
                  </p>
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
                  <h4 className="text-lg font-semibold text-gray-900">
                    Vikhyat Gupta
                  </h4>
                  <p className="text-gray-600 text-sm">Contributor</p>
                  <p className="text-indigo-600 text-sm">
                    vikhyatgupta61@gmail.com
                  </p>
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
                  <h4 className="text-lg font-semibold text-gray-900">
                    Tushar Yadav
                  </h4>
                  <p className="text-gray-600 text-sm">Contributor</p>
                  <p className="text-indigo-600 text-sm">
                    tushar.yadav16@gmail.com
                  </p>
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
                  <h4 className="text-lg font-semibold text-gray-900">
                    Chirag Gulati
                  </h4>
                  <p className="text-gray-600 text-sm">Contributor</p>
                  <p className="text-indigo-600 text-sm">
                    chiraggulati098@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Rudra Pratap Singh
                  </h4>
                  <p className="text-gray-600 text-sm">Contributor</p>
                  <p className="text-indigo-600 text-sm">
                    rudra17122005@gmail.com
                  </p>
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
                Contribute to AUP Events
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/harshbansal7/amity-events-frontend"
                    className="text-sm text-gray-600 hover:text-indigo-600"
                  >
                    Frontend
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/harshbansal7/amity-events-service"
                    className="text-sm text-gray-600 hover:text-indigo-600"
                  >
                    Backend
                  </a>
                </li>
                {/* <li>
                  <a href="https://harshmakes.tech/contact" className="text-sm text-gray-600 hover:text-indigo-600">
                    Contact
                  </a>
                </li> */}
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
                <li className="text-sm text-gray-600">support@aup.events</li>
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
                <a
                  href="https://www.linkedin.com/in/harshbansal07/"
                  className="text-gray-400 hover:text-indigo-600"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/harshbansal7"
                  className="text-gray-400 hover:text-indigo-600"
                >
                  <span className="sr-only">Instagram</span>
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              &copy; {new Date().getFullYear()} Harsh Bansal. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
