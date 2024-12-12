/* eslint-disable prettier/prettier */
export class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly cost: number;
    readonly date?: Date
  }