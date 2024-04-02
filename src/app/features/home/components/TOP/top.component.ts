
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { WeatherService } from '../../services/kansas-weather.service';
import { chartLabelArr } from '..';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  // styleUrls: ['./top.component.scss']
})
export class TOPComponent implements OnInit {

  public kansasChart: any;

  chartLabels:string[] = []
  chartDatasets: any[] = []
  data1: number[] = []
  data2: number[] = []
  data3: number[] = []
  dewPointObj = {
    label: 'Punto de Rocío (ºC)',
    data: this.data1,
    backgroundColor: 'blue',
  }
  relativeHumidityObj = {
    label: "Humedad Relativa (%)",
    data: this.data2,
    backgroundColor: 'limegreen'
  }  
  temperatureObj = {
    label: "Temperatura (ºF) ",
    data: this.data3,
    backgroundColor: 'yellow'
  }  

  constructor(
    private weatherService: WeatherService,
  ) {

  }

  dataSeparate(obj: any) {
    return obj['properties']['periods']
  }

  ngOnInit(): void {
    this.callWeather()
  }

  callWeather() {
    this.weatherService.getKansasWeather().subscribe((res: any) => {
      console.log("kansas", res)
      this.dataSeparate(res).forEach( (ele: chartLabelArr) => {
        this.chartLabels.push(ele.name)
        this.dewPointObj.data.push(ele.dewpoint.value)
        this.relativeHumidityObj.data.push(ele.relativeHumidity.value)
        this.temperatureObj.data.push(ele.temperature)
      });
      this.createKansasChart()
    })
  }

  createKansasChart(){
    this.kansasChart = new Chart("KansasChart", {
      type: 'line', 
      data: {
        labels: [ ...this.chartLabels ], 
	      datasets: [
          this.dewPointObj,
          this.relativeHumidityObj,
          this.temperatureObj,
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });
  }
}