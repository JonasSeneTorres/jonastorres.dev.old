import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PerfilUsuarioService } from '../perfil-usuario/perfil-usuario.service';
import { RedesSociaisService } from './redes-sociais.service';

describe('RedesSociaisService', () => {
  let service: RedesSociaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PerfilUsuarioService],
    });
    service = TestBed.inject(RedesSociaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
