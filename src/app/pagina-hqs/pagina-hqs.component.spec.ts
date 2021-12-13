import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHqsComponent } from './pagina-hqs.component';

describe('PaginaHqsComponent', () => {
  let component: PaginaHqsComponent;
  let fixture: ComponentFixture<PaginaHqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaHqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaHqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
