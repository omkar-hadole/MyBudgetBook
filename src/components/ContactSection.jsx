import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="w-full bg-gradient-to-b from-white via-purple-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-30" style={{ background: 'radial-gradient(circle at top left, #ffffff, transparent 70%), radial-gradient(circle at bottom right, #6366f1, transparent 70%)' }}></div>

            <div className="h-screen flex flex-col items-center justify-center px-4 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Let's Connect</span> and Grow Together
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto opacity-90">
                        We're eager to hear from you! Whether you have questions, need assistance, or want to discuss a partnership, our team is ready to help. Reach out and let's start a conversation.
                    </p>
                    <div className="flex justify-center mt-8">
                        <svg className="w-8 h-8 text-gray-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="w-full py-16 sm:py-24 px-4 md:px-8 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white/30 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-lg border border-white/20">
                        <div className="flex items-center justify-center gap-3 mb-10">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1687 6H24L13.8313 19H0L10.1687 6Z" fill="#155EEF" />
                                <path d="M10.9935 19.9648L7 25H21.6894L32 12H21.1583L14.8412 19.9648H10.9935Z" fill="#9E77ED" />
                            </svg>
                            <span className="text-xl font-medium text-gray-900">MyBudgetBook</span>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-900 placeholder-gray-600 transition duration-200 backdrop-blur-sm"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-900 placeholder-gray-600 transition duration-200 backdrop-blur-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-900 placeholder-gray-600 transition duration-200 backdrop-blur-sm"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Your Message"
                                    className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-900 placeholder-gray-600 transition duration-200 backdrop-blur-sm resize-none"
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-gradient-to-tr from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition duration-200"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection; 