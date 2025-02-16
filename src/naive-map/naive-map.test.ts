import { describe } from 'vitest';
import { NaiveMap } from './naive-map';
import { testMapStructure } from '@/test-utils/mapTestSuite';

describe('NaiveMap', () => {
  testMapStructure(NaiveMap);
});
