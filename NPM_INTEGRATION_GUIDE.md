# Matrix Health Calculator - NPM Package Integration Guide

## Package Configuration for Enhanced Helper Functions

### Recommended Package.json Scripts Addition

Add these scripts to integrate the micro-optimizations:

```json
{
  "scripts": {
    "test": "node validation_tests.js",
    "test:math": "node validation_tests.js", 
    "validate": "npm run test && npm run check && npm run build",
    "release": "npm run validate && npm version patch",
    "helpers:export": "echo 'Helper functions available in client/src/lib/helpers.ts'",
    "benchmarks:update": "echo 'Update marketing rates in client/src/data/benchmarks.json'"
  }
}
```

### NPM Package Structure

The enhanced helper functions are ready for NPM package extraction:

**Core Helper Functions** (`client/src/lib/helpers.ts`):
```typescript
export const calcPayback = (cost: number, revenue: number): number | null | undefined
export const sumGeometric = (r: number, n: number): number  
export const formatROI = (roi: number | null): string
export const formatPaybackPeriod = (months: number | null | undefined): string
export class FriendlyError extends Error
```

**Mathematical Constants** (`client/src/lib/constants.ts`):
```typescript
export const MAX_PATIENT_MULTIPLIER_DIGITAL = 6.0
export const MAX_PATIENT_MULTIPLIER_OOH = 4.5
export const FOLLOW_UP_APPOINTMENTS = 3
export const GRAFT_VALUE = 40000
```

**Benchmark Configuration** (`client/src/data/benchmarks.json`):
```json
{
  "digitalMarketing": { "defaultCTR": 2.5, "defaultLeadConversion": 15.0 },
  "oohMarketing": { "defaultCTR": 1.8, "defaultLeadConversion": 12.0 },
  "kensActualData": { "digitalCTR": 3.2, "digitalLeadConversion": 18.5 }
}
```

## Standalone NPM Package Creation

### Option 1: Extract Utilities Package

Create `@matrix-health/calculator-utils`:

```typescript
// index.ts
export * from './calculations';
export * from './formatters'; 
export * from './constants';
export * from './errors';

// calculations.ts
export const calcPayback = (cost: number, revenue: number) => { /* implementation */ };
export const sumGeometric = (r: number, n: number) => { /* implementation */ };

// formatters.ts  
export const formatROI = (roi: number | null) => { /* implementation */ };
export const formatPaybackPeriod = (months: number | null | undefined) => { /* implementation */ };
```

### Option 2: Complete Calculator Package

Create `@matrix-health/wound-care-calculator`:

```typescript
// Main calculator engine with all optimizations
export { calculateResults } from './calculator';
export * from './utils';
export * from './types';
```

## Integration Testing

### Validation Script Usage

```bash
# Run mathematical validation
npm run test

# Full validation including TypeScript check
npm run validate

# Release with validation
npm run release
```

### Test Coverage

The validation tests cover:
- ✅ ROI calculation edge cases (null, infinite, break-even)
- ✅ Payback period semantics (immediate, days, months, never)
- ✅ Geometric series mathematical accuracy
- ✅ Type safety for null/undefined handling
- ✅ Custom error class functionality

## Usage Examples

### In Other Projects

```typescript
import { 
  calcPayback, 
  formatROI, 
  sumGeometric,
  FriendlyError 
} from '@matrix-health/calculator-utils';

// Calculate payback period
const payback = calcPayback(1000, 2000); // Returns 1 (month)

// Format for display
const display = formatPaybackPeriod(payback); // "1.0 months"

// Multi-year projections
const year3Revenue = sumGeometric(0.1, 36); // Geometric series calculation
```

### Configuration Management

```typescript
import benchmarks from './benchmarks.json';

// Marketing team can update without deployment
const currentCTR = benchmarks.digitalMarketing.defaultCTR;
const kensCTR = benchmarks.kensActualData.digitalCTR;
```

## Dependencies for Standalone Package

### Core Dependencies
```json
{
  "dependencies": {
    "zod": "^3.24.2",
    "zod-validation-error": "^3.4.0"
  },
  "devDependencies": {
    "typescript": "^5.6.3",
    "@types/node": "^20.16.11"
  }
}
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "declaration": true,
    "strict": true,
    "noImplicitReturns": true,
    "exactOptionalPropertyTypes": true
  }
}
```

## Publishing Checklist

### Pre-publish Validation
- [ ] All tests pass (`npm run test`)
- [ ] TypeScript compilation successful (`npm run check`)
- [ ] Build process complete (`npm run build`)
- [ ] Documentation updated
- [ ] Version bumped appropriately

### NPM Package Metadata
```json
{
  "name": "@matrix-health/calculator-utils",
  "version": "1.0.0",
  "description": "Enhanced helper functions for Medicare wound care financial calculations",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "keywords": ["healthcare", "medicare", "roi", "calculator", "wound-care"],
  "author": "Matrix Health",
  "license": "MIT"
}
```

## Benefits of NPM Package Extraction

### Code Reusability
- Share calculations across multiple healthcare applications
- Consistent mathematical formulas across products
- Centralized maintenance and updates

### Type Safety
- Enhanced TypeScript types with strict null checking
- Guaranteed error message properties with custom classes
- Mathematical accuracy with validated formulas

### Configuration Management
- JSON-based benchmark updates without deployment
- Marketing team autonomy for funnel rate adjustments
- Non-developer friendly configuration options

The enhanced helper functions are production-ready and optimized for NPM package distribution with comprehensive testing and documentation.