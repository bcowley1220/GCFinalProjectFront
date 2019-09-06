import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(private apiServices: ApiService) {}

  ngOnInit() {}
}
