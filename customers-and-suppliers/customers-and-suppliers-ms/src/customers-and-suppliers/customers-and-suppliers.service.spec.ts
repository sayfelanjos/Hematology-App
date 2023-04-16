import { Test, TestingModule } from '@nestjs/testing';
import { CustomersAndSuppliersService } from './customers-and-suppliers.service';

describe('CustomersAndSuppliersService', () => {
  let service: CustomersAndSuppliersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersAndSuppliersService],
    }).compile();

    service = module.get<CustomersAndSuppliersService>(CustomersAndSuppliersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
