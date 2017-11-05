import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  m1 = '';
  m2 = '';
  m3 = '';

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  	const req = this.http.post('/home', null);
    	req.subscribe(
    	res => {
          var response = res["_body"];
          console.log(JSON.parse(response));
          //console.log(JSON.parse(response)['name']);
          this.m1 = JSON.parse(response)['m1'];
          this.m2 = JSON.parse(response)['m2'];
          this.m3 = JSON.parse(response)['m3'];
        },
        err => {
          console.log("ERROR");
        });
  }

  getMovieReview(m)
  {
    this.router.navigate(['/reviews', m]);
  }

}
