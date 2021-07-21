import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1626581793684 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
          type: 'integer'
        },

        {
          name: 'name',
          type: 'varchar',
          isNullable: false
        },

        
      ]
    }))
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
