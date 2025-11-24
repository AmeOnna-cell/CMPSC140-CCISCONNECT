 # CCIS CONNECT — System Architecture (Prototype)

Version: 0.1 (prototype)

This document describes the proposed full-system prototype for CCIS CONNECT based on the repository prototype and README. It outlines architecture, components, data models, API surface, UX flows, and minimal deployment/run guidance for local validation.

## Goals
- Provide a minimal but realistic server-backed prototype for mapping, room monitoring, and equipment borrowing.
- Keep the frontend unchanged where possible; the client will call a REST API to fetch rooms, equipment, and submit requests.
- Make the server lightweight (Express) and in-memory for rapid testing; easy to swap to a database later.

## High-level architecture

- Frontend: React + Vite (existing `ccis-connect` app). Responsible for UI, map, routing, request forms.
- Backend: Node.js (Express) mock API serving JSON endpoints for rooms, equipment, and requests.
- Data: In-memory store (server); can be extended to use SQLite/Postgres.

Communication: front-end calls REST endpoints (GET /rooms, GET /equipment, POST /requests, POST /requests/:id/approve, etc.).

## Components

- UI components (already present in `src/components`): NavBar, MapView, Rooms, Borrow, Admin.
- API endpoints (see OpenAPI spec in `docs/openapi.yaml`): rooms, equipment, requests, admin actions.
- Mock server: `server/index.js` serves the API and simple CORS to let the frontend call it.

## Data model (prototype)

- Room
  - id: string (e.g., "R101")
  - name: string
  - capacity: number
  - available: boolean
  - items: map of itemType -> number (for server-side room holdings)
  - x, y: number (map coordinates, percentage)

- Equipment
  - id: string
  - name: string
  - location: string (room id or storage)
  - available: boolean

- Request
  - id: string
  - roomId: string
  - itemType: string
  - qty: number
  - status: pending|approved|rejected
  - createdAt, actedAt: ISO timestamps

## API overview

- Public
  - GET /api/rooms
  - GET /api/equipment
  - GET /api/poi
  - GET /api/requests (query by status)
  - POST /api/requests  (create request)

- Admin
  - POST /api/requests/:id/approve
  - POST /api/requests/:id/reject
  - POST /api/rooms/:id/return  (mark returned items)
  - POST /api/rooms/move (move items between rooms)

Detailed OpenAPI YAML is included in `docs/openapi.yaml`.

## UX flows (short)

- Visitor / Guest
  - Open Map; view POIs and room markers.
  - Inspect room details; view items in room.

- Student / Staff
  - Request equipment for a selected room. Submit request --> server stores as `pending`.
  - See request status in Requests panel.

- Admin
  - View pending requests; approve/reject.
  - Approve reduces inventory and assigns items to the room.
  - Mark returned or move items between rooms.

## Local run & integration

1. Start the mock API server (see `server/`):

```powershell
cd ccis-connect/server
npm install
node index.js
```

2. Start the frontend (from repository root or `ccis-connect`):

```powershell
cd ccis-connect
npm install
npm run dev
```

3. Open the frontend and check that it fetches data from `http://localhost:4000/api` (server default). If CORS or port differs, update the frontend fetch URLs accordingly.

## Next steps (ideas for extension)

- Replace in-memory store with SQLite or Postgres + migration scripts.
- Add authentication & role-based access control for admin actions.
- Add real geolocation and map tiles (Leaflet, Mapbox) for campus routing.
- Add push notifications or WebSocket for real-time updates of room usage.
- Add audit logs and analytics for feasibility study metrics (time saved, utilization rates).

## Metrics / Feasibility tracking (for study)

- Time-to-allocate: measure request->approval time before/after.
- Room utilization: track occupancy frequency and conflicts avoided.
- Borrowing turnaround: average time equipment is checked out vs returned.

---
Generated prototype files: `server/index.js`, `docs/openapi.yaml`, `docs/UX_FLOW.md` (see repo).
