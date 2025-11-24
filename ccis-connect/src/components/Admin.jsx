import React, { useState } from 'react';

export default function Admin({ 
  rooms, 
  equipment, 
  requests, 
  currentUser, 
  onApproveRequest, 
  onRejectRequest, 
  onReturnEquipment,
  onToggleRoom 
}) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [returnForm, setReturnForm] = useState({ equipmentId: '', quantity: 1 });

  if (currentUser.role !== 'admin') {
    return (
      <div className="admin-view">
        <div className="access-denied">
          <h2>Access Denied</h2>
          <p>You must be logged in as an administrator to access this section.</p>
        </div>
      </div>
    );
  }

  const pendingRequests = requests.filter(r => r.status === 'pending');
  const approvedRequests = requests.filter(r => r.status === 'approved');
  const rejectedRequests = requests.filter(r => r.status === 'rejected');
  
  const availableRooms = rooms.filter(r => r.available).length;
  const occupiedRooms = rooms.filter(r => !r.available).length;
  const totalEquipment = equipment.reduce((sum, eq) => sum + eq.quantity, 0);
  const borrowedEquipment = equipment.filter(eq => !eq.available || eq.quantity === 0).length;

  const handleReturn = () => {
    if (!returnForm.equipmentId) {
      alert('Please select equipment to return.');
      return;
    }
    onReturnEquipment(returnForm.equipmentId, returnForm.quantity);
    alert(`Marked ${returnForm.quantity} item(s) as returned.`);
    setReturnForm({ equipmentId: '', quantity: 1 });
  };

  return (
    <div className="admin-view">
      <div className="admin-header">
        <h2>Administrative Dashboard</h2>
        <p className="subtitle">Manage rooms, equipment, and borrowing requests</p>
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        <button 
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={activeTab === 'requests' ? 'active' : ''}
          onClick={() => setActiveTab('requests')}
        >
          Requests ({pendingRequests.length})
        </button>
        <button 
          className={activeTab === 'rooms' ? 'active' : ''}
          onClick={() => setActiveTab('rooms')}
        >
          Room Management
        </button>
        <button 
          className={activeTab === 'equipment' ? 'active' : ''}
          onClick={() => setActiveTab('equipment')}
        >
          Equipment Management
        </button>
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div className="admin-dashboard">
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-icon">🏫</div>
              <div className="stat-content">
                <div className="stat-value">{rooms.length}</div>
                <div className="stat-label">Total Rooms</div>
                <div className="stat-detail">{availableRooms} available, {occupiedRooms} occupied</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📦</div>
              <div className="stat-content">
                <div className="stat-value">{totalEquipment}</div>
                <div className="stat-label">Total Equipment</div>
                <div className="stat-detail">{borrowedEquipment} currently in use</div>
              </div>
            </div>
            <div className="stat-card warning">
              <div className="stat-icon">⏳</div>
              <div className="stat-content">
                <div className="stat-value">{pendingRequests.length}</div>
                <div className="stat-label">Pending Requests</div>
                <div className="stat-detail">Awaiting approval</div>
              </div>
            </div>
            <div className="stat-card success">
              <div className="stat-icon">✓</div>
              <div className="stat-content">
                <div className="stat-value">{approvedRequests.length}</div>
                <div className="stat-label">Approved Requests</div>
                <div className="stat-detail">This period</div>
              </div>
            </div>
          </div>

          <div className="dashboard-sections">
            <div className="dashboard-section">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                {requests.slice(0, 10).map(req => (
                  <div key={req.id} className="activity-item">
                    <div className="activity-icon">
                      {req.status === 'pending' && '⏳'}
                      {req.status === 'approved' && '✓'}
                      {req.status === 'rejected' && '✗'}
                    </div>
                    <div className="activity-content">
                      <div className="activity-title">
                        {req.equipmentName} × {req.qty} requested by {req.requester}
                      </div>
                      <div className="activity-meta">
                        {new Date(req.createdAt).toLocaleString()} • {req.status}
                      </div>
                    </div>
                  </div>
                ))}
                {requests.length === 0 && (
                  <p className="no-activity">No recent activity.</p>
                )}
              </div>
            </div>

            <div className="dashboard-section">
              <h3>Quick Actions</h3>
              <div className="quick-actions">
                <button 
                  className="action-btn"
                  onClick={() => setActiveTab('requests')}
                >
                  Review Pending Requests
                </button>
                <button 
                  className="action-btn"
                  onClick={() => setActiveTab('rooms')}
                >
                  Manage Rooms
                </button>
                <button 
                  className="action-btn"
                  onClick={() => setActiveTab('equipment')}
                >
                  Manage Equipment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Requests Tab */}
      {activeTab === 'requests' && (
        <div className="admin-requests">
          <div className="requests-header">
            <h3>Borrowing Requests</h3>
            <div className="request-filters">
              <button 
                className={pendingRequests.length > 0 ? 'filter-active' : ''}
                onClick={() => {}}
              >
                Pending ({pendingRequests.length})
              </button>
            </div>
          </div>

          <div className="requests-list">
            {pendingRequests.length === 0 ? (
              <div className="no-requests">No pending requests at this time.</div>
            ) : (
              pendingRequests.map(req => (
                <div key={req.id} className="request-card pending">
                  <div className="request-card-header">
                    <div className="request-title">
                      <strong>{req.equipmentName}</strong>
                      <span className="request-quantity">× {req.qty}</span>
                    </div>
                    <span className="request-status pending">Pending</span>
                  </div>
                  <div className="request-card-body">
                    <div className="request-detail">
                      <strong>Requester:</strong> {req.requester}
                    </div>
                    {req.roomId && (
                      <div className="request-detail">
                        <strong>For Room:</strong> {req.roomId}
                      </div>
                    )}
                    <div className="request-detail">
                      <strong>Requested:</strong> {new Date(req.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <div className="request-card-actions">
                    <button 
                      className="btn-approve"
                      onClick={() => onApproveRequest(req.id)}
                    >
                      ✓ Approve
                    </button>
                    <button 
                      className="btn-reject"
                      onClick={() => onRejectRequest(req.id)}
                    >
                      ✗ Reject
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {approvedRequests.length > 0 && (
            <div className="requests-section">
              <h4>Approved Requests</h4>
              <div className="requests-list">
                {approvedRequests.slice(0, 10).map(req => (
                  <div key={req.id} className="request-card approved">
                    <div className="request-card-header">
                      <div className="request-title">
                        <strong>{req.equipmentName}</strong> × {req.qty}
                      </div>
                      <span className="request-status approved">Approved</span>
                    </div>
                    <div className="request-card-body">
                      <div className="request-detail">
                        {req.requester} • {new Date(req.approvedAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Rooms Tab */}
      {activeTab === 'rooms' && (
        <div className="admin-rooms">
          <h3>Room Management</h3>
          <div className="rooms-grid">
            {rooms.map(room => (
              <div key={room.id} className="room-card">
                <div className="room-card-header">
                  <strong>{room.name}</strong>
                  <span className={`status-badge ${room.available ? 'available' : 'occupied'}`}>
                    {room.available ? 'Available' : 'Occupied'}
                  </span>
                </div>
                <div className="room-card-body">
                  <div>ID: {room.id}</div>
                  <div>Type: {room.type}</div>
                  <div>Floor: {room.floor}</div>
                  <div>Capacity: {room.capacity}</div>
                </div>
                <div className="room-card-actions">
                  <button 
                    className="btn-toggle"
                    onClick={() => onToggleRoom(room.id)}
                  >
                    {room.available ? 'Mark Occupied' : 'Mark Available'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Equipment Tab */}
      {activeTab === 'equipment' && (
        <div className="admin-equipment">
          <h3>Equipment Management</h3>
          
          <div className="return-panel">
            <h4>Mark Equipment as Returned</h4>
            <div className="return-form">
              <select
                value={returnForm.equipmentId}
                onChange={(e) => setReturnForm({ ...returnForm, equipmentId: e.target.value })}
                className="form-select"
              >
                <option value="">Select Equipment</option>
                {equipment.map(eq => (
                  <option key={eq.id} value={eq.id}>
                    {eq.name} ({eq.location})
                  </option>
                ))}
              </select>
              <input
                type="number"
                min="1"
                value={returnForm.quantity}
                onChange={(e) => setReturnForm({ ...returnForm, quantity: parseInt(e.target.value) || 1 })}
                className="form-input"
                placeholder="Quantity"
              />
              <button className="btn-primary" onClick={handleReturn}>
                Mark Returned
              </button>
            </div>
          </div>

          <div className="equipment-grid">
            {equipment.map(eq => (
              <div key={eq.id} className="equipment-card">
                <div className="equipment-card-header">
                  <strong>{eq.name}</strong>
                  <span className={`availability-badge ${eq.quantity > 0 ? 'available' : 'unavailable'}`}>
                    {eq.quantity} available
                  </span>
                </div>
                <div className="equipment-card-body">
                  <div>Category: {eq.category}</div>
                  <div>Location: {eq.location}</div>
                  <div>Status: {eq.available ? 'Active' : 'Inactive'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
