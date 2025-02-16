import { describe } from 'vitest';
import { testMapStructure } from '@/test-utils/mapTestSuite';
import { FOMap } from './functionOnlyMap';

describe('FOMap', () => {
  testMapStructure(FOMap);
});
