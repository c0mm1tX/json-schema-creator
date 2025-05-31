import JsonSchemaObject from './json-schema.object';
import { Shape } from '../../interfaces/json-schema/shape.interface';

describe('JsonSchemaObject', () => {
    let instance: JsonSchemaObject;
    const name = 'testObject';

    beforeEach(() => {
        instance = new JsonSchemaObject(name);
    });

    it('should initialize with empty properties', () => {
        const schema = instance.compose();
        expect(schema.properties).toEqual({});
    });

    it('should add single property', () => {
        instance.property('name', { type: 'string' });
        const schema = instance.compose();
        expect(schema.properties?.name).toEqual({ type: 'string' });
    });

    it('should add multiple properties', () => {
        const props: { [key: string]: Shape } = {
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
        instance.requiredProperty('name', { type: 'string' });
        const schema = instance.compose();
        expect(schema.properties?.name).toEqual({ type: 'string' });
        expect(schema.required).toContain('name');
    });
}); 