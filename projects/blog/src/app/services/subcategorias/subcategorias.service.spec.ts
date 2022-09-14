import { HttpClientModule } from '@angular/common/http';
import { SubcategoriasService } from './subcategorias.service';
import { TestBed } from '@angular/core/testing';

describe('SubcategoriasService', () => {
  let service: SubcategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        SubcategoriasService
      ]
    });
    service = TestBed.inject(SubcategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
