import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cols = 3;
  category: string | undefined;
  onColumnsCountChange(colsNum: number): void{
    this.cols = colsNum;
  }

  onCategoryChange( newCategory: string ):void {
    this.category = newCategory;
  }
}
