import React from 'react';
import { pointsOfInterest } from '../data';

function Marker({ x, y, label, available, type, onClick, isSelected }) {
  const markerClass = `marker ${available ? 'ok' : 'busy'} ${isSelected ? 'selected' : ''}`;
  const typeIcon = type === 'Office' ? '🏢' : type === 'Laboratory' ? '🔬' : type === 'Lecture Hall' ? '📚' : '🏫';
  
  return (
    <div 
      className={markerClass} 
      style={{ left: `${x}%`, top: `${y}%` }} 
      title={`${label} - ${available ? 'Available' : 'Occupied'}`}
      onClick={onClick}
    >
      <span className="marker-icon">{typeIcon}</span>
      <span className="marker-label">{label}</span>
    </div>
  );
}

function POIMarker({ x, y, label, type }) {
  const poiIcon = type === 'Office' ? '🏛️' : type === 'Library' ? '📖' : type === 'Laboratory' ? '⚗️' : '🍽️';
  
  return (
    <div 
      className="marker poi" 
      style={{ left: `${x}%`, top: `${y}%` }} 
      title={label}
    >
      <span className="marker-icon">{poiIcon}</span>
      <span className="marker-label">{label}</span>
    </div>
  );
}

export default function MapView({ rooms, selectedRoom, setSelectedRoom, currentUser, onRoomClick }) {
  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    if (onRoomClick) onRoomClick(room);
  };

  return (
    <div className="map-view-container">
      <div className="map-header">
        <h2>Interactive Campus Map</h2>
        <p className="subtitle">Click on any room to view details and check availability</p>
      </div>

      <div className="map-container">
        <div className="map-canvas">
          {/* Render rooms */}
          {rooms.map(room => (
            <Marker
              key={room.id}
              x={room.x}
              y={room.y}
              label={room.name}
              available={room.available}
              type={room.type}
              onClick={() => handleRoomClick(room)}
              isSelected={selectedRoom?.id === room.id}
            />
          ))}

          {/* Render points of interest */}
          {pointsOfInterest.map(poi => (
            <POIMarker
              key={poi.id}
              x={poi.x}
              y={poi.y}
              label={poi.name}
              type={poi.type}
            />
          ))}
        </div>

        <div className="map-sidebar">
          <div className="legend">
            <h3>Legend</h3>
            <div className="legend-item">
              <span className="dot ok"></span>
              <span>Available Room</span>
            </div>
            <div className="legend-item">
              <span className="dot busy"></span>
              <span>Occupied Room</span>
            </div>
            <div className="legend-item">
              <span className="dot poi"></span>
              <span>Point of Interest</span>
            </div>
          </div>

          {selectedRoom && (
            <div className="room-details">
              <h3>Room Details</h3>
              <div className="detail-item">
                <strong>Name:</strong> {selectedRoom.name}
              </div>
              <div className="detail-item">
                <strong>ID:</strong> {selectedRoom.id}
              </div>
              <div className="detail-item">
                <strong>Type:</strong> {selectedRoom.type}
              </div>
              <div className="detail-item">
                <strong>Capacity:</strong> {selectedRoom.capacity} people
              </div>
              <div className="detail-item">
                <strong>Floor:</strong> {selectedRoom.floor}
              </div>
              <div className="detail-item">
                <strong>Status:</strong>{' '}
                <span className={`status-badge ${selectedRoom.available ? 'available' : 'occupied'}`}>
                  {selectedRoom.available ? 'Available' : 'Occupied'}
                </span>
              </div>
              {currentUser.canBorrow && (
                <button 
                  className="btn-primary"
                  onClick={() => {
                    // Note: User can navigate to Borrow tab manually to request equipment
                    alert('Navigate to the "Borrow" tab to request equipment for this room.');
                  }}
                >
                  Request Equipment for this Room
                </button>
              )}
            </div>
          )}

          {!selectedRoom && (
            <div className="room-details placeholder">
              <p>Select a room on the map to view details</p>
            </div>
          )}
        </div>
      </div>

      <div className="map-info">
        <p>
          <strong>Navigation Tips:</strong> Use the map to locate classrooms, offices, and facilities. 
          Click on any room marker to see detailed information including capacity, floor, and current availability status.
        </p>
      </div>
    </div>
  );
}
