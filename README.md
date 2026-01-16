Backend Setup

1. Masuk ke folder backend
cd backend
2. Install dependencies
npm install
3. Environment Variables

Buat file .env di folder backend:

JWT_SECRET=CC5lL9JUbzt4PzwuFngZIFPtuUenr7djMtDQmVYWLKs

DB_HOST=127.0.0.1

DB_PORT=5432

DB_NAME=wit_app

DB_USER=wit_app

DB_PASSWORD=wit_app


4. Database Migration & Seed

Create databaae wit_app di postgre

Jalankan migration:

npx knex migrate:latest

Jalankan seed data:

npx knex seed:run

5. Run Backend Server

node index.js

Backend akan berjalan di:

http://localhost:3000

Frontend Setup
1. Masuk ke folder frontend
cd ../frontend
2. Install dependencies
npm install
3. Environment Variables

Buat file .env.local di folder frontend:

NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api

4. Run Frontend Server

npm run dev

Frontend dapat diakses di:

http://localhost:3001
