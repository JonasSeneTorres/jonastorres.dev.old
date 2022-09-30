import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

export class ActivatedRouteMock {
  public paramMap = of(
    convertToParamMap({
      testId: 'abc123',
      anotherId: 'd31e8b48-7309-4c83-9884-4142efdf7271',
      grupo: 'testes',
      categoria: 'testes-unitarios',
    })
  );

  params = of({
    grupo: 'testes',
    categoria: 'testes-unitarios',
    artigo: 'artigo xpto',
  });
}
