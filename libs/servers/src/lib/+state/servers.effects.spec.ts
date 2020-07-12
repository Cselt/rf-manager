import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ServersEffects } from './servers.effects';
import { LoadServers, ServersLoaded } from './servers.actions';

describe('ServersEffects', () => {
  let actions: Observable<any>;
  let effects: ServersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [
        ServersEffects,
        DataPersistence,
        provideMockActions(() => actions),
      ],
    });

    effects = TestBed.get(ServersEffects);
  });

  describe('loadServers$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadServers() });
      expect(effects.loadServers$).toBeObservable(
        hot('-a-|', { a: new ServersLoaded([]) })
      );
    });
  });
});
