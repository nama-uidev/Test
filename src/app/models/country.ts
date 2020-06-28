export interface ICountryData {
    name: string;
    capital: string;
    population: number;
    currencies: ICurrency[];
    flag: string;
}

interface ICurrency {
    code: string;
    name: string;
    symbol: string;
}

export interface ICountryApi {
    countries: ICountryData[];
}
