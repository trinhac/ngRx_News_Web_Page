import { createAction, props} from "@ngrx/store";
import { Article} from "../states/article.states";

export const  getPaginate = createAction(
'[Articles] Get Paginate',
 props <{ page: number; perPage:number }>()
 );
 
 export const  getPaginateSuccess = createAction(
    '[Articles] Get Paginate Success',
    props<{ list: Article[] }> ()
    );

    export const  getPaginateFail = createAction(
        '[Articles] Get Paginate Fail',
        props<{ error: string }> ()
        );