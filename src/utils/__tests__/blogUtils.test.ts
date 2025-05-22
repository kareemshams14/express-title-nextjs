import { describe, it, expect } from 'vitest';
import { getPostBySlug } from '../blogUtils';
import { blogPosts } from '@/data/blogPosts'; // Used for verifying against actual data

describe('getPostBySlug', () => {
  it('should return the correct post for an existing slug', () => {
    const existingSlug = 'understanding-vehicle-title-loans';
    const expectedPost = blogPosts.find(post => post.slug === existingSlug);
    expect(getPostBySlug(existingSlug)).toEqual(expectedPost);
  });

  it('should return another correct post for a different existing slug', () => {
    const existingSlug = 'benefits-of-choosing-express-title';
    const expectedPost = blogPosts.find(post => post.slug === existingSlug);
    expect(getPostBySlug(existingSlug)).toEqual(expectedPost);
  });

  it('should return undefined for a non-existent slug', () => {
    const nonExistentSlug = 'this-slug-does-not-exist';
    expect(getPostBySlug(nonExistentSlug)).toBeUndefined();
  });

  it('should return undefined for an empty slug string', () => {
    expect(getPostBySlug('')).toBeUndefined();
  });

  it('should return undefined for a null slug (if possible in JS, though TS expects string)', () => {
    // TypeScript will prevent passing null if type is string, but testing robustness
    // @ts-expect-error - Testing with null despite TS expecting string
    expect(getPostBySlug(null)).toBeUndefined();
  });

  it('should return undefined for an undefined slug (if possible in JS, though TS expects string)', () => {
    // TypeScript will prevent passing undefined if type is string, but testing robustness
    // @ts-expect-error - Testing with undefined despite TS expecting string
    expect(getPostBySlug(undefined)).toBeUndefined();
  });

  it('should be case-sensitive with slugs (if slugs are defined as case-sensitive)', () => {
    const existingSlug = 'understanding-vehicle-title-loans';
    // Assuming slugs are case-sensitive, so a different case should not match.
    const caseDifferentSlug = 'Understanding-Vehicle-Title-Loans'; 
    expect(getPostBySlug(caseDifferentSlug)).toBeUndefined(); 
    // If slugs were meant to be case-insensitive, this test would fail and the utility would need adjustment.
    // For now, default Array.find is case-sensitive.
  });
});
