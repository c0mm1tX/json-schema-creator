import JsonSchemaCreator from "../json-schema.creator";
import { Shape } from "../../interfaces/json-schema/shape.interface";
declare class JsonSchemaObject extends JsonSchemaCreator {
    constructor(name: string);
    property(name: string, schema: Shape): this;
    properties(props: {
        [key: string]: Shape;
    }): this;
    required(fields: string[]): this;
    addRequired(field: string): this;
    additionalProperties(allowed: boolean | Shape): this;
    minProperties(value: number): this;
    maxProperties(value: number): this;
    patternProperties(patterns: {
        [pattern: string]: Shape;
    }): this;
    patternProperty(pattern: string, schema: Shape): this;
    strict(): this;
    nonEmpty(): this;
    requiredProperty(name: string, schema: Shape): this;
}
export default JsonSchemaObject;
