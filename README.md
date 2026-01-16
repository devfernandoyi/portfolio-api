# Portfolio API

A RESTful API built with NestJS and TypeORM for tracking pet health and habitat data. This backend powers my portfolio website's pet logging system, demonstrating full-stack development capabilities with modern TypeScript tooling.

## Tech Stack

- **Framework:** NestJS
- **Database:** PostgreSQL (Neon)
- **ORM:** TypeORM
- **Language:** TypeScript
- **Deployment:** Render

## Features

- **Pet Management:** Create and retrieve pet profiles with species, morphs, and care information
- **Activity Logging:** Track feeding schedules, measurements, environmental conditions, and health observations
- **RESTful Design:** Clean endpoint structure following REST conventions
- **Type Safety:** Full TypeScript implementation with DTOs for request validation
- **Error Handling:** Comprehensive try-catch blocks with appropriate HTTP status codes

## API Endpoints

### Pets

- `POST /pets` - Create a new pet
- `GET /pets` - Retrieve all pets

### Pet Logs

- `POST /pet-logs` - Create a new log entry
- `GET /pet-logs` - Retrieve all logs
- `GET /pet-logs/latest?petId={id}&limit={n}` - Get latest N logs for a specific pet

## Database Schema

### Pets Table

- ID, name, species, morph, genus, origin, about
- Timestamps: createdAt, updatedAt
- One-to-many relationship with PetLogs

### Pet Logs Table

- ID, petId (FK), weight, length, feeding data, environmental conditions
- Health tracking: shed status, fecal observations
- Timestamps: createdAt, updatedAt
- Many-to-one relationship with Pets

## Project Structure

```
src/
├── pets/
│   ├── pets.entity.ts
│   ├── pets.service.ts
│   ├── pets.controller.ts
│   └── pets.module.ts
├── pet-logs/
│   ├── pet-logs.entity.ts
│   ├── pet-logs.service.ts
│   ├── pet-logs.controller.ts
│   ├── pet-logs.module.ts
│   └── create-pet-log.dto.ts
├── database/
│   └── database.module.ts
└── app.module.ts
```

## Future Enhancements

- Authentication
- Pagination for large datasets
- Image upload for pet photos
- Data visualization endpoints

---

**Part of my full-stack portfolio project** - Todo:link repo
