# FitZone Gym & Class Booking System

Student ID: 24IT017

## Run

1. Install MongoDB locally, or create a free MongoDB Atlas cluster.
2. Copy `backend/.env.example` to a root file named `.env`.
3. Set `MONGO_URI` in `.env`:

	```env
	MONGO_URI=mongodb://127.0.0.1:27017/fitzone
	PORT=5000
	```

	For Atlas, use the connection string supplied by Atlas instead, for example `mongodb+srv://USER:PASSWORD@cluster.mongodb.net/fitzone`.
4. Install dependencies with `npm install`.
5. Start both applications with `npm run dev`.
6. Open `http://localhost:5173`.

The React frontend is in `frontend/`. The Express API and Mongoose models are in `backend/`. The Vite development proxy forwards `/api` requests to the Express server at port 5000.

## API quick test

Login with `POST /api/v1/auth/login` and JSON `{ "email": "member@fitzone.com" }`. Copy the returned token as a Bearer token for protected requests.

- `GET /api/v1/trainers` is public.
- `POST /api/v1/bookings` expects `trainerId`, `className`, `date`, and `timeSlot`.
- `GET /api/v1/bookings/my` returns populated member and trainer details.
- `PATCH /api/v1/bookings/:id/status` expects `status` equal to `booked`, `attended`, or `cancelled`.

Invalid or missing schema fields return status `400` with readable validation messages.
