import JsonSchemaCreator from "../json-schema.creator";

class JsonSchemaNumber extends JsonSchemaCreator {

    constructor(name: string) {
        super(name);
    }

    minimum(value: number) {
        this.shape.minimum = value;
        return this;
    }

    maximum(value: number) {
        this.shape.maximum = value;
        return this;
    }

    exclusiveMinimum(value: number) {
        this.shape.exclusiveMinimum = value;
        return this;
    }

    exclusiveMaximum(value: number) {
        this.shape.exclusiveMaximum = value;
        return this;
    }

    multipleOf(value: number) {
        this.shape.multipleOf = value;
        return this;
    }
    
    positive() {
        this.shape.minimum = 0;
        this.shape.exclusiveMinimum = 0;
        return this;
    }

    negative() {
        this.shape.maximum = 0;
        this.shape.exclusiveMaximum = 0;
        return this;
    }

    range(min: number, max: number) {
        this.shape.minimum = min;
        this.shape.maximum = max;
        return this;
    }

    integer() {
        this.shape.type = 'integer';
        return this;
    }
}

export default JsonSchemaNumber; 