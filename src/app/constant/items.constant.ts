import { Item } from '../model/item.model';

const categories = [
  'Electronics', 'Clothing', 'Books', 'Home & Kitchen', 
  'Sports', 'Beauty', 'Toys', 'Automotive'
];

const generateRandomItems = (count: number): Item[] => {
  const items: Item[] = [];
  
  for (let i = 1; i <= count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const price = Math.floor(Math.random() * 900) + 100; // Random price between 100-1000
    
    items.push({
      id: i,
      name: `Item ${i}`,
      category,
      price,
      description: `This is a sample description for item ${i} in the ${category} category.`,
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000)
    });
  }
  
  return items;
};

export const ITEMS: Item[] = generateRandomItems(150);

export const SORT_OPTIONS = [
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'price-asc', label: 'Price (Low to High)' },
  { value: 'price-desc', label: 'Price (High to Low)' },
  { value: 'date-asc', label: 'Date (Oldest First)' },
  { value: 'date-desc', label: 'Date (Newest First)' },
];
