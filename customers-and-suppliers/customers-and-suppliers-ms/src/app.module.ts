import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersAndSuppliersService } from './customers-and-suppliers/customers-and-suppliers.service';
import { CustomersAndSuppliersModule } from './customers-and-suppliers/customers-and-suppliers.module';

@Module({
  imports: [CustomersAndSuppliersModule],
  controllers: [AppController],
  providers: [AppService, CustomersAndSuppliersService],
})
export class AppModule {}
