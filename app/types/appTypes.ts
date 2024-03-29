export interface CountryData {
    flags: Flags
    name: Name
    currencies: Currencies
    capital: string[]
  }
  
  export interface Flags {
    png: string
    svg: string
    alt: string
  }
  
  export interface Name {
    common: string
    official: string
    nativeName: NativeName
  }
  
  export interface NativeName {
    eng: Eng
  }
  
  export interface Eng {
    official: string
    common: string
  }
  
  export interface Currencies {
    AUD: Aud
  }
  
  export interface Aud {
    name: string
    symbol: string
  }
  