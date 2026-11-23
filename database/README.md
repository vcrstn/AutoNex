# GEARIFY – Database Documentation & Backups

## Overview
**Gearify – Car Repair Shop Management System** uses **MySQL** (`gearify_db`) as its relational database engine.

This directory (`/database`) is reserved for:
- Database schema documentation and ER diagrams (`schema/`)
- SQL database dumps and migration snapshots (`backups/`)
- Initial seed scripts for academic demonstration (`seeds/`)

## Connection Settings (Configured via `/backend/.env`)

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=gearify_db
DB_USERNAME=root
DB_PASSWORD=
```

> **Note:** Never commit real credentials or production data dumps containing sensitive user information.

## Planned Core Entities (Subsequent Phases)
1. `users` – Admin, Service Advisors, Technicians
2. `customers` – Customer profiles and contact information
3. `vehicles` – Customer vehicles (make, model, year, VIN, plate number)
4. `services` – Catalog of repair and maintenance services
5. `repair_orders` – Service/repair job tickets and status workflow
6. `repair_order_items` – Line items (services + parts) per repair order
7. `inventory_items` – Spare parts and consumables stock tracking
8. `payments` – Invoices, payment transactions, and billing records
