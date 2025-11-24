import React, { useState } from 'react';

export default function Rooms({ rooms, currentUser, onToggleRoom, onQRUpdate }) {
  const [qrScanning, setQrScanning] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const [filter, setFilter] = useState('all'); // all, available, occupied

  const handleQRScan = () => {
    setQrScanning(true);
    // Simulate QR code scanning
    setTimeout(() => {
      const randomRoom = rooms[Math.floor(Math.random() * rooms.length)];
      setQrCode(randomRoom.id);
      setQrScanning(false);
    }, 1500);
  };

  const handleQRSubmit = () => {
    if (!qrCode) {
      alert('Please scan a QR code first');
      return;
    }

    const room = rooms.find(r => r.id === qrCode);
    if (!room) {
      alert('Room not found. Please scan a valid QR code.');
      setQrCode('');
      return;
    }

    // Toggle room availability
    const newStatus = !room.available;
    onQRUpdate(room.id, newStatus);
    alert(`Room ${room.id} marked as ${newStatus ? 'Available' : 'Occupied'}`);
    setQrCode('');
  };

  const filteredRooms = rooms.filter(room => {
    if (filter === 'available') return room.available;
    if (filter === 'occupied') return !room.available;
    return true;
  });

  const availableCount = rooms.filter(r => r.available).length;
  const occupiedCount = rooms.filter(r => !r.available).length;

  return (
    <div className="rooms-view">
      <div className="rooms-header">
        <h2>Room Availability Monitoring</h2>
        <p className="subtitle">View and manage classroom availability in real-time</p>
      </div>

      {/* Statistics */}
      <div className="rooms-stats">
        <div className="stat-card">
          <div className="stat-value">{rooms.length}</div>
          <div className="stat-label">Total Rooms</div>
        </div>
        <div className="stat-card available">
          <div className="stat-value">{availableCount}</div>
          <div className="stat-label">Available</div>
        </div>
        <div className="stat-card occupied">
          <div className="stat-value">{occupiedCount}</div>
          <div className="stat-label">Occupied</div>
        </div>
      </div>

      {/* QR Code Scanner (Faculty/Admin only) */}
      {currentUser.canUpdateRooms && (
        <div className="qr-scanner-panel">
          <h3>Update Room Status via QR Code</h3>
          <p className="qr-instructions">
            Scan the QR code placed in each classroom to update its availability status.
          </p>
          <div className="qr-controls">
            <button 
              className={`btn-primary ${qrScanning ? 'scanning' : ''}`}
              onClick={handleQRScan}
              disabled={qrScanning}
            >
              {qrScanning ? 'Scanning QR Code...' : '📷 Scan QR Code'}
            </button>
            {qrCode && (
              <div className="qr-result">
                <p>Scanned Room: <strong>{qrCode}</strong></p>
                <button className="btn-secondary" onClick={handleQRSubmit}>
                  Update Status
                </button>
                <button className="btn-text" onClick={() => setQrCode('')}>
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Filter */}
      <div className="rooms-filter">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All Rooms
        </button>
        <button 
          className={filter === 'available' ? 'active' : ''}
          onClick={() => setFilter('available')}
        >
          Available Only
        </button>
        <button 
          className={filter === 'occupied' ? 'active' : ''}
          onClick={() => setFilter('occupied')}
        >
          Occupied Only
        </button>
      </div>

      {/* Room List */}
      <div className="room-list-container">
        <ul className="room-list">
          {filteredRooms.length === 0 ? (
            <li className="no-rooms">No rooms match the current filter.</li>
          ) : (
            filteredRooms.map(room => (
              <li 
                key={room.id} 
                className={`room-item ${room.available ? 'available' : 'unavailable'}`}
              >
                <div className="room-left">
                  <div className="room-header">
                    <strong className="room-name">{room.name}</strong>
                    <span className="room-type">{room.type}</span>
                  </div>
                  <div className="room-meta">
                    <span>ID: {room.id}</span>
                    <span>•</span>
                    <span>Floor: {room.floor}</span>
                    <span>•</span>
                    <span>Capacity: {room.capacity}</span>
                  </div>
                </div>
                <div className="room-right">
                  <span className={`status-badge ${room.available ? 'available' : 'occupied'}`}>
                    {room.available ? '✓ Available' : '✗ Occupied'}
                  </span>
                  {currentUser.canUpdateRooms && (
                    <button 
                      className="btn-toggle"
                      onClick={() => onToggleRoom(room.id)}
                      title={`Mark as ${room.available ? 'Occupied' : 'Available'}`}
                    >
                      {room.available ? 'Mark Occupied' : 'Mark Available'}
                    </button>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Info Panel */}
      <div className="rooms-info">
        <p>
          <strong>Note:</strong> Room availability is updated in real-time. 
          {currentUser.canUpdateRooms 
            ? ' Faculty members can update room status by scanning QR codes placed in each classroom or using the toggle buttons.'
            : ' Only faculty and administrators can update room status.'}
        </p>
      </div>
    </div>
  );
}
