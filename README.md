# Envelope Platform ✉️

A simple full-stack e-signature viewer built with **React** frontend and **Node.js + MySQL** backend.

## 🚀 Project Overview

This project allows users to:

- View envelopes and their signer status
- Filter envelopes by name or status
- Add new envelopes with name, status, and signing order
- Delete envelopes by ID

Built to simulate basic functionality similar to platforms like DocuSign.

---

## 🧩 Tech Stack

| Layer       | Technology                 |
|------------|-----------------------------|
| Frontend    | React, JavaScript           |
| Backend     | Node.js, Express            |
| Database    | MySQL                       |
| API Testing | Postman                     |
| Versioning  | Git & GitHub                |

---

## 🧠 Key Features

### Frontend (`envelope-viewer`)
- Built with React and functional components
- `fetch()` used to call backend RESTful API
- Users can:
  - View all envelopes
  - Filter by name or pending status
  - Add new envelopes
  - Delete envelopes

### Backend (`backend-server`)
- Express server with three endpoints:
  - `GET /envelopes` – fetch all envelopes
  - `POST /envelopes` – add a new envelope
  - `DELETE /envelopes/:id` – delete an envelope
- Connected to a MySQL database with a table schema:
```sql
CREATE TABLE envelopes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  status VARCHAR(50),
  order_num INT
);
