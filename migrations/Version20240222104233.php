<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240222104233 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE favourite_series (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, first VARCHAR(100) DEFAULT NULL, second VARCHAR(100) DEFAULT NULL, third VARCHAR(100) DEFAULT NULL, fourth VARCHAR(100) DEFAULT NULL, fifth VARCHAR(100) DEFAULT NULL, type_of_list VARCHAR(25) NOT NULL, INDEX IDX_1ADEF11FA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE favourite_series ADD CONSTRAINT FK_1ADEF11FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE favourite_series DROP FOREIGN KEY FK_1ADEF11FA76ED395');
        $this->addSql('DROP TABLE favourite_series');
    }
}
