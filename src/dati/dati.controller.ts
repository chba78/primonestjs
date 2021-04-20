import { Controller, Get, Req, Request } from '@nestjs/common';

@Controller('dati')
export class DatiController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'visualizzazione elenco dati';
  }
}
