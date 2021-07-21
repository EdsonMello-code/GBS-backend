import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createStorage1626581793684 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'storages',
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

        {
          name: 'address',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'url',
          type: 'varchar',
          isNullable: false
        },


        {
          name: 'latitude',
          type: 'float',
          isNullable: false
        },

        
        {
          name: 'longitude',
          type: 'float',
          isNullable: false
        },

        {
          name: 'userId',
          type: 'integer',
          isNullable: false
        },
      ],

      foreignKeys: [
        {
          name: 'userid',
          columnNames: ['userId'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]

    }))
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('storages');
  }
}
