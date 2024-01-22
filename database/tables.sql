CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL NOT NULL,
    category VARCHAR(40) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(200) NOT NULL,
    stock_units INTEGER NOT NULL,
    discount DECIMAL(5, 2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sales (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    total_price DECIMAL NOT NULL,
    user_id UUID REFERENCES users(id)
);

CREATE TABLE sales_products (
    sale_id UUID REFERENCES sales(id),
    product_id INTEGER REFERENCES products(id),
    product_quantity INTEGER NOT NULL,
    PRIMARY KEY (sale_id, product_id)
);
