const { Pool } = require('pg');
const pool = new Pool();

const seedCategories = async () => {
  const categories = [
    { name: 'Outdoor Gear', description: 'Products for outdoor adventures' },
    { name: 'Pet Supplies', description: 'Accessories and gear for pets' },
  ];

  for (const category of categories) {
    await pool.query(
      'INSERT INTO categories (name, description) VALUES ($1, $2)',
      [category.name, category.description]
    );
  }

  console.log('Categories seeded successfully');
  await pool.end();
};

seedCategories().catch((err) => console.error(err));