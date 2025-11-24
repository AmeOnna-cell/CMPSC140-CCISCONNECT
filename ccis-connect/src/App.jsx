import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import MapView from './components/MapView';
import Rooms from './components/Rooms';
import Borrow from './components/Borrow';
import Admin from './components/Admin';
import { rooms as initialRooms, equipment as initialEquipment, users } from './data';
import './App.css';

function App() {
  const [view, setView] = useState('map');
  const [userRole, setUserRole] = useState('guest');
  const [roomsData, setRoomsData] = useState(initialRooms);
  const [equipmentData, setEquipmentData] = useState(initialEquipment);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [borrowRequests, setBorrowRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const savedRooms = localStorage.getItem('ccis_rooms');
    const savedEquipment = localStorage.getItem('ccis_equipment');
    const savedRequests = localStorage.getItem('ccis_requests');
    
    if (savedRooms) setRoomsData(JSON.parse(savedRooms));
    if (savedEquipment) setEquipmentData(JSON.parse(savedEquipment));
    if (savedRequests) setBorrowRequests(JSON.parse(savedRequests));
  }, []);

  // Save to localStorage when data changes
  useEffect(() => {
    localStorage.setItem('ccis_rooms', JSON.stringify(roomsData));
  }, [roomsData]);

  useEffect(() => {
    localStorage.setItem('ccis_equipment', JSON.stringify(equipmentData));
  }, [equipmentData]);

  useEffect(() => {
    localStorage.setItem('ccis_requests', JSON.stringify(borrowRequests));
  }, [borrowRequests]);

  // Room availability toggle (for faculty/admin)
  const toggleRoomAvailability = (roomId) => {
    setRoomsData(prev => 
      prev.map(room => 
        room.id === roomId ? { ...room, available: !room.available } : room
      )
    );
  };

  // Update room via QR code (simulated)
  const updateRoomViaQR = (roomId, isAvailable) => {
    setRoomsData(prev => 
      prev.map(room => 
        room.id === roomId ? { ...room, available: isAvailable } : room
      )
    );
  };

  // Submit borrow request
  const submitBorrowRequest = (equipmentId, quantity, roomId = null) => {
    const equipment = equipmentData.find(eq => eq.id === equipmentId);
    if (!equipment || equipment.quantity < quantity) {
      return { success: false, message: 'Insufficient equipment available' };
    }

    const request = {
      id: `REQ-${Date.now()}`,
      equipmentId,
      equipmentName: equipment.name,
      quantity,
      roomId,
      requester: users[userRole]?.name || 'Unknown',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    setBorrowRequests(prev => [request, ...prev]);
    return { success: true, message: 'Request submitted successfully' };
  };

  // Approve borrow request (admin only)
  const approveRequest = (requestId) => {
    const request = borrowRequests.find(r => r.id === requestId);
    if (!request) return;

    const equipment = equipmentData.find(eq => eq.id === request.equipmentId);
    if (equipment && equipment.quantity >= request.quantity) {
      setEquipmentData(prev =>
        prev.map(eq =>
          eq.id === request.equipmentId
            ? { ...eq, quantity: eq.quantity - request.quantity }
            : eq
        )
      );

      setBorrowRequests(prev =>
        prev.map(r =>
          r.id === requestId
            ? { ...r, status: 'approved', approvedAt: new Date().toISOString() }
            : r
        )
      );
    }
  };

  // Reject borrow request (admin only)
  const rejectRequest = (requestId) => {
    setBorrowRequests(prev =>
      prev.map(r =>
        r.id === requestId
          ? { ...r, status: 'rejected', rejectedAt: new Date().toISOString() }
          : r
      )
    );
  };

  // Return equipment (admin only)
  const returnEquipment = (equipmentId, quantity) => {
    setEquipmentData(prev =>
      prev.map(eq =>
        eq.id === equipmentId
          ? { ...eq, quantity: eq.quantity + quantity }
          : eq
      )
    );
  };

  // Filter rooms based on search
  const filteredRooms = roomsData.filter(room =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentUser = users[userRole] || users.guest;

  return (
    <div className="app-root">
      <NavBar view={view} setView={setView} />
      
      {/* Role Selector */}
      <div className="role-selector">
        <label>Current Role: </label>
        <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
          <option value="guest">Guest</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Administrator</option>
        </select>
        <span className="user-info">({currentUser.name})</span>
      </div>

      {/* Search Bar (for map and rooms views) */}
      {(view === 'map' || view === 'rooms') && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search rooms by name or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {view === 'map' && (
          <MapView
            rooms={filteredRooms}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
            currentUser={currentUser}
            onRoomClick={(room) => {
              setSelectedRoom(room);
            }}
          />
        )}

        {view === 'rooms' && (
          <Rooms
            rooms={filteredRooms}
            currentUser={currentUser}
            onToggleRoom={toggleRoomAvailability}
            onQRUpdate={updateRoomViaQR}
          />
        )}

        {view === 'borrow' && (
          <Borrow
            equipment={equipmentData}
            currentUser={currentUser}
            selectedRoom={selectedRoom}
            onSubmitRequest={submitBorrowRequest}
            requests={borrowRequests}
          />
        )}

        {view === 'admin' && (
          <Admin
            rooms={roomsData}
            equipment={equipmentData}
            requests={borrowRequests}
            currentUser={currentUser}
            onApproveRequest={approveRequest}
            onRejectRequest={rejectRequest}
            onReturnEquipment={returnEquipment}
            onToggleRoom={toggleRoomAvailability}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>CCIS CONNECT - Campus Digital Mapping, Room and Equipment Availability Management System</p>
        <p className="footer-subtitle">Mariano Marcos State University - College of Computing and Information Sciences</p>
      </footer>
    </div>
  );
}

export default App;
