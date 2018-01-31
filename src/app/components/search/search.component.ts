import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  public name: any;
  public coinname: any;
  public details: { [key: string]: any } = {
  };
  constructor(private searchService: SearchService) {

    console.log('Search component Init');
  }
  ngOnInit() {
    this.searchService.getTop100().subscribe((result: any) => {

      this.details = result;
      result.map(item => {
        console.log(JSON.stringify(result));
        this.name = item.name ;
      });
      console.log(JSON.stringify(this.name));
    });
  }
  search() {
    this.searchService.updateCoiname(this.coinname);
    this.searchService.getDetails().subscribe(user => {
      this.details = user;
      console.log(JSON.stringify(this.details));
    });
  }

}
