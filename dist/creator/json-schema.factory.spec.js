"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_schema_factory_1 = require("./json-schema.factory");
describe('JsonSchemaFactory', () => {
    describe('Basic type creation', () => {
        it('should create string schema', () => {
            const schema = json_schema_factory_1.default.string('testString').compose();
            expect(schema.type).toBe('string');
        });
        it('should create number schema', () => {
            const schema = json_schema_factory_1.default.number('testNumber').compose();
            expect(schema.type).toBe('number');
        });
        it('should create integer schema', () => {
            const schema = json_schema_factory_1.default.integer('testInteger').compose();
            expect(schema.type).toBe('integer');
        });
        it('should create boolean schema', () => {
            const schema = json_schema_factory_1.default.boolean('testBoolean').compose();
            expect(schema.type).toBe('boolean');
        });
        it('should create array schema', () => {
            const schema = json_schema_factory_1.default.array('testArray').compose();
            expect(schema.type).toBe('array');
        });
        it('should create object schema', () => {
            const schema = json_schema_factory_1.default.object('testObject').compose();
            expect(schema.type).toBe('object');
        });
    });
    describe('Convenience methods', () => {
        it('should create email schema', () => {
            const schema = json_schema_factory_1.default.email('userEmail').compose();
            expect(schema.type).toBe('string');
            expect(schema.format).toBe('email');
        });
        it('should create UUID schema', () => {
            const schema = json_schema_factory_1.default.uuid('userId').compose();
            expect(schema.type).toBe('string');
            expect(schema.format).toBe('uuid');
        });
        it('should create positive number schema', () => {
            const schema = json_schema_factory_1.default.positiveNumber('amount').compose();
            expect(schema.type).toBe('number');
            expect(schema.minimum).toBe(0);
            expect(schema.exclusiveMinimum).toBe(0);
        });
        it('should create string array schema', () => {
            const schema = json_schema_factory_1.default.stringArray('tags').compose();
            expect(schema.type).toBe('array');
            expect(schema.items).toEqual({ type: 'string' });
        });
        it('should create strict object schema', () => {
            const schema = json_schema_factory_1.default.strictObject('config').compose();
            expect(schema.type).toBe('object');
            expect(schema.additionalProperties).toBe(false);
        });
    });
});
