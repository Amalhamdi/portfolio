import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypstageComponent } from './typstage.component';

describe('TypstageComponent', () => {
  let component: TypstageComponent;
  let fixture: ComponentFixture<TypstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypstageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
