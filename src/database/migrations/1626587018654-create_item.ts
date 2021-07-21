import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createItem1626581793684 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'items',
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
          name: 'material',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'classification',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'description',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'url',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'weight',
          type: 'varchar',
          isNullable: false,
        },


        {
          name: 'storagesId',
          type: 'integer',
          isNullable: false,
        },


        {
          name: 'category',
          type: 'varchar',
          isNullable: false,
        },

        {
          name: 'price',
          type: 'integer',
          isNullable: false,
        },


        {
          name: 'userId',
          type: 'integer',
          isNullable: false,
        }
      
      ],

      foreignKeys: [
        {
          name: 'storageid',
          columnNames: ['storagesId'],
          referencedTableName: 'storages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

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
    await queryRunner.dropTable('items');
  }
}
