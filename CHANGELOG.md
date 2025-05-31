# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2024-01-XX

### Added
- Initial release of JSON Schema Creator
- `JsonSchemaCreator` base class with fluent API
- `JsonSchemaFactory` for creating different schema types
- Specialized classes for different JSON Schema types:
  - `JsonSchemaInput` for string schemas with format validation
  - `JsonSchemaNumber` for numeric schemas with range validation
  - `JsonSchemaArray` for array schemas with item validation
  - `JsonSchemaObject` for object schemas with property validation
- Complete TypeScript support with type definitions
- Comprehensive test suite with Jest
- Support for all JSON Schema Draft 7 features:
  - Basic types (string, number, integer, boolean, array, object, null)
  - String validation (minLength, maxLength, pattern, format)
  - Number validation (minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf)
  - Array validation (items, minItems, maxItems, uniqueItems, additionalItems)
  - Object validation (properties, required, additionalProperties, patternProperties)
  - Composition (allOf, anyOf, oneOf, not)
  - Conditional validation (if, then, else)
  - Common properties (enum, const, default, examples)
  - Meta properties ($id, $schema, $ref, $comment, definitions, $defs)
- Convenience methods for common patterns:
  - Email, URI, date, UUID validation
  - Positive/negative numbers
  - String/number arrays
  - Strict objects
- Fluent API with method chaining
- AJV compatibility

### Documentation
- Comprehensive README with examples
- API reference documentation
- TypeScript type definitions
- Jest test examples 