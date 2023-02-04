/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  IsDate,
  IsInt,
} from "class-validator";
import { DocumentTypeWhereUniqueInput } from "../../documentType/base/DocumentTypeWhereUniqueInput";
import { Type } from "class-transformer";
import { PoItemUpdateManyWithoutPoHeadersInput } from "./PoItemUpdateManyWithoutPoHeadersInput";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";

@InputType()
class PoHeaderUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string | null;

  @ApiProperty({
    required: false,
    type: () => DocumentTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocumentTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => DocumentTypeWhereUniqueInput, {
    nullable: true,
  })
  docType?: DocumentTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  documentDate?: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  documentNo?: number;

  @ApiProperty({
    required: false,
    type: () => PoItemUpdateManyWithoutPoHeadersInput,
  })
  @ValidateNested()
  @Type(() => PoItemUpdateManyWithoutPoHeadersInput)
  @IsOptional()
  @Field(() => PoItemUpdateManyWithoutPoHeadersInput, {
    nullable: true,
  })
  poItems?: PoItemUpdateManyWithoutPoHeadersInput;

  @ApiProperty({
    required: false,
    type: () => SupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierWhereUniqueInput, {
    nullable: true,
  })
  supplierNo?: SupplierWhereUniqueInput;
}

export { PoHeaderUpdateInput };
