# OrganizeIn Backend

This is the backend application for the OrganizeIn project, built with Node.js, Express, and MongoDB.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 12.x)
- npm (>= 6.x)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kumarshivesh/Organizein-backend-code.git
   cd Organizein-backend-code
   ```

2. Install the dependencies:

```bash
npm install
```

## Environment Variables

Create a .env file in the root of the project and add the following environment variables:

```bash
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_USERNAME=admin
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=adminpassword
```

## Running the Application

To run the application locally, use the following command:

```bash
npm start
```

## Step-by-Step Procedure to Test Endpoints in Postman

1. Set Up Your Backend Server

Ensure your backend server is running. Navigate to your backend project directory and start the server.

```bash
cd /path/to/your/backend
npm start
```

2. Open Postman
Launch the Postman application on your computer.

3. Create a New Collection
Click on New in the top left corner.
Select Collection.
Name your collection (e.g., OrganizeIn API).
Click Create.
4. Add Requests to Your Collection

Register User

Click on your newly created collection.
Click Add Request.
Name the request (e.g., Register User).
Select POST as the HTTP method.
Enter the URL: http://localhost:5000/api/users/register.
Go to the Body tab.
Select raw and JSON from the dropdown.
Enter the following JSON data:
```
{
  "username": "testuser6",
  "email": "testuser6@example.com",
  "password": "password123"
}
```

Click Send to test the registration endpoint.

Login User

Add another request to your collection.
Name the request (e.g., Login User).
Select POST as the HTTP method.
Enter the URL: http://localhost:5000/api/users/login.
Go to the Body tab.
Select raw and JSON from the dropdown.
Enter the following JSON data:
```
{
  "email": "testuser@example.com",
  "password": "password123"
}
```
Click Send to test the login endpoint.

Submit Form

Add another request to your collection.
Name the request (e.g., Submit Form).
Select POST as the HTTP method.
Enter the URL: http://localhost:5000/api/forms/submit-form.
Go to the Authorization tab.
Select Bearer Token and enter the token you received from the login response.
Go to the Body tab.
Select raw and JSON from the dropdown.
Enter the following JSON data:
```
{
  "title": "Sample Form",
  "description": "This is a sample form submission."
}
```
Click Send to test the form submission endpoint.

Get All Forms (Admin)

Add another request to your collection.
Name the request (e.g., Get All Forms).
Select GET as the HTTP method.
Enter the URL: http://localhost:5000/api/forms/admin/forms.
Go to the Authorization tab.
Select Bearer Token and enter the token you received from the login response for admin. Use "email": "admin@example.com" and "password": "adminpassword".
Click Send to test the endpoint for retrieving all forms.
