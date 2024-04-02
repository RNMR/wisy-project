
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { WeatherService } from '../../services/kansas-weather.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  kansasWeather = {}
  columbWeather = {}
  public chart: any;

  chartLabels = []
  chartDatasets = []

  constructor(
    private weatherService: WeatherService,
  ) {

  }

  ngOnInit(): void {
    this.createChart();
    this.callWeather()
  }

  dataSeparate(obj: any) {
    return obj['properties']['periods']
  }

  callWeather() {
    this.weatherService.getKansasWeather().subscribe((res: any) => {
      console.log("kansas", res)
      res.forEach( (ele : any) => {
        this.chartLabels.push(ele['name'])
      });
      this.kansasWeather = this.dataSeparate(res)
    })
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [ ...this.chartLabels ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }

      
    });
  }

}