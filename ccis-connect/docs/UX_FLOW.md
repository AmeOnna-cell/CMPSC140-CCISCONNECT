# CCIS CONNECT — UX Flow & User Journeys (Prototype)

This document outlines the primary user journeys and the screens/components the frontend exposes in the prototype.

Primary personas
- Student/Staff: search rooms, request equipment, view status.
- Admin: manage requests, mark returns, move items.
- Visitor: view campus map and points of interest.

Journeys

1) Find a free room (Student)
   - Open `Map` view.
   - Inspect room marker to view availability and capacity.
   - If free, open `Rooms` view for details.

2) Request equipment for a room (Staff)
   - From the `Map` or `Rooms`, select a room.
   - Use the `Borrow` panel to choose item and quantity.
   - Submit request → appears in `Requests` (pending) for Admin.

3) Approve a request (Admin)
   - Open `Admin` view to see pending requests.
   - Approve: system reduces inventory (prototype simulated) and adds items to the room.
   - Reject: request status becomes `rejected`.

4) Return or move equipment (Admin)
   - Use Admin return form to increase inventory and subtract from a room.
   - Use Move form to transfer items between rooms.

UI mapping to components
- `NavBar` — top-level navigation between Map, Rooms, Borrow, Admin.
- `MapView` — interactive map, room markers and POIs.
- `Rooms` — detailed room list and toggles.
- `Borrow` — equipment catalog and borrow/return actions.
- `Admin` — summary cards, requests list and admin actions.

Behavior notes
- All actions in the prototype are in-memory. For more realistic testing, point the frontend to the mock server at `http://localhost:4000/api`.
- The prototype intentionally keeps flows simple to demonstrate core functionality for feasibility testing.
