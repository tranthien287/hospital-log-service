# 📒 hospital-log-service

### MongoDB
- DB: `LogDB`

### Các collection:
- `systemlogs`
- `auditlogs`

### API Endpoint
| Method | URL | Chức năng |
|--------|-----|------------|
| POST | `/api/logs/system` | Ghi log hệ thống |
| POST | `/api/logs/audit` | Ghi log audit |
| GET | `/api/logs/system` | Lấy danh sách log hệ thống |
| GET | `/api/logs/audit` | Lấy danh sách log audit |

### Chạy local:
```bash
npm install
npm start
