import { ServersLoaded } from './servers.actions';
import { ServersState, Entity, initialState, reducer } from './servers.reducer';

describe('Servers Reducer', () => {
  const getServersId = (it) => it['id'];
  let createServers;

  beforeEach(() => {
    createServers = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`,
    });
  });

  describe('valid Servers actions ', () => {
    it('should return set the list of known Servers', () => {
      const serverss = [
        createServers('PRODUCT-AAA'),
        createServers('PRODUCT-zzz'),
      ];
      const action = new ServersLoaded(serverss);
      const result: ServersState = reducer(initialState, action);
      const selId: string = getServersId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
