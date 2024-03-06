import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallNavPageComponent } from './small-nav-page.component';

describe('SmallNavPageComponent', () => {
  let component: SmallNavPageComponent;
  let fixture: ComponentFixture<SmallNavPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallNavPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallNavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
