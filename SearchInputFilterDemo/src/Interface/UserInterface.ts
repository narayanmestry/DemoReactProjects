export interface User {
  id: number;
  name: string;
  userName: string;
  email: string;
  address:Address;
  phone:string;
  website:string;
  company:Company;

}
export interface Company{
    name:string;
    catchPhrase:string;
    bs:string
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo:Geo;
}

export interface Geo{
    lat:string;
    lbg:string;
}   

/* 
 
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
*/
