<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231030093920 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE title_information ADD original_title VARCHAR(100) NOT NULL, ADD title_type VARCHAR(50) DEFAULT NULL, ADD genres VARCHAR(255) DEFAULT NULL, ADD stars VARCHAR(255) DEFAULT NULL, ADD release_date SMALLINT DEFAULT NULL, ADD rating DOUBLE PRECISION DEFAULT NULL, ADD imdb_rating DOUBLE PRECISION DEFAULT NULL, ADD runtime VARCHAR(50) DEFAULT NULL, ADD director VARCHAR(100) DEFAULT NULL, ADD creator VARCHAR(100) DEFAULT NULL, ADD writer VARCHAR(100) DEFAULT NULL, ADD plot VARCHAR(1024) DEFAULT NULL, ADD image_url VARCHAR(150) DEFAULT NULL, ADD review LONGTEXT DEFAULT NULL, ADD to_watch SMALLINT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE title_information DROP original_title, DROP title_type, DROP genres, DROP stars, DROP release_date, DROP rating, DROP imdb_rating, DROP runtime, DROP director, DROP creator, DROP writer, DROP plot, DROP image_url, DROP review, DROP to_watch');
    }
}
