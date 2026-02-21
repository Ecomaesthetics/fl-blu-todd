import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { QuoteWidget } from "@/components/QuoteWidget";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Clock,
  Star,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import headshot from "@assets/71e04f91-9873-44b7-b99b-76f26ab6a96d-300x300_(1)_1771607027862.webp";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-body text-slate-800">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10 rounded-l-[100px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Badge variant="outline" className="mb-6 px-4 py-1.5 border-secondary/30 text-secondary bg-secondary/5 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Licensed Sales Agent
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
              >
                Protecting What <br />
                <span className="text-secondary">Matters Most</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Hi, I'm <strong className="text-slate-900">Todd Greenbaum</strong>. I help individuals and families find the right insurance coverage to secure their future with confidence and peace of mind.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/25" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-slate-300 hover:bg-slate-50 hover:text-secondary" asChild>
                  <a href="https://medicareagentshub.com/agents/todd-greenbaum?ref=badge" target="_blank" rel="noopener noreferrer">
                    View Profile
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-sm">Trusted Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-sm">Client Focused</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] relative z-10">
                {/* Image Mask/Frame */}
                <div className="absolute inset-4 rounded-full border-[3px] border-white shadow-2xl overflow-hidden z-20 bg-slate-200">
                  <img 
                    src={headshot} 
                    alt="Todd Greenbaum" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Decorative circles */}
                <div className="absolute inset-0 rounded-full border border-slate-200 scale-105 z-10" />
                <div className="absolute inset-0 rounded-full border border-slate-100 scale-110 z-0" />
                
                {/* Floating Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-10 -left-6 lg:left-0 z-30 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Experience</p>
                    <p className="text-slate-900 font-bold">Top Rated Agent</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I'm Todd Greenbaum, a Licensed Sales Agent dedicated to helping individuals and families across the state of Florida find the right insurance coverage. With a client-first approach, I take the time to understand your unique needs and guide you through your options so you can make confident, informed decisions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're exploring Medicare plans, life insurance, or health coverage, I'm here to simplify the process and ensure you get the protection you deserve — with honesty, transparency, and personalized attention every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Widget Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-slate-900">Get an Instant Quote</h2>
            <p className="text-slate-600 mt-2">Compare rates and find the best coverage in minutes.</p>
          </div>
          <QuoteWidget />
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 -mt-32 relative z-20">
            {[
              { 
                icon: Phone, 
                label: "Office Phone", 
                value: "+1 (561) 763-5073", 
                href: "tel:+15617635073",
                color: "bg-blue-50 text-secondary"
              },
              { 
                icon: Phone, 
                label: "Cell Phone", 
                value: "+1 (917) 699-8227", 
                href: "tel:+19176998227",
                color: "bg-indigo-50 text-indigo-600"
              },
              { 
                icon: Mail, 
                label: "Email Address", 
                value: "Todd.Greenbaum@Trucordia.com", 
                href: "mailto:Todd.Greenbaum@Trucordia.com",
                color: "bg-emerald-50 text-emerald-600"
              },
            ].map((card, idx) => (
              <motion.a
                key={idx}
                href={card.href}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group transition-all hover:border-secondary/20"
              >
                <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-800 mb-2">{card.label}</h3>
                <p className="text-slate-600 font-medium break-all">{card.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Client Satisfaction is My Priority
            </h2>
            <p className="text-slate-600 text-lg">
              I take pride in helping my clients navigate their insurance needs. Your feedback helps me continue providing excellent service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-none shadow-lg bg-white rounded-2xl flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <FcGoogle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Google Reviews</h3>
              <p className="text-slate-500 mb-6">Share your experience and help others find the right coverage.</p>
              <Button asChild className="w-full bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm">
                <a href="https://maps.app.goo.gl/mM85m1yA6EQceZwe9" target="_blank" rel="noopener noreferrer">
                  Write a Review
                </a>
              </Button>
            </Card>

            <Card className="p-8 border-none shadow-lg bg-white rounded-2xl flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <FaFacebook className="w-8 h-8 text-[#1877F2]" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Facebook Community</h3>
              <p className="text-slate-500 mb-6">Connect with me on Facebook for updates and insurance tips.</p>
              <Button asChild className="w-full bg-[#1877F2] text-white hover:bg-[#1877F2]/90 shadow-md shadow-blue-500/20">
                <a href="https://www.facebook.com/profile.php?id=61575497467614" target="_blank" rel="noopener noreferrer">
                  Visit Page
                </a>
              </Button>
            </Card>
          </div>

          {/* Medicare Badge Section */}
          <div className="mt-16 text-center">
            <a href="https://medicareagentshub.com/agents/todd-greenbaum?ref=badge" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
               <img 
                 src="https://medicareagentshub.com/badges/mah-badge-1.png" 
                 alt="Medicare Agents Hub Verified" 
                 className="h-24 md:h-28 mx-auto"
               />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03] z-0" />
        
        {/* Descriptive comment for the background image above */}
        {/* Abstract office background texture for subtle visual interest */}

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                Let's Discuss Your <span className="text-secondary">Needs</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Whether you have questions about Medicare, Life Insurance, or Health coverage, I'm here to provide clear, honest answers. Reach out today for a no-obligation consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Service Area</h4>
                    <p className="text-slate-600">Proudly serving clients throughout the state of Florida.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Availability</h4>
                    <p className="text-slate-600">Available for consultations by appointment.</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <h3 className="text-white font-heading font-bold text-xl mb-6">Todd Greenbaum</h3>
              <p className="text-slate-400 mb-6">
                Licensed Sales Agent dedicated to helping you protect what matters most with comprehensive insurance solutions.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61575497467614" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors text-white"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:Todd.Greenbaum@Trucordia.com" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors text-white"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <a href="tel:+15617635073" className="hover:text-white transition-colors">+1 (561) 763-5073</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <a href="tel:+19176998227" className="hover:text-white transition-colors">+1 (917) 699-8227</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-secondary" />
                  <a href="mailto:Todd.Greenbaum@Trucordia.com" className="hover:text-white transition-colors break-words text-sm">Todd.Greenbaum@Trucordia.com</a>
                </li>
              </ul>
            </div>

            <div>
               <h4 className="text-white font-bold mb-6">License</h4>
               <p className="text-sm text-slate-400">
                 Licensed Sales Agent. <br />
                 Authorized to offer Medicare and other insurance products.
               </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Todd Greenbaum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
