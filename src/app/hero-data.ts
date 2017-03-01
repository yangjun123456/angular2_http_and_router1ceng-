import { InMemoryDbService } from 'angular-in-memory-web-api';

export class HeroData implements InMemoryDbService {
  //createDb 创建一个新 PostgreSQL 数据库 用于模拟数据
  createDb() {
    let heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];
    return {heroes};
  }
}