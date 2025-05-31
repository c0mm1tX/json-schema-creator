import JsonSchemaCreator from "../json-schema.creator";
declare class JsonSchemaNumber extends JsonSchemaCreator {
    constructor(name: string);
    minimum(value: number): this;
    maximum(value: number): this;
    exclusiveMinimum(value: number): this;
    exclusiveMaximum(value: number): this;
    multipleOf(value: number): this;
    positive(): this;
    negative(): this;
    range(min: number, max: number): this;
    integer(): this;
}
export default JsonSchemaNumber;
