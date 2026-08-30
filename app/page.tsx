'use client';

import { useState } from 'react';

const products = [
  { name: 'The Meridian', price: '$420', tone: '#e7e0d4' },
  { name: 'The Atlas', price: '$580', tone: '#d5d7d2' },
  { name: 'The Nocturne', price: '$650', tone: '#d6d0cd' },
];

function Watch({ tone }: { tone: string }) {
  return <div className="watch"><div className="strap" /><div className="face" style={{ background: `radial-gradient(circle, ${tone} 0 63%, #17191a 64%)` }} /></div>;
}

export default function Home() {
  const [cart, setCart] = useState(0);
  return (
    <main>
      <div className="topbar">Complimentary shipping on orders over $250</div>
      <div className="shell">
        <nav className="nav"><a className="logo" href="#top">AUREL</a><div className="navlinks"><a href="#collection">Collection</a><a href="#story">Our story</a><a href="#contact">Contact</a></div><button className="cart" onClick={() => alert(`Your cart has ${cart} item${cart === 1 ? '' : 's'}.`)}>Bag ({cart})</button></nav>
        <section className="hero" id="top"><div className="heroCopy"><span className="eyebrow">The essential collection</span><h1>Time, refined.</h1><p className="heroText">Thoughtfully designed timepieces for the moments that matter. Precision engineering, timeless form.</p><a className="primary" href="#collection">Explore collection →</a></div><div className="heroArt"><Watch tone="#23333a" /></div></section>
        <section className="section" id="collection"><div className="sectionHead"><div><span className="eyebrow">Curated for every occasion</span><h2>Signature pieces</h2></div><span className="muted">01 — 03</span></div><div className="grid">{products.map((product) => <article className="card" key={product.name}><div className="cardImage"><Watch tone={product.tone} /></div><div className="cardBody"><h3>{product.name}</h3><span className="price">{product.price}</span><button className="add" onClick={() => setCart((value) => value + 1)}>Add to bag</button></div></article>)}</div></section>
        <section className="section" id="story"><span className="eyebrow">Made to be remembered</span><h2>Details make the difference.</h2><p className="heroText">Every Aurel timepiece is assembled with intention, balancing modern minimalism with the craft of traditional watchmaking.</p></section>
        <footer className="footer" id="contact">© 2025 Aurel Watches · Built for the moments ahead.</footer>
      </div>
    </main>
  );
}
