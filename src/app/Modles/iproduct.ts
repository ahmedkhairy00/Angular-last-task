export interface Iproduct {
    id : number;
    name ?: string;
    title ?: string;
    imgUrl ?: string;
    description?: string,
    category ?: string,
    price : number;
    quantity : number;
    catogryId : number;
    image ?:string // 🔹 pick whichever exists


}
