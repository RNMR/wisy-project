import { LWXComponent } from "./LWX/lwx.component";
import { TOPComponent } from "./TOP/top.component";
import { HomeComponent } from "./home/home.component";

export const HOME_COMPONENTS = [
  HomeComponent,
  LWXComponent,
  TOPComponent,
]

export * from "./home/home.component";
export * from "./TOP/top.component";
export * from "./home/home.component";


export interface chartLabelArr {
  name: string;
  dewpoint: {
    unitCode: string; value: number;
  };
  relativeHumidity: {
    unitCode: string; value: number;
  };
  temperature: number;
}