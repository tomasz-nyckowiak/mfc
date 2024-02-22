<?php

namespace App\Repository;

use App\Entity\FavouriteSeries;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FavouriteSeries>
 *
 * @method FavouriteSeries|null find($id, $lockMode = null, $lockVersion = null)
 * @method FavouriteSeries|null findOneBy(array $criteria, array $orderBy = null)
 * @method FavouriteSeries[]    findAll()
 * @method FavouriteSeries[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FavouriteSeriesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FavouriteSeries::class);
    }

//    /**
//     * @return FavouriteSeries[] Returns an array of FavouriteSeries objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('f.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?FavouriteSeries
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
