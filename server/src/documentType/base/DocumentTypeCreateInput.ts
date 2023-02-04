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
import { PoHeaderWhereUniqueInput } from "../../poHeader/base/PoHeaderWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DocumentTypeCreateInput {
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
  typeId?: PoHeaderWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  typename!: string;
}

export { DocumentTypeCreateInput };
