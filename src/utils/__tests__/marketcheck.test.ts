// Test file for marketcheck.ts
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { calculateFallbackVehicleValue } from '../marketcheck';

describe('calculateFallbackVehicleValue', () => {
  const originalConsoleWarn = console.warn;
  let mockedConsoleWarn: any;

  beforeEach(() => {
    // Mock console.warn before each test
    mockedConsoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.warn after each test
    mockedConsoleWarn.mockRestore();
  });

  const currentYear = new Date().getFullYear();
  const MINIMUM_FALLBACK_VALUE = 1000;

  it('should calculate fallback value for a valid year and mileage', () => {
    const year = (currentYear - 2).toString(); // Example: 2 years old car
    const mileage = 50000;
    const age = currentYear - parseInt(year);
    let expectedValue = Math.max(30000 - (age * 2000), 5000);
    const mileageDepreciation = (mileage / 50000) * 0.1;
    expectedValue = expectedValue * (1 - Math.min(mileageDepreciation, 0.8));
    const finalExpected = Math.max(Math.round(expectedValue), MINIMUM_FALLBACK_VALUE);

    expect(calculateFallbackVehicleValue(year, mileage)).toBe(finalExpected);
    expect(mockedConsoleWarn).not.toHaveBeenCalled();
  });

  it('should return minimum fallback value and warn for invalid year string "abc"', () => {
    expect(calculateFallbackVehicleValue('abc', 50000)).toBe(MINIMUM_FALLBACK_VALUE);
    expect(mockedConsoleWarn).toHaveBeenCalledWith(
      `Invalid year provided to calculateFallbackVehicleValue: abc. Returning default minimum fallback.`
    );
  });

  it('should return minimum fallback value and warn for a future year', () => {
    const futureYear = (currentYear + 2).toString();
    expect(calculateFallbackVehicleValue(futureYear, 50000)).toBe(MINIMUM_FALLBACK_VALUE);
    expect(mockedConsoleWarn).toHaveBeenCalledWith(
      `Invalid year provided to calculateFallbackVehicleValue: ${futureYear}. Returning default minimum fallback.`
    );
  });
  
  it('should handle currentYear + 1 (next year model) correctly', () => {
    const nextYear = (currentYear + 1).toString();
    const mileage = 100; // Low mileage for a new car
    const age = currentYear - parseInt(nextYear); // age will be -1
    const effectiveAge = Math.max(0, age); // effectiveAge will be 0
    let expectedValue = Math.max(30000 - (effectiveAge * 2000), 5000); // 30000
    const mileageDepreciation = (mileage / 50000) * 0.1; // very small
    expectedValue = expectedValue * (1 - Math.min(mileageDepreciation, 0.8));
    const finalExpected = Math.max(Math.round(expectedValue), MINIMUM_FALLBACK_VALUE);

    expect(calculateFallbackVehicleValue(nextYear, mileage)).toBe(finalExpected);
    expect(mockedConsoleWarn).not.toHaveBeenCalled();
  });


  it('should return minimum fallback value and warn for year 1890 (less than 1900)', () => {
    expect(calculateFallbackVehicleValue('1890', 50000)).toBe(MINIMUM_FALLBACK_VALUE);
    expect(mockedConsoleWarn).toHaveBeenCalledWith(
      `Invalid year provided to calculateFallbackVehicleValue: 1890. Returning default minimum fallback.`
    );
  });

  it('should calculate fallback value for a valid year and 0 mileage', () => {
    const year = (currentYear - 3).toString(); // Example: 3 years old car
    const mileage = 0;
    const age = currentYear - parseInt(year);
    let expectedValue = Math.max(30000 - (age * 2000), 5000);
    // No mileage depreciation
    const finalExpected = Math.max(Math.round(expectedValue), MINIMUM_FALLBACK_VALUE);

    expect(calculateFallbackVehicleValue(year, mileage)).toBe(finalExpected);
    expect(mockedConsoleWarn).not.toHaveBeenCalled();
  });

  it('should not go below minimum fallback value for very old cars', () => {
    const oldYear = '1950'; // Very old car
    const mileage = 200000;
    // Calculation would lead to a very low value, but it should be capped
    expect(calculateFallbackVehicleValue(oldYear, mileage)).toBe(MINIMUM_FALLBACK_VALUE);
    expect(mockedConsoleWarn).not.toHaveBeenCalled(); // Year is valid
  });

  it('should not go below minimum fallback value for high mileage cars', () => {
    const year = (currentYear - 5).toString();
    const highMileage = 500000; // Very high mileage
    // Calculation would lead to a very low value, but it should be capped
    expect(calculateFallbackVehicleValue(year, highMileage)).toBe(MINIMUM_FALLBACK_VALUE);
    expect(mockedConsoleWarn).not.toHaveBeenCalled();
  });
});
