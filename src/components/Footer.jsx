import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Calendar, Clock, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './SocialIcons';

export default function Footer({ data }) {
  const { personal, socials } = data;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [bookingMode, setBookingMode] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const sampleSlots = [
    { day: "Tue, Nov 18", time: "10:00 AM EST" },
    { day: "Tue, Nov 18", time: "02:30 PM EST" },
    { day: "Wed, Nov 19", time: "11:00 AM EST" },
    { day: "Thu, Nov 20", time: "04:00 PM EST" },
  ];

  return (
    <footer id="contact" className="relative pt-24 pb-16 bg-gradient-to-t from-[#0A0314] via-[#10051F] to-transparent border-t border-purple-900/30 overflow-hidden">
      
      {/* Background glow halo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Contact Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Build Something Great Together</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            I'm currently looking to join a high-impact team that values accessible design & scalable code, or if you have an exciting project in mind — let's connect.
          </p>
        </div>

        {/* Contact Card with Toggle Tabs (Message Form vs Schedule a Quick Chat) */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-[#140624]/90 border border-purple-800/40 p-6 sm:p-8 shadow-2xl shadow-purple-950/70 backdrop-blur-xl">
          
          {/* Tab Switcher */}
          <div className="flex items-center justify-center p-1 rounded-full bg-[#1B0A30] border border-purple-900/50 max-w-xs mx-auto mb-8">
            <button
              onClick={() => setBookingMode(false)}
              className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                !bookingMode ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Send Message
            </button>
            <button
              onClick={() => setBookingMode(true)}
              className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                bookingMode ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Book a Call
            </button>
          </div>

          {!bookingMode ? (
            /* Contact Form */
            submitted ? (
              <div className="py-12 text-center space-y-3 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out. I'll review your note and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                  className="mt-4 px-4 py-1.5 rounded-full text-xs font-semibold text-purple-300 bg-purple-950 border border-purple-700/50 hover:bg-purple-900"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1D0C33] border border-purple-800/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1D0C33] border border-purple-800/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell me about your project, timeline, or just say hello..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1D0C33] border border-purple-800/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Or direct mail: {personal.email}</span>
                  </a>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )
          ) : (
            /* Meeting Booking Simulation */
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-medium text-purple-300 mb-2">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Select an available 30-min consultation slot:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sampleSlots.map((slot, sIdx) => {
                  const isSelected = selectedSlot === sIdx;
                  return (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => setSelectedSlot(sIdx)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-purple-900/60 border-purple-400 text-white shadow-lg shadow-purple-900/40' 
                          : 'bg-[#1C0C30] border-purple-900/40 text-slate-300 hover:border-purple-600/50'
                      }`}
                    >
                      <div className="text-xs font-semibold text-white">{slot.day}</div>
                      <div className="text-[11px] text-purple-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        <span>{slot.time}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {selectedSlot !== null ? (
                <div className="pt-4 text-center">
                  <a
                    href={`mailto:${personal.email}?subject=Booking%20Discussion&body=Hi%20${personal.shortName},%20I'd%20like%20to%20book%20a%20call%20for%20${encodeURIComponent(sampleSlots[selectedSlot].day + ' at ' + sampleSlots[selectedSlot].time)}.`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/40 hover:brightness-110"
                  >
                    <span>Confirm Booking for {sampleSlots[selectedSlot].time}</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <p className="text-[11px] text-center text-slate-400 pt-2">
                  Select a slot above to initiate an appointment calendar invite.
                </p>
              )}
            </div>
          )}

        </div>

        {/* Social Icons & Bottom Signature */}
        <div className="mt-16 pt-8 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          
          <div className="flex items-center gap-2">
            <span className="font-signature text-2xl text-purple-300">{personal.shortName || personal.name}</span>
            <span>• © {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5">
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
            )}
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
            )}
            <a href={`mailto:${personal.email}`} className="hover:text-purple-400 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
