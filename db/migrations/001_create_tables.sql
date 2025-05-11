-- Create Categories Table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create Products Table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    affiliate_url TEXT,
    category_id INTEGER REFERENCES categories(id),
    seo_title VARCHAR(255),
    seo_description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Create Blogs Table
CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    seo_title VARCHAR(255),
    seo_description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Create Affiliate Links Table
CREATE TABLE affiliate_links (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    clicks INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);