import { describe, it } from "mocha"
import { expect } from "chai";
import app from "./app.js";
import request from "supertest";

describe('Test node endpoint', () => {
    it('Hit TestNode Endpoint', async () => {
        const response = await request(app).get('/testNode');
        expect(response.status).to.equal(200);
        expect(response.text).to.equal("Test node endpoint hit successfully with Port:5000")
    });
})