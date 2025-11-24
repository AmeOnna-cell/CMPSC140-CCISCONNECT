import React, { useState } from 'react';

export default function Borrow({ equipment, currentUser, selectedRoom, onSubmitRequest, requests }) {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [filter, setFilter] = useState('all'); // all, available, unavailable
  const [searchQuery, setSearchQuery] = useState('');

  const handleRequestClick = (eq) => {
    if (!currentUser.canBorrow) {
      alert('You do not have permission to borrow equipment. Please log in as a student or faculty member.');
      return;
    }
    setSelectedEquipment(eq);
    setQuantity(1);
    setShowRequestForm(true);
  };

  const handleSubmitRequest = () => {
    if (!selectedEquipment) return;
    
    if (quantity > selectedEquipment.quantity) {
      alert(`Only ${selectedEquipment.quantity} ${selectedEquipment.name}(s) available.`);
      return;
    }

    if (quantity <= 0) {
      alert('Quantity must be greater than 0.');
      return;
    }

    const result = onSubmitRequest(
      selectedEquipment.id,
      quantity,
      selectedRoom?.id || null
    );

    if (result.success) {
      alert(result.message);
      setShowRequestForm(false);
      setSelectedEquipment(null);
      setQuantity(1);
    } else {
      alert(result.message || 'Failed to submit request.');
    }
  };

  const filteredEquipment = equipment.filter(eq => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'available' && eq.available && eq.quantity > 0) ||
      (filter === 'unavailable' && (!eq.available || eq.quantity === 0));
    
    const matchesSearch = 
      eq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      eq.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      eq.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const userRequests = requests.filter(r => r.requester === currentUser.name);
  const pendingRequests = userRequests.filter(r => r.status === 'pending');

  return (
    <div className="borrow-view">
      <div className="borrow-header">
        <h2>Equipment Borrowing System</h2>
        <p className="subtitle">Browse available equipment and submit borrowing requests</p>
      </div>

      {/* User's Request Status */}
      {currentUser.canBorrow && (
        <div className="user-requests-panel">
          <h3>My Requests</h3>
          {pendingRequests.length > 0 && (
            <div className="pending-alert">
              You have {pendingRequests.length} pending request(s) awaiting approval.
            </div>
          )}
          {userRequests.length > 0 ? (
            <div className="requests-list">
              {userRequests.slice(0, 5).map(req => (
                <div key={req.id} className={`request-item ${req.status}`}>
                  <div className="request-info">
                    <strong>{req.equipmentName}</strong> × {req.quantity}
                    {req.roomId && <span className="room-tag">Room: {req.roomId}</span>}
                  </div>
                  <div className={`request-status ${req.status}`}>
                    {req.status === 'pending' && '⏳ Pending'}
                    {req.status === 'approved' && '✓ Approved'}
                    {req.status === 'rejected' && '✗ Rejected'}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-requests">No requests submitted yet.</p>
          )}
        </div>
      )}

      {/* Search and Filter */}
      <div className="borrow-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search equipment by name, location, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All Equipment
          </button>
          <button 
            className={filter === 'available' ? 'active' : ''}
            onClick={() => setFilter('available')}
          >
            Available Only
          </button>
          <button 
            className={filter === 'unavailable' ? 'active' : ''}
            onClick={() => setFilter('unavailable')}
          >
            Unavailable
          </button>
        </div>
      </div>

      {/* Equipment List */}
      <div className="equipment-list-container">
        <ul className="equipment-list">
          {filteredEquipment.length === 0 ? (
            <li className="no-equipment">No equipment matches your search criteria.</li>
          ) : (
            filteredEquipment.map(eq => (
              <li 
                key={eq.id} 
                className={`equipment-item ${eq.available && eq.quantity > 0 ? 'available' : 'unavailable'}`}
              >
                <div className="equipment-left">
                  <div className="equipment-header">
                    <strong className="equipment-name">{eq.name}</strong>
                    <span className="equipment-category">{eq.category}</span>
                  </div>
                  <div className="equipment-meta">
                    <span>📍 {eq.location}</span>
                    <span>•</span>
                    <span className={eq.quantity > 0 ? 'quantity-available' : 'quantity-unavailable'}>
                      {eq.quantity} available
                    </span>
                  </div>
                </div>
                <div className="equipment-right">
                  <div className={`availability-badge ${eq.available && eq.quantity > 0 ? 'available' : 'unavailable'}`}>
                    {eq.available && eq.quantity > 0 ? '✓ Available' : '✗ Unavailable'}
                  </div>
                  {currentUser.canBorrow && eq.available && eq.quantity > 0 && (
                    <button 
                      className="btn-request"
                      onClick={() => handleRequestClick(eq)}
                    >
                      Request
                    </button>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Request Form Modal */}
      {showRequestForm && selectedEquipment && (
        <div className="modal-overlay" onClick={() => setShowRequestForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Request Equipment</h3>
              <button className="modal-close" onClick={() => setShowRequestForm(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Equipment:</label>
                <div className="form-value">{selectedEquipment.name}</div>
              </div>
              <div className="form-group">
                <label>Location:</label>
                <div className="form-value">{selectedEquipment.location}</div>
              </div>
              <div className="form-group">
                <label>Available Quantity:</label>
                <div className="form-value">{selectedEquipment.quantity}</div>
              </div>
              {selectedRoom && (
                <div className="form-group">
                  <label>For Room:</label>
                  <div className="form-value">{selectedRoom.name} ({selectedRoom.id})</div>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="quantity">Quantity to Request:</label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  max={selectedEquipment.quantity}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="form-input"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowRequestForm(false)}>
                Cancel
              </button>
              <button className="btn-primary" onClick={handleSubmitRequest}>
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info Panel */}
      <div className="borrow-info">
        <p>
          <strong>How it works:</strong> Browse available equipment, select items you need, and submit a request. 
          Your request will be reviewed by administrative staff. Once approved, you can collect the equipment from the specified location.
        </p>
        {!currentUser.canBorrow && (
          <p className="warning">
            <strong>Note:</strong> You need to log in as a student or faculty member to borrow equipment.
          </p>
        )}
      </div>
    </div>
  );
}
