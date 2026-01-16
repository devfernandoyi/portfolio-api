import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { PetLogsModule } from './pet-logs/pet-logs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    PetsModule,
    PetLogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
