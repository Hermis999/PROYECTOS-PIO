export declare class manga {
    title: string;
    price: number;
    description: string;
    status: boolean;
}
export declare const mangaSchema: import("mongoose").Schema<manga, import("mongoose").Model<manga, any, any, any, import("mongoose").Document<unknown, any, manga> & manga & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, manga, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<manga>> & import("mongoose").FlatRecord<manga> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
