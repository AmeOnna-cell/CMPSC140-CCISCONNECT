// Sample data for CCIS CONNECT prototype
export const rooms = [
  { id: '100A', name: 'Room 100A', x: 20, y: 30, available: true, capacity: 40, floor: 1, type: 'Classroom' },
  { id: '100B', name: 'Room 100B', x: 40, y: 30, available: false, capacity: 40, floor: 1, type: 'Classroom' },
  { id: '100C', name: 'Room 100C', x: 60, y: 30, available: true, capacity: 30, floor: 1, type: 'Classroom' },
  { id: '100D', name: 'Room 100D', x: 20, y: 60, available: true, capacity: 50, floor: 1, type: 'Laboratory' },
  { id: '100E', name: 'Room 100E', x: 40, y: 60, available: false, capacity: 50, floor: 1, type: 'Laboratory' },
  { id: '100F', name: 'Room 100F', x: 60, y: 60, available: true, capacity: 30, floor: 1, type: 'Classroom' },
  { id: '201', name: 'Room 201', x: 30, y: 20, available: true, capacity: 25, floor: 2, type: 'Office' },
  { id: '202', name: 'Room 202', x: 50, y: 20, available: true, capacity: 25, floor: 2, type: 'Office' },
  { id: '301', name: 'Room 301', x: 35, y: 40, available: false, capacity: 60, floor: 3, type: 'Lecture Hall' },
];

export const pointsOfInterest = [
  { id: 'dean', name: "Dean's Office", x: 70, y: 70, type: 'Office' },
  { id: 'library', name: 'Learning Commons', x: 80, y: 50, type: 'Library' },
  { id: 'lab', name: 'Computer Lab', x: 50, y: 80, type: 'Laboratory' },
  { id: 'cafeteria', name: 'Cafeteria', x: 10, y: 10, type: 'Facility' },
];

export const equipment = [
  { id: 'eq1', name: 'Laptop', location: 'Learning Commons', available: true, quantity: 12, category: 'Electronics' },
  { id: 'eq2', name: 'Projector', location: "Dean's Office", available: true, quantity: 5, category: 'AV Equipment' },
  { id: 'eq3', name: 'TV Monitor', location: 'Learning Commons', available: false, quantity: 3, category: 'AV Equipment' },
  { id: 'eq4', name: 'Tablet', location: 'Learning Commons', available: true, quantity: 8, category: 'Electronics' },
  { id: 'eq5', name: 'Microphone', location: "Dean's Office", available: true, quantity: 4, category: 'AV Equipment' },
  { id: 'eq6', name: 'Camera', location: 'Learning Commons', available: true, quantity: 2, category: 'Electronics' },
];

export const users = {
  student: { role: 'student', name: 'Student User', canBorrow: true, canUpdateRooms: false },
  faculty: { role: 'faculty', name: 'Faculty Member', canBorrow: true, canUpdateRooms: true },
  admin: { role: 'admin', name: 'Administrator', canBorrow: true, canUpdateRooms: true, canApprove: true },
  guest: { role: 'guest', name: 'Guest', canBorrow: false, canUpdateRooms: false },
};

