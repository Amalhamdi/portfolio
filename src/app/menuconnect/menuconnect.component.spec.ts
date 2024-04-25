import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuconnectComponent } from './menuconnect.component';

describe('MenuconnectComponent', () => {
  let component: MenuconnectComponent;
  let fixture: ComponentFixture<MenuconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuconnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
