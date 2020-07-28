import {MigrationInterface, QueryRunner} from "typeorm";

export class Teste011595688465815 implements MigrationInterface {
    name = 'Teste011595688465815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "status" integer NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "status"`);
    }

}
