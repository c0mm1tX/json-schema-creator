import JsonSchemaCreator from "../json-schema.creator";
declare class JsonSchemaInput extends JsonSchemaCreator {
    constructor(name: string);
    minLength(value: number): this;
    maxLength(value: number): this;
    pattern(pattern: string): this;
    format(format: string): this;
    email(): this;
    uri(): this;
    date(): this;
    dateTime(): this;
    time(): this;
    uuid(): this;
    ipv4(): this;
    ipv6(): this;
}
export default JsonSchemaInput;
