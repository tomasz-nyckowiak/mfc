<?php

namespace App\DataFixtures;

use App\Entity\Movie;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $movie1 = new Movie();
        $movie1->setTitle('Avatar');
        $movie1->setSummary('A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.');
        $movie1->setGenres('Action, Adventure, Fantasy');
        $movie1->setDirector('James Cameron');
        $movie1->setYear(2009);
        $manager->persist($movie1);

        $movie2 = new Movie();
        $movie2->setTitle('It');        
        $movie2->setGenres('Horror');
        $manager->persist($movie2);

        $movie3 = new Movie();
        $movie3->setTitle('Tag');
        $movie3->setSummary('A small group of former classmates organize an elaborate, annual game of tag that requires some to travel all over the country.');
        $movie3->setGenres('Action, Comedy');
        $movie3->setDirector('Jeff Tomsic');
        $movie3->setYear(2018);
        $movie3->setRating(4);
        $manager->persist($movie3);

        $manager->flush();
    }
}
