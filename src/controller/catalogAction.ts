import { Request, Response } from "express";
import catalogModel from "../entity/catalog";
import {Catalog} from "../entity/catalog";



export async function catalogSaveAction(request: Request, response: Response) {
    const catalogData: Catalog = request.body;
    const createdCatalog = new catalogModel(catalogData);
    createdCatalog.save()
        .then(savedPost => {    
            response.send(savedPost);
        })
}

export async function catalogGetAction(request: Request, response: Response) {
    let Catalog = catalogModel.find((err: any, Catalog: any) => {
        if (err) {
            response.send(err);
        } else {
            
            response.send(Catalog);
        }
      });
}
export async function catalogDeleteAction(request: Request, response: Response) {
    console.log(request.params.id);
    catalogModel.deleteOne({ _id: request.params.id }, function(err) {
        if (!err) {
            let Catalog = catalogModel.find((err: any, Catalog: any) => {
                if (err) {
                    response.send(err);
                } else {         
                    response.send(Catalog);
                }
              }); 
        }
        else {
               
        }
    });
    
    
}


export async function loginAction(request: Request, response: Response) {
    console.log(request.body.user);
    console.log(request.body.password);

    if (request.body.user==='admin' && request.body.password=='admin'){
        response.send({"code":"success"})

    }else{
        response.send({"code":"plesase enter correct username and password"})
    }
    
    
}


