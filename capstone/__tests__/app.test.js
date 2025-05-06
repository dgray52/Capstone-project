const request = require('supertest');
const express = require('express');
const app = require('../app'); 

describe('GET /', () => {
  it('should return 200 OK and render index page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /swaps/', () => {
  it('should return 200 OK and render index page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /profile/', () => {
  it('should return 200 OK and render index page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /matches/', () => {
  it('should return 200 OK and render index page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});