import JsonSchemaCreator from "../json-schema.creator";
import {Shape} from "../../interfaces/json-schema/shape.interface";

class JsonSchemaArray extends JsonSchemaCreator {

    constructor(name: string) {
        super(name);
    }

    items(schema: Shape | Shape[]) {
        this.shape.items = schema;
        return this;
    }

    minItems(value: number) {
        this.shape.minItems = value;
        return this;
    }

    maxItems(value: number) {
        this.shape.maxItems = value;
        return this;
    }

    uniqueItems(unique: boolean = true) {
        this.shape.uniqueItems = unique;
        return this;
    }

    additionalItems(allowed: boolean | Shape) {
        this.shape.additionalItems = allowed;
        return this;
    }


    nonEmpty() {
        this.shape.minItems = 1;
        return this;
    }

    unique() {
        this.shape.uniqueItems = true;
        return this;
    }

    fixedLength(length: number) {
        this.shape.minItems = length;
        this.shape.maxItems = length;
        return this;
    }

    stringArray() {
        this.shape.items = { type: 'string' };
        return this;
    }

    numberArray() {
        this.shape.items = { type: 'number' };
        return this;
    }

    integerArray() {
        this.shape.items = { type: 'integer' };
        return this;
    }

    booleanArray() {
        this.shape.items = { type: 'boolean' };
        return this;
    }
}

export default JsonSchemaArray; 