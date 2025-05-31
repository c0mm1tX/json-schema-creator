"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_schema_object_1 = require("./json-schema.object");
describe('JsonSchemaObject', () => {
    let instance;
    const name = 'testObject';
    beforeEach(() => {
        instance = new json_schema_object_1.default(name);
    });
    it('should initialize with empty properties', () => {
        const schema = instance.compose();
        expect(schema.properties).toEqual({});
    });
    it('should add single property', () => {
        var _a;
        instance.property('name', { type: 'string' });
        const schema = instance.compose();
        expect((_a = schema.properties) === null || _a === void 0 ? void 0 : _a.name).toEqual({ type: 'string' });
    });
    it('should add multiple properties', () => {
        const props = {
            name: { type: 'string' },
            age: { type: 'number' }
        };
        instance.properties(props);
        const schema = instance.compose();
        expect(schema.properties).toEqual(props);
    });
    it('should set required fields', () => {
        instance.required(['name', 'email']);
        const schema = instance.compose();
        expect(schema.required).toEqual(['name', 'email']);
    });
    it('should add required field', () => {
        instance.addRequired('name').addRequired('email');
        const schema = instance.compose();
        expect(schema.required).toEqual(['name', 'email']);
    });
    it('should not duplicate required fields', () => {
        instance.addRequired('name').addRequired('name');
        const schema = instance.compose();
        expect(schema.required).toEqual(['name']);
    });
    it('should set additional properties', () => {
        instance.additionalProperties(false);
        const schema = instance.compose();
        expect(schema.additionalProperties).toBe(false);
    });
    it('should set min and max properties', () => {
        instance.minProperties(1).maxProperties(10);
        const schema = instance.compose();
        expect(schema.minProperties).toBe(1);
        expect(schema.maxProperties).toBe(10);
    });
    it('should create strict object', () => {
        instance.strict();
        const schema = instance.compose();
        expect(schema.additionalProperties).toBe(false);
    });
    it('should create required property', () => {
        var _a;
        instance.requiredProperty('name', { type: 'string' });
        const schema = instance.compose();
        expect((_a = schema.properties) === null || _a === void 0 ? void 0 : _a.name).toEqual({ type: 'string' });
        expect(schema.required).toContain('name');
    });
});
