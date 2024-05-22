// src/phone/dto/create-iphone.dto.ts
import {
  IsString,
  IsInt,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
} from 'class-validator';

export class CreateIphoneDto {
  @IsString()
  readonly modelName: string;

  @IsInt()
  readonly releaseYear: number;

  @IsString()
  readonly screenSize: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  readonly storageOptions: string[];
}
