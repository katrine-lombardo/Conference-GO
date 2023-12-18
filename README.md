# Conference GO

Welcome to the Conference GO app! This project aims to provide a platform for managing conferences efficiently. Whether you're an organizer or an attendee, Conference-Go offers a user-friendly interface to streamline the conference administration experience.

## Design

The core of the application resides in a monolithic structure, where the backend, frontend, and database are tightly integrated. The monolith handles user registration, conference creation, agenda management, and other essential features within a single codebase.

## Technologies Used

[![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](https://www.python.org/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)


## Functionality

- **User Registration**: Conference organizers and attendees can register with the app.
- **Conference Creation**: Organizers can create new conferences, providing details such as date, location, and agenda.
- **Attendee Registration**: Attendees can register for conferences they are interested in.
- **Agenda Management**: Organizers can manage conference agendas, including adding or modifying sessions.
- **Participant Interaction**: Attendees can engage with speakers through Q&A sessions and discussions.
- **Notification System**: Users receive notifications for important updates and conference announcements.
- **Responsive Design**: The app is designed to be accessible and functional across various devices.


## Getting the app running

1. Clone the repository:
```bash
git clone https://gitlab.com/katrine-lombardo-public/conference-go.git
```
2. Navigate to the project directory:
```bash
cd prestigepalate
```
3. Install dependencies
```bash
# For backend (assuming Python and pip are installed)
pip install -r requirements.txt

# For frontend
cd frontend
npm install
```

4. Start the app:
```bash
# For backend
python manage.py runserver

# For frontend
cd frontend
npm start
```

5. Open your browser and go to http://localhost:3000 to access Conference GO.
