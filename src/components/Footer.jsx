import React from 'react';
import logo from '../Images/logo.jpg';

const Footer = () => {
  return (
    <>
      <footer className='w-full bg-slate-50 flex justify-center bottom-0'>
        <div className="max-w-6xl w-8/12 relative p-3">
          <section className="flex items-center justify-between w-full mb-8">
            <img src={logo} alt="" className='w-20 rounded-full' />
            <div className="mt-3"></div>
            <section className="flex items-center justify-between w-64 mr-1 ml-2 h-10 font-semibold">
              <div className="w-28 h-full flex items-center justify-evenly p-2 border border-custom-gray rounded-custom">
                <img className="w-6 h-4 mr-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAsVBMVEX/mTMSiAf/////mjH//fv6+/cAgwAAAIgAAIUAAIMAAIAAAH4AAHvu7vfe3u7Hx+AAAHb5+f20tNb39/1LS6Ghocrk5PGSksSDg7utrdEAAHLMzOS+vtxSUqRERJzX1+oQEI1ERKMvL5Z/f7d5ebaYmManp88bG5JkZK/JyeEiIpFoaKqMjL9ycrSzs9uVlctYWKI3N5tgYKw6OpoeHo8YGJEsLJYAAJAbG5lYWKkmJpLm9FjFAAAEl0lEQVR4nO3ba3PiNhiGYaoeJB9kg0/YsbEg5rQkaUtINk3+/w/rK0OyDS/tTL9YmeG5Zgin/SDuNZYRZjQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPiffoZzo1/g3EjAOTTh0IRDEw5NuK/QpGjKu8XT5mlxVzaF68GIL9CkuJ8HvqeUknTx/GB+H7kekuMmdRZ4Utogvu/bLFJ6QVu7HZTTJsXMtxHU9iHMClNk4cNW2UR+5vQt5LLJym4Znj8VqWi0MEI3dGtKbySqsnI4LndNJjOfXnuXt1rE9v7v9k8sdJt31MqfTZyNzFkTvfOkak3/ytf2zx8ftyamVdLbaVdDc9VEz+llB/lxE4ntVLOkS3S8K3La86q5qyiOmkx2lCQvtUgruqen9GdLl6nNUKVClzlFeXP09nHUZOZJP+lv5XaKWdDlz9N1kfePN770Zm4G56bJil7wWjT97Ve6bCnMgXJsT/cpiVhTNjezj5MmEc04QXnarea0XaxWIt2k9kqs+82EnikDmn2cHNM6aZIp1dpdx2Rr9xiSjk1uhaarWyNSKU6P62mrVOZieC6axP77BpDuqUy1EGmotad1mIoFzcZ6n/bP0ubkxw7G56IJ/f+XadxPKoWkOCoRm1yHOt+IRFEKeTyyj9OSticH43PQxNAOlmbgvD8+i/xaJMGka4tx0XYiqETtG/uE3a9UtJs1ww/QQZOOXqmddKOZrfItTIS8a4IojILmTooktG+XambfXAuqVw4/QAdNnqS3Oh6i5nPaXpJxHo8jr36pvWgcr8d02JI8HydhvfLk0/ADHL4J7Tnn7weoOntJRH7TLMsymSVluWxucpHM2/elgsncxXQ8fJO1p7aTOGmOm0rlb+IkjPZ1VVb1PgqTbzu/6p/RcRJPHtXp3pCGb0KTid1HmOnrY04fiyfbcWduTdfu2858N914m9IH4/X29d78+MfDGr5JpmR4POqIVptgv4yjbm/afj02M/ulibuDP58e3zFxKB0ctg3f5E2p2ccqQJEfQlWapSctb2nuVXi7+lh51DOl3gYf4fBNaNpJP+6kuqhNnR9U30QdVrGpC/2P511MPMM3eZYqMk01ffz+EtzcjMnLw14eHcoX+wA9LP/Kujw2kZKbwUeI7YTD/oT7IvNOdt3zzr8fn5RXe3xS4TiWweedC/C5mPu8fhJj/UScrbMZrLP16ANfd7Ye+3xxPba7mvXY/1y3b/t1++PuhvbGwbWs2+P7nQs+fw+4xveAFr4vvgDnFXCTN5x/wuA8pQtwPtsFx/MelxfOe1xe63mPAufHXoTzqC/B+faXFPfPn36X8Xz1v8vo9b/f2W12+P3O14UmHJpwaMKhCTf6Fc6NfoNzo5/gHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCfc3xgk4+urIdocAAAAASUVORK5CYII=" alt="" />
                <p className='text-lg ' >India</p>
                <i className="fa-solid fa-chevron-down w-5 mb-2 h-2"></i>
              </div>
              <div className="w-28 h-full flex items-center justify-evenly p-1 border border-custom-gray rounded-custom">
                <i className="fa-solid fa-globe" style={{ color: '#000000' }}></i>
                <p>English</p>
                <i className="fa-solid fa-chevron-down w-5 mb-3 h-2" ></i>
              </div>
            </section>
          </section>
          <div className="flex w-full relative flex-wrap justify-between">
            <div className="relative w-full max-w-32">
              <h6 className='text-md space-x-1 space-y-1 font-semibold'>ABOUT US</h6>
              <nav>
                <a href="#"><p>Who We Are</p></a>
                <a href="#"><p>Blog</p></a>
                <a href="#"><p>Work With Us</p></a>
                <a href="#"><p>Investor Relations</p></a>
                <a href="#"><p>Report Fraud</p></a>
                <a href="#"><p>Contact Us</p></a>
              </nav>
            </div>
            <div className="foot2">
              <h6 className='font-semibold'>Everyday Eats VERSE</h6>
              <nav>
                <a href="#"><p>Everyday Eats</p></a>
                <a href="#"><p>Ziakit</p></a>
                <a href="#"><p>Feeding India</p></a>
                <a href="#"><p>Hyperpure</p></a>
                <a href="#"><p>Everyday Eatsland</p></a>
              </nav>
            </div>
            <div className="foot3">
              <div className="foot3-1">
                <h6 className='font-semibold'>FOR RESTAURANTS</h6>
                <nav>
                  <a href="#"><p>Partner With Us</p></a>
                  <a href="#"><p>Apps For You</p></a>
                </nav>
              </div>
              <div className="foot3-2">
                <h6 className='font-semibold'>FOR ENTERPRISES</h6>
                <nav>
                  <a href="#"><p>Everyday Eats For Enterprise</p></a>
                </nav>
              </div>
            </div>
            <div className="foot4">
              <h6 className='font-semibold'>LEARN MORE</h6>
              <nav>
                <a href="#"><p>Privacy</p></a>
                <a href="#"><p>Security</p></a>
                <a href="#"><p>Terms</p></a>
                <a href="#"><p>Sitemap</p></a>
              </nav>
            </div>
            <div className="foot5">
              <h6 className='font-semibold'>SOCIAL LINKS</h6>
              <div className="icons">
                <a target="_blank" href="https://www.linkedin.com/in/dhiraj-udhani-13061969bharti"><i className="fa-brands fa-linkedin" style={{ color: '#000000' }}></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/dhiraj-udhani-13061969bharti"><i className="fa-brands fa-instagram" style={{ color: '#000000' }}></i></a>
                <a target="_blank" href="https://twitter.com/udhani_dhiraj"><i className="fa-brands fa-twitter" style={{ color: '#000000' }}></i></a>
                <a target="_blank" href="https://twitter.com/udhani_dhiraj"><i className="fa-brands fa-youtube" style={{ color: '#000000' }}></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/dhiraj-udhani-13061969bharti"><i className="fa-brands fa-facebook" style={{ color: '#000000' }}></i></a>
              </div>
              <div className="mt-6"></div>
              <section className="store">
                <a href="#">
                  <div className="relative w-32 h-[40px] overflow-hidden">
                    <img className='bg-cover' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="App store" />
                  </div>
                </a>
                <div className="blank2"></div>
                <a href="#">
                  <div className="relative w-32 h-[40px] overflow-hidden">
                    <img className='bg-cover' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="Playstore" />
                  </div>
                </a>
              </section>
            </div>
          </div>
          <hr className="mt-12" />
          <p className="copyright mt-6 text-sm">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Everyday Eats Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
