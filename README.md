## 🚀 Backend Setup

### 1. Masuk ke Folder Backend

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Buat file **`.env`** di folder **`backend`** lalu isi dengan:

```env
JWT_SECRET=CC5lL9JUbzt4PzwuFngZIFPtuUenr7djMtDQmVYWLKs

DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=wit_app
DB_USER=wit_app
DB_PASSWORD=wit_app
```

### 4. Database Migration & Seed

#### a. Buat Database

Buat database PostgreSQL dengan nama:

```text
wit_app
```

#### b. Jalankan Migration

```bash
npx knex migrate:latest
```

#### c. Jalankan Seed Data

```bash
npx knex seed:run
```

### 5. Jalankan Backend Server

```bash
node index.js
```

Backend akan berjalan di:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

Base URL:

```text
http://localhost:3000/api
```

### 🔐 Authentication

#### Login

```http
POST /api/login
```

**Request Body:**

```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response:**

```json
{
  "token": "jwt_token_here",
}
```

---

### 📝 Articles

#### Get All Articles

```http
GET /api/articles
```

#### Get Article By Slug

```http
GET /api/articles/{slug}
```
#### Delete Article

```http
DELETE /api/articles/{id}
```
#### Add Article

```http
POST /api/articles/
```

**Request Body:**

```json
{
  "title": "My First Article",
  "slug": "my-first-article",
  "content": "This is the content.",
  "excerpt": "Short excerpt",
  "status": "draft"
}
```

#### Update Article

```http
PUT /api/articles/{id}
```

**Request Body:**

```json
{
  "title": "Title",
  "content": "Content",
  "slug": "title-content",
  "status": "published",
  "excerpt": "Ringkasan."
}
```

---

### 🔒 Authorization

Semua endpoint (kecuali **login**, **Get All Article**, **Get Article By Slug**) membutuhkan header:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

### 📌 Notes

* Pastikan backend server sudah berjalan di port **3000**
* Token JWT didapatkan dari endpoint **login**
* Endpoint di atas digunakan oleh frontend melalui:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```
