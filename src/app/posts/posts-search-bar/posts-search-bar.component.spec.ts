import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSearchBarComponent } from './posts-search-bar.component';

describe('PostsSearchBarComponent', () => {
  let component: PostsSearchBarComponent;
  let fixture: ComponentFixture<PostsSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
