import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { PostsService } from '../posts.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-posts-search-bar',
  imports: [FormsModule],
  templateUrl: './posts-search-bar.component.html',
  styleUrl: './posts-search-bar.component.scss'
})
export class PostsSearchBarComponent implements OnInit{

public searchData!:string
public filterByTags!:string
public tags:string[] = []
private postsService = inject(PostsService)

onSelect(value:string):void{
  this.filterByTags = value
}

ngOnInit(): void {
  this.postsService.getPosts().pipe(map(({posts}:any) => {
    let filteredTags = posts.flatMap(({tags}:any) => tags)
    // posts.forEach(({tags}:any) => {
    //  filteredTags = [...filteredTags, ...tags]
    // })
    return [... new Set(filteredTags)]
  })).subscribe({
    next:(res:any) => this.tags = res || []
  })
}

}
