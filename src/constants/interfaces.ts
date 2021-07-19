export interface ICard{
        id: number,
        title: string,
        description: string,
        caseSensitive: boolean,
        translatable: boolean,
        forbidden: boolean,
        createdAt: Date,
        createdBy: {id:number,fullName:string},

}