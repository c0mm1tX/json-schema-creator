import JsonSchemaCreator from "../json-schema.creator";
import { Shape } from "../../interfaces/json-schema/shape.interface";
declare class JsonSchemaArray extends JsonSchemaCreator {
    constructor(name: string);
    items(schema: Shape | Shape[]): this;
    minItems(value: number): this;
    maxItems(value: number): this;
    uniqueItems(unique?: boolean): this;
    additionalItems(allowed: boolean | Shape): this;
    nonEmpty(): this;
    unique(): this;
    fixedLength(length: number): this;
    stringArray(): this;
    numberArray(): this;
    integerArray(): this;
    booleanArray(): this;
}
export default JsonSchemaArray;
