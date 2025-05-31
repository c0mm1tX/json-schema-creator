---
name: Feature request
about: Suggest an idea for this project
title: '[FEATURE] '
labels: enhancement
assignees: ''

---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Example usage**
```typescript
// Show how you would like to use the new feature
import { JsonSchemaFactory } from 'json-schema-creator';

const schema = JsonSchemaFactory.string('example')
  .newFeature() // Your proposed API
  .compose();
```

**Expected output**
```json
{
  "type": "string",
  // ... expected JSON Schema output
}
```

**Additional context**
Add any other context or screenshots about the feature request here. 