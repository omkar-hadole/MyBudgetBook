import React from 'react';
import PlayStore from '../assets/playstore.svg'
import AppStore from '../assets/appstore.svg'
import Mail from '../assets/mail.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'
import YouTube from '../assets/youtube.svg'

const FooterSection = () => (
    <footer className="w-full bg-gradient-to-b from-[#ffffff] via-[#F0F0F2] to-[#F0F0F2] pt-32 sm:pt-52 relative overflow-hidden">
        <div className="max-w-4xl mx-auto -mt-16 sm:-mt-32 mb-8 sm:mb-16 rounded-[1.5rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#18181B] to-[#23272F] p-6 sm:p-10 md:p-16 text-center relative overflow-visible shadow-2xl border border-gray-900/10">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(180deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }}></div>
            <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">Download Our App Free and<br className="hidden sm:block" />Enjoy Exclusive Features!</h2>
                <p className="text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg px-2">Enjoy seamless expense tracking, clear financial insights, and effortless budgeting right at your fingertips. Take control of your money with our easy-to-use, free app designed for your daily financial needs.</p>
                <div className="flex flex-row gap-4 sm:gap-9 justify-center">
                    <img src={PlayStore} alt="Play Store" className='cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-lg w-32 sm:w-auto' />
                    <img src={AppStore} alt="App Store" className='cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-lg w-32 sm:w-auto' />
                </div>
            </div>
        </div>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8 sm:mb-12" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-12 lg:gap-0 border-b border-gray-200 pb-8 sm:pb-12">
                <div className="flex-1 min-w-[260px] flex flex-col gap-4 sm:gap-6 lg:pr-12">
                    <div className="flex items-center gap-2 mb-2">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1687 6H24L13.8313 19H0L10.1687 6Z" fill="#155EEF" />
                            <path d="M10.9935 19.9648L7 25H21.6894L32 12H21.1583L14.8412 19.9648H10.9935Z" fill="#9E77ED" />
                        </svg>
                        <span className="text-xl font-semibold text-gray-900">MyBudgetBook</span>
                    </div>
                    <div className="font-semibold mb-1">Subscribe</div>
                    <div className="text-gray-500 text-sm mb-2">Join our newsletter to stay up to date on features and releases.</div>
                    <form className="flex items-center gap-2 mb-1 w-full max-w-xs">
                        <div className="flex flex-1 items-center bg-white rounded-full border border-gray-200 shadow px-2 py-1.5">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                                <img src={Mail} alt="" />
                            </span>
                            <input type="email" placeholder="Enter your email" className="flex-1 px-2 py-2 rounded-full bg-white text-gray-900 focus:outline-none" />
                            <button type="submit" className="px-6 py-2 bg-gray-900 text-white rounded-full font-semibold shadow hover:shadow-lg hover:scale-105 transition-all">Subscribe</button>
                        </div>
                    </form>
                    <div className="text-xs text-gray-400">By subscribing you agree to with our <a href="#" className="underline hover:text-purple-500 transition">Privacy Policy</a></div>
                </div>
                <div className="flex-[2] w-full grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-16">
                    <div>
                        <div className="font-semibold mb-3 sm:mb-4 text-gray-900">Quick Links</div>
                        <ul className="text-gray-500 text-sm space-y-2 sm:space-y-3">
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">Home</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">About</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">Services</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-3 sm:mb-4 text-gray-900">Products</div>
                        <ul className="text-gray-500 text-sm space-y-2 sm:space-y-3">
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">Ai Assistant</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">Mobile App</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">Account</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">Credit Card</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-3 sm:mb-4 text-gray-900">Company</div>
                        <ul className="text-gray-500 text-sm space-y-2 sm:space-y-3">
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">About</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">Support</a></li>
                            <li><a href="#" className="hover:text-purple-500 transition-colors duration-200">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 pt-9 px-2">
                <div className="text-xs text-gray-400 text-center md:text-left">Copyright © 2025 MyBudgetBook. All Rights Reserved</div>
                <div className="flex gap-3 md:gap-4 mt-2 md:mt-0">
                    <a href="#" className="inline-flex items-center justify-center w-8 h-8 p-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-purple-500 hover:shadow-lg hover:scale-110 transition-all duration-200">
                        <img src={Facebook} alt="" />
                        </a>
                    <a href="#" className="inline-flex items-center justify-center w-8 h-8 p-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-purple-500 hover:shadow-lg hover:scale-110 transition-all duration-200">
                        <img src={Twitter} alt="" />
                        </a>
                    <a href="#" className="inline-flex items-center justify-center w-8 h-8 p-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-purple-500 hover:shadow-lg hover:scale-110 transition-all duration-200">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="#" className="inline-flex items-center justify-center w-8 h-8 p-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-purple-500 hover:shadow-lg hover:scale-110 transition-all duration-200">
                        <img src={YouTube} alt="" />
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-8 bg-gradient-to-t from-[#e9eaf0] to-transparent pointer-events-none" />
    </footer>
);

export default FooterSection; 