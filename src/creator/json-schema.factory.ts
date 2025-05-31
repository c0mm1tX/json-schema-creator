import JsonSchemaCreator from "./json-schema.creator";
import JsonSchemaInput from "./input/json-schema.input";
import JsonSchemaNumber from "./number/json-schema.number";
import JsonSchemaArray from "./array/json-schema.array";
import JsonSchemaObject from "./object/json-schema.object";

class JsonSchemaFactory {
    
    static create(name: string): JsonSchemaCreator {
        return new JsonSchemaCreator(name);
    }

    static string(name: string): JsonSchemaInput {
        return new JsonSchemaInput(name).type('string');
    }

    static number(name: string): JsonSchemaNumber {
        return new JsonSchemaNumber(name).type('number');
    }

    static integer(name: string): JsonSchemaNumber {
        return new JsonSchemaNumber(name).type('integer');
    }

    static boolean(name: string): JsonSchemaCreator {
        return new JsonSchemaCreator(name).type('boolean');
    }

    static array(name: string): JsonSchemaArray {
        return new JsonSchemaArray(name).type('array');
    }

    static object(name: string): JsonSchemaObject {
        return new JsonSchemaObject(name).type('object');
    }

    static null(name: string): JsonSchemaCreator {
        return new JsonSchemaCreator(name).type('null');
    }

    static email(name: string): JsonSchemaInput {
        return this.string(name).email();
    }

    static uri(name: string): JsonSchemaInput {
        return this.string(name).uri();
    }

    static date(name: string): JsonSchemaInput {
        return this.string(name).date();
    }

    static dateTime(name: string): JsonSchemaInput {
        return this.string(name).dateTime();
    }

    static uuid(name: string): JsonSchemaInput {
        return this.string(name).uuid();
    }

    static positiveNumber(name: string): JsonSchemaNumber {
        return this.number(name).positive();
    }

    static positiveInteger(name: string): JsonSchemaNumber {
        return this.integer(name).positive();
    }

    static stringArray(name: string): JsonSchemaArray {
        return this.array(name).stringArray();
    }

    static numberArray(name: string): JsonSchemaArray {
        return this.array(name).numberArray();
    }

    static strictObject(name: string): JsonSchemaObject {
        return this.object(name).strict();
    }
}

export default JsonSchemaFactory; 