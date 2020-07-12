import { Entity, ServersState } from './servers.reducer';
import { serversQuery } from './servers.selectors';

describe('Servers Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getServersId = (it) => it['id'];

  let storeState;

  beforeEach(() => {
    const createServers = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`,
    });
    storeState = {
      servers: {
        list: [
          createServers('PRODUCT-AAA'),
          createServers('PRODUCT-BBB'),
          createServers('PRODUCT-CCC'),
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true,
      },
    };
  });

  describe('Servers Selectors', () => {
    it('getAllServers() should return the list of Servers', () => {
      const results = serversQuery.getAllServers(storeState);
      const selId = getServersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedServers() should return the selected Entity', () => {
      const result = serversQuery.getSelectedServers(storeState);
      const selId = getServersId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = serversQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = serversQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
