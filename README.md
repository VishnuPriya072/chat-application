# Firebase Chat Application

A simple chat application built using Firebase, HTML, JavaScript, and CSS that supports real-time messaging and user authentication.

## **Features**

- User registration and login with Firebase Authentication
- Real-time chat using Firebase Firestore
- Simple and responsive user interface
- User-friendly chat experience

## **Technologies Used**

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase (Authentication and Firestore Database)

## **Project Structure**
chat-application/ │ 
├── firebase-config.js # Firebase configuration
├── index.html # Main chat interface
├── login.html # Login page
├── register.html # Registration page
├── styles.css # CSS for styling 
├── login.js # JavaScript for login 
├── register.js # JavaScript for registration 
└── chat.js # JavaScript for the chat functionality


## **Getting Started**

### **1. Firebase Setup**

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Add a web app to your project and copy the configuration details.
3. Enable **Email/Password Authentication** under the **Authentication** section.
4. Create a Firestore database in **Test mode**.

### **2. Configuration**

Replace the configuration in `firebase-config.js` with your Firebase project settings:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);
3. Running the Application
Open index.html or register.html in a browser.
You can also use a local web server (e.g., npx http-server) to run the project locally.
4. Using the Application
Register as a new user via the registration page.
Log in using your registered email and password.
Start chatting in the chat interface.

Development Setup
To set up a development environment:
1. Clone the repository: bash   git clone https://github.com/VishnuPriya072/chat-application.git
2. cd chat-application
3. Install dependencies (if any):
 npm install
4.  Start a local server:
   npx http-server
5.  .gitignore
Make sure to include the following .gitignore file to avoid committing sensitive data:
arduino
node_modules/
firebase-config.js
.DS_Store
.env
Contributing
Contributions are welcome! Please open an issue or submit a pull request for improvements or suggestions.
License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments
* Firebase for providing an easy-to-use backend service.
mathematica
This updated version includes your GitHub repository URL.



