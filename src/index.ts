import JsonSchemaFactory from "./creator/json-schema.factory";
import JsonSchemaCreator from "./creator/json-schema.creator";

export { JsonSchemaCreator, JsonSchemaFactory };

export { default as JsonSchemaInput } from "./creator/input/json-schema.input";
export { default as JsonSchemaNumber } from "./creator/number/json-schema.number";
export { default as JsonSchemaArray } from "./creator/array/json-schema.array";
export { default as JsonSchemaObject } from "./creator/object/json-schema.object";

export { Type } from "./interfaces/json-schema/type.interface";
export { Shape } from "./interfaces/json-schema/shape.interface";


export function createSchema(name: string) {
    return new JsonSchemaCreator(name);
}

export function createString(name: string) {
    return JsonSchemaFactory.string(name);
}

export function createNumber(name: string) {
    return JsonSchemaFactory.number(name);
}

export function createInteger(name: string) {
    return JsonSchemaFactory.integer(name);
}

export function createBoolean(name: string) {
    return JsonSchemaFactory.boolean(name);
}

export function createArray(name: string) {
    return JsonSchemaFactory.array(name);
}

export function createObject(name: string) {
    return JsonSchemaFactory.object(name);
}


export const Schema = JsonSchemaFactory;



