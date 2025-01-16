CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'member') NOT NULL DEFAULT 'member',
    member_active_until DATE DEFAULT NULL
);

INSERT INTO members (name, email, member_active_until) VALUES
('John Doe', 'john.doe@example.com', '2024-12-31'),
('Jane Smith', 'jane.smith@example.com', NULL);
