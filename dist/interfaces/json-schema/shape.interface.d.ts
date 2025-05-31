import { Type } from "./type.interface";
export interface Shape {
    type?: Type | Array<Type>;
    title?: string;
    description?: string;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    format?: string;
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: number;
    exclusiveMaximum?: number;
    multipleOf?: number;
    items?: Shape | Shape[];
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
    additionalItems?: boolean | Shape;
    properties?: {
        [key: string]: Shape;
    };
    required?: string[];
    additionalProperties?: boolean | Shape;
    minProperties?: number;
    maxProperties?: number;
    patternProperties?: {
        [pattern: string]: Shape;
    };
    enum?: any[];
    const?: any;
    default?: any;
    examples?: any[];
    if?: Shape;
    then?: Shape;
    else?: Shape;
    allOf?: Shape[];
    anyOf?: Shape[];
    oneOf?: Shape[];
    not?: Shape;
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    definitions?: {
        [key: string]: Shape;
    };
    $defs?: {
        [key: string]: Shape;
    };
}
