# map-structures

A map is a data structure that stores key-value pairs such that each key is unique.

This repository contains a collection of map-structures which all implement the following methods.

- Map.has(key: string): returns true if key has entry in map
- Map.get(key: string): returns entry for the key if one exitst. Otherwise return undefined
- map.set([key, value]): adds key-value pair to map. If entry exists for the key, replace value.
- map.detele(key: string): delete entry with given key and return true. Otherwise return false.

## Naive map

Naive map is simple implementation where map is an array of key-value pairs. Methods ensure that each key has only one value if any.

## functions-only Naive map

Map structure that uses only functions and boolean operators

## Hash map

# development

- This repository is produced in the style of test driven development.
- GithubActions and protections are used to ensure that only PR's that meet the following conditions can be merged:
  - All tests pass
  - Test coverage is at least 90%
