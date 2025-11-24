const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// In-memory data (seeded from frontend mock)
let rooms = [
  { id: 'R101', name: 'Lab 1', capacity: 30, available: true, items: { Laptop: 0, TV: 0 }, x: 40, y: 60 },
  { id: 'R102', name: 'Lab 2', capacity: 25, available: false, items: { Laptop: 0, TV: 0 }, x: 60, y: 30 },
  { id: 'R201', name: 'Lecture Hall', capacity: 100, available: true, items: { Laptop: 0, TV: 0 }, x: 20, y: 20 }
];

let equipment = [
  { id: 'E01', name: 'Projector', location: 'R101', available: true },
  { id: 'E02', name: 'HDMI Cable', location: 'Storage', available: true },
  { id: 'E03', name: 'Laptop', location: 'R102', available: false }
];

let poi = [
  { id: 'P1', name: 'Main Gate', x: 5, y: 90 },
  { id: 'P2', name: 'Library', x: 80, y: 10 }
];

let requests = [];

// Helpers
const findRoom = (id) => rooms.find(r => r.id === id);

// Routes
app.get('/api/rooms', (req, res) => {
  res.json(rooms);
});

app.get('/api/equipment', (req, res) => {
  res.json(equipment);
});

app.get('/api/poi', (req, res) => {
  res.json(poi);
});

app.get('/api/requests', (req, res) => {
  const { status } = req.query;
  if (status) return res.json(requests.filter(r => r.status === status));
  res.json(requests);
});

app.post('/api/requests', (req, res) => {
  const { roomId, itemType, qty } = req.body;
  if (!roomId || !itemType || !qty) return res.status(400).json({ error: 'roomId, itemType and qty required' });
  const id = `REQ-${nanoid(6)}`;
  const reqObj = { id, roomId, itemType, qty: Number(qty), status: 'pending', createdAt: new Date().toISOString() };
  requests.unshift(reqObj);
  res.status(201).json(reqObj);
});

app.post('/api/requests/:id/approve', (req, res) => {
  const id = req.params.id;
  const r = requests.find(x => x.id === id);
  if (!r) return res.status(404).json({ error: 'not found' });
  // naive inventory: find equipment of that type that's available
  // For prototype, just mark approved and add to room items
  r.status = 'approved';
  r.actedAt = new Date().toISOString();
  const room = findRoom(r.roomId);
  if (room) {
    room.items[r.itemType] = (room.items[r.itemType] || 0) + r.qty;
  }
  res.json(r);
});

app.post('/api/requests/:id/reject', (req, res) => {
  const id = req.params.id;
  const r = requests.find(x => x.id === id);
  if (!r) return res.status(404).json({ error: 'not found' });
  r.status = 'rejected';
  r.actedAt = new Date().toISOString();
  res.json(r);
});

app.post('/api/rooms/:id/return', (req, res) => {
  const id = req.params.id;
  const { itemType, qty } = req.body;
  const room = findRoom(id);
  if (!room) return res.status(404).json({ error: 'room not found' });
  const n = Number(qty) || 0;
  room.items[itemType] = Math.max(0, (room.items[itemType] || 0) - n);
  res.json({ ok: true, room });
});

app.post('/api/rooms/move', (req, res) => {
  const { from, to, itemType, qty } = req.body;
  const f = findRoom(from);
  const t = findRoom(to);
  if (!f || !t) return res.status(404).json({ error: 'room not found' });
  const n = Number(qty) || 0;
  const available = f.items[itemType] || 0;
  const moved = Math.min(available, n);
  f.items[itemType] = (f.items[itemType] || 0) - moved;
  t.items[itemType] = (t.items[itemType] || 0) + moved;
  res.json({ ok: true, moved, from: f, to: t });
});

app.listen(PORT, () => console.log(`Mock API server running at http://localhost:${PORT}/api`));
