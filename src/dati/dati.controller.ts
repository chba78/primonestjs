import { Controller, Get, Req, Request } from '@nestjs/common';

@Controller('dati')
export class DatiController {
  @Get()
  findAll(@Req() request: Request): {} {
    return [
      {datos: 'Primoser', daton: 111, datod: new Date('2011-01-01T01:01:01.932Z'), datob: true},
      {datos: 'Secondoser', daton: 222, datod: new Date('2011-01-02T01:01:02.932Z'), datob: false},
      {datos: 'Terzoser', daton: 333, datod: new Date('2011-01-03T01:01:03.932Z'), datob: true},
    ];
  }

  @Get('mostra')
  mostra(@Req() request: Request): string {
    return 'Questa è la mostra';
  }
}
