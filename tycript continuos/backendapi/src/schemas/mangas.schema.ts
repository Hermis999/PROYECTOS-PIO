import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class manga {
    @Prop({
        unique: true,
        required: true,
        trim: true      // trim Retira los espacios del inicio y el
    })                  // final de una cadena
    title: string;

    @Prop({
        required: true,
        min: 0,
    })
    price: number;

    @Prop({
        trim: true
    })
    description: string;

    @Prop({ default: false})
    status: boolean;
}
export const mangaSchema = SchemaFactory.createForClass(manga)
