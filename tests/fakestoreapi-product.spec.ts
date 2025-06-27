import { test, expect, request } from '@playwright/test';
import Ajv from 'ajv';

test.describe('FakeStore API - Product Details', () => {
  const endpoint = 'http://fakestoreapi.com/products/1';
  const schema = {
    type: 'object',
    required: ['id', 'title', 'description', 'price'],
    properties: {
      id: { type: 'number' },
      title: { type: 'string' },
      description: { type: 'string' },
      price: { type: 'number' },
    },
  };

  test('GET /products/1 returns valid product', async ({ request }) => {
    const response = await request.get(endpoint);
    expect(response.status()).toBe(200);
    const data = await response.json();

    // Check required keys
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('description');

    // Optional: Validate schema
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(data);
    expect(valid).toBe(true);

    // Log product title and price
    console.log(`Product title: ${data.title}`);
    console.log(`Product price: ${data.price}`);
  });
});
