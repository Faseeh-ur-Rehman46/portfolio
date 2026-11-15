import React, { useState, useEffect } from 'react';
import { X, Save, RefreshCw, Check, Copy, User, Mail, Globe, Briefcase } from 'lucide-react';

export default function EditDetailsModal({ isOpen, onClose, data, onSave, onReset }) {
  const [formData, setFormData] = useState({
    name: '',
    shortName: '',
    currentRole: '',
    company: '',
    bio: '',
    email: '',
    location: '',
    avatar: '',
    typewriterRoles: '',
    github: '',
    linkedin: '',
    twitter: '',
    instagram: '',
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.personal?.name || '',
        shortName: data.personal?.shortName || '',
        currentRole: data.personal?.currentRole || '',
        company: data.personal?.company || '',
        bio: data.personal?.bio || '',
        email: data.personal?.email || '',
        location: data.personal?.location || '',
        avatar: data.personal?.avatar || '',
        typewriterRoles: (data.personal?.typewriterRoles || []).join(', '),
        github: data.socials?.github || '',
        linkedin: data.socials?.linkedin || '',
        twitter: data.socials?.twitter || '',
        instagram: data.socials?.instagram || '',
      });
    }
  }, [data, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updated = {
      ...data,
      personal: {
        ...data.personal,
        name: formData.name,
        shortName: formData.shortName,
        greeting: `Hello! I Am ${formData.name}`,
        currentRole: formData.currentRole,
        company: formData.company,
        bio: formData.bio,
        email: formData.email,
        location: formData.location,
        avatar: formData.avatar,
        typewriterRoles: formData.typewriterRoles.split(',').map(s => s.trim()).filter(Boolean),
      },
      socials: {
        ...data.socials,
        github: formData.github,
        linkedin: formData.linkedin,
        twitter: formData.twitter,
        instagram: formData.instagram,
      }
    };
    onSave(updated);
    onClose();
  };

  const handleCopyCode = () => {
    const code = `// Paste this in src/data/portfolioData.js\nexport const initialPortfolioData = ${JSON.stringify({
      ...data,
      personal: {
        ...data.personal,
        name: formData.name,
        shortName: formData.shortName,
        greeting: `Hello! I Am ${formData.name}`,
        currentRole: formData.currentRole,
        company: formData.company,
        bio: formData.bio,
        email: formData.email,
        location: formData.location,
        avatar: formData.avatar,
        typewriterRoles: formData.typewriterRoles.split(',').map(s => s.trim()).filter(Boolean),
      },
      socials: {
        ...data.socials,
        github: formData.github,
        linkedin: formData.linkedin,
        twitter: formData.twitter,
        instagram: formData.instagram,
      }
    }, null, 2)};`;

    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#140624] border border-purple-500/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <User className="w-5 h-5 text-purple-400" />
              <span>Customize Your Details</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Updates your portfolio in real time and preserves your edits locally.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-purple-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSave} className="overflow-y-auto py-5 space-y-4 pr-1">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1D0C33] border border-purple-800/40 text-white text-sm focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Short Name / Signature</label>
              <input
                type="text"
                name="shortName"
                value={formData.shortName}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1D0C33] border border-purple-800/40 text-white text-sm focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Current Role / Title</label>
              <input
                type="text"
                name="currentRole"
                value={formData.currentRole}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1D0C33] border border-purple-800/40 text-white text-sm focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Company / College</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1D0C33] border border-purple-800/40 text-white text-sm focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Typewriter Roles (comma separated)
            </label>
            <input
              type="text"
              name="typewriterRoles"
              value={formData.typewriterRoles}
              onChange={handleChange}
              placeholder="Software Engineer., UI/UX Designer., Full-Stack Developer."
              className="w-full px-3.5 py-2 rounded-xl bg-[#1D0C33] border border-purple-800/40 text-white text-sm focus:outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Bio / Pitch</label>
            <textarea
              name="bio"
              rows="3"
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-3.5 py-2 rounded-xl bg-[#1D0C33] border border-purple-800/40 text-white text-sm focus:outline-none focus:border-purple-400 resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1D0C33] border border-purple-800/40 text-white text-sm focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Avatar Image URL</label>
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3.5 py-2 rounded-xl bg-[#1D0C33] border border-purple-800/40 text-white text-sm focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">Social Profiles</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">GitHub URL</label>
                <input
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#1D0C33] border border-purple-800/40 text-white text-xs focus:outline-none focus:border-purple-400"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">LinkedIn URL</label>
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#1D0C33] border border-purple-800/40 text-white text-xs focus:outline-none focus:border-purple-400"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Twitter / X URL</label>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#1D0C33] border border-purple-800/40 text-white text-xs focus:outline-none focus:border-purple-400"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Instagram URL</label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#1D0C33] border border-purple-800/40 text-white text-xs focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-5 border-t border-purple-900/40 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyCode}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-950/70 border border-purple-700/50 text-purple-300 hover:text-white flex items-center gap-1.5"
                title="Copy updated configuration to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied JS!' : 'Copy Config'}</span>
              </button>

              <button
                type="button"
                onClick={onReset}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-rose-400 flex items-center gap-1.5"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-purple-900/30"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:brightness-110 flex items-center gap-1.5 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
