import React from 'react';

export default function NavBar({ view, setView }) {
  return (
    <nav className="ccis-nav">
      <div className="brand">CCIS Connect</div>
      <div className="links">
        <button className={view==='map' ? 'active' : ''} onClick={()=>setView('map')}>Map</button>
        <button className={view==='rooms' ? 'active' : ''} onClick={()=>setView('rooms')}>Rooms</button>
        <button className={view==='borrow' ? 'active' : ''} onClick={()=>setView('borrow')}>Borrow</button>
        <button className={view==='admin' ? 'active' : ''} onClick={()=>setView('admin')}>Admin</button>
      </div>
    </nav>
  );
}
