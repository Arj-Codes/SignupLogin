# Sign Up and Login Page

This project is a Sign Up and Login page implemented using React, Tailwind CSS, Node.js, Express, and MongoDB. The application allows users to sign up, receive and validate an OTP (One-Time Password) for both registration and login processes, and subsequently redirects them to the home page, where their name, email, and email status are displayed.

## Installation

1. Clone the repository:

```
git clone git@github.com:Arj-Codes/SignupLogin.git
```

2. Change into the project directory:

```
cd Signuplogin
```

3. Install the dependencies for both the client and server:

```
yarn install
cd ../server && npm install
```

4. Configure the environment variables:
   - Create a `.env` file in the `server` directory.
   - Set the following environment variables:
     - `PORT` - Port number for the server to listen on (default: 5000).
     - `MONGODB_URI` - MongoDB connection URI.
     - `EMAIL` - Email ID from which the mail will be sent.
     - `PASSWORD` - Password of your Email ID.

5. Start the server:

```
cd ../server && npm start
```

6. In a separate terminal, start the client:

```
cd .. && yarn start
```

7. Open your browser and visit `http://localhost:3000` to access the application.

## Usage

### Sign Up

1. Visit the application in your browser.
2. Click on the "Sign Up" link.
3. On the Sign Up page, enter your email address and click on the "Send OTP" button.
4. An OTP (One-Time Password) will be sent to your email address.
5. Enter the OTP in the provided field and click on the "Verify" button.
6. If the OTP is valid, you will be redirected to the Login page.

### Login

1. On the Login page, enter your email address and click on the "Send OTP" button.
2. An OTP will be sent to your email address.
3. Enter the OTP in the provided field and click on the "Verify" button.
4. If the OTP is valid, you will be redirected to the Home page.

### Home Page

1. On the Home page, your name, email address, and email status will be displayed.
2. The email status indicates whether the email has been verified or not.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Node.js: A JavaScript runtime environment.
- Express: A web application framework for Node.js.
- MongoDB: A NoSQL document database.
- SMTP: Simple Mail Transfer Protocol for sending emails.

## Project Structure

The project has the following structure:

- `client/`: Contains the client-side React application.
- `server/`: Contains the server-side Node.js and Express application.
- `server/routes/`: Contains the API routes for sign up, login, and home page data retrieval.
- `server/models/`: Contains the Mongoose models for user data storage in MongoDB.
- `server/services/`: Contains the services for sending emails and generating OTPs.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the application, feel

 free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
