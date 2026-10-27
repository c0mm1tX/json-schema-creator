import { Type } from "../interfaces/json-schema/type.interface";
import { Shape } from "../interfaces/json-schema/shape.interface";
declare class JsonSchemaCreator {
    name: string;
    protected readonly shape: Shape;
    constructor(name: string);
    type(type: Type | Array<Type>): this;
    title(text: string): this;
    description(text: string): this;
    enum(values: unknown[]): this;
    const(value: unknown): this;
    default(value: unknown): this;
    examples(values: unknown[]): this;
    id(id: string): this;
    schema(schema: string): this;
    ref(ref: string): this;
    comment(comment: string): this;
    definitions(defs: {
        [key: string]: Shape;
    }): this;
    defs(defs: {
        [key: string]: Shape;
    }): this;
    allOf(schemas: Shape[]): this;
    anyOf(schemas: Shape[]): this;
    oneOf(schemas: Shape[]): this;
    not(schema: Shape): this;
    if(condition: Shape): this;
    then(schema: Shape): this;
    else(schema: Shape): this;
    compose(): Shape;
}
export default JsonSchemaCreator;
