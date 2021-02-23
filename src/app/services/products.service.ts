import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({providedIn:"root"})
export class ProductsService{
  constructor(private http:HttpClient) {
  }
  getAllProduct():Observable<Product[]>{
    let host=environment.host;
    //let host=(Math.random()>0.2)?environment.host:environment.unreachableHost;
    return this.http.get<Product[]>(host+"/products");
  }
  getSelectedProduct():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?selected=true");
  }

  getAvailableProduct():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?available=true");
  }
  searchProduct(keyword:string):Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?name_like="+keyword);
  }
  /*select(product:Product):Observable<Product[]>{
    let host = environment.host;
    product.selected =! product.selected;
    return this.http.put<Product[]>(host+"/products/"+product.id,product);
  }*/
  select(product:Product):Observable<Product>{
    let host = environment.host;
    product.selected =! product.selected;
    return this.http.put<Product>(host+"/products/"+product.id,product);
  }
  deleteProduct(product:Product):Observable<void>{
    let host = environment.host;
    //product.selected =! product.selected;
    return this.http.delete<void>(host+"/products/"+product.id);
  }
  save(product:Product):Observable<Product>{
    let host = environment.host;
    return this.http.post<Product>(host+"/products",product);
  }


}
