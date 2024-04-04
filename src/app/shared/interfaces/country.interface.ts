export interface ICountryResponse {
  codigo:  string;
  mensaje: string;
  data:    ICountryItem[];
}

export interface ICountryItem {
  id:           number;
  nameCountry:  string;
  stateCountry: boolean;
}
