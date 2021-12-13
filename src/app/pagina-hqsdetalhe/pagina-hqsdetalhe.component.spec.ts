import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHqsdetalheComponent } from './pagina-hqsdetalhe.component';

describe('PaginaHqsdetalheComponent', () => {
  let component: PaginaHqsdetalheComponent;
  let fixture: ComponentFixture<PaginaHqsdetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaHqsdetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaHqsdetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
