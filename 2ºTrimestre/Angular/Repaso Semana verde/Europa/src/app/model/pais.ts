export interface Pais{
    name: {common: string; official: string};
    capital: Capital[];
    unMember: boolean;
    flags: {png:string};

}
export interface Capital{
    nombre: string;
}