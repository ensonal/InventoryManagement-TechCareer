CREATE TABLE Employee(
    EmployeeId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    FullName NVARCHAR(60) NOT NULL,
    PhoneNumber NVARCHAR(15),
    Address NVARCHAR(MAX),
    Status NVARCHAR(60) NOT NULL,
    WorkCount INT,
    Salary DECIMAL(6,2) NOT NULL
)

CREATE TABLE EmployeeTransaction(
    EmployeeTransactionId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    EmployeeId INT FOREIGN KEY REFERENCES Employee(EmployeeId) NOT NULL,
    TransactionDate DATE NOT NULL,
    Details NVARCHAR(MAX) NOT NULL,
)

CREATE TABLE Customer(
    CustomerId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    FullName NVARCHAR(60) NOT NULL,
    PhoneNumber NVARCHAR(15) NOT NULL,
    Address NVARCHAR(MAX) NOT NULL,
    OrderCount INT
)

CREATE TABLE Supplier(
    SupplierId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    SupplierName NVARCHAR(100) NOT NULL,
)

CREATE TABLE Product(
    ProductId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    SupplierId INT FOREIGN KEY REFERENCES Supplier(SupplierId) NOT NULL,
    ProductName NVARCHAR(100) NOT NULL,
    Details NVARCHAR(MAX),
    Weight INT,
    Quantity INT NOT NULL,
    Price DECIMAL(4,2)
)

CREATE TABLE Category(
    CategoryId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    CategoryName NVARCHAR(60) NOT NULL,
)

CREATE TABLE CategorizedProduct(
    CategorizedProductId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    CategoryId INT FOREIGN KEY REFERENCES Category(CategoryId) NOT NULL,
    ProductId INT FOREIGN KEY REFERENCES Product(ProductId) NOT NULL,
)

CREATE TABLE Orders(
    OrderId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    CustomerId INT FOREIGN KEY REFERENCES Customer(CustomerId) NOT NULL,
    OrderDate DATE NOT NULL,
)

CREATE TABLE OrderItem(
    OrderItem INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    OrderId INT FOREIGN KEY REFERENCES Orders(OrderId) NOT NULL,
    ProductId INT FOREIGN KEY REFERENCES Product(ProductId) NOT NULL,
    Quantity INT NOT NULL,
)

CREATE TABLE Delivery(
    DeliveryId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    OrderId INT FOREIGN KEY REFERENCES Customer(CustomerId) NOT NULL,
    IsDelivered BIT
)