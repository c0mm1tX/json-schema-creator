import JsonSchemaFactory from './json-schema.factory';

describe('JsonSchemaFactory', () => {
    
    describe('Basic type creation', () => {
        it('should create string schema', () => {
            const schema = JsonSchemaFactory.string('testString').compose();
            expect(schema.type).toBe('string');
        });

        it('should create number schema', () => {
            const schema = JsonSchemaFactory.number('testNumber').compose();
            expect(schema.type).toBe('number');
        });

        it('should create integer schema', () => {
            const schema = JsonSchemaFactory.integer('testInteger').compose();
            expect(schema.type).toBe('integer');
        });

        it('should create boolean schema', () => {
            const schema = JsonSchemaFactory.boolean('testBoolean').compose();
            expect(schema.type).toBe('boolean');
        });

        it('should create array schema', () => {
            const schema = JsonSchemaFactory.array('testArray').compose();
            expect(schema.type).toBe('array');
        });

        it('should create object schema', () => {
            const schema = JsonSchemaFactory.object('testObject').compose();
            expect(schema.type).toBe('object');
        });
    });

    describe('Convenience methods', () => {
        it('should create email schema', () => {
            const schema = JsonSchemaFactory.email('userEmail').compose();
            expect(schema.type).toBe('string');
            expect(schema.format).toBe('email');
        });

        it('should create UUID schema', () => {
            const schema = JsonSchemaFactory.uuid('userId').compose();
            expect(schema.type).toBe('string');
            expect(schema.format).toBe('uuid');
        });

        it('should create positive number schema', () => {
            const schema = JsonSchemaFactory.positiveNumber('amount').compose();
            expect(schema.type).toBe('number');
            expect(schema.minimum).toBe(0);
            expect(schema.exclusiveMinimum).toBe(0);
        });

        it('should create string array schema', () => {
            const schema = JsonSchemaFactory.stringArray('tags').compose();
            expect(schema.type).toBe('array');
            expect(schema.items).toEqual({ type: 'string' });
        });

        it('should create strict object schema', () => {
            const schema = JsonSchemaFactory.strictObject('config').compose();
            expect(schema.type).toBe('object');
            expect(schema.additionalProperties).toBe(false);
        });
    });
}); 