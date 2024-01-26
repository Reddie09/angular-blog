import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataDummy } from '../../data/dataDummy';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  @Input()
  photoCover:string = ""
  @Input()
  contentTitle:string = ""
  @Input()
  contentDescription:string = ""
  @Input()
  photo:string = ""
  private contentId:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.contentId = value.get("contentId");
      if(this.contentId !== null){
      this.setValuesToComponent(this.contentId);
    }
    });

  }
  
  setValuesToComponent(id:string){
    const result = dataDummy.filter(article => article.id = id)[0]
    this.contentTitle = result.title
    this.photoCover = result.photoCover
    this.photo = result.photo
    this.contentDescription = result.description
  }
}
