import React, { useState, useEffect } from 'react';
import { Star, MessageSquareQuote, Quote, CheckCircle2, ExternalLink, PlusCircle, X, Send, Loader2 } from 'lucide-react';
import { fetchReviews, submitReview, type ClientReview } from '../lib/supabase';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<ClientReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    project_type: 'Veranda Safety Railing',
    rating: 5,
    comment: '',
  });

  const projectOptions = [
    'Veranda Safety Railing',
    'Window Security Grills',
    'Canopy Roofing Structure',
    'Custom Iron Gate',
    'Ceiling Framework',
    'Staircase Hand Railings',
    'Custom Arc Welding & Fabrication',
    'Other Ironwork',
  ];

  const colorPalettes = [
    'from-orange-500 to-amber-500',
    'from-emerald-500 to-teal-500',
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-indigo-500',
    'from-rose-500 to-pink-500',
  ];

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    setIsLoading(true);
    try {
      const data = await fetchReviews();
      setReviews(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase() || 'VI';
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return setError('Please enter your name.');
    if (!formData.comment.trim()) return setError('Please share your feedback comment.');

    setIsSubmitting(true);
    setError('');

    try {
      const created = await submitReview({
        name: formData.name.trim(),
        location: formData.location.trim() || 'Sri Lanka',
        project_type: formData.project_type,
        rating: Number(formData.rating),
        comment: formData.comment.trim(),
      });

      setReviews(prev => [created, ...prev]);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsModalOpen(false);
        setFormData({
          name: '',
          location: '',
          project_type: 'Veranda Safety Railing',
          rating: 5,
          comment: '',
        });
      }, 2000);
    } catch (err) {
      setError('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const googleReviewUrl = "https://maps.google.com/?q=100/E+Railway+cross+road+Diyathalawa";

  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
            <MessageSquareQuote className="w-3.5 h-3.5 text-orange-400" />
            <span>Customer Feedback</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            What Our Clients <span className="text-orange-gradient">Say</span>
          </h2>
          <p className="text-slate-300 text-base">
            Verified feedback from homeowners, businesses, and institutions across Diyathalawa, Bandarawela, and beyond.
          </p>
        </div>

        {/* ─── Google Reviews & Write Review Banner ─── */}
        <div className="mb-12 max-w-3xl mx-auto p-6 rounded-3xl bg-gradient-to-r from-slate-800/90 via-slate-850 to-slate-800/90 border border-white/10 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg flex-shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-base">Google Rating</span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-amber-400 font-extrabold text-sm">5.0</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Vasantha Iron Works & Welding • Diyathalawa
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Direct Website Review Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Write a Review</span>
            </button>

            {/* Google Review Button */}
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* ─── Testimonial Cards Grid ─── */}
        {isLoading ? (
          <div className="py-16 text-center text-slate-400 flex items-center justify-center gap-3">
            <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
            <span>Loading client reviews...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={review.id}
                className="relative rounded-3xl p-7 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Quote icon & Star rating */}
                  <div className="flex items-center justify-between mb-5">
                    <Quote className="w-8 h-8 text-orange-500 opacity-60" />
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-slate-200 text-sm leading-relaxed italic mb-7">
                    "{review.comment}"
                  </p>
                </div>

                {/* Client info */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${colorPalettes[idx % colorPalettes.length]} flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0`}>
                    {getInitials(review.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-white truncate">{review.name}</div>
                    <div className="text-xs text-orange-400 font-medium truncate">{review.project_type}</div>
                    {review.location && <div className="text-[11px] text-slate-400">{review.location}</div>}
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-semibold flex items-center gap-1 flex-shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    Verified
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* ─── Social Proof Bar ─── */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '5.0 ⭐', label: 'Customer Rating' },
            { value: '10+', label: 'Years Experience' },
            { value: '100%', label: 'Satisfaction Guaranteed' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center hover:bg-white/10 transition-colors">
              <div className="text-3xl font-black text-orange-gradient mb-1 stat-number">{item.value}</div>
              <div className="text-xs text-slate-400 font-semibold">{item.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* ─── Write a Review Modal ─── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
          onClick={() => !isSubmitting && setIsModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-slate-900 border border-slate-700 rounded-3xl p-7 sm:p-9 shadow-2xl text-left"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              disabled={isSubmitting}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-2xl font-extrabold text-white font-['Outfit']">Thank You! 🎉</h4>
                <p className="text-slate-300 text-sm max-w-xs mx-auto">
                  Your review has been successfully submitted and is now live on our website!
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/30">
                    <Star className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white font-['Outfit']">Write a Review</h3>
                    <p className="text-xs text-slate-400">Share your experience with Vasantha Iron Works</p>
                  </div>
                </div>

                {error && (
                  <div className="mb-4 p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g., Samantha Silva"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Location / Town
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleFormChange}
                        placeholder="e.g., Diyathalawa"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Project Type
                      </label>
                      <select
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:border-orange-500 cursor-pointer"
                      >
                        {projectOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Star Rating
                    </label>
                    <div className="flex items-center gap-2 py-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData(p => ({ ...p, rating: star }))}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              star <= formData.rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-sm font-bold text-amber-400 ml-2">{formData.rating}.0 Stars</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Review / Feedback <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      name="comment"
                      rows={4}
                      value={formData.comment}
                      onChange={handleFormChange}
                      placeholder="Share details about the quality of metalwork, welding, punctuality, and service..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-orange-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting to Cloud...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit My Review</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
