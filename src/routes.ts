import {

    catalogSaveAction,
    catalogGetAction,
    catalogDeleteAction,
	loginAction
} from "./controller/catalogAction";

import {
    fileUploadAction
} from "./controller/fileUploader"



/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/catalog",
        method: "post",
        action: catalogSaveAction
    },
    {
        path: "/catalog",
        method: "get",
        action: catalogGetAction
    },
    {
        path: "/catalog/:id",
        method: "delete",
        action: catalogDeleteAction
    },
  
    {
        path: "/catalog/upload",
        method: "post",
        action: fileUploadAction
    },

    {
        path: "/catalog/banner",
        method: "get",
        action: fileUploadAction
    },

{
        path: "/catalog/login",
        method: "post",
        action: loginAction
    },

];
