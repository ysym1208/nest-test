import { Injectable } from '@nestjs/common';
import { CreateIphoneDto } from './dto/create-iphone.dto';

@Injectable()
export class PhoneService {
  private phones: CreateIphoneDto[] = [];

  getData() {
    return this.phones;
  }

  addData(data: CreateIphoneDto) {
    this.phones.push(data);
    return data;
    // 배열에 데이터 추가하는 함수(data)
    // phones.push(data);
  }

  searchPhone(name: any) {
    return this.phones.filter((phone) => phone.modelName === name);
  }
}
