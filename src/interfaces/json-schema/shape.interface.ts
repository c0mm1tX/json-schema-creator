import {Type} from "./type.interface";

export interface Shape {
    // Basic properties
    type?: Type | Array<Type>;
    title?: string;
    description?: string;
    
    // String properties
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    format?: string;
    
    // Number properties
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: number;
    exclusiveMaximum?: number;
    multipleOf?: number;
    
    // Array properties
    items?: Shape | Shape[];
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
    additionalItems?: boolean | Shape;
    
    // Object properties
    properties?: { [key: string]: Shape };
    required?: string[];
    additionalProperties?: boolean | Shape;
    minProperties?: number;
    maxProperties?: number;
    patternProperties?: { [pattern: string]: Shape };
    
    // Common properties
    enum?: any[];
    const?: any;
    default?: any;
    examples?: any[];
    
    // Conditional properties
    if?: Shape;
    then?: Shape;
    else?: Shape;
    
    // Composition properties
    allOf?: Shape[];
    anyOf?: Shape[];
    oneOf?: Shape[];
    not?: Shape;
    
    // Meta properties
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    definitions?: { [key: string]: Shape };
    $defs?: { [key: string]: Shape };
}
