import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaboardComponent } from './ideaboard.component';

describe('IdeaboardComponent', () => {
  let component: IdeaboardComponent;
  let fixture: ComponentFixture<IdeaboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
