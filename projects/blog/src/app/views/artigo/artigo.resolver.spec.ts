import { TestBed } from '@angular/core/testing';

import { ArtigoResolver } from './artigo.resolver';

describe('ArtigoResolver', () => {
  let resolver: ArtigoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ArtigoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
