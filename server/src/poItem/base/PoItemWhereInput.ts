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
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MaterialWhereUniqueInput } from "../../material/base/MaterialWhereUniqueInput";
import { PoHeaderWhereUniqueInput } from "../../poHeader/base/PoHeaderWhereUniqueInput";
import { UnitOfMeasureWhereUniqueInput } from "../../unitOfMeasure/base/UnitOfMeasureWhereUniqueInput";

@InputType()
class PoItemWhereInput {
  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  amount?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  currency?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => MaterialWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MaterialWhereUniqueInput)
  @IsOptional()
  @Field(() => MaterialWhereUniqueInput, {
    nullable: true,
  })
  material?: MaterialWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PoHeaderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PoHeaderWhereUniqueInput)
  @IsOptional()
  @Field(() => PoHeaderWhereUniqueInput, {
    nullable: true,
  })
  poHeader?: PoHeaderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  quantity?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UnitOfMeasureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UnitOfMeasureWhereUniqueInput)
  @IsOptional()
  @Field(() => UnitOfMeasureWhereUniqueInput, {
    nullable: true,
  })
  unitofMeasures?: UnitOfMeasureWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  unitPrice?: FloatNullableFilter;
}

export { PoItemWhereInput };
