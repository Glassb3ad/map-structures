# map-structures

A map is a data structure that stores key-value pairs such that each key is unique.

This repository contains a collection of map-structures which all implement the following methods.

- Map.has(key: string): returns true if key has entry in map
- Map.get(key: string): returns entry for the key if one exitst. Otherwise return undefined
- Map.set([key, value]): adds key-value pair to map. If entry exists for the key, replace value.
- Map.detele(key: string): delete entry with given key and return true. Otherwise return false.

## Naive Map

Naive map is simple implementation where map is an array of key-value pairs. Methods ensure that each key has only one value if any.

## Functions Only Naive map

Map structure that uses only functions and boolean operators (no objects or arrays allowed!). The trick is that pair is implemented as a function. This is just for fun and has the same (or worst) time complexities as Naive map.

## Hash Map

## Binary Tree Map

# development

- This repository is produced in the style of test driven development.
- GithubActions and protections are used to ensure that only PR's that meet the following conditions can be merged:
  - All tests pass
  - Test coverage is at least 90%
