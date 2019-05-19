export interface ModalError{
    show:boolean;
    errors:string[];
}

export const modalErrorInit:ModalError = {
show:false, errors:[]
}