import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipforComponent } from './dipfor.component';

describe('DipforComponent', () => {
  let component: DipforComponent;
  let fixture: ComponentFixture<DipforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
