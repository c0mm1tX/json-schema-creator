import JsonSchemaCreator from "./json-schema.creator";
import JsonSchemaInput from "./input/json-schema.input";
import JsonSchemaNumber from "./number/json-schema.number";
import JsonSchemaArray from "./array/json-schema.array";
import JsonSchemaObject from "./object/json-schema.object";
declare class JsonSchemaFactory {
    static create(name: string): JsonSchemaCreator;
    static string(name: string): JsonSchemaInput;
    static number(name: string): JsonSchemaNumber;
    static integer(name: string): JsonSchemaNumber;
    static boolean(name: string): JsonSchemaCreator;
    static array(name: string): JsonSchemaArray;
    static object(name: string): JsonSchemaObject;
    static null(name: string): JsonSchemaCreator;
    static email(name: string): JsonSchemaInput;
    static uri(name: string): JsonSchemaInput;
    static date(name: string): JsonSchemaInput;
    static dateTime(name: string): JsonSchemaInput;
    static uuid(name: string): JsonSchemaInput;
    static positiveNumber(name: string): JsonSchemaNumber;
    static positiveInteger(name: string): JsonSchemaNumber;
    static stringArray(name: string): JsonSchemaArray;
    static numberArray(name: string): JsonSchemaArray;
    static strictObject(name: string): JsonSchemaObject;
}
export default JsonSchemaFactory;
