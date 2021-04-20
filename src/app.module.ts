import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatiController } from './dati/dati.controller';

@Module({
  imports: [],
  controllers: [AppController, DatiController],
  providers: [AppService],
})
export class AppModule {}
