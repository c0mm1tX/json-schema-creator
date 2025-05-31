import JsonSchemaCreator from "../json-schema.creator";

class JsonSchemaInput extends JsonSchemaCreator {

    constructor(name: string) {
        super(name);
    }

    minLength(value: number) {
        this.shape.minLength = value;
        return this;
    }

    maxLength(value: number) {
        this.shape.maxLength = value;
        return this;
    }

    pattern(pattern: string) {
        this.shape.pattern = pattern;
        return this;
    }

    format(format: string) {
        this.shape.format = format;
        return this;
    }

    email() {
        this.shape.format = 'email';
        return this;
    }

    uri() {
        this.shape.format = 'uri';
        return this;
    }

    date() {
        this.shape.format = 'date';
        return this;
    }

    dateTime() {
        this.shape.format = 'date-time';
        return this;
    }

    time() {
        this.shape.format = 'time';
        return this;
    }

    uuid() {
        this.shape.format = 'uuid';
        return this;
    }

    ipv4() {
        this.shape.format = 'ipv4';
        return this;
    }

    ipv6() {
        this.shape.format = 'ipv6';
        return this;
    }
}

export default JsonSchemaInput;
