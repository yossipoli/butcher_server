/* eslint-disable */
import { Customers } from './customers.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customers)
    private customersRepository: Repository<Customers>,
  ) {}

  async getCustomers(): Promise<Customers[]> {
    return await this.customersRepository.find({
      select: ['first_name', 'last_name', 'email', 'phone', 'city', 'address'],
    });
  }

  async getCustomer(_id: number): Promise<Customers[]> {
    return await this.customersRepository.find({
      select: ['first_name', 'last_name', 'email', 'phone', 'city', 'address'],
      where: [{ id: _id }],
    });
  }

  async getCustomerByEmail(_email: string): Promise<Customers | undefined> {
    return await this.customersRepository.findOne({
      select: ['id', 'email', 'password'],
      where: [{email: _email}],
    });
  }

  async updateCustomer(customer: Customers) {
    this.customersRepository.save(customer);
  }

  async deleteCustomer(customer: Customers) {
    this.customersRepository.delete(customer);
  }
}
