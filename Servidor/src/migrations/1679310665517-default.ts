import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679310665517 implements MigrationInterface {
    name = 'default1679310665517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "mail" varchar(70) NOT NULL, "password" varchar(100) NOT NULL, CONSTRAINT "UQ_2e5b50f4b7c081eceea476ad128" UNIQUE ("mail"))`);
        await queryRunner.query(`CREATE TABLE "spents" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" varchar(50) NOT NULL, "value" decimal NOT NULL, "iduser" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_spents" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" varchar(50) NOT NULL, "value" decimal NOT NULL, "iduser" integer, CONSTRAINT "fk_spean" FOREIGN KEY ("iduser") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_spents"("id", "description", "value", "iduser") SELECT "id", "description", "value", "iduser" FROM "spents"`);
        await queryRunner.query(`DROP TABLE "spents"`);
        await queryRunner.query(`ALTER TABLE "temporary_spents" RENAME TO "spents"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spents" RENAME TO "temporary_spents"`);
        await queryRunner.query(`CREATE TABLE "spents" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" varchar(50) NOT NULL, "value" decimal NOT NULL, "iduser" integer)`);
        await queryRunner.query(`INSERT INTO "spents"("id", "description", "value", "iduser") SELECT "id", "description", "value", "iduser" FROM "temporary_spents"`);
        await queryRunner.query(`DROP TABLE "temporary_spents"`);
        await queryRunner.query(`DROP TABLE "spents"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
