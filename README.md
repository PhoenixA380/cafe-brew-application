# Cafe Brew Application

The Cafe Brew Application is a Java-based solution designed to streamline cafe operations. It includes functionalities for managing products, categories, bills, user authentication, and provides a dashboard for monitoring various aspects of the cafe’s performance.

## Features

- **User Authentication**: Secure login and registration for users.
- **Product Management**: Add, update, and delete products.
- **Category Management**: Organize products into categories.
- **Billing System**: Generate and manage bills.
- **Dashboard**: View statistics and reports about the cafe’s performance.

## Technologies Used

- Java
- Spring Boot
- MySQL

## Setup Instructions

### Prerequisites

- Java 11 or higher
- MySQL
- Maven
- Postman

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/phoenixA380/cafe-brew.git
   ```
   

2. **Configure the Database:**
   - Create a MySQL database named `cafe`.
   - Update the `application.properties` file with your database credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/cafe
     spring.datasource.username=yourusername
     spring.datasource.password=yourpassword
     ```

3. **Build the Project:**
   ```bash
   mvn clean install
   ```

4. **Run the Application:**
   ```bash
   mvn spring-boot:run
   ```

## Access the Application

- **Register/Login**: Use Postman to send POST requests for account creation or login.
- **Dashboard**: Send GET requests to view overall statistics and reports.
- **Manage Products**: Use POST, PUT, or DELETE requests to add, update, or delete products.
- **Manage Categories**: Use POST, PUT, or DELETE requests to add, update, or delete categories.
- **Billing**: Use POST requests to generate new bills and GET requests to view past transactions.

## API Endpoints

- **User Registration**: `POST /api/user/register`
- **User Login**: `POST /api/user/login`
- **Get Dashboard Stats**: `GET /api/dashboard/stats`
- **Add Product**: `POST /api/product`
- **Update Product**: `PUT /api/product/{id}`
- **Delete Product**: `DELETE /api/product/{id}`
- **Add Category**: `POST /api/category`
- **Update Category**: `PUT /api/category/{id}`
- **Delete Category**: `DELETE /api/category/{id}`
- **Generate Bill**: `POST /api/bill`
- **Get All Bills**: `GET /api/bill`

## Contact Information

- **Email**: sanjusanjeev2014@gmail.com
- **GitHub**: [PhoenixA380](https://github.com/PhoenixA380)

---

Feel free to adjust any details or sections as needed!
