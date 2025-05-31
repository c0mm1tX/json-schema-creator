"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_schema_creator_1 = require("./json-schema.creator");
describe('JsonSchemaCreator', () => {
    let instance;
    const name = 'testSchema';
    beforeEach(() => {
        instance = new json_schema_creator_1.default(name);
    });
    it('should initialize with the correct name', () => {
        expect(instance.name).toBe(name);
    });
    it('should set correct single type', () => {
        instance.type('string');
        const schema = instance.compose();
        expect(schema.type).toBe("string");
    });
    it('should set correct multi type', () => {
        instance.type(["string", "number"]);
        const schema = instance.compose();
        expect(schema.type).toEqual(expect.arrayContaining(["string", "number"]));
    });
    it('should set correct title', () => {
        instance.title('test title');
        const schema = instance.compose();
        expect(schema.title).toBe("test title");
    });
    it('should set correct description', () => {
        instance.description('test description');
        const schema = instance.compose();
        expect(schema.description).toBe("test description");
    });
});
