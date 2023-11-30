import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../../resource/users/entities/user.entity';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');

    const repository = dataSource.getRepository(User);
    // save 1 hard code entity, to the database
    await repository.insert({
      firstName: 'Mazedul',
      lastName: 'Islam',
      email: 'mazedul.islam@hotemal.com',
    });

    const userFactory = factoryManager.get(User);
    // save 1 factory generated entity, to the database
    await userFactory.save();
    // save 5 factory generated entities, to the database
    await userFactory.saveMany(5);
  }
}
