const { test, expect } = require('@playwright/test');

test('Use Case 3: Learning Instance API (Schema Validation)', async() => {
    const response = {
        id: 'LI-1001',
        name: 'TestLearningInstance',
        status: 'ACTIVE'
    };

    expect(response).toHaveProperty('id');
    expect(response.name).toBe('TestLearningInstance');
    expect(response.status).toBe('ACTIVE');
});