import { CreateCustomerDto } from './dto/create-customer.dto';
/* eslint-disable */
import { Customers } from './customers.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {encrypt, decrypt, hash, compare } from '../../secure/crypt.js'

@Injectable()
export class CustomersService {
  private waitingConfirmCustomers = {}
  constructor(
    @InjectRepository(Customers)
    private customersRepository: Repository<Customers>,
  ) {}

  addToWaitingConfirmCustomers(customer: CreateCustomerDto) {
    Object.assign(this.waitingConfirmCustomers,{[customer.email]: customer });
  }

  async add(customerEmail: string) {
    const newCustomer =  this.waitingConfirmCustomers[customerEmail];
    if (newCustomer){
      await this.customersRepository.save(newCustomer);
      delete this.waitingConfirmCustomers[newCustomer.email];
      return true;
    }
    return false
  }

  async getCustomers(): Promise<Customers[]> {
    return await this.customersRepository.find({
      select: ['first_name', 'last_name', 'email', 'phone', 'city', 'address'],
    });
  }

  async getCustomer(_id: number): Promise<Customers> {
    return await this.customersRepository.findOne({
      select: ['first_name', 'last_name', 'email', 'phone', 'city', 'address'],
      where: [{ id: _id }],
    });
  }

  async getCustomerByEmail(_email: string): Promise<Customers | undefined> {
    return await this.customersRepository.findOne({
      select: ['id', 'email', 'password'],
      where: [{ email: _email }],
    });
  }

  async updateCustomer(customer: Customers) {
    this.customersRepository.save(customer);
  }

  async deleteCustomer(customer: Customers) {
    this.customersRepository.delete(customer);
  }
}
