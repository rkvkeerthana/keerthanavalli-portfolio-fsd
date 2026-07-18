/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data';

// Google Apps Script Web App URL for form handling (sends to your Google Sheet & Email)
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxiRwhpkwM2usC_HxhAanbakNHB2q3ufj1iTKJtliY4Xjx-ICKlWNfKCrKp6j9qeYbgWQ/exec';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    const tempErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Full Name is required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email Address is invalid.';
      isValid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message content is required.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const formDataObj = new URLSearchParams();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('subject', formData.subject || 'No Subject Specified');
      formDataObj.append('message', formData.message);

      // We use mode: 'no-cors' since Google Web Apps redirect to script.googleusercontent.com,
      // which triggers CORS exceptions in direct JavaScript requests even when completed on the server side.
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataObj.toString(),
      });
    } catch (error) {
      console.error('Error submitting form to Apps Script:', error);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error dynamically
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-1 border-t border-border-main relative overflow-hidden transition-colors duration-300">
      {/* Visual backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">
            05. Immediate Access
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary transition-colors duration-300">
              Get In Touch
            </h2>
            <div className="h-[1px] flex-grow bg-border-main md:mx-10 hidden md:block" />
            <p className="font-mono text-xs text-text-secondary md:w-80 transition-colors duration-300">
              Initiate communication channels directly. Ideal for HR personnel, technical interviewers, and team leads.
            </p>
          </div>
        </div>

        {/* Content layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div className="space-y-4">
              <h3 className="font-sans text-xl md:text-2xl font-bold text-text-primary tracking-tight transition-colors">
                Let's discuss how I can contribute to your engineering goals.
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-sm transition-colors">
                Available for software engineer roles, full-stack positions, or MERN developer needs. Drop an inquiry or invite me for an interview directly.
              </p>
            </div>

            {/* Quick Contacts */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border-main transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider font-bold transition-colors">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="font-sans text-sm text-text-primary hover:text-amber-400 font-semibold transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border-main transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider font-bold transition-colors">Mobile Direct</span>
                  <span className="font-sans text-sm text-text-primary font-semibold transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border-main transition-colors">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider font-bold transition-colors">Location Base</span>
                  <span className="font-sans text-sm text-text-primary font-semibold transition-colors">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Visibility */}
            <div className="pt-4 border-t border-border-main transition-colors">
              <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider font-bold block mb-4 transition-colors">
                Verify Digital Footprints
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-bg-card hover:bg-bg-2 text-text-primary border border-border-main transition-colors cursor-pointer"
                >
                  <Github size={14} className="text-amber-400" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-bg-card hover:bg-bg-2 text-text-primary border border-border-main transition-colors cursor-pointer"
                >
                  <Linkedin size={14} className="text-amber-400" />
                  <span>LinkedIn Link</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Validated Contact Form */}
          <div className="lg:col-span-7 bg-bg-card border border-border-main rounded-2xl p-6 md:p-8 relative transition-colors duration-300">
            
            {/* Elegant Header */}
            <div className="flex items-center justify-between mb-6 border-b border-border-main/50 pb-4">
              <h3 className="font-sans text-base font-bold text-text-primary transition-colors">
                Send a Message
              </h3>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[10px] font-bold text-text-secondary uppercase tracking-wider transition-colors">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl bg-bg-1 text-text-primary placeholder-slate-600 text-xs font-medium border ${
                          errors.name ? 'border-red-500/50' : 'border-border-main'
                        } focus:border-amber-500/50 focus:outline-none transition-colors duration-200`}
                      />
                      {errors.name && (
                        <span className="font-sans text-[10px] text-red-400 font-medium">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[10px] font-bold text-text-secondary uppercase tracking-wider transition-colors">
                        Email Address <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. sarah@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-bg-1 text-text-primary placeholder-slate-600 text-xs font-medium border ${
                          errors.email ? 'border-red-500/50' : 'border-border-main'
                        } focus:border-amber-500/50 focus:outline-none transition-colors duration-200`}
                      />
                      {errors.email && (
                        <span className="font-sans text-[10px] text-red-400 font-medium">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] font-bold text-text-secondary uppercase tracking-wider transition-colors">
                      Subject Matter
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. System Architect Interview Invitation"
                      className="w-full px-4 py-3 rounded-xl bg-bg-1 text-text-primary placeholder-slate-600 text-xs font-medium border border-border-main focus:border-amber-500/50 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Message input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] font-bold text-text-secondary uppercase tracking-wider transition-colors">
                      Inquiry Message <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Hi Keerthanavalli, we reviewed your e-commerce repository and would love to organize a short technical dialogue..."
                      className={`w-full px-4 py-3 rounded-xl bg-bg-1 text-text-primary placeholder-slate-600 text-xs font-medium border ${
                        errors.message ? 'border-red-500/50' : 'border-border-main'
                      } focus:border-amber-500/50 focus:outline-none transition-colors duration-200 resize-none`}
                    />
                    {errors.message && (
                      <span className="font-sans text-[10px] text-red-400 font-medium">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 disabled:opacity-50 transition-all duration-300 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Submit Secured Inquiry</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 mb-6 shadow-inner animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-text-primary mb-2 transition-colors">
                    Secured Inquiry Dispatched
                  </h3>
                  <p className="font-sans text-xs text-text-secondary max-w-sm leading-relaxed mb-6 transition-colors">
                    Thank you for reaching out! Your inquiry has been sent successfully. I have been notified and will verify your request and respond via email as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-bg-1 hover:bg-bg-2 text-text-secondary border border-border-main transition-colors cursor-pointer"
                  >
                    <MessageSquare size={13} />
                    <span>Send Another Inquiry</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
