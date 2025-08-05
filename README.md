# Potholio

Potholio is a full-stack web application for reporting and managing pothole. It features a robust .NET backend and a modern Next.js frontend, supporting user registration, incident tracking, and municipality management.

## Project Structure

```
Potholio/
├── Backend/
│   ├── src/
│   │   ├── Potholio.Application/
│   │   ├── Potholio.Core/
│   │   ├── Potholio.Web.Host/
│   │   └── ...
│   ├── test/
│   ├── build/
│   ├── docker/
│   └── Potholio.sln
├── Frontend/
│   ├── src/
│   │   └── app/
│   ├── public/
│   ├── .next/
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
└── README.md
```

---

## Features

- **User Management:** Citizens can register and login. Admins can register users working for a specific municipality while the municipalities can add service providers.
- **Incident Reporting:** Citizens can create a quick report or a full detailed report. A quick report takes in your location while a full report can have a description and a photo of the       pothole can be attached to the full report.
- **Municipality Selection:** Reports will can take your location which will add the Municipality of the area.
- **Role-Based Access:** Secure access for different user roles.
- **Responsive UI:** Built with Ant Design for a modern look and feel.

---
## Integrations

- Google(Maps)
- Google(Gemini AI)
- SupaBase s3 Bucket Storage(Photo Storage)

---

## Technologies Used

- **Backend:** ASP.NET Core(v8), Entity Framework Core, ABP Framework, Neon PostgreSQL, Render
- **Frontend:** Next.js, React, Ant Design
- **Other:** Docker (optional), Swagger (API docs), log4net (logging)

---

## Getting Started

### Backend

1. **Requirements:** [.NET SDK](https://dotnet.microsoft.com/download)
2. **Install dependencies:**
   ```sh
   cd Backend
   dotnet restore
   ```
3. **Build the solution:**
   ```sh
   dotnet build Potholio.sln
   ```
4. **Run the backend:**
   ```sh
   cd src/Potholio.Web.Host
   dotnet run
   ```
5. **API Documentation:** Visit `/swagger` on your backend server for interactive API docs.

### Frontend

1. **Requirements:** [Node.js](https://nodejs.org/)
- Node version >=18

2. **Install dependencies:**
   ```sh
   cd Frontend
   npm install
   ```
3. **Run the frontend:**
   ```sh
   npm run dev
   ```
4. **Access the app:** Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Create a new Pull Request

---

## Design

https://www.figma.com/design/ODLD6WT6YKTRYkbcbpw7mE/Potholio?node-id=0-1&p=f&t=HfRMtatKgqIONx4H-0

---
## Domain Model Link

https://drive.google.com/file/d/16GjXy_w0cJaVgVrxaiwbls2DHrEFZclA/view?usp=sharing

## Life Demo

potholio.vercel.app
