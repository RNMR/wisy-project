
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { WeatherService } from '../../services/kansas-weather.service';
import { chartLabelArr } from '..';
@Component({
  selector: 'app-lwx',
  templateUrl: './lwx.component.html',
  // styleUrls: ['./lwx.component.scss']
})
export class LWXComponent implements OnInit {

  public topChart: any;

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
    this.weatherService.getColumbiaWeather().subscribe((res: any) => {
      console.log("columbia", res)
      this.dataSeparate(res).forEach( (ele: chartLabelArr) => {
        this.chartLabels.push(ele.name)
        this.dewPointObj.data.push(ele.dewpoint.value)
        this.relativeHumidityObj.data.push(ele.relativeHumidity.value)
        this.temperatureObj.data.push(ele.temperature)
      });
      this.createColumbiaChart()
    })
  }

  createColumbiaChart(){
    this.topChart = new Chart("TopChart", {
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