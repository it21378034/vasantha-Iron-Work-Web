import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Flame, AlertCircle, Clock, ArrowRight } from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = 'Gates' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: initialService,
    projectDescription: '',
    contactMethod: 'Phone',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const buildWhatsAppUrl = () => {
    const text = 
`*New Quotation Request - Vasantha Iron Works*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${formData.fullName}
📞 *Phone Number:* ${formData.phone || 'Not provided'}
📧 *Email Address:* ${formData.email || 'Not provided'}
🛠 *Service Required:* ${formData.serviceRequired}
💬 *Preferred Contact:* ${formData.contactMethod}
━━━━━━━━━━━━━━━━━━━━
📝 *Project Details / Dimensions:*
${formData.projectDescription}
━━━━━━━━━━━━━━━━━━━━
_Sent via Vasantha Iron Works Website_`;

    return `https://wa.me/94763207873?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return setError('Please enter your full name.');
    if (!formData.phone.trim() && !formData.email.trim()) return setError('Please provide a phone number or email address.');
    if (!formData.projectDescription.trim()) return setError('Please describe your project briefly.');

    const waUrl = buildWhatsAppUrl();
    if (formData.contactMethod === 'WhatsApp') {
      window.open(waUrl, '_blank');
    }
    setSubmitted(true);
  };

  const services = ['Iron Grills', 'Gates', 'Roofing Structures', 'Ceiling Structures', 'Hand Railings', 'Custom Ironworks & Welding', 'Other Steel Fabrication'];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-badge mb-4">
            <Flame className="w-3.5 h-3.5" />
            Free Quotation
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Let's <span className="text-orange-gradient">Build</span> Together
          </h2>
          <p className="text-slate-600 text-lg">
            Share your project details and receive a detailed, competitive quote within 24 hours — completely free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ─── LEFT: Form ─── */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-7 sm:p-10">

              {/* Card header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit']">Quotation Request Form</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    Response within 24 hours · Direct WhatsApp & Call
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-extrabold text-slate-900 font-['Outfit']">Quotation Request Ready!</h4>
                    <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-orange-600">{formData.fullName}</strong>. We've prepared your inquiry for <strong className="text-orange-600">{formData.serviceRequired}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto text-xs text-slate-600 space-y-1 font-mono">
                    <div><strong>Customer:</strong> {formData.fullName}</div>
                    <div><strong>Contact:</strong> {formData.phone || formData.email}</div>
                    <div><strong>Service:</strong> {formData.serviceRequired}</div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>Send to WhatsApp (+94 763 207 873)</span>
                    </a>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ fullName: '', phone: '', email: '', serviceRequired: initialService, projectDescription: '', contactMethod: 'WhatsApp' }); }}
                      className="w-full sm:w-auto btn-secondary text-sm py-3.5 px-5"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {error && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-orange-600">*</span>
                      </label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Service Required <span className="text-orange-600">*</span>
                      </label>
                      <select name="serviceRequired" value={formData.serviceRequired} onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm transition-all cursor-pointer"
                      >
                        {services.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+94 77 123 4567"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Phone', 'WhatsApp', 'Email'].map(method => (
                        <label key={method} className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border cursor-pointer transition-all text-sm font-semibold select-none ${
                          formData.contactMethod === method
                            ? method === 'WhatsApp'
                              ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                              : 'bg-orange-600 border-orange-600 text-white shadow-md'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-orange-300'
                        }`}>
                          <input type="radio" name="contactMethod" value={method} checked={formData.contactMethod === method} onChange={handleChange} className="sr-only" />
                          {method === 'WhatsApp' && <MessageSquare className="w-4 h-4" />}
                          {method}
                        </label>
                      ))}
                    </div>
                    {formData.contactMethod === 'WhatsApp' && (
                      <p className="text-xs text-emerald-600 font-semibold mt-2 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Submitting will open WhatsApp directly with all your project details pre-filled.
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Description / Dimensions <span className="text-orange-600">*</span>
                    </label>
                    <textarea name="projectDescription" rows={4} value={formData.projectDescription} onChange={handleChange}
                      placeholder="Describe your design preferences, dimensions, location, budget range, or any specific requirements..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full text-base py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all active:scale-[0.98] ${
                      formData.contactMethod === 'WhatsApp'
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30'
                        : 'btn-primary'
                    }`}
                  >
                    {formData.contactMethod === 'WhatsApp' ? (
                      <>
                        <MessageSquare className="w-5 h-5" />
                        <span>Send Request via WhatsApp</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        <Flame className="w-5 h-5 animate-pulse" />
                        <span>Submit Quotation Request</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

          {/* ─── RIGHT: Contact Details ─── */}
          <div className="lg:col-span-5 space-y-5">

            {/* Info Cards */}
            {[
              { icon: Phone, label: 'Direct Phone Line', value: '+94 718 658 998', sub: 'Available for calls & site visits', href: 'tel:+94718658998', color: 'bg-orange-100 text-orange-600' },
              { icon: MessageSquare, label: 'WhatsApp Chat', value: '+94 763 207 873', sub: 'Quick responses via WhatsApp', href: 'https://wa.me/94763207873', color: 'bg-emerald-100 text-emerald-600' },
              { icon: Mail, label: 'Email Address', value: 'vasanthaironworks@gmail.com', sub: 'For drawings, plans & tenders', href: 'mailto:vasanthaironworks@gmail.com', color: 'bg-blue-100 text-blue-600' },
              { icon: MapPin, label: 'Workshop Location', value: '100/E Railway cross road Diyathalawa.', sub: 'Visit our fabrication workshop', href: 'https://maps.google.com/?q=100/E+Railway+cross+road+Diyathalawa', color: 'bg-violet-100 text-violet-600' },
            ].map(({ icon: Icon, label, value, sub, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="bg-white rounded-2xl border border-slate-100 p-5 flex items-start gap-4 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group block"
              >
                <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold mb-0.5">{label}</div>
                  <div className="text-sm font-bold text-slate-900 font-mono group-hover:text-orange-600 transition-colors">{value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/94763207873?text=Hello%20Vasantha%20Iron%20Works%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02]"
            >
              <span className="inline-flex items-center gap-3">
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span className="leading-none">Chat Directly on WhatsApp (+94 763 207 873)</span>
              </span>
            </a>

            {/* Map Card */}
            <a
              href="https://maps.google.com/?q=100/E+Railway+cross+road+Diyathalawa"
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:border-orange-200 transition-all block group"
            >
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Workshop Location</span>
                <span className="text-xs text-orange-600 font-semibold group-hover:underline">Open in Google Maps →</span>
              </div>
              <div className="h-40 bg-slate-100 flex flex-col items-center justify-center p-4 text-center relative">
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <MapPin className="w-9 h-9 text-orange-500 animate-bounce mb-2 relative z-10" />
                <p className="text-xs text-slate-700 font-bold relative z-10">100/E Railway Cross Road, Diyathalawa</p>
                <p className="text-[11px] text-slate-500 mt-0.5 relative z-10">Click to view location directions on Google Maps</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};
