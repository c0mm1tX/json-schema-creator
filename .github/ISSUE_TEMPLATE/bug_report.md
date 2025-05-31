---
name: Bug report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
assignees: ''

---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Create schema with '...'
2. Call method '....'
3. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Code example**
```typescript
// Provide a minimal code example that reproduces the issue
import { JsonSchemaFactory } from 'json-schema-creator';

const schema = JsonSchemaFactory.string('test')
  // ... your code here
  .compose();
```

**Actual output**
```json
// What you actually get
```

**Expected output**
```json
// What you expected to get
```

**Environment (please complete the following information):**
 - OS: [e.g. Windows, macOS, Linux]
 - Node.js version: [e.g. 18.0.0]
 - Package version: [e.g. 1.0.0]
 - TypeScript version: [e.g. 5.0.0]

**Additional context**
Add any other context about the problem here. 