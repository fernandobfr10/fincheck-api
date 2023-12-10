import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRep: CategoriesRepository) {}

  findAllByUserId(userId: string) {
    return this.categoriesRep.findMany({
      where: {
        userId,
      },
    });
  }
}
