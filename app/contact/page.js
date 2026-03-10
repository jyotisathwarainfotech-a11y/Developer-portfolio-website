'use client';

import Button from "@/src/common/Button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User, Type, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-primary text-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-4 space-y-10">
          <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-accent px-3 py-1 text-xs font-sharetech tracking-[0.22em] uppercase text-primary shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl text-secondary font-bold leading-tight">
              Let's Talk For your <br />
              <span className="text-accent">Next Projects</span>
            </h2>
            <p className="text-secondary mt-6 text-sm leading-relaxed">
              Sed ut perspiciatis unde omnis natus totam rem aperiam eaque inventore veritatis
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Main Office</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent w-5 h-5 mt-1" />
                <p className="text-secondary text-sm">55 Main Street, 2nd block, <br /> New York City</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-accent w-5 h-5" />
                <p className="text-secondary text-sm">support@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-accent w-5 h-5" />
                <p className="text-secondary text-sm">+880 (123) 456 88</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Follow Me</h3>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-accent transition-colors">
                  <Icon className="text-primary w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8 bg-white/10 p-8 rounded-3xl border border-white/5 shadow-2xl">
          <form className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <div className="relative">
                  <input type="text" placeholder="Richard D. Hammond" className="w-full rounded-xl border border-secondary p-4 text-sm placeholder:text-secondary/60 focus:ring-1 focus:ring-accent outline-none" />
                  <User className="absolute right-4 top-4 w-4 h-4 text-accent" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <input type="email" placeholder="support@gmail.com" className="w-full rounded-xl border border-secondary p-4 text-sm placeholder:text-secondary/60 focus:ring-1 focus:ring-accent outline-none" />
                  <Mail className="absolute right-4 top-4 w-4 h-4 text-accent" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <div className="relative">
                  <input type="text" placeholder="+880 (123) 456 88" className="w-full rounded-xl border border-secondary p-4 text-sm placeholder:text-secondary/60 focus:ring-1 focus:ring-accent outline-none" />
                  <Phone className="absolute right-4 top-4 w-4 h-4 text-accent" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <div className="relative">
                  <input type="text" placeholder="Subject" className="w-full rounded-xl border border-secondary p-4 text-sm placeholder:text-secondary/60focus:ring-1 focus:ring-accent outline-none" />
                  <Type className="absolute right-4 top-4 w-4 h-4 text-accent" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea rows={4} placeholder="write message" className="w-full rounded-xl border border-secondary p-4 text-sm placeholder:text-secondary/60 focus:ring-1 focus:ring-accent outline-none" />
            </div>

            <Button
            variant="filled"
            className="font-bold py-4 px-8 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform">
              Send Us Message <ChevronRight className="w-4 h-4" />
            </Button>
          </form>
        </div>

      </div>

      {/* Map Section Below */}
      <div className="max-w-7xl mx-auto mt-16">
      <div className="max-w-7xl mx-auto mt-16">
          <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-white/5 grayscale opacity-80 contrast-125">
            <iframe
              src="https://www.google.com/maps?q=United+States&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

    </section>
  );
}