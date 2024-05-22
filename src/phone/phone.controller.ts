import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { CreateIphoneDto } from './dto/create-iphone.dto';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  // http://localhost:3000/phone (GET)
  @Get()
  getData() {
    return this.phoneService.getData();
  }

  // http://localhost:3000/phone/add (POST)
  @Post('add')
  addData(@Body() dada: CreateIphoneDto) {
    return this.phoneService.addData(dada);
  }

  @Get('search')
  searchData(@Query('name') name) {
    return this.phoneService.searchPhone(name);
  }
}
